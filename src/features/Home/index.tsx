import { useState } from "react";

import { avatars } from "../../assets/data/avatars";
import Select from "../../components/Select/Select";
import AvatarCard from "./components/AvatarCard";
import { options } from "./constant";
import SideNavBar from "./components/SideNavbar";

const Home = () => {
  const [path, setPath] = useState(["All Items"]);
  const [categoryItem, setCategoryItem] = useState<string>("all");

  return (
    <div className="flex items-start gap-1 w-[1280px] m-auto ">
      <SideNavBar
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        pathSetter={setPath}
      />
      <div className="mt-[17px] w-[1024px]">
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
          {avatars &&
            avatars
              .filter(
                (avatar) =>
                  avatar.category === categoryItem ||
                  avatar.base === categoryItem ||
                  avatar.human === categoryItem ||
                  categoryItem === "all"
              )
              .map((avatar, index) => (
                <AvatarCard avatar={avatar} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
