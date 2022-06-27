import Topo from '../../componentes/Topo'
import SecaoBanner from '../../componentes/SecaoBanner'
import SecaoSabores from '../../componentes/SecaoSabores'
import SecaoEventos from '../../componentes/SecaoEventos'
import SecaoSobre from '../../componentes/SecaoSobre'
import Rodape from '../../componentes/Rodape'

export default function Home() {
    return(
      <div>
        <Topo />
        <SecaoBanner />
        <SecaoSabores />
        <SecaoEventos />
        <SecaoSobre />
        <Rodape />
      </div>
    )
  }