import { create } from "zustand";

const useCoversation = create((set) => ({
  selectedConv: null,
  setSelectedConv: (selectedConv) => set({ selectedConv }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useCoversation;
