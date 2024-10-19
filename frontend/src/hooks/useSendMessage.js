import { useState } from "react";
import useCoversation from "../zustand/useConversation";
import toast from "react-hot-toast";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConv, messages, setMessages } = useCoversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConv._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
