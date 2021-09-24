<template>
    <section>
       
        
        <div class="container">
              
        <br><br><br>
        <b-field label="Nome">
            <b-input placeholder="Digite seu nome"></b-input>
        </b-field>
                <b-field label="E-mail">
            <b-input placeholder="Digite seu e-mail"></b-input>
        </b-field>


               <b-field label="Telefone">
            <b-input placeholder="Digite seu telefone"></b-input>
        </b-field>
                    <br>
                    
    <b-field class="file is-info-light" :class="{'has-name': !!file}">
        <b-upload v-model="file" class="file-label">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label"> curriculo</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-upload>
    </b-field>
<br>
   
 <b-button type="is-info" > Enviar</b-button>


        </div>
        <br><br><br>
        <br>
        

    </section>
</template>

<style>



</style>

<script>

export default {
    name:"Home",
};

</script>
