import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import imgLogin from '../img/event.jfif'
import axiosInstance from "../Axios";
import Link from '@material-ui/core/Link';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";
import LoadingComponent from "./Loading";

async function subscribe(event) {
    console.log(JSON.stringify(event));
    let attendees = "";
    if(event.attendees) {
		let goingArray = event.attendees.split(',');
		const index = goingArray.indexOf(localStorage.getItem('current_user'));
		if (index > -1) {
			goingArray.splice(index, 1);
			attendees = goingArray.toString();
			console.log(attendees);
		} else {
			goingArray.push(localStorage.getItem('current_user'))
			attendees = goingArray.toString();
		}
	}else
	{
		attendees = localStorage.getItem('current_user');
	}

    axiosInstance
	    .put('events/UpdateEvent/' + event.id +'/',
			{
				attendees : attendees ? attendees : ""
			}
       ).then((res) => {
        	console.log("Success");
      	window.location.reload(false);
    });
  }

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
}));


const PublicEvent_Details = (props) => {
	const history = useHistory();
	const { events, owners } = props;
	const classes = useStyles();
	console.log("+++++++++++++++")
	console.log(owners);

	if (!events || events.length === 0) return <p>Can not find any Events, sorry</p>;

	const MapLoading = LoadingComponent(GoogleMap);


	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">

					{events.results.map((event) => {
						return (
							<Grid item key={event.id} xs={12} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={imgLogin}
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
										>
											Event Title:  {event.title}
										</Typography>
										<div>
											<Typography color="textSecondary">
												Activity:  {event.activity}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Suitable For:  {event.dogType}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												location:  {event.location}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												location:  {event.eventDate}
											</Typography>
										</div>

										<div>
												<button className={'joinButton'}
													onClick={() => subscribe(event)}
												>Join
												</button>
											<div>
											<Typography color="textSecondary">
												Attendees:  {event.attendees }
											</Typography>
										</div>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
			<GoogleMap events={events}  owner ={owners} />
		</React.Fragment>

	);

};
export default PublicEvent_Details;