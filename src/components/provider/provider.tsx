"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export const Provider: React.FC<IProps> = (props) => {
    const { children } = props;
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}