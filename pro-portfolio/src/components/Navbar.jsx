import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" className="bg-white shadow-md z-50">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-gray-800 font-bold">
          Ziyas Portfolio
        </Typography>
        <div className="space-x-4">
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
