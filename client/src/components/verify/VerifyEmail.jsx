import { IoMdMailUnread } from "react-icons/io";
import { useAuthContext } from "../../context/AuthContext";
import useResend from "../../hooks/useResend";

const VerifyEmail = () => {
  const { authUser } = useAuthContext();

  const {resend} = useResend();

  const handleClick = () => {
    resend(authUser._id)
    console.log(authUser._id);
  }

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex flex-col items-center mt-16 h-100 w-2/5 text-center">
        <p className="font-bold text-3xl">Please verify your email...</p>
        <div className="mt-4 text-gray-400">
          <IoMdMailUnread size={80} />
        </div>
        <div className="text-gray-600">
          <p className="mt-4">
            Please verify your email address. We{"'"}ve sent a confirmation
            email to:
          </p>
          <p className="mt-4 font-bold">{authUser.email}</p>
          <p className="mt-4">
            Click the confirmation link in the email to begin using{" "}
            <span className="font-bold">Dribble</span>.
          </p>
          <p className="mt-4">
            Did not receive a confirmation email? Check you spam folder, it may
            have been caught by a filter. If you still do not see it, you can{" "}
            <span className="font-bold text-pink-500 cursor-pointer hover:underline" onClick={handleClick}>
              resend
            </span>{" "}
            it.
          </p>
          <p className="mt-4">
            Wrong Email address?{" "}
            <span className="font-bold text-pink-500 cursor-pointer hover:underline">
              Change
            </span>{" "}
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
