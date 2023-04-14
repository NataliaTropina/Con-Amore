import React from 'react';
import style from './Footer.module.css';

function Footer():JSX.Element {
    return (
        <div className={style.footerBigBox}>
            <div className={style.footerSmallBox1}>
            Kindertagespflege „Con Amore“
            -Erziehung der italienischen Art-
            Minú Soushgoo <br />
            Christianstr. 6 <br />
            24534 Neumünster <br />
            email: frigominu2@gmail.com
            </div>

            <div className={style.footerSmallBox2} />
            <iframe
              className={style.map}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.944866376816!2d9.980577689643724!3d54.07472110162736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b24bc621ab8e63%3A0x7b61307c0690d40c!2sChristianstra%C3%9Fe%206%2C%2024534%20Neum%C3%BCnster!5e0!3m2!1sde!2sde!4v1681482910812!5m2!1sde!2sde"
             /*  allowFullScreen="" */
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default Footer;
