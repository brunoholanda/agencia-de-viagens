import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import Menuu from 'components/Menuu';
import { Link } from 'react-router-dom';

export default function Cabecalho() {


    return (
        <header className={styles.cabecalho}>
            <Menuu />
            <div className={styles.cabecalho__logo}>
                <Link to="/">
                    <img src={logo} alt="logo da boom viagens" />
                </Link>
            </div>
        </header>
    );
}

