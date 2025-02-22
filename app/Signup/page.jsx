"use client";

import { Button, Box, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleInfluencer = () => {
    router.push(`/RegisterasInfluenser`);
  };

  const handleBrand = () => {
    router.push('/RegisterasBrand');
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "32px",
          borderRadius: "16px",
          textAlign: "center",
          minWidth: "320px",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#333">
          Choose Your Role
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          Select whether you want to register as an influencer or a brand.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff7f50",
            "&:hover": { backgroundColor: "#ff6347" },
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            width: "100%",
            marginBottom: "12px",
          }}
          onClick={handleInfluencer}
        >
          Register as Influencer
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#ff7f50",
            borderColor: "#ff7f50",
            "&:hover": {
              backgroundColor: "#ff7f50",
              color: "#fff",
            },
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            width: "100%",
          }}
          onClick={handleBrand}
        >
          Register as Brand
        </Button>
      </Paper>
    </Box>
  );
}
