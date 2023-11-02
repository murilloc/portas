import Porta from "../components/Porta";
import PortaModel from "../model/portaModel";
import {useState} from "react";
import {log} from "util";
import {atualizarPortas, criarPortas} from "@/functions/portas";

export default function Home() {

    const [portas, setPortas] = useState(criarPortas(4, 3))


    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }


    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {renderizarPortas()}
        </div>
    )
}
