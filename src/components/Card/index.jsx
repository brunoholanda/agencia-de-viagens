import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import cama from '../../public/assets/icons/cama.png';
import banheiro from '../../public/assets/icons/banheiros.png';
import pessoa from '../../public/assets/icons/pessoa.png';

export default function Card({ id, imagem, oferta, tipo, Valor, titulo, descricao, quartos, pessoas, banheiros }) {
    return (
        <div className={styles.card}>
            <Link className={styles.card__link} to={`${id}`}>
                <h3>{oferta}</h3>
                <h4>{tipo}</h4>
                <h2>R${Valor} /noite</h2>
                <img src={imagem} alt={titulo} className={styles.card__capa} />
                <div className={styles.card__descricao}>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                    <div className={styles.info}>
                        <div className={styles.info__elemento}>
                            <p>{quartos} Quartos</p>
                            <img src={cama} alt="icone de cama" />
                        </div>
                        <div className={styles.info__elemento}>
                            <p>{pessoas} Pessoas</p>
                            <img src={pessoa} alt="icone de pessoa" />
                        </div>
                        <div className={styles.info__elemento}>
                            <p>{banheiros} Banheiros</p>
                            <img src={banheiro} alt="icone de banheiro" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}