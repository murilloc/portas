import {Cartao} from "@/components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import {useState} from "react";

export default function Formulario() {

    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)

    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor={"#c0392c"}>
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica value={qtdePortas} text={"Qtde Portas"}
                                     onChange={novaQtde => setQtdePortas(novaQtde)}/>
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica value={comPresente}
                                     onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
                                     text={"Porta com Presente"}/>
                </Cartao>
                <Cartao bgcolor={"#28a085"}>
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>

        </div>
    )
}
