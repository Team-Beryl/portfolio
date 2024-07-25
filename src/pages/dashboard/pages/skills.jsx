import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pageslayout'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { apiDeleteSkill, apiGetSkills } from '../../../services/skills'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader'

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchSkills = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetSkills()
      console.log(res.data)
      setSkills(res.data.Skills)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async(_id) => {
    setDeletingItems((prev)=> ({...prev, [_id]: true}));
    try {
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured"); 
    }
    finally{
      setDeletingItems((prev)=> ({...prev, [_id]: false}));
    };

  }

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <PagesLayout headerText="skills"  buttonText="Add new skills " onClick={() => navigate("/dashboard/skills/add-skill")}>

      {
        isLoading ? (
           <Loader/>
           ):(

          <div>
            {
              skills.length == 0 ?(
                <p>No Skill added yet</p>
              ) : ( 

               
                  <div className='grid grid-cols-3 gap-6 pt-14 bg-gray-500 min-h-screen p-6 '>
                    {
                      skills.map(({title,name,levelofProficiency, _id}, index) => (
                        <div key={index} className='h-52 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>

                          <div className='ml-auto flex gap-x-2'>
                            <button>
                              <Edit className='text-blue-500' />
                            </button>
                            <button className='text-red-500' onClick={() => handleDelete(_id)}>
                              {
                                deletingItems[_id] ? <Loader/> : <Trash2Icon  />
                              }
                            </button>
                          </div>
                          <span className='font-semibold text-lg'>{title}</span>
                          <span>{name}</span>
                          <span className='pt-5 font-semibold'>{levelofProficiency} </span>
                        </div>
                      ))}
                  </div>
              

            )}
          </div>
      )}


    </PagesLayout>
  );
};

export default Skills;
