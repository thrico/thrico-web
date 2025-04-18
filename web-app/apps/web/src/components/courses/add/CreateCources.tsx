import React, { useCallback, useState } from "react";
import { Button, Card, Flex, Form, Modal, Space, Steps } from "antd";
import Cover from "./Cover";

import { createEvent } from "../../../graphql/actions/events";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Step1Props, Step3Props } from "../../../types/ts-types";
import { postJob } from "../../../graphql/actions/jobs";

interface props {
  refresh?: any;
}
const CreateCourses = ({ refresh }: props) => {
  console.log(refresh);

  const [imageUrl, setImageUrl] = useState<string>("");
  const [cover, setCover] = useState<string>();
  const onCompleted = () => {
    handleCancel();
  };
  const [post, { loading }] = postJob({
    onCompleted,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [step1Data, setStep1Data] = useState<Step1Props>({
    jobTitle: "",
    company: null,
    workplaceType: "on-Site",
    location: null,
    jobType: "full-time",
    salary: null,
    experience: null,
  });

  const [step3Data, setStep3Data] = useState<Step3Props[]>([]);

  const [description, setDescription] = useState("");

  const onSubmit = (values: any) => {
    const data = { ...step3Data, ...step1Data, description };
    console.log(data);
    post({
      variables: {
        input: data,
      },
    });
  };
  const steps = [
    {
      title: "Step 1",
      content: (
        <Step1 next={next} step1Data={step1Data} setStep1Data={setStep1Data} />
      ),
    },
    {
      title: "Step 2",
      content: (
        <Step2
          description={description}
          setDescription={setDescription}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Step 3",
      content: (
        <Step3
          step3Data={step3Data}
          setStep3Data={setStep3Data}
          next={onSubmit}
          prev={prev}
          loading={loading}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Button
        style={{ width: "100%", marginTop: 20 }}
        type="primary"
        onClick={showModal}
      >
        Create Courses
      </Button>

      <Modal
        style={{ top: 10 }}
        title={false}
        width={1000}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Card title="Post A Job" extra={[]}>
          <Steps current={current} items={items} />
          <Flex style={{ width: "100%", marginTop: 40 }} justify="center">
            {steps[current].content}
          </Flex>
        </Card>
      </Modal>
    </>
  );
};

export default CreateCourses;
