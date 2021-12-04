import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
        jimmy: {
            ansj: string
        }

    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
        jimmy: {
            ansj: string
        }
    }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
        color: theme.jimmy.ansj,
    },
}));

const theme = createTheme({
    status: {
        danger: '#9c27b0',
    },
    jimmy:{
        ansj: '#9c27b0'
    }
});

export default function CustomStyles() {
    return (
        <ThemeProvider theme={theme}>
            <CustomCheckbox defaultChecked />
        </ThemeProvider>
    );
}
