import { Edit, Trash2Icon } from 'lucide-react';
import F from '../../../constants/constants';
import PagesLayout from '../layout/pageslayout';
import { useNavigate } from 'react-router-dom';
import { apiDeleteEducation, apiGetEducation } from '../../../services/education';
import { useEffect, useState } from 'react';
import Loader from '../../../components/loader';
import { toast } from 'react-toastify';

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setEducation(res.data); // Assuming res.data contains the education data directly
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteEducation(_id);
      console.log(res.data);
      toast.success(res.data.message);
      fetchEducation(); // Refresh education list after delete
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div>
      <PagesLayout
        headerText="Education"
        buttonText="Add Education"
        onClick={() => navigate("/dashboard/education/addeducation")}
      >
        {
          isLoading ? <Loader /> :
          <div className=' min-h-screen p-6 pt-4'>
            {
              education.length === 0 ? (
                <p>No Education added yet</p>
              ) : (
                <div className='grid grid-cols-4 gap-6 pt-14'>
                  {
                    education.map((edu, index) => (
                      <div key={index} className='h-56 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                        <span className='font-semibold text-lg pt-3'>{edu.schoolName}</span>
                        <span className=''>{edu.program}</span>
                        <span>{edu.qualification}</span>
                        <span className='font-semibold'>{edu.startDate}</span>
                        <span className='font-semibold'>{edu.endDate}</span>
                        <div className='ml-auto flex gap-x-2'>
                          <button>
                            <Edit className='text-blue-500' />
                          </button>
                          <button className='text-red-500' onClick={() => handleDelete(edu._id)}>
                            {isDeleting ? <Loader /> : <Trash2Icon />}
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
        }
      </PagesLayout>
    </div>
  );
}

export default Education;
