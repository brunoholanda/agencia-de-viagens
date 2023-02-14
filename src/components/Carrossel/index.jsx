import styles from './Carrossel.module.scss';
import card1 from '../../public/assets/img/card1.png';
import card2 from '../../public/assets/img/card2.png';
import card3 from '../../public/assets/img/card3.png';
import esquerda from '../../public/assets/icons/esquerda.png';
import direita from '../../public/assets/icons/direita.png';
import { useRef } from 'react';

export default function Carrossel() {

    const carrossel = useRef(null);

    const handleLftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return (
        <section className={styles.carrossel}>
             <button onClick={handleLftClick}><img src={esquerda} alt="seta para a esquerda" /></button>
            <div className={styles.carrossel__imagens} ref={carrossel}>
                <div>
                    <img src={card1} alt="Resort Gali" />
                </div>
                <div>
                    <img src={card2} alt="Resort Gali" />
                </div>
                <div>
                    <img src={card3} alt="Resort Gali" />
                </div>
            </div>
            <button onClick={handleRightClick}><img src={direita} alt="seta para a direita" /></button>
        </section>
    )
}