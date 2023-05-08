import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const fonts = {
    heading: `'Work Sans', sans-serif`,
    
};

const theme = extendTheme({ config, fonts });

export default theme;