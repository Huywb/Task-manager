import Image from "next/image";
import Content from "./components/Content/Content";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box p={4} display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
      <Content></Content>
    </Box>
  );
}
