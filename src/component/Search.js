import NavProfile from "./NavProfile";
import React, {useEffect, useState} from "react";
import axiosInstance from "../Axios";
import PublicEvent_Details from "./PublicEvent_Details";
import LoadingComponent from "./Loading";
import Events from "./PublicEvent_Details";
import {useParams} from "react-router-dom";


const Search = (props) => {
	const EventLoading = LoadingComponent(Events);
	const { id } = useParams();

	const [appState, setAppState] = useState({
		loading: true,
		events: null,
		owner: null,
	});

	useEffect(() => {
		axiosInstance.get('/events/?'+ id).then((res) => {
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
	);}
export default Search;