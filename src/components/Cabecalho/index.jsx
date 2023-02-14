import Menu from 'components/Menu';
import { useState } from 'react';
import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import hamburguer from '../../public/assets/icons/menu.png';

export default function Cabecalho() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__menu}>
                <img
                    src={hamburguer}
                    alt="menu hamburguer icon"
                    onClick={() =>
                    setMenuOpen(!menuOpen)}>
                </img>
                {menuOpen && <Menu />}
            </div>
            <div className={styles.cabecalho__logo}>
                <img src={logo} alt="logo da boom viagens" />
            </div>
        </header>
    );
}

