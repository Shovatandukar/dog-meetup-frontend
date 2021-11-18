import React, { useState } from "react";
import "./Register.css";
import imgRegister from "../img/About.jpg";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import axiosInstance from "../Axios";
import { useHistory } from 'react-router-dom';
//import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import validator from "validator";

function Register() {
  const history = useHistory();

  async function registerUser(userDetails) {
    console.log(JSON.stringify(userDetails));
    axiosInstance
        .post('auth/register/', JSON.stringify(userDetails)
        ).then((res) => {
      history.push('./login')
    });
  }

  const getAddress = (result, lat, lng, text) => {
    setAddress(result);
    setLat(lat);
    setLong(lng);
  };
  //local state
  const [username, setUsername] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");

  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setUsernameError(true);
      setUsernameErrorMessage("Please fill in this field.");
    } else if (first_name === "") {
      setFirstNameError(true);
      setFirstNameErrorMessage("Please fill in this field.");
    } else if (last_name === "") {
      setLastNameError(true);
      setLastNameErrorMessage("Please fill in this field.");
    } else if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Please fill in this field.");
    } else if (!validator.isEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Email is not valid");
    } else if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Please fill in this field.");
    } else if (password2 === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Please fill in this field.");
    } else if (password !== password2) {
      alert("Passwords don't match");
    } else {
      registerUser({
        username,
        first_name,
        last_name,
        email,
        password,
        password2
      }).then(r => "success")
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container--left">
          <img src={imgRegister} alt="" />
        </div>
        <div className="register__container--right">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h3>Create Account</h3>
            <div className="ownerDetails">
              <h4>Owner Details</h4>
              <TextField
                className="TextField"
                error={usernameError}
                fullWidth
                helperText={usernameErrorMessage}
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setUsernameError(false), setUsernameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={firstNameError}
                fullWidth
                helperText={firstNameErrorMessage}
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setFirstNameError(false), setFirstNameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={lastNameError}
                fullWidth
                helperText={lastNameErrorMessage}
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setLastNameError(false), setLastNameErrorMessage("")
                )}
              />

              <TextField
                className="TextField"
                error={emailError}
                fullWidth
                helperText={emailErrorMessage}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                value={email}
                variant="outlined"
                onKeyPress={() =>
                  validator.isEmail(email)
                    ? setEmailErrorMessage("")
                    : setEmailErrorMessage("Not a valid email!")
                }
                onFocus={() => (setEmailError(false), setEmailErrorMessage(""))}
              />
              <TextField
                className="TextField"
                error={passwordError}
                fullWidth
                helperText={passwordErrorMessage}
                label="Password"
                minLength="5"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                variant="outlined"
                onFocus={() => (
                  setPasswordError(false), setPasswordErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={confirmPasswordError}
                fullWidth
                helperText={confirmPasswordErrorMessage}
                label="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                type="password"
                variant="outlined"
                onFocus={() => (
                  setConfirmPasswordError(false),
                  setConfirmPasswordErrorMessage("")
                )}
              />
              <label className="lblAddress">Address</label>

              <MapboxAutocomplete
                publicKey="pk.eyJ1Ijoic2hvdmExMjMiLCJhIjoiY2t3MXU0NWJpYXg0eTJ1cTF3MWc3ejViMSJ9.iZhvyK2TxZbdqSiJaWk3Mw"
                inputClass="form-control search"
                onSuggestionSelect={getAddress}
                country="nz"
                resetSearch={false}
              />

              <button type="submit">
                {
                  "Sign up"
                }
              </button>

            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Register;