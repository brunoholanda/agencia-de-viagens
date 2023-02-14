import styles from './Numeros.module.scss';

export default function Numeros() {
    return(
        <section className={styles.numeros}> 
            <div>
                <h2>+280</h2>
                <p>Pousadas Criadas</p>
            </div>
            <div>
                <h2>+2000</h2>
                <p>Clientes Satisfeitos</p>
            </div>
            <div>
                <h2>97%</h2>
                <p>Avaliações Positivas</p>
            </div>
        </section>
    )
}