import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Css/Landing_page.css";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  toolbar: {
    paddingBottom: theme.spacing(1),
    color: "#fff",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    marginLeft: "20%",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const ismobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const openMobileMenu = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };
  const handleMenuClose = () => {
    setMobileMenuAnchorEl(null);
    closeMobileMenu();
  };

  const MobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      id="mobilemenu"
      open={ismobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} onClick={handleMenuClose} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} onClick={handleMenuClose} to="/about">
        About
      </MenuItem>
      <MenuItem component={Link} onClick={handleMenuClose} to="/contact">
        Contact
      </MenuItem>
      <MenuItem component={Link} onClick={handleMenuClose} to="/disclaimer">
        Disclaimer
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={openMobileMenu}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className={classes.sectionMobile} />
          </IconButton>
          <div className={classes.sectionDesktop}>
            <Button
              className="btn-primary"
              color="inherit"
              type="button"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              className="btn-primary"
              color="inherit"
              component={Link}
              to="/about"
            >
              About
            </Button>
            <Button
              className="btn-primary"
              color="inherit"
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
            <Button
              className="btn-primary"
              color="inherit"
              component={Link}
              to="/disclaimer"
            >
              Disclaimer
            </Button>
          </div>
          <Typography className={classes.title} variant="h4">
            शेतकरी बाजारपेठ
          </Typography>
        </Toolbar>
      </AppBar>

      {MobileMenu}
    </div>
  );
}
