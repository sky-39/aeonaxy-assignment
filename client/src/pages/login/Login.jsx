import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-row h-screen w-screen justify-stretch">
      <div className="flex flex-col w-1/3 bg-black pl-6 pr-2 font-bold">
        <p
          style={{
            fontFamily: "Dancing Script",
            fontWeight: "400",
          }}
          className="text-pink-500 mt-14 text-4xl"
        >
          dribble
        </p>
        <p className="text-2xl w-96 text-pink-500 mt-8">
          Discover the {"world's"} top Designers & Creatives
        </p>
        <img
          src="./authPagebg.png"
          alt="Auth Page Background"
          className="h-2/3"
        />
      </div>
      <div className="h-100 w-2/3 mt-28">
        <p className="absolute right-10 top-5 text-black font-medium">
          New to dribble?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col">
          <p className="font-bold text-3xl ml-5 mt-14 text-center">
            Sign In to Dribble
          </p>
          <form className="self-center">
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Username</label>
              <input
                type="text"
                name="username"
                placeholder="JohnDoe"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
              />
            </div>
            <div className="my-10 ml-5">
              <button className="w-48 h-10 bg-pink-500 rounded-lg text-white shadow-sm hover:bg-black">
                Sign In
              </button>
              <p className="w-72 text-xs mt-8 leading-4">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Terms of Service apply
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
