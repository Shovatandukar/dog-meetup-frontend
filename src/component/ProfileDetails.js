import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import imgLogin from '../img/user.png'
import axiosInstance from "../Axios";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import GoogleMap from './GoogleMap';

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

const ProfileDetails = (props) => {
	const history = useHistory();
	let { profileDetails } = props;
	const classes = useStyles();
	async function deleteProfile(ownerId) {
    console.log(JSON.stringify(ownerId));
		axiosInstance
    	.get('auth/currentuser/'
		).then((res) =>{
			console.log(res.data)
			axiosInstance
        		.delete('auth/users/' + res.data.id +'/' );
			localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

	   }).then
		(
			history.push({
						pathname: '/Login/',
					})
		);
}
	if (!profileDetails || profileDetails.length === 0)
		profileDetails = ([{"user":"","address":"","phone":""}]);
	if(localStorage.getItem('access_token') == undefined || localStorage.getItem("access_token") == "")
	{
		history.push({
						pathname: '/Login/',
					});
	}
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{profileDetails.map((owner) => {
						return (
							<Grid item key={owner.id} xs={12} md={4}>
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
											User Name:  {owner.user}
										</Typography>
										<div>
											<Typography color="textSecondary">
												First Name:  {owner.first_name}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Last Name:  {owner.last_name}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Email:  {owner.email}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Address:  {owner.address}
											</Typography>
										</div>
										<div>
											<Typography color="textSecondary">
												Phone:  {owner.phone}
											</Typography>
										</div>
										<div>
											<Link
													color="textPrimary"
													href={'/ProfileEdit/' + owner.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													onClick={() => deleteProfile(owner.id)}
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
export default ProfileDetails;