import React, {useState} from 'react';
import {useNavigate } from "react-router-dom";

const NewGift = () => {

    const navigate = useNavigate();

    const [name, setName]= useState('');
    const [description, setDescription]= useState('');
    const [url, setUrl]= useState('');
    const [price, setPrice]= useState('');
    const [owner, setOwner]= useState('');
    const [year, setYear]= useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        navigate('/MyGiftList');

        const gift = {name, description, url, price, owner, year};

        fetch('http://127.0.0.1:8000/api/gifts',{
            method:'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(gift)
        }).then(() => {
            console.log(gift);
        })
    }


    return (
        <div className="newGift">
            <h1>New Gift</h1>

            <form onSubmit={handleSubmit}>

                <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" type="text"/>
                    <br/>
                <input value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" type="text"/>
                    <br/>
                <input value={url}  onChange={(e) => setUrl(e.target.value)} className="form-control" placeholder="URL" type="text"/>
                    <br/>
                <input value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Price" type="text"/>
                    <br/>
                <input value={owner} onChange={(e) => setOwner(e.target.value)} className="form-control" placeholder="Owner" type="text"/>
                    <br/>
                <input value={year} onChange={(e) => setYear(e.target.valueAsNumber)} className="form-control" placeholder="Year" type="number" step="1" min="0"/>
                    <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewGift;