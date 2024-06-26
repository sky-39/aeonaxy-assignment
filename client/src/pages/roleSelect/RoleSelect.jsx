import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRoleSelect from "../../hooks/useRoleSelect";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const RoleSelect = () => {
  const [borderClass1, setBorderClass1] = useState("border border-gray-200");
  const [borderClass2, setBorderClass2] = useState("border border-gray-200");
  const [borderClass3, setBorderClass3] = useState("border border-gray-200");

  const [roleSelected, setRoleSelected] = useState(false);

  const [roles, setRoles] = useState({
    lookingToShare: false,
    lookingToHire: false,
    lookingForInspiration: false,
  });

  function handleChange(event) {
    if (event.target.name === "lookingToShare") {
      setRoles({ ...roles, lookingToShare: event.target.checked });
      if (event.target.checked === true) {
        setBorderClass1("border-2 border-pink-500");
        setRoleSelected(true);
      } else {
        setBorderClass1("border border-gray-200");
        setRoleSelected(false);
      }
    } else if (event.target.name === "lookingToHire") {
      setRoles({ ...roles, lookingToHire: event.target.checked });
      if (event.target.checked === true) {
        setBorderClass2("border-2 border-pink-500");
        setRoleSelected(true);
      } else {
        setBorderClass2("border border-gray-200");
        setRoleSelected(false);
      }
    } else {
      setRoles({ ...roles, lookingForInspiration: event.target.checked });
      if (event.target.checked === true) {
        setBorderClass3("border-2 border-pink-500");
        setRoleSelected(true);
      } else {
        setBorderClass3("border border-gray-200");
        setRoleSelected(false);
      }
    }
  }

  const { selectRole } = useRoleSelect();
  const { authUser } = useAuthContext();

  function handleSubmit() {
    if (
      roles["lookingToHire"] === false &&
      roles["lookingToShare"] === false &&
      roles["lookingForInspiration"] === false
    ) {
      toast.error("Select at least one role");
    } else {
      selectRole(roles, authUser._id);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-10">
        <p
          style={{
            fontFamily: "Dancing Script",
            fontWeight: "400",
          }}
          className="text-pink-500 ml-8 text-3xl flex justify-center items-center"
        >
          dribble
        </p>
        <Link to="/updateProfile">
          <div className="w-10 h-10 ml-10 cursor-pointer flex justify-center items-center border-gray-100 bg-gray-100 rounded-md hover:shadow-sm">
            <FiChevronLeft />
          </div>
        </Link>
      </div>
      <div className="w-screen mt-8 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">What brings you to Dribble?</p>
        <p className="mt-4 text-zinc-500">
          Select the option that best describe you. Don{"'"}t worry, you can
          explore other options later.
        </p>
      </div>
      <div className="flex flex-row w-screen justify-center mt-20">
        <div
          className={`flex flex-col justify-between w-72 h-72 mx-6 px-8 py-5 font-bold rounded-2xl text-center items-center ${borderClass1}`}
        >
          <img src="./share.png" alt="share" className="h-50 w-50" />
          <div className="flex flex-col justify-center items-center">
            <p>I{"'"}m a designer looking to share my work</p>
            <input
              type="checkbox"
              name="lookingToShare"
              onChange={handleChange}
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full mt-4 checked:bg-pink-500 checked:border-none"
            />
          </div>
        </div>
        <div
          className={`flex flex-col justify-between w-72 h-72 mx-6 px-8 py-5 font-bold rounded-2xl text-center items-center ${borderClass2}`}
        >
          <img src="./hiring.png" alt="hiring" className="h-50 w-50" />
          <div className="flex flex-col justify-center items-center">
            <p>I{"'"}m looking to hire a designer</p>
            <input
              type="checkbox"
              name="lookingToHire"
              onChange={handleChange}
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full mt-4 checked:bg-pink-500 checked:border-none"
            />
          </div>
        </div>
        <div
          className={`flex flex-col justify-between w-72 h-72 mx-6 px-8 py-5 font-bold rounded-2xl text-center items-center ${borderClass3}`}
        >
          <img
            src="./inspiration.png"
            alt="inspiration"
            className="h-50 w-50"
          />
          <div className="flex flex-col justify-center items-center">
            <p>I{"'"}m looking for design inspiration</p>
            <input
              type="checkbox"
              name="lookingForInspiration"
              onChange={handleChange}
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full mt-4 checked:bg-pink-500 checked:border-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-24">
        <div>
          <Link to="/">
            <button
              className="w-56 h-10 bg-pink-500 rounded-lg text-white shadow-sm hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!roleSelected}
            >
              Finish
            </button>
          </Link>
          <span className="text-xs font-bold text-gray-400 cursor-default w-48 h-10 flex justify-center items-center">
            or Press RETURN
          </span>
        </div>
        <div className="">
          <Link to="/">
            <button className="w-36 h-10 rounded-lg text-gray-400">Skip</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
