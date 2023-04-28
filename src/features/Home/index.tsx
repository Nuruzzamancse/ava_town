import { useState, useEffect } from "react";

import { avatars } from "../../assets/data/avatars";
import Select from "../../components/Select/Select";
import AvatarCard from "./components/AvatarCard";
import { options } from "./constant";
import SideNavBar from "./components/SideNavbar";
import Button from "../../components/Button/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  const [path, setPath] = useState(["All Items"]);
  const [categoryItem, setCategoryItem] = useState<string>("all");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(12);

  useEffect(() => {
    setMin(1);
    setMax(12);
  }, [categoryItem]);

  const filteredAvatars = avatars
    .filter(
      (avatar, index) =>
        avatar.category === categoryItem ||
        avatar.base === categoryItem ||
        avatar.human === categoryItem ||
        categoryItem === "all"
    )
    .filter((avatar, index) => index + 1 >= min && index + 1 <= max);
  return (
    <div className="flex items-start gap-1 w-[1280px] m-auto bg-white">
      <SideNavBar
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        pathSetter={setPath}
      />
      <div className="mt-[17px] w-[1024px] ">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl font-medium">{path.join(">")}</h2>
          <Select
            options={options}
            placeholder="Sort by featured"
            onChange={() => {}}
            className="w-[124px]  border border-gray200 shadow-sm p-2 rounded-md"
          ></Select>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {filteredAvatars &&
            filteredAvatars.map((avatar, index) => (
              <AvatarCard avatar={avatar} key={index} />
            ))}
        </div>
        {filteredAvatars.length>0 ? (
          <div className="flex gap-2 justify-center py-4 items-center">
            <Button
              onClick={() => {
                setMin(min - 12);
                setMax(max - 12);
              }}
              disabled={min <= 1 ? true : false}
            >
              <FaAngleLeft />
            </Button>
            <Button
              onClick={() => {
                setMin(1);
                setMax(min + 11);
              }}
              className={min === 1 ? "bg-gray100 px-2 rounded" : ""}
            >
              1
            </Button>
            <Button
              onClick={() => {
                setMin(13);
                setMax(24);
              }}
              className={min === 13 ? "bg-gray100 px-2 rounded" : ""}
              disabled={filteredAvatars.length <= 12 ? true : false}
            >
              2
            </Button>
            <Button
              onClick={() => {
                setMin(min + 12);
                setMax(max + 12);
              }}
              disabled={filteredAvatars.length < max ? true : false}
            >
              <FaAngleRight />
            </Button>
          </div>
        ):<p className="bg-red-200 text-center rounded w-[95%] m-auto">No Data Found</p>}
      </div>
    </div>
  );
};

export default Home;
