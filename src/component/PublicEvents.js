import axiosInstance from "../Axios";
import Events from './PublicEvent_Details'
import LoadingComponent from "./Loading";
import React, { useEffect, useState } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import Link from "@material-ui/core/Link";
import NavProfile from "./NavProfile";

function PublicEvent() {

	console.log(localStorage.getItem('access_token'));
	const EventLoading = LoadingComponent(Events);

	const [appState, setAppState] = useState({
		loading: true,
		events: null,
		owner: null,
	});

	useEffect(() => {
		axiosInstance.get('/events/').then((res) => {
			const allEvents = res.data;
			axiosInstance.get('/owners/filtered').then((res) => {
			const profileData = res.data;
			setAppState({loading: false, events: allEvents, owner: profileData});
			console.log(res.data);
			});
		});
	}, [setAppState]);
	return (
		<div className="App">
			<NavProfile />
			<h1>Events</h1>
			<EventLoading isLoading={appState.loading} events={appState.events} owners={appState.owner}/>
		</div>
	);
}
export default PublicEvent;