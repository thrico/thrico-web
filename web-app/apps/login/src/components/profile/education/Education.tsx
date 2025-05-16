import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Flex,
  List,
  Popconfirm,
  Space,
  Typography,
} from "antd";
import { ArrowUpDown } from "lucide-react";
import AddEducation from "./AddEducation";
import EditEducation from "./EditEducation";
import moment from "moment";
import { education, educationProps } from "@/lib/types";
import { TbGripVertical } from "react-icons/tb";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DraggableListItem = ({
  item,
  education,
  setEducation,
  open,
  setOpen,
  cancel,
}: {
  item: education;
  education: education[];
  setEducation: (edu: education[]) => void;
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  cancel: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <List.Item
        actions={[
          <EditEducation
            key={`edit-${item.id}`}
            setEducation={setEducation}
            item={item}
            education={education}
          />,
          <Popconfirm
            key={`delete-${item.id}`}
            open={open === item.id}
            title="Delete the Education"
            description="Are you sure to delete this Education?"
            onConfirm={() => {
              const filtered = education.filter((t) => t.id !== item.id);
              setEducation(filtered);
              setOpen("");
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Space onClick={() => setOpen(item.id)}>Delete</Space>
          </Popconfirm>,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Space>
              <ArrowUpDown
                {...attributes}
                {...listeners}
                style={{ cursor: "grab" }}
                size={20}
              />

              <Avatar
                src={`https://cdn.thrico.network/${item?.school?.logo}`}
              />
            </Space>
          }
          title={
            <Flex align="center" gap={10}>
              <div>
                <Typography.Text>{item.degree}</Typography.Text>
                <br />
                <Typography.Paragraph>{item.school.name}</Typography.Paragraph>
              </div>
            </Flex>
          }
          description={
            <>
              {moment(item?.duration[0]).format("ll")} -{" "}
              {moment(item?.duration[1]).format("ll")}
              <br />
              <Typography.Text type="secondary">
                {moment(item?.duration[1]).diff(
                  moment(item?.duration[0]),
                  "years"
                ) > 0 &&
                  `${moment(item?.duration[1]).diff(
                    moment(item?.duration[0]),
                    "years"
                  )} years`}
                {moment(item?.duration[1]).diff(
                  moment(item?.duration[0]),
                  "months"
                ) %
                  12 >
                  0 &&
                  ` ${
                    moment(item?.duration[1]).diff(
                      moment(item?.duration[0]),
                      "months"
                    ) % 12
                  } months`}
              </Typography.Text>
            </>
          }
        />
      </List.Item>
    </div>
  );
};

const Education = ({
  setEducation,
  education = [],
  setCurrent,
}: educationProps) => {
  const addEducation = (data: education) => {
    setEducation([data, ...education]);
  };

  const [open, setOpen] = useState<string>("");

  const cancel = () => {
    setOpen("");
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = education.findIndex((item) => item.id === active.id);
      const newIndex = education.findIndex((item) => item.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        setEducation(arrayMove(education, oldIndex, newIndex));
      }
    }
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card
        title="Education"
        extra={<AddEducation addEducation={addEducation} />}
        style={{ width: "100%", margin: 10 }}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={education.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <List
              locale={{
                emptyText: (
                  <List>
                    <List.Item>
                      <List.Item.Meta
                        description="Add your educational background to help others understand your qualifications."
                        title="No education added yet"
                      />
                    </List.Item>
                  </List>
                ),
              }}
              className="demo-loadmore-list"
              style={{ width: "100%" }}
              itemLayout="horizontal"
              dataSource={education}
              renderItem={(item) => (
                <DraggableListItem
                  key={item.id}
                  item={item}
                  education={education}
                  setEducation={setEducation}
                  open={open}
                  setOpen={setOpen}
                  cancel={cancel}
                />
              )}
            />
          </SortableContext>
        </DndContext>
      </Card>

      <Flex style={{ width: "100%" }} align="center" justify="center">
        <Space>
          <Button onClick={() => setCurrent(0)}>Previous</Button>
          <Button
            onClick={() => setCurrent(2)}
            disabled={education.length === 0}
            type="primary"
          >
            Next
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default Education;
