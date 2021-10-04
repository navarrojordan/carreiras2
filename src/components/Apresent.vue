<template>
    <section class="main">
      
      <img src="..\assets\inse2.png" ><br><br>
              <div class="bem-vindo">

            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="..\assets\vagas.png" alt="Placeholder image" style="padding-right: 0px;border-right-width: 10px;margin-left: 460px; margin-top:15px">
                </figure>
              </div>

          <div class="media-content">
            <p class="bem-vindo">Nossas Vagas</p>
          </div>
        </div>

        </div>
        <p class="content"><b></b> {{ selected }}</p>
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="Encontre a vaga que vai transformar seu futuro!"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
      
     <apresent/>
     <apresent2/>
        <br>      
         
    </section>
   
</template>

<script>
import Apresent from './Apresent.vue'
import Apresent2 from './Apresent2.vue'

export default {
  components: { Apresent, Apresent2 },
        data() {
            return {
                data: [
                    'Comercial',
                    'Banco de dados',
                    'Marketing',
                    'Vendas',
                    'Financeiro',
                    'Recursos Humanos',
                    'Controladoria',
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
    
</script>

<style>
.bem-vindo{
  font-size: 56px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color:#F25044;
}

.media{
    width: center;
}
</style>