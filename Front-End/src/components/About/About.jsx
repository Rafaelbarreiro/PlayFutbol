import React from "react";
import { Link } from "react-router-dom";
import s from "../About/About.module.css";
import Nav from "../NavBar/Nav.jsx";
import founder from "../../Images/founder.png"

export default function About(){


    return(
        <div className={s.main}>
            
            <did className={s.header}>
                <h3 className={s.textHeader} >FEDEH (Fundación para el Estudio y tratamiento de las Enfermedades Hemato-oncológicas)</h3>
            </did>
            <div>
                <img src={founder} alt="Img not found" className={s.img} />
                <div className={s.about} >
                <span className={s.textAbout} > FEDEH es una organización de bien público sin fines de lucro, que inicia sus actividades en la provincia de Tucumán con el compromiso de colaborar en la articulación del Estudio y lucha De las Enfermedades Hematooncológicas, a través de la generación en la provincia de un centro de atención integral del paciente y su familia, con proyección y extensión a la comunidad.</span>
                <h3>HAGAMOS LATIR OTROS CORAZONES.</h3>
                <span>
                Seamos partícipes de la transformación del tradicional modelo de reposición de sangre, hacia el nuevo modelo de donación VOLUNTARIA, RESPONSABLE Y GRATUITA.
                Seamos solidarios sabiendo que:
                * Se puede donar sangre por lo menos 3 veces al año.
                * Donar sangre no genera daños al organismo ni contagia enfermedades.
                </span>
                </div>
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

        </div>
    )
}