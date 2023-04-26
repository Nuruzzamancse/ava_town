import React from "react";
import Card from "../../../components/card/Card";
import avatar from "../../../assets/img/VRC image A(F).png";
const AvatarCard = () => {
  return (
    <Card className="rounded-[7.2px] w-[250px]">
      <div>
        <img className="rounded-[7.2px]" height={250} width={250} alt="VRC A(F)" src={avatar} />
        <div>
            <h2>Avatar name “Avatown” -nice original avatar of Avatown</h2>
            <div>
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <p></p>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default AvatarCard;
