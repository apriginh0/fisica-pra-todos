import './MFstyle.css';

const MF = () => {
  return (
    <div className="Geral" >
        <p className="p1" >
          <strong>MECÂNICA DOS FLUIDOS</strong>
        </p>
        <p>A Mecânica dos Fluidos é a ciência que estuda o comportamento físico
dos fluidos, assim como as leis que o regem. As bases lançadas pela mecânica
dos fluidos são fundamentais para muitos ramos de aplicação da engenharia.</p>
<p>Um fluido pode ser definido como uma substância que se deforma continuamente quando são aplicadas tensões tangenciais, por mais pequenas que
sejam, ou uma força externa. </p>
        <p>Densidade:</p>
        <p>Massa volumétrica ou massa específica,  é definida como o quociente entre massa e volume de um corpo.</p>
        <div>
        <img src="https://static.biologianet.com/conteudo/images/2014/09/formula-da-densidade.jpg" alt="d=m/v" />
        </div>
        <div>
        <img src="https://vaiquimica.com.br/wp-content/uploads/2022/02/comparacao_de_densidades.jpg" alt="densidade" height={"309px"}/>
        <img src="https://static.escolakids.uol.com.br/image/ovo-na-agua.jpg" alt="densidade d`água" height={"309px"}/>
        </div>
        <p>Pressão:</p>
        <p>Pressão é a grandeza física que mede a força aplicada perpendicularmente a uma superfície.</p>
        <div>
        <img src="https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/06/pressao-o-que-e-definicao-caracteristicas-principais-tipos-e-formulas-1024x564.jpg.webp" alt="Pressão" height={"409px"}/>
        </div>
        <div>
        <img src="https://pt-static.z-dn.net/files/dea/29be27c839640a17578b21a543c66479.png" alt="Pressão hidrostática" height={"539px"}/>
        </div>
        <p>Princípio de Pascal:</p>
        <p>Um acréscimo de pressão exercido em ponto qualquer dentro de um líquido idel, em equilíbrio, se transmite intefralmente a todos os pontos,
          inclusive as paredes.</p>
        <div>
        <img src="https://www.sobiologia.com.br/figuras/Agua/pascal.png" alt="Princípio de Pascal" height={"309px"}/>
        <img src="https://sites.google.com/site/matematicaeseusdesafios/_/rsrc/1459216844102/fluidos/pascal.jpg" alt="Pressão Pascal" height={"309px"}/>
        </div>
        <p className='central'>Demonstração</p>
        <div>
          <img src="https://45.media.tumblr.com/12f6a03e60c32d94be0bc712918b5873/tumblr_o3s0z2jgXz1qckzoqo1_r1_500.gif" alt="sal fundido" />
        </div>
        <p>Princípio de Arquimedes:</p>
        <p>Impulsão ou empuxo, é a resultante das forças de pressão exercidas sobre um corpo total ou parcialmente imerso num fluido. "Todo o corpo mergulhado num fluido recebe, 
          da parte deste, uma impulsão vertical de baixo para cima e de intensidade igual ao valor do peso do volume de fluido deslocado pelo corpo."</p>
          <p>I = d.g.h.S = d.g.Vd e sabendo que d.Vd = m, então I = m(fluido).g</p>
          <div>
        <img src="https://blog.enem.com.br/wp-content/uploads/2020/08/capa-materia-arqui-696x464.jpg" alt="Arquimedes" />
        </div >
        <p>Princípio de Stevin:</p>
        <p>Pontos situados em um mesmo nível dentro de um líquido em equilíbrio estático suportam a mesma pressão.</p>
        <div className='pressao'>
        <img src="https://www.educabras.com/media/emtudo_img/upload/aula/_2058_42.gif" alt="Stevin" />
        </div >
        <p>Vazão:</p>
        <div>
        <img src="https://static.wixstatic.com/media/83ef9c_fbb6ccb6311e42ada26cda5107a75ad7~mv2.png/v1/fill/w_900,h_300,al_c,q_85,enc_auto/mecflu%20site%2056%20figura%20002%20aula%2015.png" alt="Vazão" />
        </div >
        <p className="p1"><strong>HIDROSTÁTICA</strong></p>
    </div>
  );
}
export default MF;