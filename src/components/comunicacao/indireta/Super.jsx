import React, { useState } from 'react';
import Sub from './Sub';

export default props => {

    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0)

    function quandoClicar(ValorGerado, texto) {
        setNum(ValorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}:{num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
}