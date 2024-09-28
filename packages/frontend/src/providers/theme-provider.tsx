'use client'

import React from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import {ThemeProvider as ProviderStyled} from 'styled-components';
import {ThemeProvider as MuiThemeProvider} from '@mui/material';
import { muiTheme, theme } from "@/styles/theme";
export function ThemeProvider({children}: {children: React.ReactNode}){
    return(
        <MuiThemeProvider theme={muiTheme}>
            <ProviderStyled theme={theme}>
                <GlobalStyle/>
                {children}
            </ProviderStyled>
        </MuiThemeProvider>
    )
}