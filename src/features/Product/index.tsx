import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { avatars } from "../../assets/data/avatars";
import Button from "../../components/Button/Button";
import Card from "../../components/card/Card";
import AvatarCard from "../Home/components/AvatarCard";
import { description } from "./constants";

const Product: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantity((prev) => prev - 1);
  };
  const avatar = avatars.filter(
    (avatar) => avatar.id === parseInt(id || "0")
  )[0];
  if (!avatar) {
    return <div className="bg-red-200 px-2 py-1 rounded">No Avatar Found</div>;
  }
  const { category, human, base, image } = avatar;
  const filteredAvatars = avatars.filter(
    (avatar) =>
      avatar.category === category &&
      avatar.base === base &&
      avatar.human === human &&
      avatar.id !== parseInt(id || "0")
  );
  const deliveryState = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <Card className="m-auto max-w-[1280px]">
      <div className="flex w-[1280px] m-auto flex-col justify-center gap-5 mb-10">
        <div className="flex gap-5 justify-center my-5">
          <div className="w-[260px]">
            <img
              src={image}
              height={250}
              width={250}
              alt={`product${id}`}
              className="pl-5 pt-2"
            />
          </div>
          <div className="w-[724px] flex flex-col gap-2">
            <h2 className="text-2xl font-medium">
              Avatar name “Avatown” -nice original avatar of Avatown
            </h2>
            <div className="flex justify-between ">
              <div className="flex gap-2 items-center">
                <span className="text-golden text-lg">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
                <p className="text-md font-medium text-gray200">
                  4.7 & 100Likes
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="https://user-images.githubusercontent.com/63799967/234540418-a581057e-be27-4bb2-8ccb-c289b4e96f5b.png"
                alt="joe's"
                height={30}
                width={30}
                className="rounded-full"
              />
              <p className="text-md text-gray200 font-medium">Avatar Joe’s</p>
            </div>
            <h2 className="text-xl font-medium">
              <span className="text-sm">$</span> 50.00
            </h2>
            <div className="flex gap-2">
              <span className="h-[17px] w-[17px] bg-cyan rounded-full"></span>
              <p className="text-[11px] font-medium">PC ONLY</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">
                Auto upload service ready, you can use this avatar within 24
                hours.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-md  inline-block">Description</h4>
              <p className="text-justify">{description}</p>
              <h5 className="font-medium">Features:</h5>
              <ul>
                <li>ASIN: 0804139296</li>
                <li>
                  Publisher: Currency; NO-VALUE edition (September 16, 2014)
                </li>
                <li>Language: English</li>
                <li>Hardcover: 224 pages</li>
                <li>ISBN-10: 9780804139298</li>
                <li>ISBN-13: 978-0804139298</li>
                <li>Item Weight: 12.8 ounces</li>
                <li>Dimensions: 5.74 x 0.83 x 8.53 inches</li>
              </ul>
            </div>
          </div>
          <div className="w-[270px] justify-self-center ">
            <div className="w-[90%] drop-shadow-lg bg-white flex flex-col p-2 pb-5 font-medium text-gray200 border-gray-500">
              <p className="self-end text-end">
                <span className="text-golden font-bold text-lg">$50.00</span>
                <br />
                save 0%
                <br />
                List price: $50.00
              </p>
              <p className="text-sm mt-4">
                $20.00 Shipping and import fees
                <br />
                Deliver to {deliveryState}
                <br />
                Deliver in 10 days
              </p>
              <p className="text-[green] font-bold my-4 ">In Stock</p>
              <div className="flex gap-2 items-center">
                <label htmlFor="qty">Quantity</label>
                <Button
                  disabled={quantity <= 1 ? true : false}
                  className=" border border-golden rounded px-1 !border-solid "
                  onClick={decrement}
                >
                  -
                </Button>
                <input
                  className="w-16 appearance-none border border-solid border-golden rounded text-center"
                  type="number"
                  name="qty"
                  value={quantity}
                  max={10}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <Button
                  disabled={quantity > 10 ? true : false}
                  className=" border border-golden rounded px-1 !border-solid "
                  onClick={increment}
                >
                  +
                </Button>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center mt-5 ">
                <Button
                  className="bg-purple w-[188px] h-8 text-white rounded-full hover:border hover:border-purple hover:border-solid hover:text-purple hover:bg-white"
                  onClick={() => {}}
                >
                  Add to cart
                </Button>
                <Button
                  className="bg-purple w-[188px] h-8 text-white rounded-full hover:border hover:border-purple hover:border-solid hover:text-purple hover:bg-white"
                  onClick={() => {}}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <>
          {filteredAvatars && (
            <div className="flex flex-col justify-center items-center gap-4 px-10">
              <h4 className="bg-golden rounded-full px-3 font-semibold py-1">
                Some products you may also like
              </h4>
              <div className="self-center grid grid-cols-4 gap-1 items-center">
                {filteredAvatars.map(
                  (avatar, index) =>
                    index < 4 && <AvatarCard avatar={avatar} key={index} />
                )}
              </div>
            </div>
          )}
        </>
      </div>
    </Card>
  );
};

export default Product;
