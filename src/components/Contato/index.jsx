import CampoTexto from 'components/CampoTexto';
import styles from './Contato.module.scss';

export default function Contato() {
    return (
        <section className={styles.contato}>
            <div className={styles.contato__formas}>
                <h2>Contatos</h2>
                <p>+55 (99) 9.9999-9999</p>
                <p>Seuemail@email.com</p>
                <p>Sua localização, 485</p>
            </div>
            <form className={styles.contato__formulario}>
                <h2>Cadastre-se para Novidades</h2>
                <CampoTexto 
                    
                />
                <CampoTexto />
            </form>
        </section>
    )
}