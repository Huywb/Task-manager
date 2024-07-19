import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function Page() {
  return (
  <Box display='flex' justifyContent='center' alignItems='center'>
    <SignIn />
  </Box>
  )
}