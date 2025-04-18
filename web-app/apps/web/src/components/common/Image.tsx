import Image from "next/image";
import React from "react";

const NextImage = ({ src }: any) => {
  console.log(`https://cdn.thrico.network/${src}`);
  return (
    <Image
      alt={`https://cdn.thrico.network/${src}`}
      layout="fill"
      objectFit="cover"
      src={`https://cdn.thrico.network/${src}`}
    />
  );
};

export default NextImage;
