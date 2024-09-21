import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatVibe</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-100">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
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
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account ?
          </Link>

          <div>
            <button className="btn btn-sm mt-2 border-slate-700 bg-blue-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
