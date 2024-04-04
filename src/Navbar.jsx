import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#00055e] flex justify-between">
       
        <img
          className="w-16"
          src="https://cdn.discordapp.com/attachments/777095273490546712/1222807170253586452/Placify_navbar.png?ex=66178eec&is=660519ec&hm=1ff772e71d3c6db16bdcb1540d7cba3e958e82176ec51406512adf7080d6f942&"
        />
         <div className="my-auto">
         <Button prop={"Home"}/>
         <Button prop={"About"}/>
         <Button prop={"Contact"}/>
         <Button prop={"Feedback"}/>
         </div>
      </div>
    </>
  );
};

export default Navbar;
