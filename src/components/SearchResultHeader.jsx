import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const { setimageSearch } = useContext(Context);
  const [selectedmenu, setselectedmenu] = useState("All");

  useEffect(() => {
    return () => {
      setimageSearch(false);
    };
  }, []);

  const ClickHandler = (menu) => {
    let isTypeImage = menu.name === "Images";
    setselectedmenu(menu.name);
    setimageSearch(isTypeImage ? true : false);
  };

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center grow">
          <Link to = "/">
            <img
              className="hidden md:block mr-10 w-[92px]"
              src={Logo}
              alt="google_logo"
            />
          </Link>
          <SearchInput from="searchInput" hidden = "hidden"></SearchInput>
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectedmenu === menu.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => ClickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedmenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bottom-0 left-[10px] bg-[#1a72e8]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;