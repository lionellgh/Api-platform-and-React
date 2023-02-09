import React, {useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";

const DetailsOther = () => {

    const {id} = useParams();

    const [gift, setGift]= useState([]);

    const fetchData = () =>{
        return fetch(`http://127.0.0.1:8000/api/gifts`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data['hydra:member'][id-1]);
                setGift(data['hydra:member'][id-1]);
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
                    <tr>{gift.owner}</tr>
                    <tr>{gift.year}</tr>
                </tbody>
            </table>

            <div>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default DetailsOther;