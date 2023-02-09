
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.js';
import MyGiftList from "./components/MyGiftList";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Routes, Link } from "react-router-dom";
import NewGift from "./components/NewGift";
import EditGift from "./components/EditGift";
import DetailsOther from './components/DetailsOther';

const App = () => {

    return (
        <div>
            <ul className="menu">
                <li><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/MyGiftList">My Gift List</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/NewGift">New Gift</Link></li>
            </ul>

            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="MyGiftList" element={<MyGiftList />}/>
                <Route path="details/:id" element={<Details />} />
                <Route path="NewGift" element={<NewGift/>}/>
                <Route path="EditGift/:id" element={<EditGift/>}/>
                <Route path="Other/:id" element={<DetailsOther/>}/>
            </Routes>
        </div>
    )

};


export default App;