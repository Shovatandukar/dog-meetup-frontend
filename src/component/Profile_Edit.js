import React, { useState, useEffect } from 'react';
import axiosInstance from '../Axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import MapboxAutocomplete from "react-mapbox-autocomplete";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 2),
	},
}));

export default function Profile_Edit() {
	const history = useHistory();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		user: '',
		address: '',
		phone: '',
		first_name: '',
		last_name: '',
		email: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const getAddress = (result, lat, long, text) => {
    setAddress(result);
    setLat(lat);
    setLong(long);
  };
	const [address, setAddress] = useState("");
  	const [lat, setLat] = useState(0);
  	const [long, setLong] = useState(0);


	useEffect(() => {
		axiosInstance.get('owners/' + id +'/').then((res) => {
			updateFormData({
				...formData,
				['first_name']: res.data.first_name,
				['last_name']: res.data.last_name,
				['email']: res.data.email,
				['address']: res.data.address,
				['phone']: res.data.phone,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		console.log(id);

		if (id == null || id == 'undefined') {

			axiosInstance.post('owners/', {
				address: address,
				phone: formData.phone,
				first_name: formData.first_name,
				last_name : formData.last_name,
				email: formData.email,
				lat: lat,
				lon: long
			}).then(
				(result) => {
					console.log(result);
					history.push({
						pathname: '/Profile/',
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
		}

		else {

			axiosInstance.put('owners/' + id + '/', {
				user: formData.user,
				address: address,
				phone: formData.phone,
				first_name: formData.first_name,
				last_name: formData.last_name,
				email: formData.email,
				lat: lat,
				lon: long
			}).then(
				(result) => {
					console.log(result);
					history.push({
						pathname: '/Profile/',
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
		};
	}

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Profile
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="first_name"
								label="first_name"
								name="first_name"
								autoComplete="first_name"
								value={formData.first_name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="last_name"
								label="last_name"
								name="last_name"
								autoComplete="last_name"
								value={formData.last_name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="email"
								name="email"
								autoComplete="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							 <label className="lblAddress">Address</label>
							  <MapboxAutocomplete
								publicKey="pk.eyJ1Ijoic2hvdmExMjMiLCJhIjoiY2t3MXU0NWJpYXg0eTJ1cTF3MWc3ejViMSJ9.iZhvyK2TxZbdqSiJaWk3Mw"
								inputClass="form-control search"
								onSuggestionSelect={getAddress}
								country="nz"
								resetSearch={false}
							  />
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="address"
								label="address"
								name="address"
								autoComplete="address"
								value={formData.address}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="phone"
								label="phone"
								name="phone"
								autoComplete="phone"
								value={formData.phone}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Profile
					</Button>
				</form>
			</div>
		</Container>
	);
}