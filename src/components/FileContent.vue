<template>
<div>
        <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="600"
    >
      <v-card
        color="#1D262F"
        dark
      >
        <v-card-text>
          Carregando
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

        <div class="text-center color">
    <v-dialog v-model="modal" class="color">
      <v-card class="color">
        <v-card-text>
<vue-code-highlight >
    {{conteudo}}
</vue-code-highlight>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="fechaArquivo()">Fecha Arquivo!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</div>
</template>

<script>
    import {api} from '~api'
    import { component as VueCodeHighlight } from 'vue-code-highlight';
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";

export default {
    components:{
        VueCodeHighlight,
        },
    props: ['download_url'],
      data: () => ({
        modal: false,
        conteudo: '',
        loading: false,
      }),
      methods: {
        async fechaArquivo(){
          this.modal = false
        },
        async abreArquivo(){
          this.conteudo = await api.conteudoArquivo(this.download_url)
          this.loading = true
          setTimeout(() => (this.abreModal()), 2000)
        },
        async abreModal(){
            this.loading = false
            this.modal = true
        },
      },
      watch:{
        download_url(){
            this.conteudo = ''
            this.abreArquivo()
        }
      }
}
</script>

<style>
.color { 
  background-color: #1D262F !important
  }
</style>