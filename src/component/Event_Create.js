import React, { useState, useEffect } from 'react';
import axiosInstance from '../Axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Event_Create() {
	const history = useHistory();
	const initialFormData =({
		title: '',
		activity: '',
		location: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		if ([e.target.title] == 'title') {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		} else {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.post('events/', {
			title: formData.title,
			activity: formData.activity,
			location: formData.location,
		}).then(
        (result) => {
         console.log(result.text);
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
					Add New Event
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
							<TextField
								variant="outlined"
								required
								fullWidth
								id="activity"
								label="activity"
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
								id="location"
								label="location"
								name="location"
								autoComplete="location"
								value={formData.location}
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
						Create Event
					</Button>
				</form>
			</div>
		</Container>
	);
}