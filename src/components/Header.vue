<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                   src="..\assets\molde.me.logo.png"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <!-- <b-navbar-item href="#">
                Quem somos 
            </b-navbar-item> -->
            <b-navbar-item href="Jobs">
                Carreiras
            </b-navbar-item>
            <!-- <b-navbar-dropdown label="Dark">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-dark">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>


<style>
.logo
{
  padding-top: 20px;
  font-family:cursive;
  font-size: 18px;
}

.navbar-item{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 19px;
}

.buttons{
font-size: 10px;
}
/* #2B2440 */
</style>