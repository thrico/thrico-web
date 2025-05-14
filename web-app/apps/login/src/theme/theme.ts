import { workSans } from "../../app/font";

const theme = {
  components: {
    wireframe: true,
    Button: {
      borderRadius: 7,
    },
    Input: {
      borderRadius: 7,
    },
  },
  token: {
    borderRadiusLG: 10,
    // Seed Token
    colorPrimary: "#013DC4",
    borderRadius: 2,
    fontSize: 14,
    fontFamily: `${workSans} sans-serif`,
    // Alias Token
    colorBgContainer: "#ffffff",
    borderRadiusSM: 10,
    headerFontSize: 1000,
  },
};

export default theme;
