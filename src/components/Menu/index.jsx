import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <div className={styles.menu}>
        <nav>
            <ul>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./">Pousadas</Link></li>
                <li><Link to="./">Quartos</Link></li>
                <li><Link to="./">Serviços</Link></li>
                <li><Link to="./">Sobre Nós</Link></li>
            </ul>
        </nav>
        </div>
    )
}