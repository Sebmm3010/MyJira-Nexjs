import Head from "next/head"
import { Box } from "@mui/material"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui";

interface Props {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({ title='MyJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>

            <Navbar/>
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
