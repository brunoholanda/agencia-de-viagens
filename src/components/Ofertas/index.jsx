import Card from 'components/Card';
import { useEffect, useState } from 'react';
import styles from './Ofertas.module.scss';

export default function Ofertas() {

    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/agencia-viagens-api/ofertas')
            .then(resposta => resposta.json())
            .then(dados => {
                setOfertas(dados)
            })
    }, [])


    return (
        <section className={styles.ofertas}>
            <h1>Nossas ofertas</h1>
            {ofertas.map((ofertas) => {
                return <Card {...ofertas} key={ofertas.id} />
            })}

        </section>
    )
}