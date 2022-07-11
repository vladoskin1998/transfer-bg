import React from 'react'
import './../../styles/style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../main/main';
import Price from '../price/price';
import NavBar from '../navbar/navbar';
import NavList from '../navbar/nav-list';
import Transfer from '../transfer/transfer';
import TransferPopup from '../transfer/transfer-popup';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/transfer/popup" element={<TransferPopup />} />
                <Route path="/price" element={<Price />} />
                <Route path="/mobile-menu" element={<NavList />} />
            </Routes>
            <Link to="navbar" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button className='up-button' variant="contained" >
                    <KeyboardArrowUpIcon />
                </Button>
            </Link>
        </BrowserRouter>
    )
}


export default App
