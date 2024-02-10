import { BiLogOut } from 'react-icons/bi';
const LogoutBtn = () => {
  return (
    <button className="mt-auto btn btn-square bg-sky-900 text-white hover:text-black">
      <BiLogOut className="w-6 h-6 cursor-pointer" />
    </button>
  );
};

export default LogoutBtn;
