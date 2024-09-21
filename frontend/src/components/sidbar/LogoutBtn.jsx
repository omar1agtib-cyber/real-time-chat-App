import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      {!loading ? (
        <button
          className="mt-auto btn btn-square bg-sky-900 text-white hover:text-black"
          onClick={logout}
        >
          <BiLogOut className="w-6 h-6 cursor-pointer" />
        </button>
      ) : (
        <span className=" text-white loading loading-spinner"></span>
      )}
    </>
  );
};

export default LogoutBtn;
