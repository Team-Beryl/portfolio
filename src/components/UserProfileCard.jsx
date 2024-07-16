

const UserProfileCard = ({image,img,name, location,sex, dateOfBirth, contact,languages,}) => {
    return (
        <div>
            <div>
            <img  className='w-[90px] rounded-full' src= {image} alt="image" />
            </div>
          
            <h1> {name} </h1>
            <p> {location} </p>
            <p> {sex} </p>
            <h1> {dateOfBirth} </h1>
            <h2> {contact} </h2>
            <p> {languages} </p>
             
            

        </div>
    )
}

export default UserProfileCard