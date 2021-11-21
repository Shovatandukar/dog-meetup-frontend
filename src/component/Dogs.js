import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import imgLogin from '../img/Login.jpg'
import axiosInstance from "../Axios";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';

async function deleteDog(dogId) {
    console.log(JSON.stringify(dogId));
    axiosInstance
        .delete('dogs/' + dogId +'/'
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

const Dogs = (props) => {
	const history = useHistory();
	const { dogs } = props;
	const classes = useStyles();
	if (!dogs || dogs.length === 0) return <p>Can not find any Dogs, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{dogs.map((dog) => {
						return (
							<Grid item key={dog.id} xs={12} md={4}>
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
											Dog Name:  {dog.name}
										</Typography>
										<div>
											<Typography color="textSecondary">
												Breed:  {dog.breed}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Weight:  {dog.weight}
											</Typography>
										</div>
										<div>
											<Link
													color="textPrimary"
													href={'/DogEdit/' + dog.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													onClick={() => deleteDog(dog.id)}
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
export default Dogs;