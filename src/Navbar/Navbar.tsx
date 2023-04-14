import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar():JSX.Element {
    const navigate = useNavigate();
    function handleHomeClick():void {
        navigate('/home');
    }

    function handleVorstellungClick():void {
        navigate('/vorstellung');
    }

    const handleRahmenbedunungenClick = ():void => {
        navigate('/rahmenbedinungen');
    };

    const handleSichercheitClick = ():void => {
        navigate('/sicherheit');
    };

    const handleTagesgeschehenClick = ():void => {
        navigate('/tagesgeschehen');
    };

    const handleBackClick = ():void => {
        navigate(-1);
    };

    return (

        <div className={style.navbar}>
            <div className={style.btnBox}>
                <button type="button" className={style.navbarBtn} onClick={handleHomeClick}>Home</button>
                <button type="button" className={style.navbarBtn} onClick={handleVorstellungClick}>Vorstellung</button>
                <button type="button" className={style.navbarBtn} onClick={handleRahmenbedunungenClick}>Rahmenbedinungen</button>
                <button type="button" className={style.navbarBtn} onClick={handleSichercheitClick}>Sicherheit & Hygiene</button>
                <button type="button" className={style.navbarBtn} onClick={handleTagesgeschehenClick}>Zum Tagesgeschehen</button>
                <button type="button" className={style.navbarBtn} onClick={handleBackClick}>👈back</button>
            </div>
            <div className={style.titleBox}>
                <h1 className={style.h1}>Con amore</h1>
                <h2 className={style.h2}>-Erziehung der italienischen Art-</h2>
            </div>
        </div>

    );
}

export default Navbar;
