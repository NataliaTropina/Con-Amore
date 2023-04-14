import React from 'react';
import style from './Home.module.css';

function Home():JSX.Element {
    return (
        <div className={style.homeBigBox}>
           <div className={style.homeSmallBox}>
            <div className={style.textBox1}>
  Herzlich Willkommen in meiner Kindertagespflege in Neumünster!
            </div>
                <div className={style.textBox2}>Ich möchte Sie herzlich einladen, mich in meiner
                Kindertagespflege zu besuchen. Bitte vereinbaren Sie dafür zuvor einen Termin,
                 damit der Besuch in unseren Tagesablauf passt. Sie können mich dazu gerne anrufen
                  oder eine E-Mail schreiben ich melde mich daraufhin bei Ihnen.
                </div>
                <div className={style.textBox3}>
                    <span className={style.heading}>Öffnungszeiten</span>
                    <br />
                    <span>Mo-Fr von 7:30-15:00</span>
                    <br />
                    <span className={style.heading}>Kontakt</span>
                    <br />
                    <span>Webseite der Kindertagespflege <br />
                        Minu Soushgoo <br />
                        Holsatenring 39 <br />
                        24539 Neumünster <br />
                        Tel: 01521234789 <br />
                        E-Mail: frigominu2@gmail.com
                    </span>
                </div>

           </div>
        </div>
    );
}

export default Home;
