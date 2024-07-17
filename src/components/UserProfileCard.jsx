import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { github } from '../assets';




const UserProfileCard = ({ img, name, location, sex, dateOfBirth, contact, languages, linkedin, twitter, github }) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex gap-4'>
                <img className='w-[90px] rounded-full' src={img} alt="image" />
                <a href="#about">
                    <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'> {name} </h1>

                </a>
            </div>
            <h2 className=" text-white"> {contact} </h2>
            <p className=" text-white"> {languages} </p>
            <h1 className=" text-white"> {dateOfBirth} </h1>
            <p className=" text-white"> {location} </p>
            <p className=" text-white"> {sex} </p>



            <div className='flex gap-3 pt-3 justify-self-auto '>
                
                <Link to={twitter} className=' hover:bg-[#000000] w-[45px] shadow-md bg-white rounded-full flex justify-center'> <Twitter className='w-[30px] text-transparent h-10 fill-pink-600 text-center' /> </Link>

                <Link className='w-[45px] hover:bg-[#000000] shadow-md  bg-white rounded-full flex justify-center' to={linkedin}> <Linkedin className=' w-[30px] text-transparent h-10  fill-blue-600 place-items-center ' /> </Link>

                <Link className='w-[45px] hover:bg-[#2563EB] shadow-md bg-white rounded-full flex justify-center' to={github}> <Github className='w-[30px] h-10  fill-black place-items-center' /> </Link>
            </div>

        </div>
    )
}

export default UserProfileCard;
