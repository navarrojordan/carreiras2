<template>
    <div class="register">
        <div class="register-photo">

        </div>
    <form class="register-form" @submit.prevent="registerUser">
        <div class="bem-vindo2">
        <h1>Dados Cadastrais</h1>
        <!-- <p>Cadastre ou faça o login</p> -->
        </div>
        <b-field label="Nome">
            <b-input v-model="user.firstName"
            placeholder="Escreva seu nome">
            </b-input>
        </b-field>

        <b-field label="Crie sua senha">
            <b-input v-model="user.password"
            type="password"
            placeholder="Digite sua senha">
            </b-input>
        </b-field>

        <b-field label="Message">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
        <label class="checkbox">
        <input type="checkbox">
        Eu aceito os <a href="#"> termos e condições.</a>
        </label>

        <div class="button-forms">
        <button type="submit" class="button is-dark"> Criar Conta </button>
        <div class="columns">
        <div class="column login-footer">
        <!-- <p> Não tenho conta, quero me registrar.<a href="/login">Entrar agora.</a></p> -->
        </div>
        </div>
        </div>
        <!-- <b-field label="Message">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field> -->
    </form>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      user: {
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
      },
    };
  },
//   methods: {
//     registerUser() {
//       const url = '/user';
//       this.$http
//         .post(url, this.user)
//         .then((response) => {
//           console.log(response.data);
//           this.$router.push({ name: 'Login' });
//         });
//     },
//   },
};
</script>

<style>

.register{
    display: flex;
    /* flex-wrap: wrap; */
}
.register-photo{
    background-image: url('../assets/register.png');
    background-repeat: no-repeat;
    background-size:cover;
    height: 100vh;
    width: 50vw;
}
.register-form{
    font-family: Arial, Helvetica, sans-serif;
    width: 50vw;
    height: 100vh;
    padding: 100px;
}
.button-forms{
    padding: 15px;
}
.button{
    margin-left: 1px;
}
.register-form h1{
    text-align: center;
    /* color:black; */
}
.bem-vindo2{
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>
