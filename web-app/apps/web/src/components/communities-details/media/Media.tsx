"use client"

import type React from "react"
import { useState } from "react"
import { Layout, Card, Avatar, Typography, Space, Button, Dropdown, Menu, Row, Col } from "antd"
import { MoreOutlined, PlayCircleFilled } from "@ant-design/icons"
import { faker } from "@faker-js/faker"

const { Content } = Layout
const { Text } = Typography

interface MediaItem {
    id: string
    type: "photo" | "video"
    imageUrl: string
    user: {
        name: string
        avatar: string
        description: string
        timeAgo: string
    }
}

const PhotoGallery: React.FC = () => {
    const [activeTab, setActiveTab] = useState("all")

    // Sample media data
    const mediaItems: MediaItem[] = [
        {
            id: "1",
            type: "photo",
            imageUrl:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%203.58.50%E2%80%AFPM-4vTePXWawnebWsDqZSP5rz3JvsdoCC.png",
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "2",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "3",
            type: "video",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "4",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "5",
            type: "video",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "6",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "7",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "8",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
        {
            id: "9",
            type: "photo",
            imageUrl: faker.image.urlPicsumPhotos(),
            user: {
                name: "Ajay Mathew",
                avatar: faker.image.avatar(),
                description: "Description",
                timeAgo: "30mins ago",
            },
        },
    ]

    // More options menu
    const moreMenu = (
        <Menu>
            <Menu.Item key="1">Share</Menu.Item>
            <Menu.Item key="2">Download</Menu.Item>
            <Menu.Item key="3">Report</Menu.Item>
        </Menu>
    )

    // Tab style function
    const getTabStyle = (tab: string) => {
        return {
            padding: "8px 16px",
            cursor: "pointer",
            borderBottom: activeTab === tab ? "2px solid #1890ff" : "none",
            color: activeTab === tab ? "#1890ff" : "rgba(0, 0, 0, 0.65)",
            fontWeight: activeTab === tab ? "bold" : "normal",
        }
    }

    return (
        <Layout style={{ background: "#fff", padding: "20px" }}>
            <Content>
                {/* Navigation Tabs */}
                <div
                    style={{
                        display: "flex",
                        borderBottom: "1px solid #f0f0f0",
                        marginBottom: "20px",
                    }}
                >
                    <div style={getTabStyle("all")} onClick={() => setActiveTab("all")}>
                        All
                    </div>
                    <div style={getTabStyle("photos")} onClick={() => setActiveTab("photos")}>
                        Photos
                    </div>
                    <div style={getTabStyle("videos")} onClick={() => setActiveTab("videos")}>
                        Videos
                    </div>
                    <div style={getTabStyle("albums")} onClick={() => setActiveTab("albums")}>
                        Albums
                    </div>
                </div>

                {/* Media Grid */}
                <Row gutter={[16, 16]}>
                    {mediaItems.map((item) => (
                        <Col xs={24} sm={12} md={8} key={item.id}>
                            <Card
                                bodyStyle={{ padding: 0 }}
                                style={{
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                    position: "relative",
                                }}
                                cover={
                                    <div style={{ position: "relative", height: "200px" }}>
                                        <img
                                            alt="media"
                                            src={item.imageUrl || "/placeholder.svg"}
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        {item.type === "video" && (
                                            <PlayCircleFilled
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    fontSize: "48px",
                                                    color: "#fff",
                                                }}
                                            />
                                        )}
                                        <Dropdown overlay={moreMenu} trigger={["click"]} placement="bottomRight">
                                            <Button
                                                type="text"
                                                icon={<MoreOutlined />}
                                                style={{
                                                    position: "absolute",
                                                    top: "8px",
                                                    right: "8px",
                                                    background: "rgba(255, 255, 255, 0.8)",
                                                    borderRadius: "50%",
                                                    width: "32px",
                                                    height: "32px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            />
                                        </Dropdown>
                                    </div>
                                }
                            >
                                <div
                                    style={{
                                        padding: "12px",
                                        background: "rgba(255, 255, 255, 0.9)",
                                        position: "absolute",
                                        bottom: "0",
                                        left: "0",
                                        right: "0",
                                        borderRadius: "0 0 8px 8px",
                                    }}
                                >
                                    <Space>
                                        <Avatar src={item.user.avatar} size={24} />
                                        <div>
                                            <Text strong>{item.user.name}</Text>
                                            <div style={{ display: "flex", fontSize: "12px", color: "rgba(0, 0, 0, 0.45)" }}>
                                                <Text>{item.user.description}</Text>
                                                <Text style={{ margin: "0 4px" }}>·</Text>
                                                <Text>{item.user.timeAgo}</Text>
                                            </div>
                                        </div>
                                    </Space>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Content>
        </Layout>
    )
}

export default PhotoGallery

