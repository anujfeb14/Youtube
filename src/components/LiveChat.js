import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20) + "🎉🎊",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 flex border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anuj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className=" border border-black w-[90%] px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
