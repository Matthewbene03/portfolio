import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        margin: 0;
        background-color: white;
    }

    h1, h2, h3{
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: bold;
        font-style: normal;
    }
    
    a, p{
        font-family: "Funnel Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        text-decoration: none;
    }

    .menu-dropdown .ant-dropdown-menu {
        min-width: 186px;
        padding: 6px;
        background-color: #ffffff;
        border-radius: 0 0 8px 8px;
    }

    .menu-dropdown .ant-dropdown-menu-item {
        padding: 10px;
        color: #111;
        font-size: 14px;
    }

    .menu-dropdown .ant-dropdown-menu-item:hover {
        background-color: #eeeeee;
        color: #ff0000;
    }
`;