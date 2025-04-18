import { Form, Select } from "antd";
import React from "react";
import { getAllMentorSkills } from "../../../graphql/actions/mentorship";

const Skills = () => {
  const { data, loading } = getAllMentorSkills();
  return (
    <Form.Item rules={[{ required: true }]} name="skills" label="Skills">
      <Select
        loading={loading}
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Add Skills"
        options={data?.getAllMentorSkills.map((set) => ({
          value: set.title,
          label: `${set.title} `,
        }))}
      />
    </Form.Item>
  );
};

export default Skills;
