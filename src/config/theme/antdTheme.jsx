import { theme } from "antd";
import appTheme from "./appTheme";

const {color} = appTheme

const antdTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: color.colorPrimary,
    colorInfo: color.colorInfo,
    colorLink: color.colorLink,
    colorBgBase: color.colorBgBase,
    colorTextBase: color.colorTextBase,
    colorError: color.colorError,
    colorSuccess: color.colorSuccess,
    borderRadius: 12,
    fontFamily: "Inter, 'Segoe UI', Arial, sans-serif",
  },
  components: {
    Button: { 
      controlHeight: 46,
      fontWeight: 700
    },
    Input: { controlHeight: 46 },
    Select: { controlHeight: 46 },
  },
}

export default antdTheme;