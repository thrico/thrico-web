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
import { MenuOutlined } from "@ant-design/icons";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";
import moment from "moment";
import { experience, experienceProps } from "@/lib/types";

// DnD Kit
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
import { ArrowUpDown } from "lucide-react";

const DraggableListItem = ({
  item,
  experience,
  setExperience,
  open,
  setOpen,
  cancel,
}: {
  item: experience;
  experience: experience[];
  setExperience: (exp: experience[]) => void;
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
          <EditExperience
            key={`edit-${item.id}`}
            setExperience={setExperience}
            item={item}
            experience={experience}
          />,
          <Popconfirm
            key={`delete-${item.id}`}
            open={open === item.id}
            title="Delete the Experience"
            description="Are you sure to delete this Experience?"
            onConfirm={() => {
              setExperience(experience.filter((t) => t.id !== item.id));
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
                src={`https://cdn.thrico.network/${item?.company?.logo}`}
              />
            </Space>
          }
          title={
            <Flex align="center" gap={10}>
              <div>
                <Typography.Text>{item.title}</Typography.Text>
                <br />
                <Typography.Paragraph>
                  {item?.company?.name} · {item.employmentType}
                </Typography.Paragraph>
              </div>
            </Flex>
          }
          description={
            <>
              {item?.currentlyWorking ? (
                <>
                  {moment(item?.startDate)?.format("ll")} -{" "}
                  {moment().format("ll")}
                </>
              ) : (
                <>
                  {moment(item?.duration[0])?.format("ll")} -{" "}
                  {moment(item?.duration[1]).format("ll")}
                </>
              )}
              <br />
              <Typography.Text type="secondary">
                {item?.currentlyWorking
                  ? `${Math.floor(
                      moment().diff(moment(item?.startDate), "months") / 12
                    )} years ${
                      moment().diff(moment(item?.startDate), "months") % 12
                    } months`
                  : `${moment(item?.duration[1]).diff(
                      moment(item?.duration[0]),
                      "years"
                    )} years ${
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

const Experience = ({
  setExperience,
  experience = [],
  setCurrent,
}: experienceProps) => {
  const addExperience = (data: experience) => {
    setExperience([data, ...experience]);
  };

  const [open, setOpen] = useState<string>("");

  const cancel = () => setOpen("");

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = experience.findIndex((item) => item.id === active.id);
      const newIndex = experience.findIndex((item) => item.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        setExperience(arrayMove(experience, oldIndex, newIndex));
      }
    }
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card
        title="Experience"
        extra={<AddExperience addExperience={addExperience} />}
        style={{ width: "100%", margin: 10 }}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={experience.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <List
              locale={{
                emptyText: (
                  <List>
                    <List.Item>
                      <List.Item.Meta
                        description="Add your experience background to help others understand your experience."
                        title="No experience added yet"
                      />
                    </List.Item>
                  </List>
                ),
              }}
              className="demo-loadmore-list"
              style={{ width: "100%" }}
              itemLayout="horizontal"
              dataSource={experience}
              renderItem={(item) => (
                <DraggableListItem
                  key={item.id}
                  item={item}
                  experience={experience}
                  setExperience={setExperience}
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
          <Button onClick={() => setCurrent(1)}>Previous</Button>
          <Button onClick={() => setCurrent(3)} type="primary">
            Next
          </Button>
        </Space>
      </Flex>
    </Space>
  );
};

export default Experience;
