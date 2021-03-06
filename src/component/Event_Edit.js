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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop:3,
	},
	submit: {
		margin: 3,
	},
}));

export default function Event_Edit() {
	const history = useHistory();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		title: '',
		activity: '',
		location: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('events/' + id +'/').then((res) => {
			updateFormData({
				...formData,
				['title']: res.data.title,
				['activity']: res.data.activity,
				['location']: res.data.location,
				['dogType']: res.data.dogType,
			});
			getAddress(res.data.location,res.data.lat,res.data.long);
			//setDate(res.data.eventDate);
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const getAddress = (result, lat, lng, text) => {
    setAddress(result);
    setLat(lat);
    setLong(lng);
  };
	const [address, setAddress] = useState("");
  	const [lat, setLat] = useState(0);
  	const [lng, setLong] = useState(0);
  	const [date, setDate] = useState(new Date());

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put('events/' + id + '/', {
			title: formData.title,
			activity: formData.activity,
			location: address,
			lat: lat,
			lon : lng,
			eventDate: date,
			dogType: formData.dogType,
		}).then(
        (result) => {
         console.log(result);
          history.push({
				pathname: '/event/',
			});
        },
        (error) => {
          console.log(error.text);
        }
      );
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Event
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Event Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							 <label className="lblAddress">Event Date</label>
							<DatePicker label="Event Date:" selected={date} onChange={date => setDate(date)} />
						</Grid>
							<Grid item xs={12}>
							 <label className="lblAddress">Address</label>
							  <MapboxAutocomplete
								publicKey="pk.eyJ1Ijoic2hvdmExMjMiLCJhIjoiY2t3MXU0NWJpYXg0eTJ1cTF3MWc3ejViMSJ9.iZhvyK2TxZbdqSiJaWk3Mw"
								inputClass="form-control search"
								onSuggestionSelect={getAddress}
								country="nz"
								value={formData.location}
								resetSearch={false}
							  />
								<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="location"
								label="Address"
								name="location"
								autoComplete="location"
								value={formData.location}
								onChange={handleChange}
							/>
						</Grid>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="activity"
								label="Activity"
								name="activity"
								autoComplete="activity"
								value={formData.activity}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="dogType"
								label="Suitable For"
								name="dogType"
								autoComplete="dogType"
								value={formData.dogType}
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
						Update Event
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						href={'/Event'}
					>
						Cancel
					</Button>
				</form>
			</div>
		</Container>
	);
}