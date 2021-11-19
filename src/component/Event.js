import axiosInstance from "../Axios";
import Events from './Events'
import LoadingComponent from "./Loading";
import React, { useEffect, useState } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import Link from "@material-ui/core/Link";
import NavProfile from "./NavProfile";

function Event() {

	console.log(localStorage.getItem('access_token'));
	const DogLoading = LoadingComponent(Events);

	const [appState, setAppState] = useState({
		loading: true,
		events: null,
	});

	useEffect(() => {
		axiosInstance.get('/events/filtered').then((res) => {
			const allDogs = res.data;
			setAppState({loading: false, events: allDogs});
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<NavProfile />
			<h1>Events</h1>
			<Link
				color="textPrimary"
				href={'/EventCreate'}>
				<EditIcon></EditIcon>Add New Event
			</Link>

			<DogLoading isLoading={appState.loading} events={appState.events}/>
		</div>
	);
}
export default Event;