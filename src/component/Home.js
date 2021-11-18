import React from 'react';

function Home() {
    async function createLogin(userDetails) {
         return fetch('http://127.0.0.1:8000/api/v1/auth/register/', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(userDetails)
         })
}
    return (
        <h1>HOme</h1>
    )
}

export default Home