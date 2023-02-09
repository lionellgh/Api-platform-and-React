import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";


const EditGift = () => {
    const {id} = useParams();

    const navigate = useNavigate();

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

    const EditSubmit = (e) =>{
        e.preventDefault();

        navigate('/MyGiftList');

        fetch(`http://127.0.0.1:8000/api/gifts/${id}`, {
            method:'PUT',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(gift)
        }).then(() =>{
            console.log(gift);
        })

    }

    return (
        <div className="editGift">
            <form onSubmit={EditSubmit}>

                <input value={gift.name} onChange={(e) => setGift({...gift, name: e.target.value,})} className="form-control" placeholder="Name" type="text"/>
                <br/>
                <input value={gift.description} onChange={(e) => setGift({...gift, description: e.target.value,})} className="form-control" placeholder="Description" type="text"/>
                <br/>
                <input value={gift.url} onChange={(e) => setGift({...gift, url: e.target.value,})}  className="form-control" placeholder="URL" type="text"/>
                <br/>
                <input value={gift.price} onChange={(e) => setGift({...gift, price: e.target.value,})} className="form-control" placeholder="Price" type="text"/>
                <br/>
                <input value={gift.year} onChange={(e) => setGift({...gift, year: e.target.valueAsNumber,})} className="form-control" placeholder="Year" type="number" step="1" min="0"/>
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditGift;