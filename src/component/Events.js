import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import imgLogin from '../img/event.jfif'
import axiosInstance from "../Axios";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';

async function deleteDog(eventId) {
    console.log(JSON.stringify(eventId));
    axiosInstance
        .delete('events/' + eventId +'/'
        ).then((res) => {
        	console.log("Success");
        	window.location.reload(false);
    });
  }

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
}));

const Events = (props) => {
	const history = useHistory();
	const { events } = props;
	const classes = useStyles();
	if (!events || events.length === 0) return <p>Can not find any Events, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{events.map((event) => {
						console.log(event);
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
												Location:  {event.location}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Dog Type:  {event.dogType}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												eventDate:  {event.eventDate}
											</Typography>
										</div>
										<div>
											<Link
													color="textPrimary"
													href={'/EventEdit/' + event.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													onClick={() => deleteDog(event.id)}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Events;