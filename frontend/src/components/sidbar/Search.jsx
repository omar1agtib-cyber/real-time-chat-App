import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useCoversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConv } = useCoversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long");
    }
    const conversation = conversations?.find((conv) =>
      conv.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConv(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-900 text-white hover:text-black"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;
