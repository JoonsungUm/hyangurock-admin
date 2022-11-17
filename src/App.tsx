import React from 'react'

import { Refine } from '@pankod/refine-core'
import {
    notificationProvider,
    RefineSnackbarProvider,
    CssBaseline,
    GlobalStyles,
    Layout,
    ThemeProvider,
    LightTheme,
    ReadyPage,
    ErrorComponent,
} from '@pankod/refine-mui'

import routerProvider from '@pankod/refine-react-router-v6'
import dataProvider from '@pankod/refine-airtable'

import { ProgramList, ProgramShow } from './pages/programs'

const API_TOKEN = process.env.REACT_APP_AIRTABLE_API_TOKEN || ''
const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID || ''
const TABLE_ID = process.env.REACT_APP_AIRTABLE_TABLE_ID || ''

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
            <RefineSnackbarProvider>
                <Refine
                    notificationProvider={notificationProvider}
                    Layout={Layout}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_TOKEN, BASE_ID)}
                    resources={[
                        {
                            name: TABLE_ID,
                            list: ProgramList,
                            show: ProgramShow,
                            options: { label: '프로그램', route: 'programs' },
                        },
                    ]}
                />
            </RefineSnackbarProvider>
        </ThemeProvider>
    )
}

export default App
