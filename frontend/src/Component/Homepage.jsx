import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Css/Home.css";
import Footer from "./footer ";
import getUsers from "../Services/api";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
} from "@material-ui/core";

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

const AllUsers = () => {
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
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const loadUsers = async () => {
    const response = await getUsers();
   
    setUsers(response.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };
  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };
  const [searchTerm, setSearchTerm] = useState("");
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

          <div className="search-box">
            <div className="search-btn">
              <SearchOutlinedIcon className="search-ion" />
            </div>
            <input
              type="text"
              placeholder="शोधा(दिनांक,बाजारपेठ,शेतीमाल )"
              className="search-txt"
              onChange={(user) => {
                setSearchTerm(user.target.value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Container className="container" style={{ padding: "10px 15% 0 0" }}>
        <TableContainer component={Paper}>
          <Table className="table table-bordered">
            <TableHead className="thead-dark" style={{ fontWeight: "200" }}>
              <TableRow>
                <TableCell>दिनांक </TableCell>
                <TableCell sortable="false">बाजारपेठ </TableCell>
                <TableCell sortable="false">शेतीमाल </TableCell>
                <TableCell sortable="false">जात/प्रत </TableCell>
                <TableCell sortable="false">परिमाण </TableCell>
                <TableCell sortable="false">आवक </TableCell>
                <TableCell sortable="false">कमीत कमी </TableCell>
                <TableCell sortable="false">जास्तीत जास्त </TableCell>
                <TableCell sortable="false">सर्वसाधारण </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((value) => {
                  if (searchTerm === "") {
                    return value;
                  } else if (
                    value.shetimal
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    value.bajarpeth
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    value.date.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                  return false;
                })

                .map((user) => (
                  <TableRow>
                    <TableCell>{user.date}</TableCell>
                    <TableCell>{user.bajarpeth}</TableCell>
                    <TableCell>{user.shetimal}</TableCell>
                    <TableCell>{user.jat}</TableCell>
                    <TableCell>{user.pariman}</TableCell>
                    <TableCell>{user.aavak}</TableCell>
                    <TableCell>{user.kami}</TableCell>
                    <TableCell>{user.jast}</TableCell>
                    <TableCell>{user.sarvsatharan}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25, 50]}
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
        </TableContainer>
        <p>
          <b>
            महत्वाचे:-शेतीमाल घेऊन जाण्यापूर्वी संबंधित बाजार समितीत संपर्क करून
            दराची खात्री आवश्यक आहे.
          </b>
        </p>
      </Container>

      {MobileMenu}
      <Footer />
    </div>
  );
};
export default AllUsers;
