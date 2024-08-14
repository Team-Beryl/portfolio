import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfileCard = ({ img, name, location, sex, dateOfBirth, contact, languages, linkedin, twitter, github, email }) => {
    return (
        <div className='flex flex-col gap-2'>

            <div className='flex gap-4'>
                <img className='w-[120px] rounded-full' src={img} alt="image" />
                <p className='text-4xl pt-7 font-bold tracking-tight text-white sm:text-5xl'> {name} </p>
            </div>
            <Link to={'mailto:email@example.com'}>
            <p className=" text-white"> {contact} </p>
            </Link>
            <p className=" text-white"> {languages} </p>
            <p className=" text-white"> {location} </p>
            
            <div className='flex gap-3 pt-3 justify-self-auto '>
                
                <Link to={twitter} className=' hover:bg-[#000000] w-[45px] shadow-md bg-white rounded-full flex justify-center'> <Twitter className='w-[30px] text-transparent h-10 fill-pink-600 text-center' /> </Link>

                <Link className='w-[45px] hover:bg-[#000000] shadow-md  bg-white rounded-full flex justify-center' to={linkedin}> <Linkedin className=' w-[30px] text-transparent h-10  fill-blue-600 place-items-center ' /> </Link>

                <Link className='w-[45px] hover:bg-[#2563EB] shadow-md bg-white rounded-full flex justify-center' to={github}> <Github className='w-[30px] h-10  fill-black place-items-center' /> </Link>
            </div>

        </div>
    )
}

export default UserProfileCard;
