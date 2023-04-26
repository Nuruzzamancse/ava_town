import React from "react";
import GroupCheckbox from "./components/GroupCheckbox/GroupCheckbox";
import Header from "./components/layout/header/Header";
import Select from "./components/Select/Select";
import AvatarCard from "./features/Home/AvatarCard/AvatarCard";
import { options } from "./features/Home/constant";

function App() {
  return (
    <div className="bg-[#fafafa] m-auto w-[1280px]">
      <Header />
      <Select
        options={options}
        placeholder="Sort by featured"
        onChange={() => {}}
        className="w-[124px]  border border-[#6A6A6A] shadow-sm p-2 rounded-md"
      ></Select>
      <GroupCheckbox options={['VRChat(Quest)', 'VRChat(PCVR)']} legend='Content'/>
      <AvatarCard></AvatarCard>
    </div>
  );
}

export default App;
