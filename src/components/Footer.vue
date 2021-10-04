<template>
    <footer class="footer1">
    <div class="col-container">
        <div class="col" >
        <p class="control">Cadastre e receba nossas novidades!</p>
            <input type="text" name="enviar" placeholder="Email">
            <button class="text"> Enviar </button>
        </div>
        <div class="col">
            <p class="control"> Fale com a Gente! </p>
            <p>47 99999-9999</p>
            <p>contato@contato.com</p>
        </div>
        <div class="col">
            <p class="control"> Redes Sociais</p>
            <p>Facebook</p>
        </div>
    </div>
        <!-- <div class="footer-fixo">
            <p> Todos os direitos reservados 2020 ° Jordan Navarro </p>
        </div> -->
    </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>

<style>

.footer1 {
padding: 40px;
background: #2B2440;
color: #ffffff;
/* font-family: Arial, Helvetica, sans-serif; */
line-height: 2.0;
}
.text{
  background-color: #c00f03; /* red */
   border: none;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  margin: 12px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.col-container {
  display: table;
  width: 100%;
}
.col {
  display: table-cell;
  padding: 16px;
}
.footer-fixo{
   /* position: fixed; */
   left: 0;
   bottom: 0;
   width: 100%;
   background-color:#0e0081;
   color: white;
   text-align: center;
}
input[type=text] {
height: 30px;
}
</style>
