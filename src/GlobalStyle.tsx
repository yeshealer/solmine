import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
    color: string
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    body {
        margin: 0;
        font-family: 'Satoshi';
        background: ${({ color }) => color};
        display: flex;
        color: #e7e7e7;
        overflow-x: hidden;
    }
`

export default GlobalStyle