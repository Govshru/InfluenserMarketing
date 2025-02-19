"use client";

import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleInfluenser = () => {
    router.push(`/RegisterasInfluenser`);
  };

  const handleBrand=()=>{
    router.push('/RegisterasBrand');
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      <Typography variant="h5" fontWeight="bold">
        Choose Your Role
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ maxWidth: 300 }}
        onClick={handleInfluenser}
      >
        Register as Influencer
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        sx={{ maxWidth: 300 }}
        onClick={handleBrand}
      >
        Register as Brand
      </Button>
    </Box>
  );
}
