import { Space, Tabs, TabsProps } from "antd";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import StickyBox from "react-sticky-box";
import { groupProps } from "../ts-type";
const GroupTab = ({ data }: any) => {
  const { isGroupAdmin } = data;
  const path = usePathname();
  const { slug } = useParams();
  const itemsAdmin = [
    {
      label: "Discussion",
      key: "",
    },

    {
      label: "Featured",
      key: "featured",
    },

    {
      label: "Media",
      key: "media",
    },

    {
      label: "Events",
      key: "events",
    },
    {
      label: "People",
      key: "people",
    },
    {
      label: "Settings",
      key: "settings",
    },
  ];

  const itemsNonAdmin = [
    {
      label: "Discussion",
      key: "",
    },

    {
      label: "Featured",
      key: "featured",
    },

    {
      label: "Media",
      key: "media",
    },

    {
      label: "Events",
      key: "events",
    },
    {
      label: "People",
      key: "people",
    },
  ];

  const router = useRouter();
  const pathName = path.replace(`/communities/${slug}/`, "");
  const onChange = (key: string) => {
    if (key === "") router.push(`/communities/${slug}`);
    else router.push(`/communities/${slug}/${key}`);
  };
  const renderTabBar: TabsProps["renderTabBar"] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} />
    </StickyBox>
  );

  return (
    <Space style={{ height: 300, width: 200, position: "sticky", top: 20 }}>
      <Tabs
        onChange={onChange}
        defaultActiveKey={pathName}
        tabPosition={"left"}
        renderTabBar={renderTabBar}
        items={isGroupAdmin ? itemsAdmin : itemsNonAdmin}
      />
    </Space>
  );
};

export default GroupTab;
