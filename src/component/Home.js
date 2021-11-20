import React from 'react';
import './Home.css';
import imghome from '../img/home.png'


function Home() {
    return (
        <div className="home">
            <div className="home__top">
                <div className="home__top--left">
                    <img src={imghome} alt="" />
                </div>
                <div className="home__top--right">
                    <h3>Welcome</h3>
                    <p>We are here with our brand new platform which will provide Dog Owner an opportunity to register their
                        dog and find the suitable activity and park for their dog to entertain them.
                        <br></br>
                        All Dog Owners and event organiser are welcome to get register
                        We are a New Zealand based and we have a dedicated support team please get in Touch with our team if you have any issue using the website!</p>
                </div>
            </div>
        </div>
    )
}

export default Home