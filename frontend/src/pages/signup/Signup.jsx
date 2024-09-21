import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck";
import { useState } from "react";
import useSingup from "../../hooks/useSingup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSingup();

  const handeChangeGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">ChatVibe</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-100">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="omar agtib"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-100">Username</span>
            </label>
            <input
              type="text"
              placeholder="omarAg"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-100">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-100">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender */}

          <GenderCheck
            handeChangeGender={handeChangeGender}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account ?
          </Link>

          <div>
            <button
              className="btn  btn-sm mt-2 border-slate-700 bg-blue-500"
              disabled={loading}
            >
              {loading ? (
                <span className="text-white loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
