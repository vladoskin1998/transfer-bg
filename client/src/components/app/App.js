import React from 'react'
import './../../styles/style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../main/main';
import NavBar from '../navbar/navbar';
import Transfer from '../transfer/transfer';
import TransferPopup from '../transfer/transfer-popup';

console.log(window.location);

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/transfer/popup" element={<TransferPopup />} />
            </Routes>

        </BrowserRouter>
    )
}


export default App
