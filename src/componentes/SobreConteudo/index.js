import './SobreConteudo.css'

export default function SobreConteudo() {
    return (
        <div>
            <section className="sobre-conteudo">

                <div className='conteudo'>
                    <h1>Sobre Nós</h1>
                    <h2>Nós simplesmente amamos sorvete!</h2>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com a smelhores matérias-primas para a produção final do sorvete. Vendemos tanto para o varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou velar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>

                <div className='banner-sobre-2'>
                    <img src="assets/sobre-image.jpg" alt="sobre"/>
                    <img src="assets/sorveteria.jpg" alt="sorveteria"/>
                </div>
            </section>
        </div>
    )
}