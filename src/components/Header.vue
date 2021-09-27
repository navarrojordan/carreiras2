<template>

    <b-navbar class="logo">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                
                <img
                    src="..\assets\molde.me.logo.png"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <div class="navbar">
            <b-navbar-item href="Jobs">
                Carreiras
            </b-navbar-item>
            </div>

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

.navbar
{
width: 940px;
}
</style>