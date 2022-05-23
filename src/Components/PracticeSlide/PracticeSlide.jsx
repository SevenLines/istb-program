import React from 'react';
import './practiceslide.css';
import en from "../../assets/en.png";
import forus from "../../assets/forus.png";
import gaz from "../../assets/gaz.png";
import irkut from "../../assets/irkut.png";
import isp from "../../assets/isp.png";
import krok from "../../assets/krok.png";
import sber from "../../assets/sber.png";
import vds from "../../assets/vds.png";
import yan from "../../assets/yan.png";
import mts from "../../assets/mts.png";
import adikt from "../../assets/adikt.png";
import tele from "../../assets/tele.png";

function PracticeSlide() 
{
    let companies = [
        yan,
        vds,
        sber,
        krok,
        en,
        isp,
        irkut,
        gaz,
        forus,
        mts,
        tele,
        adikt,
    ]

    return (
        <section className="section work--practice--slide">
            <div className="wrapper container container-common">
                <div className="title--practice">
                    <h1>
                        Проходи практику у лучших партнеров нашего ВУЗа
                    </h1>
                </div>

                <div className=" row">
                    {
                        companies.map(x => (
                           <div className="col-4 col-lg-3">
                                <img className="company--logo" src={x}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PracticeSlide;