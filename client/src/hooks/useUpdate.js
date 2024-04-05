import toast from "react-hot-toast";

const useUpdate = () => {
  const updateLocation = async (location, userid) => {
    try {
      const res = await fetch(`api/auth/updateLocation/?id=${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({location}),
      });
      const data = await res.json();

      if(data.error) {
        throw new Error(data.error)
      }
      toast.success(data.message);
    } catch (error) {
        toast.error(error.message);
    }
  };
  return {updateLocation};
};

export default useUpdate;
