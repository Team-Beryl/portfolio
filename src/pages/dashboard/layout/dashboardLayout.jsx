import { useEffect, useState } from "react"
import { getToken } from "../../../services/config";
import { apiGetUserProfile } from "../../../services/userprofile";
import { toast } from "react-toastify";
import { Navigate, Outlet } from "react-router-dom";



const DashboardLayout = () => {
    const [profile, setProfile] = useState();

    const token = getToken();

    const getUserProfile = async () => {
        try {
            const response = await apiGetUserProfile();
            const userProfileData = response?.data.profile;
            setProfile(userProfileData);
        } catch (error) {
            toast.error("An error occured");
        }
    };

    useEffect (()=>{
        if (token) {
            getUserProfile();
        } 
    }, []);

    if (!token) {
        return <Navigate to="/signin" />
    }
  return (
    <div>

    <Outlet context={[profile, setProfile]}/>

    </div>
  )
}

export default DashboardLayout