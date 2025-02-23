"use client";

import { Button, Grid, Typography, Box, IconButton } from "@mui/material";
import { Instagram, Twitter } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Quicksand:wght@300..700&family=Sigmar&family=Teko:wght@300..700&display=swap');
</style>


const HomePage = () => {
  const router = useRouter();

  const handleInfluencerForm = () => {
    router.push("/RegisterasInfluenser/InfluenserForm");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // ✅ Ensures full scrollable page
        // background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        background:"#12232E"

      }}
    >
      {/* 🔥 Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column", // ✅ Stack content
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Grid container spacing={4} alignItems="center" maxWidth="lg">
          {/* Left Side - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontFamily="Kanit" fontWeight="bold" color="white" gutterBottom>
              Join the Influencer Revolution
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.8)" paragraph>
              Connect with top brands, grow your audience, and unlock new opportunities.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor:"rgb(27, 43, 54)",
                "&:hover": { backgroundColor: "#4DA8DA" },
                padding: "12px 24px",
                fontSize: "1rem",
                marginRight: "16px",
                border:"solid 1px #4DA8DA"
              }}
              onClick={() => router.push("/Login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor:"rgb(27, 43, 54)" ,
                "&:hover": { backgroundColor: "#4DA8DA" },
                padding: "12px 24px",
                fontSize: "1rem",
                border:"solid 1px #4DA8DA"
              }}
              onClick={()=>router.push("/Signup")}
            >
              Register
            </Button>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              sx={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/image/influencer.jpg"
                alt="Influencer Marketing"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* 👇🔥 Additional Sections - Always Visible Below 👇 */}
      <Box
        sx={{
          backgroundColor: "rgb(21, 31, 37)",
          color: "white",
          padding: 6,
          textAlign: "center",
          width: "100%",
          mt: 8, // ✅ Ensures it's BELOW main content
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* About Us */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              We help influencers connect with brands and grow their audience.
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              Email: support@example.com
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              Phone: +123 456 7890
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Follow Us
            </Typography>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#ff7f50" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#1DA1F2" }}>
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
