import React from "react";
import  ReactDOM from "react-dom/client";
import {App} from './helloadso'

import './style.css'
import { Avatar } from "./FirsApp";
import { FirsApp } from "./profesorMateria";

import { Profesor } from "./profesorApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Avatar /> */}
        
        <Profesor/>
    </React.StrictMode>
)
