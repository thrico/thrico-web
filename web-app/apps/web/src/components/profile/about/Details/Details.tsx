import { Flex, Space } from "antd";
import React from "react";
import About from "./about/About";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Social from "./social/Social";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import Tags from "./tags/Tags";

const Details = () => {
  return (
    <Space style={{ width: "70%" }} direction="vertical">
      <About />
      <Education education={[]} />
      <Experience experience={[]} />
      <Resume />
      <Skills />
      <Tags />
      <Social />
    </Space>
  );
};

export default Details;
