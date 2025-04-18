import Image from "next/image";
import React from "react";

const UserCover = ({ cover }) => {
  return (
    <img
      src={
        cover
          ? `https://cdn.thrico.network/${cover}`
          : "https://cdn.thrico.network/default_profile_cover.jpg"
      }
      alt="alt"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default UserCover;
