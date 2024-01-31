import { useDispatch } from "react-redux";
import {
  HAMBURGER_MENU_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
} from "../utils/Constants";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src={HAMBURGER_MENU_ICON}
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img className="h-8 mx-2" src={YOUTUBE_LOGO} alt="logo" />
      </div>

      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          className="w-1/2 border border-gray-500 rounded-l-full"
        />
        <button className="py-2 px-5 border border-gray-500 border-l-0 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8 float-right" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
