import { Card, Image, List, Space } from "antd";
import React from "react";
import Add from "./AddImage";
import { getEventGallery } from "../../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import DeleteButton from "@repo/ui/DeleteButton";
import Delete from "./Delete";
import AddVideo from "./AddVideo";

import { media } from "../../../../../types/ts-types";
import Video from "./Video";
import Images from "./Image";
const Gallery = () => {
  const { slug } = useParams();

  const { data, loading } = getEventGallery({
    variables: {
      input: {
        slug,
      },
    },
  });

  return (
    <Card
      extra={
        <Space>
          <AddVideo />
          <Add />
        </Space>
      }
      title="Event Gallery"
    >
      <List
        loading={loading}
        grid={{ gutter: 16, column: 4 }}
        dataSource={data?.getEventGallery}
        renderItem={(item: media) => (
          <List.Item>
            <Card
              extra={
                <>
                  <Delete id={item.id} />
                </>
              }
            >
              {item.mediaType === "image" && <Images item={item} />}

              {item.mediaType === "video" && <Video item={item} />}
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Gallery;
