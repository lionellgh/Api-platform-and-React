import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import app from '../app.css';
import { Link } from "react-router-dom";
const MyGiftList = (props) => {

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


    return (

        <div className="container">
                <h1>{props.name}</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Url</th>
                        <th scope="col">Price</th>
                        <th scope="col">Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gift.map((gifts) => (
                        <tr key={gifts.id}>
                            <td>{gifts.name}</td>
                            <td>{gifts.description}</td>
                            <td>{gifts.url}</td>
                            <td>{gifts.price}</td>
                            <td>{gifts.year}</td>
                            <td>
                               <Link to={`/details/${gifts.id}`}>
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

export default MyGiftList;