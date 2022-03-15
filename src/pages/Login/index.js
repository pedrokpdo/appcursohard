import React from "react";

import { Container } from '../../styles/GlobalStyled'
import { Title, Paragrafo } from './styled'
export default function Login() {
    return (<>
        <Container>
            <Title >Login <small>Oie</small></Title>
            <Paragrafo>lorem5</Paragrafo>
            <button title="button">enviar</button>
        </Container>

    </>
    )
}