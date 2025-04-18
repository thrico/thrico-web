"use client";
import React, { useState } from "react";
import { Button, Card, Flex, message, Steps, theme } from "antd";

import Profile from "./Profile";
import Experience from "./Experience";

import {
  checkMentorShip,
  registerMentorShip,
} from "../../../graphql/actions/mentorship";
import MentorShipGuides from "../mentorShipGuides/MentorShipGuides";

const MentorApplicationForm = () => {
  const { refetch } = checkMentorShip();
  const [register, { loading }] = registerMentorShip({
    onCompleted() {
      refetch();
    },
  });

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,

    borderRadius: token.borderRadiusLG,

    marginTop: 16,
  };

  const [about, setAbout] = useState({
    displayName: null,
    about: null,
    intro: null,
  });

  const [experience, setExperience] = useState({
    category: "Engineering & Data",
    introVideo: null,
    whyDoWantBecomeMentor: null,
    greatestAchievement: null,
  });

  const submit = ({ values }) => {
    const data = {
      ...about,
      ...values,
    };
    register({
      variables: {
        input: data,
      },
    });
  };
  const steps = [
    {
      title: "About You",
      content: <Profile about={about} setAbout={setAbout} next={next} />,
    },

    {
      title: "Experience",
      content: (
        <Experience
          experience={experience}
          setExperience={setExperience}
          prev={prev}
          submit={submit}
          loading={loading}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        extra={<MentorShipGuides />}
        title="Apply As mentor"
        style={{ width: 1000 }}
      >
        <Steps current={current} items={items} />
        <Card style={{ margin: 20 }}>
          <div style={contentStyle}>{steps[current].content}</div>
        </Card>
      </Card>
    </div>
  );
};

export default MentorApplicationForm;
