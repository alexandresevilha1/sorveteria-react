import './SecaoProdutos.css'

export default function SecaoProdutos() {
    return (
        <div>
            <section className="produtos limitar-secao">

                    <h1>SABORES DE SORVETE</h1>

                    <div className="cards">

                        <div>
                            <img src="assets/sabor-oreo.png" alt="oreo"/>
                            <h1>Sorvete de Oreo</h1>
                            <p>Delicioso sorvete sabor Oreo.</p>
                            <p>Uma explosão de sabor.</p>
                        </div>
                        <div>
                            <img src="assets/sabor-pistache.png" alt="pistache"/>
                            <h1>Sorvete de Pistache</h1>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de sementes.</p>     
                        </div>
                        <div>
                            <img src="assets/sabor-cookies-avela.png" alt="cookies e avelã"/>
                            <h1>Sorvete de Cookies e Avelâ</h1>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
                        </div>
                        <div>
                            <img src="assets/sorbet-kiwi.png" alt="kiwi"/>
                            <h1>Sorvete de Kiwi</h1>
                            <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                        </div>
                        <div>
                            <img src="assets/sorbet-morango.png" alt="morango"/>
                            <h1>Sorvete de Morango</h1>
                            <p>Sorvete de morango gourmet.</p>
                            <p>Tradicional e Saboroso.</p>
                        </div>
                        <div>
                            <img src="assets/sorbet-limao.png" alt="limao Siciliano"/>
                            <h1>Sorvete de Limão Siciliano</h1>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>

                    </div>
            </section>
        </div>
    )
}