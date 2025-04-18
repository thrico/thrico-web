import {
  CalendarOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Flex,
  Image,
  Space,
  Tabs,
  Tag,
  Typography,
  theme,
} from "antd";
import React, { useCallback, useEffect } from "react";
import { FaLocationPinLock } from "react-icons/fa6";
import { PiTicketLight } from "react-icons/pi";
import Info from "./Info/Details";
import Speakers from "./speakers/Speakers";
import Agenda from "./agenda/Agenda";
import SponsorShip from "./sponsorShip/SponsorShip";

import { CiBookmark } from "react-icons/ci";
import WishListSvg from "../../svg/WishListSvg";
import { getEventBySlug } from "../../../graphql/actions/events";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import EditButton from "@repo/ui/EditButton";
import Edit from "./Edit";
import { CalendarEvent } from "../../../types/ts-types";
import AddToCalendarButtonTooltip from "../../calender/AddToCalender";
import { registerEvent } from "../../../graphql/actions/alumni";
import { BsTicketDetailedFill } from "react-icons/bs";
import DownloadPass from "./pass/Download";
import PaidEvents from "./PaidEvents/PaidEvent";

const tabBar = [
  {
    label: "About",
  },
  {
    label: "Discussion",
  },

  {
    label: "Agenda",
  },

  {
    label: "Speakers",
  },

  {
    label: "Attendees",
  },

  {
    label: "Sponsorship",
  },
];
const EventDetails = () => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  const [active, setActive] = React.useState("About");
  const { slug } = useParams();
  const { data, loading, refetch } = getEventBySlug({
    variables: {
      input: {
        slug: slug,
      },
    },
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const view = searchParams.get("view");

  useEffect(() => {
    if (view) {
      setActive(view);
    }
  }, [view]);

  const SAMPLE_CALENDAR_EVENT: CalendarEvent = {
    title: "Cem's birthday",
    description: "Please come to my BD",
    startDate: new Date("2020-08-26 17:00"),
    durationInMinutes: 120,
    address: "My Home",
  };
  const [register, { loading: btnLoading }] = registerEvent({
    onCompleted(data: any) {
      refetch();
    },
  });
  return (
    <>
      {loading && <></>}
      {!loading && (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card>
            <Flex style={{ width: "100%", gap: 30 }}>
              <Space style={{ position: "relative", width: "50%" }}>
                <Image
                  preview={false}
                  src={`https://cdn.thrico.network/${data?.getEventBySlug?.cover}`}
                  width={"100%"}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </Space>
              <Space direction="vertical">
                <Typography.Title>
                  {data?.getEventBySlug?.name}
                </Typography.Title>
                {data?.getEventBySlug?.eventStartTime && (
                  <Typography>
                    <CalendarOutlined /> {data?.getEventBySlug?.eventStartTime}{" "}
                    - {data?.getEventBySlug?.eventEndTime}
                  </Typography>
                )}

                {data?.getEventBySlug?.venue && (
                  <Typography>
                    <FaLocationPinLock /> Event Name
                  </Typography>
                )}

                {data?.getEventBySlug?.eventsPayments?.eventCost && (
                  <Typography>
                    <PiTicketLight style={{ fontSize: 15 }} />
                    <span
                      style={{ textTransform: "capitalize", marginLeft: 10 }}
                    >
                      {data?.getEventBySlug?.eventsPayments?.eventCost}
                    </span>
                  </Typography>
                )}

                <Typography>
                  <GlobalOutlined /> Event Name
                </Typography>
                <Typography>
                  <UserOutlined /> Event Name
                </Typography>

                <Space style={{ marginTop: 20 }}>
                  <Tag color={colorPrimary}>Paid</Tag>
                  <Tag color={colorPrimary}>Festival</Tag>
                  <Tag color={colorPrimary}>Music</Tag>
                </Space>
                <Space style={{ marginTop: 20 }}>
                  {data?.getEventBySlug?.isRegistered && (
                    <DownloadPass data={data?.getEventBySlug} />
                  )}
                  {!data?.getEventBySlug?.isRegistered && (
                    <>
                      {data?.getEventBySlug?.eventsPayments?.eventCost ===
                      "paid" ? (
                        <PaidEvents />
                      ) : (
                        <Button
                          onClick={() =>
                            register({
                              variables: {
                                input: {
                                  slug,
                                },
                              },
                            })
                          }
                          loading={btnLoading || loading}
                          type="primary"
                          icon={<CheckCircleOutlined />}
                        >
                          Going
                        </Button>
                      )}
                    </>
                  )}

                  <AddToCalendarButtonTooltip
                    calendarEvent={SAMPLE_CALENDAR_EVENT}
                  />
                </Space>
              </Space>
            </Flex>
            <Tabs
              style={{ marginTop: 30 }}
              activeKey={active}
              onChange={(key: string) => {
                setActive(key);
                router.push(pathname + "?" + createQueryString("view", key));
              }}
              items={tabBar.map((t, i) => {
                const id = String(i + 1);
                return {
                  key: t.label,
                  label: t.label,
                };
              })}
            />
          </Card>
          {active === "About" && <Info />}

          {active === "Speakers" && <Speakers />}
          {active === "Agenda" && <Agenda />}
          {active === "Sponsorship" && <SponsorShip />}
        </Space>
      )}
    </>
  );
};

export default EventDetails;
