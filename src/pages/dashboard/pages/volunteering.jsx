import React, { useEffect, useState } from 'react';
import F from '../../../constants/constants';
import { Edit, Trash2Icon } from 'lucide-react';
import PagesLayout from '../layout/pageslayout';
import { useNavigate } from 'react-router-dom';
import { apiDeleteVolunteering, apiGetVolunteering } from '../../../services/volunteering';
import Loader from '../../../components/loader';
import { toast } from 'react-toastify';

const Volunteering = () => {
  const navigate = useNavigate();

  const [volunteering, setVolunteering] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchVolunteering = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetVolunteering();
      console.log(res.data);
      setVolunteering(res.data.Volunteering);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteVolunteering(_id);
      console.log(res.data);
      toast.success(res.data.message);
      fetchVolunteering(); // Refresh the list after delete
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchVolunteering();
  }, []);

  return (
    <div>
      <PagesLayout headerText="Volunteering" buttonText="Add Volunteer Work" onClick={() => navigate("/dashboard/volunteering/addvolunteering")}>
        {isLoading ? <Loader /> :
          <div className=' min-h-screen p-6 pl-32'>
            {volunteering.length === 0 ? (
              <p>No Volunteering work added yet</p>
            ) : (
              <div className='grid grid-cols-4 gap-6 pt-14'>
                {volunteering.map((volunteer, index) => (
                  <div key={index} className='h-96 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                    <span className='font-semibold text-2xl pt-3'>{volunteer.projectName}</span>
                    <span className='font-semibold'>{volunteer.organization}</span>
                    <span className='font-semibold'>{volunteer.role}</span>
                    <span>{volunteer.description}</span>
                    <span className='font-semibold'>{volunteer.startDate}</span>
                    <span className='font-semibold'>{volunteer.endDate}</span>

                    <div className='ml-auto flex gap-x-2'>
                      <button>
                        <Edit className='text-blue-500' />
                      </button>
                      <button className='text-red-500' onClick={() => handleDelete(volunteer._id)}>
                        {deletingItems[volunteer._id] ? <Loader /> : <Trash2Icon />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        }
      </PagesLayout>
    </div>
  );
}

export default Volunteering;
