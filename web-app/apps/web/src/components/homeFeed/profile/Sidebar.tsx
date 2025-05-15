import React from "react";
import {
  Avatar,
  Card,
  List,
  Button,
  Typography,
  Divider,
  Space,
  Row,
  Col,
} from "antd";
import { BookOutlined, PlusOutlined } from "@ant-design/icons";
import { useGetUser } from "@/graphql/actions";

const { Title, Text } = Typography;

export default function Component() {
  const {
    data: { getUser },
  } = useGetUser();
  const recentItems = [
    { title: "Personal Development, Wel...", icon: "👥" },
    { title: "PulsePlayers 3: We Complet...", icon: "📅" },
    { title: "The Power of AI: Considerat...", icon: "📅" },
    { title: "PulsePlayers 2 - We celebra...", icon: "📅" },
    { title: "React Native", icon: "👥" },
  ];

  const groups = [
    { title: "Personal Development, Wel...", icon: "👥" },
    { title: "React Native", icon: "👥" },
    { title: "React Js & React Native Dev...", icon: "👥" },
  ];

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Card variant="borderless">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              size={96}
              src={`https://cdn.thrico.network/${getUser?.avatar}`}
              style={{ marginBottom: "16px" }}
            />
            <Title level={4} style={{ marginBottom: "4px" }}>
              {getUser?.firstName} {getUser?.lastName}
            </Title>
            <Text type="secondary">{getUser?.currentPosition}</Text>
          </div>

          <Row gutter={16}>
            <Col span={12} style={{ textAlign: "center" }}>
              <Text type="secondary">Profile viewers</Text>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>57</div>
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              <Text type="secondary">Post impressions</Text>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>31</div>
            </Col>
          </Row>

          <Button
            icon={<BookOutlined />}
            type="text"
            style={{ textAlign: "left", width: "100%" }}
          >
            Saved items
          </Button>

          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div>
              <Title level={5}>Recent</Title>
              <List
                itemLayout="horizontal"
                dataSource={recentItems}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Text>{item.icon}</Text>}
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
            </div>

            <div>
              <Title level={5}>Groups</Title>
              <List
                itemLayout="horizontal"
                dataSource={groups}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Text>{item.icon}</Text>}
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
              <Button type="link" style={{ padding: 0 }}>
                See all
              </Button>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Title level={5}>Events</Title>
                <Button type="text" icon={<PlusOutlined />} />
              </div>
            </div>

            <div>
              <Title level={5}>Followed Hashtags</Title>
            </div>
          </Space>

          <Divider />

          <Button type="link" block>
            Discover more
          </Button>
        </Space>
      </Card>
    </div>
  );
}
