import {Triangle} from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Triangle
  visible={true}
  height="80"
  width="80"
  color="#DB2777"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader