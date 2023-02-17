import styles from './Vantagens.module.scss';
import dinheiro from '../../public/assets/icons/dinheiro.png';
import utilizador from '../../public/assets/icons/utilizador.png';
import atendimento from '../../public/assets/icons/atendimento.png';
import local from '../../public/assets/icons/local.png';

export default function Vantagens() {
    return (
        <section className={styles.vantagens}>
            <div className={styles.vantagens__titulo}>
                <h1>Porque nos escolher? </h1>
            </div>
            <div className={styles.vantagens__card}>
                <img src={dinheiro} alt="icone bolsa de dinheiro" />
                <p>Preços acessíveis, sem abrir mão da qualidade dos serviços e comodidades oferecidos.</p>
            </div>
            <div className={styles.vantagens__card}>
                <img src={utilizador} alt="icone bolsa utilizador" />
                <p>Experiência única e memorável para os viajantes, através das nossas atividades, eventos e hospitalidade.</p>
            </div>
            <div className={styles.vantagens__card}>
                <img src={atendimento} alt="icone bolsa atendimento" />
                <p>Equipe altamente treinada e disponível para atender a qualquer necessidade ou dúvida dos clientes a qualquer momento.</p>
            </div>
            <div className={styles.vantagens__card}>
                <img src={local} alt="icone bolsa local" />
                <p>Localização privilegiada, próximas a pontos turísticos, a praias, montanhas, cidades históricas, entre outros.</p>
            </div>
        </section>
    )
}