import React from "react";

import { CiCircleCheck } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";
import { VscSymbolBoolean } from "react-icons/vsc";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { Menu } from "antd";
import { IoIosArrowDropdown } from "react-icons/io";
const Question = ({ active, setActive, data }) => {
  const icon = (type) => {
    switch (type) {
      case "multipleChoice":
        return <CiCircleCheck style={{ fontSize: 20 }} />;

      case "dropdown":
        return <IoIosArrowDropdown style={{ fontSize: 20 }} />;

      case "phone":
        return <FaPhoneSquareAlt style={{ fontSize: 15 }} />;

      case "website":
        return <FaLink style={{ fontSize: 15 }} />;

      case "yes/no":
        return <VscSymbolBoolean style={{ fontSize: 19 }} />;

      case "legal":
        return <FaBuildingColumns style={{ fontSize: 17 }} />;

      case "opinionScale":
        return <MdAutoGraph style={{ fontSize: 17 }} />;
      case "rating":
        return <CiStar style={{ fontSize: 18 }} />;
      case "shortText":
        return <CiTextAlignCenter style={{ fontSize: 18 }} />;
      case "longText":
        return <CiTextAlignJustify style={{ fontSize: 18 }} />;
      case "number":
        return <FaHashtag style={{ fontSize: 18 }} />;
    }
  };
  return (
    <Menu
      mode="inline"
      onClick={({ key }) => setActive(key)}
      defaultSelectedKeys={[active.id]}
      items={data?.feedBackQuestion.map((set) => ({
        key: set.id,
        icon: icon(set.questionType),
        label: set.questionType.toUpperCase(),
      }))}
    />
  );
};

export default Question;
