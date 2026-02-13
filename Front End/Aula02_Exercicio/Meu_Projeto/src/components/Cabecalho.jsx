import logoReact from '../assets/react.svg'

const Cabecalho = () => {
    return (
        <header>
        <img src={logoReact} alt="" />
        <div>
            <h1>SENAI - Desenvolvimento de Sistemas</h1>
            <p>Aulas Front-end</p>
        </div>
        <img src="https://sesisenaisp.zendesk.com/hc/theming_assets/01HZKNSQKYGMZYJKC2QCPSG5FA" alt="" />
        </header>
    )
}

export default Cabecalho