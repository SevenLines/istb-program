import React from 'react';
import './workingslide.css';

function WorkingSlide() {
    let jobs = [
        "Разработчик ПО",
        "Web-разработчик",
        "1С-разработчик",
        "Web-аналитик",
        "UX-специалист",
        "Системный аналитик",
        "Data Engineer",
        "Data Scientist",
        "QA-специалист",
        "Менеджер ИТ-проектов",
        "Desktop-разработчик",
        "DevOps",
        "Android/iOS-разработчик",
        "VR-разработчик",
    ]

    return (
        <section className="section work--practice--slide">
            <div className="wrapper container container-common h-100">
                <div className="title--work text-start">
                        Кем можно работать
                </div>

                <div className="flex-grow-1">
                    {
                        jobs.map(x => (
                            <div className="row flex-nowrap align-items-center row--subject">
                                <div className="col-auto pe-0">
                                    <div className="object"></div>
                                </div>

                                <div className="col-auto pe-0">
                                    <div className="work--text">{x}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingSlide;