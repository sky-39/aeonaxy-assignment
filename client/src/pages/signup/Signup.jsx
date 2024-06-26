import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [termAccepted, setTermAccepted] = useState(false);

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

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
      <div className="h-100 w-2/3 mt-14">
        <p className="absolute right-10 top-5 text-black font-medium">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Sign In
          </Link>
        </p>
        <div className="flex flex-col">
          <p className="font-bold text-3xl ml-5 mt-14 text-center">
            Sign Up to Dribble
          </p>
          <form className="self-center" onSubmit={handleSubmit}>
            <div className="flex flex-row my-8">
              <div className="flex flex-col mx-5">
                <label className="font-bold">Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="bg-slate-200 h-8 w-44 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col mx-3">
                <label className="font-bold">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="JohnDoe"
                  className="bg-slate-200 h-8 w-44 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="test@example.com"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="flex flex-row w-96 ml-5 text-sm my-8">
              <input
                type="checkbox"
                name="conditionCheck"
                className="w-10 h-10 border-gray-300 rounded mr-4"
                value={termAccepted}
                onChange={(e) => setTermAccepted(e.target.checked)}
              />
              <p className="text-slate-500 mt-4">
                Creating an account means you are okay with our
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Terms of Service,
                </a>{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Privacy Policy
                </a>
                , and our default
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {" "}
                  Notification Settings
                </a>
              </p>
            </div>
            <div className="my-10 ml-5">
              <button
                className={`w-48 h-10 bg-pink-500 rounded-lg text-white shadow-sm hover:bg-black disabled:opacity-45 disabled:cursor-not-allowed`}
                disabled={loading || !termAccepted}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create Account"
                )}
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
