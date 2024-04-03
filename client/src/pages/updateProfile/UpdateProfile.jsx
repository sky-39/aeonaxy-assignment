import { useState } from "react";
import { MdCameraEnhance } from "react-icons/md";

const UpdateProfile = () => {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  console.log(file);

  return (
    <div className="flex flex-col">
      <p
        style={{
          fontFamily: "Dancing Script",
          fontWeight: "400",
        }}
        className="text-pink-500 mt-10 ml-8 text-3xl"
      >
        dribble
      </p>
      <p className="w-screen ml-96 mt-8 text-4xl font-bold">
        Welcome! Let{"'"}s create your profile
      </p>
      <p className="w-screen ml-96 mt-5 text-gray-400">
        Let others get to know you better! You can do this later
      </p>
      <p className="w-screen ml-96 mt-10 font-bold text-xl">Add an avatar</p>

      <div className="icons flex text-gray-500 mt-5 items-center ml-96">
        <div className="w-44 h-44 flex justify-center items-center border-4 rounded-full border-dashed">
          <MdCameraEnhance />
          <img
            className="w-44 h-44 absolute flex justify-center items-center rounded-full border-dashed"
            src={file}
          />
        </div>
        <div className="flex flex-col ml-6">
          <div className="w-40 h-10 flex mb-5 items-center justify-center border-2 rounded-lg cursor-pointer hover:shadow-sm">
            <label className="font-bold text-black cursor-pointer">
              Choose image
            </label>
            <input
              type="file"
              className="opacity-0 absolute cursor-pointer -z-1"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <span className="font-medium text-slate-400 cursor-pointer">
            {">"} Or choose one of our defaults
          </span>
        </div>
      </div>

      <p className="w-screen ml-96 mt-10 font-bold text-xl">
        Add your location
      </p>
      <input
        type="text"
        placeholder="Enter a location"
        className="ml-96 mt-8 border-b border-gray-400 outline-0 text-lg pb-2 w-2/5 placeholder:text-gray-400 text-black font-medium"
      />
      <button className="w-48 h-10 ml-96 mt-12 bg-pink-500 rounded-lg text-white shadow-sm hover:bg-black">
        Proceed
      </button>
      <span className="ml-96 text-xs font-bold text-gray-400 cursor-default w-48 h-10 flex justify-center items-center">
        or Press RETURN
      </span>
    </div>
  );
};

export default UpdateProfile;