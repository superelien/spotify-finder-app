import React from 'react';
import logo from '../images/logo.png';

const Header = () => {

    return (
        <div className="row justify-content-around" >
            <div className="col-3" >
            <img src={logo} className="img-fluid" alt="drum" />
            </div>
            <div className="col-6 " >
                <h1> search your favorite music </h1>
                <small> by Supérelien and of course by : </small> 
                
                <a rel="noopener noreferrer" href="https://dev.to/myogeshchavan97/how-to-create-a-spotify-music-search-app-in-react-328m"> <small>Yogesh Chavan</small> </a>
            </div>
        </div>
    )
}

export default Header