<template>
  <section class="main">
      <!-- <div class="container"> -->
      <p class="texts"> Alguns dos nossos benefícios: Cozinha abastecida, massagem no escritório, plano de saúde, 
          plano odontológico, vale Alimentação, rotina híbrida (home office + escritório).

      </p> <br><br>
      <!-- </div> -->
    <div class="card-vagas">   
        <div class="card">
            <h1 class="vg"> Comercial </h1>

        <div class="card-content">
            <li><a href="/Jobs">Analista Comercial</a></li>
            <li><a href="/">Assistente de vendas</a></li>
            <li><a href="/">Consulor de vendas externo</a></li>
        </div>

      </div>

    </div>
    <div class="card-vagas">
       <div class="card">
          <h1 class="vg"> Engenharia </h1>

        <div class="card-content">
            <li><a href="/">Engenheiro de Dados</a></li>
            <li><a href="/">Desenvolvedor Web</a></li>
            <li><a href="/">Analista de Sistemas</a></li>

        </div>

      </div>

    </div>
        <div class="card-vagas">
       <div class="card">
          <h1 class="vg"> Marketing </h1>

        <div class="card-content">
            <li><a href="/">Analista de Marketing</a></li>
            <li><a href="/">Designer</a></li>
            <li><a href="/">Social Media</a></li>
        </div>

      </div>

    </div>
<br>
<div class="container">
<div class="card2">
  <div class="card-content">
    <p class="title1">
      “A modelagem está para o design de moda assim como a engenharia está para a arquitetura.”
    </p><br>
    <p class="subtitle">
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

    <br><br>    <br><br>    <br>
</div>
  </section>
  
</template>

<script>
export default {
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
.title1{
  font-size: 26px;
  text-align: center;
  
}
.subtitle{
  text-align: center;
}
.card2   {
  background: rgb(200, 194, 228);
  margin: 60px ;
padding: 50px;

}
.vg{
  font-family: Arial, Helvetica, sans-serif;
}
</style>