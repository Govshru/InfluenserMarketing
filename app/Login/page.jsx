"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);
    console.log("Password:", password);
    // Handle login logic here (e.g., send data to API)
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="User ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push("/Signup")}
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
