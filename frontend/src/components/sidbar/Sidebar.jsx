import Conversations from './Conversations';
import LogoutBtn from './LogoutBtn';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3 " />
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
