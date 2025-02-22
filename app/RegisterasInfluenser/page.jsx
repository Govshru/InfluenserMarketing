"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";
import { toast } from "react-toastify";
import { registerInfluencer } from "../actions/registerInfluenser";

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

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    const response = await registerInfluencer(formData); // ✅ Call the function

    if (response.success) {
      toast.success("Registration Successful!");
      setTimeout(() => {
        router.push("/RegisterasInfluenser/InfluenserForm");
      }, 2000);
    } else {
      toast.error(`Error: ${response.error}`);
    }

    setLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f4f4f4">
      <Paper elevation={3} sx={{ p: 4, width: 350, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Register as Influencer
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth margin="normal" value={formData.name} onChange={handleChange} required />
          <TextField label="User ID" name="userId" fullWidth margin="normal" value={formData.userId} onChange={handleChange} required />
          <TextField label="Instagram ID" name="instagramId" fullWidth margin="normal" value={formData.instagramId} onChange={handleChange} required />
          <TextField label="Phone Number" name="number"  fullWidth margin="normal" value={formData.number} onChange={handleChange} required />
          <TextField label="Instagram Followers" name="followers"  fullWidth margin="normal" value={formData.followers} onChange={handleChange} required />
          <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} required />
          <TextField label="Confirm Password" name="confirmPassword"  fullWidth margin="normal" value={formData.confirmPassword} onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already registered?{" "}
          <Link component="button" variant="body2" onClick={() => router.push("/Login")} sx={{ cursor: "pointer", fontWeight: "bold" }}>
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
