"use client";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Rate,
  Row,
  Space,
  Tag,
  theme,
  Typography,
} from "antd";
import {
  CheckCircleFilled,
  CheckOutlined,
  ClockCircleFilled,
  EnvironmentFilled,
  LinkedinFilled,
  StarFilled,
} from "@ant-design/icons";
import Link from "next/link";
import Reviews from "./Reviews";
import Services from "./Services";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

function MentorProfile() {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Layout style={{ background: "#fff" }}>
      <Header
        style={{
          background: colorPrimary,
          height: "270px",
          padding: "20px 50px",
          position: "relative",
          paddingBottom: 20,
        }}
      >
        <Row align="middle" style={{ height: "100%" }}>
          <Col>
            <Avatar
              size={180}
              src={"https://picsum.photos/200"}
              style={{
                border: "4px solid white",
                marginRight: 24,
              }}
            />
          </Col>
          <Col>
            <Space direction="vertical" size={2}>
              <Space align="center">
                <Title level={2} style={{ color: "white", margin: 0 }}>
                  Abhishek Jakhar
                </Title>
                <Tag color="green" style={{ marginLeft: 8 }}>
                  Top Mentor
                </Tag>
              </Space>
              <Title
                level={4}
                style={{ color: "white", margin: 0, fontWeight: "normal" }}
              >
                Senior Software Engineer @ Coinbase
              </Title>
              <Space split="|" style={{ color: "#9ca3af" }}>
                <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                  Top 1% Mentor
                </Link>
                <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                  Interview Expert
                </Link>
                <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                  JavaScript and React Expert
                </Link>
                <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                  Roadmap
                </Link>
                <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                  Pair Programming
                </Link>
              </Space>
              <Space style={{ marginTop: 8 }}>
                <Space>
                  <EnvironmentFilled style={{ color: "rgb(45, 212, 191)" }} />
                  <Text style={{ color: "white" }}>United Arab Emirates</Text>
                </Space>
                <Space>
                  <StarFilled style={{ color: "#fadb14" }} />
                  <Text style={{ color: "white" }}>5.0</Text>
                  <Link href="" style={{ color: "rgb(45, 212, 191)" }}>
                    (76 reviews)
                  </Link>
                </Space>
                <Space>
                  <ClockCircleFilled style={{ color: "rgb(45, 212, 191)" }} />
                  <Text style={{ color: "white" }}>Active today</Text>
                </Space>
                <Space>
                  <CheckCircleFilled style={{ color: "rgb(45, 212, 191)" }} />
                  <Text style={{ color: "white" }}>
                    Usually responds in half a day
                  </Text>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col style={{ marginLeft: "auto" }}>
            <Button
              type="default"
              icon={<LinkedinFilled />}
              shape="circle"
              size="large"
              style={{
                background: "transparent",
                borderColor: "white",
                color: "white",
              }}
            />
          </Col>
        </Row>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "48px 50px 24px" }}>
        <Row gutter={24}>
          {/* Left Column */}
          <Col span={16}>
            {/* Profile Info */}
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Space direction="vertical" size="small">
                <Space>
                  <Tag color="blue">React</Tag>
                  <Tag color="blue">CSS</Tag>
                  <Tag color="blue">Web Development</Tag>
                  <Tag color="blue">JavaScript</Tag>
                </Space>
              </Space>

              {/* About Section */}
              <Card title="About" bordered={false}>
                <Paragraph>
                  Hello! I'm a passionate Frontend Engineer with a deep love for
                  mentoring engineers and guiding them through their
                  professional journeys. With extensive experience in front-end
                  frameworks like React and Next.js, I enjoy sharing my
                  knowledge and helping others excel in their careers.
                </Paragraph>
              </Card>

              {/* Reviews Section */}
            </Space>
          </Col>

          {/* Right Column - Booking Card */}

          <Services />

          <Reviews />
        </Row>
      </Content>
    </Layout>
  );
}

export default MentorProfile;
