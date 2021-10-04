<template>

  <section class="main">
    <Search/>
    <Apresent/>
    
    <div class="card-vagas"> 
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="..\assets\icone22.png" alt="Placeholder image">
                </figure>
              </div>

          <div class="media-content">
            <p class="title">Comercial</p>
            <!-- <p class="subtitle is-6">Sales</p> -->
          </div>
        </div>
            <li><a href="/Jobs">Analista Comercial</a></li>   <p class="cidade"> Jaraguá do Sul </p>
            <li><a href="/">Assistente de vendas</a></li> <p class="cidade"> São Paulo </p>
            <li><a href="/">Consulor de vendas externo</a></li> <p class="cidade"> Rio de Janeiro </p>
        </div>

      </div>

    </div>
    <div class="card-vagas">
       <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="..\assets\icone33.png" alt="Placeholder image">
                </figure>
              </div>
          <div class="media-content">
            <p class="title">Engenharia</p>
            <!-- <p class="subtitle is-6">Sales</p> -->
          </div>
        </div>
            <li><a href="/">Engenheiro de Dados</a></li> <p class="cidade"> Jaraguá do Sul </p>
            <li><a href="/">Desenvolvedor Web</a></li> <p class="cidade"> São Paulo </p>
            <li><a href="/">Analista de Sistemas</a></li> <p class="cidade"> Florianópolis </p>

        </div>

      </div>

    </div>
        <div class="card-vagas">
       <div class="card">
        <div class="card-content">
                      <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="..\assets\icone44.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title">Marketing</p>
            <!-- <p class="subtitle is-6">Sales</p> -->
          </div>
        </div>
            <li><a href="/">Analista de Marketing</a></li> <p class="cidade"> Jaraguá/ Remoto </p>
            <li><a href="/">Designer</a></li> <p class="cidade"> São Paulo </p>
            <li><a href="/">Social Media</a></li><p class="cidade"> Jaraguá do Sul </p>
        </div>

      </div>

    </div>
<br>
        <div class="bem-vindo">
            <!-- <h1> Benefícios </h1> -->
          <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="..\assets\beneficios.png" alt="Placeholder image" style="padding-right: 2px;border-right-width: 1px;margin-left: 495px; margin-top:14px">
                </figure>
              </div>

              <div class="media-content">
                <p class="bem-vindo">Benefícios </p>
            </div>
          </div>
        </div>
      <div class="benef">
          <p>A Molde.me, sediada em Jaraguá do Sul, Santa Catarina. Tem uma estrutura completa
            para os colaboradores, contendo os melhores benefícios para se trabalhar na molde.me, como:  Cozinha abastecida,
            massagem no escritório, plano de saúde, plano odontológico, vale Alimentação,
              rotina híbrida (home office + escritório) etc.
             </p> <br><br>
      </div>
            <img src="..\assets\molde.me.novo6.png" >
<br><br>
          <div class="bem-vindo">
                <!-- <h1> Time moldelex </h1>  -->
                          <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="..\assets\time.png" alt="Placeholder image" style="padding-right: 0px;border-right-width: 10px;margin-left: 460px; margin-top:19px">
                </figure>
              </div>

              <div class="media-content">
                <p class="bem-vindo">Time moldelex </p>
            </div>
          </div>
          </div>
          <div class="benef">
          <p> 
             
             A esquerda está Carol nossa Coordenadora de vendas, no meio está Rafael nosso Consultor de projetos e a direita
             está a Leticia nossa controler responsável pelo successo do cliente.
             </p> 
      </div>
            <img src="..\assets\pessoas4.png" >

<br><br><br><br><br>

<div class="container">
<div class="card2">
  <div class="card-content">
    <p class="title1">
      “A modelagem está para o design de moda assim como a engenharia está para a arquitetura.”
    </p><br>
    <p class="subtitle1">
      Ligia Osório
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>

    <!-- <br><br>    <br><br>    <br> -->
</div>
  </section>
  
</template>

<script>
import Apresent from './Apresent.vue';
export default {
  components: { Apresent, },
    name:'Apresent2',
};
</script>
<style >

.navbar-item a{
color:white;
}
.card-container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
margin: 10px auto;
padding: 20px;

}

.texts{
  text-align: center;
  font-size: 22px;
}

.card-vagas{
  /* width: 100%; */
    /* text-align: center; */
    font-size: 28px;
}
.card-content{
    /* text-align: center; */
    font-size: 18px;


}
.media-content{
  font-family: Arial, Helvetica, sans-serif;

}

.title1{
  font-size: 26px;
  text-align: center;
  color:#444444;
  
  
}
.subtitle1{
  text-align: center;
  /* color:black; */
  /* font-size:small; */
  
}
.card2   {
  background:#5EC9CC;
  /* color:black; */
  font-family:  Helvetica, sans-serif;
  margin: 60px ;
padding: 50px;

}

.cidade{
text-align: right;
font-family: Arial, Helvetica, sans-serif;
}

.benef{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 3%;


}

.card-footer{
 color:black;
}


</style>