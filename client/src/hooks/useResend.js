import toast from "react-hot-toast";

const useResend = () => {
    const resend = async (id) => {
        try {
            const res = await fetch(`api/auth/resendVerification/?id=${id}`, {
                method: 'POST',
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            else{
                toast.success(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return {resend};
}

export default useResend;