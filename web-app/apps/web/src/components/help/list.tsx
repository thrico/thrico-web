import { FaBug } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from "antd";
export const data = [
  {
    title: "Bug",
    description: "Report a problem on the website.",
    svg: <FaBug />,
    button: (
      <Button href="/help/report?value=Bug" type="primary">
        Get Started
      </Button>
    ),
  },
  {
    title: "Typo or mistake",
    description: "Report a typo or mistake in the Website.",
    svg: "🤦🏻‍♂️",
    button: (
      <Button href="/help/report?value=Typo or mistake" type="primary">
        Get Started
      </Button>
    ),
  },
  {
    title: "Suggestions",
    description: "Suggest a new page, section, or edit for an existing page.",
    svg: <IoDocumentTextOutline />,
    button: (
      <Button href="/help/report?value=Suggestions" type="primary">
        Get Started
      </Button>
    ),
  },
  //   {
  //     title: "Questions and Help",
  //     description: "Suggest a new page, section, or edit for an existing page.",
  //     svg: <IoDocumentTextOutline />,
  //     button: <Button type="primary">Get Started</Button>,
  //   },
];
