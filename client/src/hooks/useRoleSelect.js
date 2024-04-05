import toast from "react-hot-toast";

const useRoleSelect = () => {
    const selectRole = async (roles,id) => {
        try {
            const res = await fetch(`api/auth/roleSelect/?id=${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({roles})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            else{
                toast.success(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return {selectRole};
}
export default useRoleSelect;