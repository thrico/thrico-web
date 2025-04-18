import React from "react";

import { Button, Card, Divider, Flex, List, Space, Typography } from "antd";




import SearchBar from "@/components/common/filter/Search";
import { FilterOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Search = () => {
  return (
    <Card
    >
      <List.Item.Meta

        title={<Title level={3} style={{ marginBottom: 8 }}>
          Discover. Connect. Belong
        </Title>}
        description={<Paragraph type="secondary" style={{ marginBottom: 16 }}>
          Discover new communities and make real connections
        </Paragraph>}
      />
      <Divider />

      <Flex gap={20} style={{ width: "60%" }} align="center" justify="space-between">
        <SearchBar />
        <Button icon={<FilterOutlined />} >Filter</Button>
      </Flex>
      <Space direction="vertical" style={{ marginTop: 20 }}>
        {/* <Filter /> */}


      </Space>
    </Card>
  );
};

export default Search;
