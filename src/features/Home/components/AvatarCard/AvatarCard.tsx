import React, { useState, useEffect } from "react";
import {
  HiHeart,
  HiLink,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import Button from "../../../../components/Button/Button";
import Card from "../../../../components/card/Card";
import CopyIcon from "../../../../assets/icons/CopyIcon";
import { Props } from "./types";

const AvatarCard: React.FC<Props> = (props) => {
  const [isWishList, setIsWishList] = useState<boolean>(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  }, [isCopied]);

  const { avatar } = props;
  const { image, id } = avatar;

  const handleWishList = () => {
    setIsWishList(!isWishList);
  };

  return (
    <Card className="rounded-[7.2px] w-[250px] relative" key={id}>
      <div className="">
        <Button
          onClick={() => {}}
          className="bg-blue-800 rounded-[7.2px] absolute right-3 top-3 text-sm text-white px-1 py-[2px]"
        >
          <div className="flex gap-2 items-center">
            <HiOutlineShoppingCart /> <p>Add</p>
          </div>
        </Button>
        <img
          className="rounded-[7.2px]"
          height={250}
          width={250}
          alt="VRC A(F)"
          src={image}
        />
        <div className="p-[5px]">
          <h2 className="text-base font-medium">
            Avatar name “Avatown” -nice original avatar of Avatown
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="text-[#F9AE3F] text-[15px]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="text-[11px] text-[#6A6A6A]">4.7 & 100Likes</p>
            </div>
            <button className="border-none mr-1" onClick={handleWishList}>
              {isWishList ? (
                <HiHeart className="text-lg text-[#F84F4F]" />
              ) : (
                <HiOutlineHeart className="text-lg text-[#6A6A6A]" />
              )}
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="https://user-images.githubusercontent.com/63799967/234540418-a581057e-be27-4bb2-8ccb-c289b4e96f5b.png"
              alt="joe's"
              height={21}
              width={21}
              className="rounded-full"
            />
            <p className="text-[10px] text-[#6A6A6A] font-medium">
              Avatar Joe’s
            </p>
          </div>
          <h2 className="text-xl font-medium">$ 50.00</h2>
          <div className="flex gap-2">
            <span className="h-[17px] w-[17px] bg-[#3CD4F5] rounded-full"></span>
            <p className="text-[11px] font-medium">PC ONLY</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[11px] font-medium">
              Auto upload service ready, you can use this avatar within 24
              hours.
            </p>
            <div className="relative">
              {isCopied && (
                <p className=" text-xs px-2 py-1 absolute right-0 bottom-14 bg-black text-white rounded-full ">
                  Copied
                </p>
              )}
              {isCopy && (
                <Button
                  onClick={() => {
                    setIsCopied(true);
                  }}
                  className="absolute right-0 bottom-7 bg-white text-[#6A6A6A] rounded-[7.2px] py-[2px] w-[106px] px-2 text-xs border !border-solid border-[#6A6A6A]"
                >
                  <span className="flex gap-1 items-center justify-center">
                    <HiLink className="text-xs" />
                    Copy Link
                  </span>
                </Button>
              )}
              <Button
                onClick={() => {
                  setIsCopy(!isCopy);
                }}
              >
                <CopyIcon height={20.8} width={13} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AvatarCard;
