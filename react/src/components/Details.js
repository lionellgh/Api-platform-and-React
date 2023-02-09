import React, {useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";

const Details = () => {
    const {id} = useParams();

    const [gift, setGift]= useState([]);

    const fetchData = () =>{
        return fetch(`http://127.0.0.1:8000/api/gifts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setGift(data);
            });
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className="details">
            <h1>Details</h1>
            <table className="table">
                <tbody>
                    <tr>{gift.name}</tr>
                    <tr>{gift.description}</tr>
                    <tr>{gift.url}</tr>
                    <tr>{gift.price}</tr>
                    <tr>{gift.year}</tr>
                </tbody>
            </table>

            <div>
                <Link to="/MyGiftList">Back</Link>

                <Link to ={`/EditGift/${gift.id}`}>Edit</Link>
            </div>
        </div>
    );
};

export default Details;