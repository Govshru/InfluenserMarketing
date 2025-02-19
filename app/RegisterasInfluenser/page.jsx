"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";

export default function InfluencerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    instagramId: "",
    number: "",
    followers: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
    // Handle registration logic here (e.g., send data to API)
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f4f4"
    >
      <Paper elevation={3} sx={{ p: 4, width: 350, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Register as Influencer
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="User ID"
            name="userId"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.userId}
            onChange={handleChange}
            required
          />
          <TextField
            label="Instagram ID"
            name="instagramId"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.instagramId}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="number"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <TextField
            label="Instagram Followers"
            name="followers"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.followers}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already registered?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push("/Login")}
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
