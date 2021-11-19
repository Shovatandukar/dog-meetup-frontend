import axiosInstance from "../Axios";
import ProfileDetails from './ProfileDetails'
import LoadingComponent from "./Loading";
import React, { useEffect, useState } from 'react';
import NavProfile from "./NavProfile"

function Profile() {

	console.log(localStorage.getItem('access_token'));
	const ProfileLoading = LoadingComponent(ProfileDetails);

	const [appState, setAppState] = useState({
		loading: true,
		details: null,
	});

	useEffect(() => {
		axiosInstance.get('/owners/filtered').then((res) => {
			const profileData = res.data;
			setAppState({loading: false, details: profileData});
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<NavProfile/>
			<h1>Profile</h1>
			<ProfileLoading isLoading={appState.loading} profileDetails={appState.details}/>
		</div>
	);
}
export default Profile;