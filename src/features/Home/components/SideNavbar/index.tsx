import React, { useState } from "react";

import Button from "../../../../components/Button/Button";
import GroupCheckbox from "../../../../components/GroupCheckbox/GroupCheckbox";
import { autoUpload, contents, polygon, price } from "../../constant";
import { Props } from "./types";

const SideNavBar: React.FC<Props> = (props) => {
  const [isFullAvatar, setIsFulAvatar] = useState(false);
  const { pathSetter, categoryItem, setCategoryItem } = props;

  return (
    <div className="pl-[10px] w-[256px] mt-[9px]">
      <h4 className="font-bold text-xs">Category</h4>
      <div className="font-medium text-xs items-start ml-4 flex flex-col justify-start">
        <Button
          onClick={() => {
            setIsFulAvatar(!isFullAvatar);
            setCategoryItem("full");
            pathSetter(["Full avatar"]);
          }}
        >
          Full avatar
        </Button>
        {(categoryItem === "full" ||
          categoryItem === "human" ||
          categoryItem === "male" ||
          categoryItem === "female" ||
          categoryItem === "unisex" ||
          categoryItem === "animal" ||
          categoryItem === "robot" ||
          categoryItem === "baseOthers") && (
          <div className="ml-2 flex flex-col items-start">
            <Button
              onClick={() => {
                setCategoryItem("human");
                pathSetter(["Full avatar", "Human based"]);
              }}
            >
              Human Based
            </Button>
            {(categoryItem === "human" ||
              categoryItem === "male" ||
              categoryItem === "female" ||
              categoryItem === "unisex") && (
              <div className="ml-2 flex flex-col items-start">
                <Button
                  onClick={() => {
                    setCategoryItem("male");
                    pathSetter(["Full avatar", "Human based", "Male"]);
                  }}
                >
                  Male
                </Button>
                <Button
                  onClick={() => {
                    setCategoryItem("female");
                    pathSetter(["Full avatar", "Human based", "Female"]);
                  }}
                >
                  Female
                </Button>
                <Button
                  onClick={() => {
                    setCategoryItem("unisex");
                    pathSetter(["Full avatar", "Human based", "Unisex"]);
                  }}
                >
                  Unisex
                </Button>
              </div>
            )}
            {categoryItem === "full" && (
              <Button
                onClick={() => {
                  setCategoryItem("animal");
                  pathSetter([
                    "Full Avatar",
                    "Animal and mythical creature Based",
                  ]);
                }}
              >
                Animal and mythical creature Based
              </Button>
            )}
            {categoryItem === "full" && (
              <Button
                onClick={() => {
                  setCategoryItem("robot");
                  pathSetter(["Full avatar", "Robot based"]);
                }}
              >
                Robot Based
              </Button>
            )}
            {categoryItem === "full" && (
              <Button
                onClick={() => {
                  setCategoryItem("baseOthers");
                  pathSetter(["Full avatar", "Others"]);
                }}
              >
                Others
              </Button>
            )}
          </div>
        )}
        {!isFullAvatar && (
          <Button
            onClick={() => {
              setCategoryItem("Others");
              pathSetter(["Others"]);
            }}
          >
            Others
          </Button>
        )}
      </div>
      <GroupCheckbox legend="Contents" options={contents} />
      <GroupCheckbox legend="Price" options={price} />
      <GroupCheckbox legend="Polygon amount" options={polygon} />
      <GroupCheckbox legend="Auto upload support" options={autoUpload} />
    </div>
  );
};

export default SideNavBar;
