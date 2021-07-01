import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default props =>

    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#11 - Mega" color="#73503c">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#293E6a">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#9c0f5f">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#008bba">
                <Pai></Pai>
            </Card>
            <Card titulo="#06 - Condicional com If" color="#FA6900">
                <CondicionalComIf numero={7}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional 1" color="#E94c6f">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#008bba">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#d96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Paramentro" color="#ff85cb">
                <ComParamentro titulo="Esse é o titulo"
                    subtitulo="Esse é o subtitulo" />
                <ComParamentro titulo="Opa"
                    subtitulo="E" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#92b064">
                <Primeiro />
            </Card>


        </div>
    </div>