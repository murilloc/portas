import {useEffect, useState} from "react";
import {atualizarPortas, criarPortas} from "@/functions/portas";
import Porta from "@/components/Porta";
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link";
import {useRouter} from "next/router";
import PortaModel from "@/model/portaModel";

export default function TemPresente() {

    const [portas , setPortas] = useState([])

    const router = useRouter()

    useEffect(() => {
        if (router.query.portas && router.query.temPresente) {
            const portas = +router.query.portas
            const temPresente = +router.query.temPresente
            const novaPorta: PortaModel[] = criarPortas(portas, temPresente)
            // @ts-ignore
            setPortas(novaPorta)
        }
    }, [router?.query])


    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )

}