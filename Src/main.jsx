import React from 'react'
import ReactDOM from 'react-dom/client'
import Detalhe from './Detalhe/Detalhe.jsx'

import {Routes,Route, BrowserRouter} from "react-router-dom";

import ToListen from './To listen/ToListen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<ToListen />}></Route>
            <Route path = '/detalhe/:id' element = {<Detalhe />}></Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)