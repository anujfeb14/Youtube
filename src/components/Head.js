import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_MENU_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/Constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 px-6 py-2 border border-gray-500 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="py-2 px-5 border border-gray-500 border-l-0 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[27.57rem] shadow-lg rounded-lg border-gray-300">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-1 py-2 shadow-sm hover:bg-gray-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img className="h-8 float-right" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
