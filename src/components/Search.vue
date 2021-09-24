<template>
    <section>
        <br>      <br>
        <div class="bem-vindo">
      <h1> Nossas Vagas </h1>
    </div>
        <p class="content"><b></b> {{ selected }}</p>
        <!-- <b-field label="Nossas Vagas"> -->
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
        <!-- </b-field> -->
         <br>
    </section>
   
</template>

<script>
    export default {
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
  font-family:Georgia, 'Times New Roman', serif;
}
</style>