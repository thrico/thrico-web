import {
  Button,
  Card,
  Flex,
  Image,
  Space,
  Spin,
  Tabs,
  Tag,
  Typography,
  theme,
} from "antd";
import React, { useCallback, useEffect } from "react";

import Info from "./Info/Details";

import { useParams } from "next/navigation";

import { CalendarEvent } from "../../../types/ts-types";
import { registerEvent } from "../../../graphql/actions/alumni";
import { getJobBySlug } from "../../../graphql/actions/jobs";
import { BiLocationPlus, BiMoneyWithdraw } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import ApplyJob from "./ApplyJob";

const JobDetails = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { slug } = useParams();
  const { data, loading, refetch } = getJobBySlug({
    variables: {
      input: {
        slug: slug,
      },
    },
  });

  const [register, { loading: btnLoading }] = registerEvent({
    onCompleted(data: any) {
      refetch();
    },
  });
  return (
    <>
      {loading && (
        <>
          <Spin />
        </>
      )}
      {!loading && (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card>
            <Flex style={{ width: "100%", gap: 30 }}>
              <Space direction="vertical">
                <Typography.Title>
                  {data?.getJobBySlug?.jobTitle}
                </Typography.Title>
                <Flex justify="center" align="center">
                  <Typography.Title style={{ marginRight: 10 }} level={3}>
                    {data?.getJobBySlug?.company}
                  </Typography.Title>
                  2 weeks ago · Over 100 applicants
                </Flex>

                <Flex>
                  <BiLocationPlus style={{ fontSize: 20, marginRight: 10 }} />
                  <Typography>{data?.getJobBySlug?.location}</Typography>
                </Flex>

                <Flex>
                  <MdWorkOutline style={{ fontSize: 20, marginRight: 10 }} />
                  <Typography>
                    <span style={{ textTransform: "capitalize" }}>
                      {data?.getJobBySlug?.workplaceType}{" "}
                    </span>
                  </Typography>
                </Flex>

                <Flex>
                  <FaLaptopHouse style={{ fontSize: 20, marginRight: 10 }} />
                  <Typography>
                    <span style={{ textTransform: "capitalize" }}>
                      {data?.getJobBySlug?.jobType}{" "}
                    </span>
                  </Typography>
                </Flex>

                <Flex>
                  <BiMoneyWithdraw style={{ fontSize: 20, marginRight: 10 }} />
                  <Typography>
                    <span style={{ textTransform: "capitalize" }}>
                      {data?.getJobBySlug?.salary}{" "}
                    </span>
                  </Typography>
                </Flex>
                <Space style={{ marginTop: 20 }}>
                  {data?.getJobBySlug?.tag?.map((set) => (
                    <Tag color={colorPrimary}>{set?.tag}</Tag>
                  ))}
                </Space>
                <Space style={{ marginTop: 20 }}>
                  <ApplyJob />

                  <Button>Save</Button>
                </Space>
              </Space>
            </Flex>
          </Card>
          <Info />
        </Space>
      )}
    </>
  );
};

export default JobDetails;
