<template>
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
      }),
      methods: {
        async fechaArquivo(){
          this.modal = false
        },
        async abreArquivo(){
          this.conteudo = await api.conteudoArquivo(this.download_url)
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