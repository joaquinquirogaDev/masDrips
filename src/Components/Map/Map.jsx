import React from 'react'
import style from './Map.module.css'
export default function Map() {
    return (
        <div className={style.container}>
            <div className={style.box1}>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105074.75248565813!2d-58.500716083372474!3d-34.61462850065139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1670982395472!5m2!1ses!2sar"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

            <div className={style.box2}>
                <ul>
                    <li>
                        1
                    </li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>

    )
}