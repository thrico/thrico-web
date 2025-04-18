"use client"

import { useState } from "react"
import { Card, Tabs } from "antd"
import UserManagement from "./user-management"
import CustomizeCommunity from "./customize-community"
import ManageNotifications from "./manage-notifications"
import ManageDiscussions from "./manage-discussions"
import Rules from "./rules"


export default function Home() {
    const [activeTab, setActiveTab] = useState("1")

    const items = [
        {
            key: "1",
            label: "User Management",
            children: <UserManagement />,
        },
        {
            key: "2",
            label: "Customize Community",
            children: <CustomizeCommunity />,
        },
        {
            key: "3",
            label: "Manage Notifications",
            children: <ManageNotifications />,
        },
        {
            key: "4",
            label: "Manage Discussions",
            children: <ManageDiscussions />,
        },
        {
            key: "5",
            label: "Rules",
            children: <Rules />,
        },
    ]

    return (
        <Card>
            <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} size="large" />
        </Card>
    )
}

