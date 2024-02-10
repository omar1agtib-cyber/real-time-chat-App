import { TiMessages } from 'react-icons/ti';

import Messages from './Messages';
import WriteMsg from './WriteMsg';

const MessageContent = () => {
  const chatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* header */}
        {chatSelected ? (
          <>
          <div className="bg-blue-500 px-4 py-2 mb-2 flex items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                  alt="user avatar"
                />
              </div>
            </div>
            <span className="text-white font-bold">Amine Blm</span>
          </div>
          </>
        ) : (
          <NoChatSelected />
        )}
        {/* messages */}
        <Messages />

        {/* Message Input */}
        <WriteMsg />
    </div>
  );
};

export default MessageContent;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Agtib Omar</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
