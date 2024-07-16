

const UserProfileCard = ({}) => {
    return (
        <div>
            <div>
            <img  className='w-[90px] rounded-full' src= {image} alt="image" />
            </div>
          
            <h1> {name} </h1>
            <p> {location} </p>
            <h1> {dateOfBirth} </h1>
            <h2> {contact} </h2>
            <p> {languages} </p>
            <a href="https://github.com">{image} </a>
            <a href=" https://www.linkedin.com "> {image} </a>
            <a href=" https://twitter.com "> {image} </a>

        </div>
    )
}

export default UserProfileCard