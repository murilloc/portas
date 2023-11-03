import {useEffect, useState} from "react";
import {atualizarPortas, criarPortas} from "@/functions/portas";
import Porta from "@/components/Porta";
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link";
import {useRouter} from "next/router";
import PortaModel from "@/model/portaModel";

export default function TemPresente() {

    const router = useRouter()
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)


    useEffect(() => {
        if (router.query.portas && router.query.temPresente) {
            const portas = +router.query.portas
            const temPresente = +router.query.temPresente
            const novaPorta: PortaModel[] = criarPortas(portas, temPresente)
            // @ts-ignore
            setPortas(novaPorta)
        }
    }, [router?.query])

    useEffect(() => {
        if (router.query.portas && router.query.temPresente) {
            const portas = +router.query.portas
            const temPresente = +router.query.temPresente
            const qtdePortasValidas = portas >= 3 && portas <= 100
            const temPresenteValido = temPresente >= 1 && temPresente <= portas
            setValido(qtdePortasValidas && temPresenteValido)
        } else {
            setValido(false)
        }
    }, [portas])


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
                {valido && renderizarPortas() && portas.length > 0 ? renderizarPortas() : <h1>Valores Inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )

}