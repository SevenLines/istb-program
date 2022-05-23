import React from 'react';
import './homegameslide.css';
import hand from "../../../assets/hand.svg"
import all from "../../../assets/vector-all.svg";
import { useSpring, animated } from 'react-spring'
// подключение библиотек и картинок

function HomeGameSlide() {

    // для вращения лого
    const stickStyles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee', transform: `translate(0px, -30px)` },
            { opacity: 0, color: 'rgb(14,26,19)'},
        ],
        from: { opacity: 0, color: 'red', transform: `translate(0px, 0px)` },
    })

    let [logoClickCounter, setLogoClickCounter] = React.useState(0);

    // при двойном нажатии открывается ссылка 
    function onLogoClick () {
        setLogoClickCounter(logoClickCounter + 1);
        if (logoClickCounter >= 2) {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=OfficialRickAstley";
        }
    }

    //главный слайд 

    return (
        <>
            <div className="home-wrapper h-100" >

                <div className="wrapper h-100">
                    <div className="container container-common">
                        <header className="welcome--header"  onClick={() => onLogoClick()}>
                            <a className="welcome--logo--href" href="https://www.istu.edu/deyatelnost/obrazovanie/instituty/iit/"><span className="welcome--logo">ИИТИАД</span></a>  
                        </header>

                        <div className="text-end flex-grow-1  d-flex flex-column justify-content-center">
                            <div>
                                <span className="pre-title">поступай в Иркутский политех на<br/></span>
                                <span className="title">
                                    <span>Информаци<span className="d-md-none">-<br/>-</span>онные<br /></span>
                                    <span>системы и технологии<br /></span>
                                    <span> в админи<span className="d-md-none">-<br/>-</span>стративном<br /></span>
                                    <span>управлении</span>
                                    <small><br/>направление 09.03.02</small>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hand--icon--wrapper">
                        <animated.img style={stickStyles} className="hand--icon" src={hand}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeGameSlide;
