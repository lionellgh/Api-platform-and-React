import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import app from '../app.css';
import { Link } from "react-router-dom";

const Home = () => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const [gift, setGift]= useState([]);

    const fetchData = () => {
        return fetch("http://127.0.0.1:8000/api/gifts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data['hydra:member']);
                setGift(data['hydra:member']);
            });
    }

    useEffect(() => {
        fetchData();
    },[])


    const handleChange = event => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
    };


    return (
        <div className="container">
            <h1>All Gifts</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Buy</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Url</th>
                    <th scope="col">Price</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Year</th>
                </tr>
                </thead>
                <tbody>
                {gift.map((gifts) => (
                    <tr key={gifts.id}>
                        <input value={isSubscribed} onChange={handleChange} type="checkbox"/>
                        <td>{gifts.name}</td>
                        <td>{gifts.description}</td>
                        <td>{gifts.url}</td>
                        <td>{gifts.price}</td>
                        <td>{gifts.owner}</td>
                        <td>{gifts.year}</td>
                        <td>
                            <Link to={`/Other/${gifts.id}`}>
                                <button type="button" className="btn btn-primary">Details</button>
                            </Link>
                        </td>

                    </tr>

                ))}
                </tbody>
            </table>

        </div>
    );
};

export default Home;