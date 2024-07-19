import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Box, Stack } from "@mui/material";
import { ClerkProvider } from "@clerk/nextjs";
import Siderbar from "../components/Siderbar/Siderbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
    <ClerkProvider>

        <body className={inter.className}>
          <Box display='flex' gap={6} p={4} width='100%' height='100%' justifyContent='space-between'>
            <Stack flex={1}  sx={{border:'2px solid #424242',borderRadius:'10px',bgcolor:'#212121'}}>
              <Siderbar></Siderbar>
            </Stack >
            <Stack flex={5} sx={{border:'2px solid #424242',borderRadius:'10px',bgcolor:'#212121'}}>
              <Box p={4} display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
              {children}
              </Box>
            </Stack>
          </Box>
        </body>
      </ClerkProvider>  

      </html>
  );
}