"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

const routes = [
  {
    route: "Home",
    pathName: "/home",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/category",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Post",
    pathName: "/post",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo"></Image>
          <Box className="w-full text-center">
            {routes.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>

          <Box>
            <Stack direction='row' sx={{'& svg': {
                color:'white'
            }}}>
              <IconButton>
                <FacebookIcon></FacebookIcon>
              </IconButton>
              <IconButton>
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
              <IconButton>
                <WhatsAppIcon></WhatsAppIcon>
              </IconButton>
              <IconButton>
                <TwitterIcon></TwitterIcon>
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
