import React from "react";
import { Link } from "react-router-dom";
import s from "../Contact/Contact.module.css";
import Nav from "../NavBar/Nav.jsx";


export default function About(){


    return(
        <div className={s.container}>
            
            <div className={s.contact} >
                <h3>COMO CONTACTARNOS:</h3>
                <span>
                Calle: Provincia de Mendoza 128
                3° piso Hospital Néstor Kirchner
                Ciudad: San Miguel de Tucumán
                Provincia: Tucumán
                C.P: 4000
                País: Argentina
                E-Mail: fundacionfedeh@yahoo.com.ar
                </span>
                </div>
        </div>
    )
}
