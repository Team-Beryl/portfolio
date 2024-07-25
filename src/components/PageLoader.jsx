 import {CirclesWithBar} from "react-loader-spinner"
const PageLoader = () => {
  return (
    <div className=" flex items-center justify-center">
        <CirclesWithBar
    height="30"
    width="30"
    color="#DB2777"
    outerCircleColor="#DB2777"
    innerCircleColor="#DB2777"
    barColor="#DB2777"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
    </div>
  )
}

export default PageLoader