import './Rodape.css'

export default function Rodape() {
    return (
        <div>
            <section className="rodape">
                <div className='contatos limitar-secao'>
                    <img src="assets/logo.png" alt="logo-rodape"/>

                    <div>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campo, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>Tel: (11)3456-7890</p>
                    </div>
                    <div>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>

                <div className='assinatura'>
                    <p>Gelateria. Orgulhosamente desenvolvido por Alexandre</p>
                </div>
            </section>
        </div>
    )
}