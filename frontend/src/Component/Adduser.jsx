import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { addUser } from "../Services/api";

const useStyle = makeStyles({
  Container: {
    width: "50%",
    margin: "5% 0 0 20%",
    "& > *": {
      marginTop: 20,
    },
  },
});
const initialvalues = {
  date: "",
  bajarpeth: "",
  shetimal: "",
  jat: "",
  pariman: "",
  aavak: "",
  kami: "",
  jast: "",
  sarvsatharan: "",
};
const AddUsers = ({ setLoginUser }) => {
  const [user, setuser] = useState(initialvalues);
  const {
    date,
    bajarpeth,
    shetimal,
    jat,
    pariman,
    aavak,
    kami,
    jast,
    sarvsatharan,
  } = user;
  const classes = useStyle();

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    alert("data save");
  };

  return (
    <FormGroup className={classes.Container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>दिनांक </InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
      </FormControl>
      <FormControl>
        <InputLabel>बाज़ारपेठ</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="bajarpeth"
          value={bajarpeth}
        />
      </FormControl>
      <FormControl>
        <InputLabel>शेतमाल</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="shetimal"
          value={shetimal}
        />
      </FormControl>
      <FormControl>
        <InputLabel>जात/प्रत</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="jat" value={jat} />
      </FormControl>
      <FormControl>
        <InputLabel>परिमाण</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pariman"
          value={pariman}
        />
      </FormControl>
      <FormControl>
        <InputLabel>आवक</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="aavak" value={aavak} />
      </FormControl>

      <FormControl>
        <InputLabel>कमीत कमी दर</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="kami" value={kami} />
      </FormControl>
      <FormControl>
        <InputLabel>जास्तीत कमी दर </InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="jast" value={jast} />
      </FormControl>
      <FormControl>
        <InputLabel>सर्वसाधारण दर</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="sarvsatharan"
          value={sarvsatharan}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetails()}
      >
        Add user
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setLoginUser({})}
      >
        LogOut
      </Button>
    </FormGroup>
  );
};

export default AddUsers;
