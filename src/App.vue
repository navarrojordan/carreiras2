<template>
  <div id="app">
    <Header />
      <router-view/>
    <Apresent/>
    <Search/>
        <Apresent2/>
          
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Apresent from '@/components/Apresent.vue';
import Apresent2 from '@/components/Apresent2.vue';
import Search from '@/components/Search.vue';


export default {
  components: {
    Header,
    Apresent,
    Apresent2,
    Search,

  },
};
</script>

<style>
  *{
    margin: 0;
  }
</style>
