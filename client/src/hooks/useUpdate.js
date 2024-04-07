import { useState } from "react";
import toast from "react-hot-toast";


const useUpdate = () => {
  const [loading, setLoading] = useState(false);

  const updateLocation = async (location, userid) => {
    try {
      const res = await fetch(`api/auth/updateLocation/?id=${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateProfilePic = async (profilePic, userid) => {
    setLoading(true);
    try {

      const formData = new FormData();
      formData.append("file",profilePic);
      formData.append("upload_preset", "images_preset");
      formData.append("cloud_name", "dlhtkuaco");

      const res = await fetch("https://api.cloudinary.com/v1_1/dlhtkuaco/image/upload", {
        method: 'POST',
        body: formData
      })
      const {secure_url} = await res.json();

      const resfromdb = await fetch(`api/auth/uploadProfilePic/?id=${userid}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({secure_url})
      })

      const datafromdb = await resfromdb.json();

      if(datafromdb.error){
        throw new Error(datafromdb.error)
      }

      toast.success(datafromdb.message)

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateLocation, updateProfilePic, loading };
};

export default useUpdate;
