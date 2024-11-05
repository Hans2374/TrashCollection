import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#214738',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                    },
                    /* For Firefox */
                    '*': {
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#214738 #f1f1f1',
                    },
                },
            },
        },
    },
});

export default theme;