import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                color: 'gray.900',
            },
        }
    },
    components: {
        Button: {
            defaultProps:{
                colorScheme: 'blue',
            },
        },
    },
    colors: {
        blue: {
            400: '#1a58ff',
            500: "#003ee6",
            600: "#0030b4",
            700: "#002282",
            800: "#001551",
            900: "#000721",
        },
        gray: {
            900: "#18181B",
        }
    },
})

export default theme