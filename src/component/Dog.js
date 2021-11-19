import axiosInstance from "../Axios";
import Dogs from './Dogs'
import LoadingComponent from "./Loading";
import React, { useEffect, useState } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import Link from "@material-ui/core/Link";

function Dog() {

	console.log(localStorage.getItem('access_token'));
	const DogLoading = LoadingComponent(Dogs);

	const [appState, setAppState] = useState({
		loading: true,
		dogs: null,
	});

	useEffect(() => {
		axiosInstance.get('/dogs/filtered').then((res) => {
			const allDogs = res.data;
			setAppState({loading: false, dogs: allDogs});
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Dogs</h1>
			<Link
				color="textPrimary"
				href={'/DogCreate'}>
				<EditIcon></EditIcon>Add New Dog
			</Link>

			<DogLoading isLoading={appState.loading} dogs={appState.dogs}/>
		</div>
	);
}
export default Dog;