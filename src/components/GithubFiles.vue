<template>
    <div v-if="files.length > 0">
      <v-row>
        <v-col cols="12">
          <div class="caminho">Caminho: /{{path}}</div>
          <v-btn @click="voltaPasta()" elevation="2">Voltar</v-btn>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Arquivos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  @click="entrouOnde(file.type, file.path, file.download_url)" class="linha" v-for="(file, index) in files" :key="index">
                    <li class="arquivo">{{ file.name }} </li>
                    <img v-if="file.type == 'dir'" class="icon" src="../imagens/pasta-de-arquivo.png" alt="">
                    <img v-else class="icon" src="../imagens/arquivo.png" alt="">
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        </v-col>
      </v-row>
    </div>
</template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo', 'user'],
      data: () => ({
        files: [],
        loading: false,
        path: '',
      }),
      methods: {
        async listaFiles(){
          this.loading = true
          const file_list = await api.listaFiles(this.repo.owner.login, this.repo.name)
          this.files = []
          this.files = this.files.concat(file_list)
          this.loading = false
        },
        async entrouPasta(tipo , path){
          if(tipo == 'dir'){
            this.path = path
            this.files = []
            this.loading = true
            const file_list = await api.listaFiles(this.repo.owner.login, this.repo.name, `/${path}`)
            this.files = this.files.concat(file_list)
            this.loading = false
          }
        },
        async voltaPasta(){
            if(this.path.includes('/')){
            let path = this.path.slice(0,this.path.lastIndexOf('/'))
            this.files = []
            this.loading = true
            const file_list = await api.listaFiles(this.repo.owner.login, this.repo.name, `/${path}`)
            this.files = this.files.concat(file_list)
            this.loading = false
            this.path = path
            }else if (this.path.length>0){
              this.path = ''
              this.listaFiles()
            }
        },
        async entrouOnde(type, path,download_url){
            if(type == 'dir'){
              this.entrouPasta(type, path)
            } else if(type == 'file'){
              this.conteudo = ''
              this.entrouArquivo(download_url)
            }
        },
        async entrouArquivo(download_url){
            this.$emit('openmodal', download_url)
        },
      },
      watch: {
        repo(){
          this.files = []
          this.path = ''
          if (this.repo) {
            this.listaFiles()
          } else {
            this.files = []
          }
        },
        user(){
          this.files = []
        }
      }
    }
  </script>
  
<style>
.arquivo{
  list-style-type: none;
}
.linha{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.linha:hover{
border: 1px solid black;
}

.icon{
  width: 30px;
}
.caminho{
  text-align: left;
  font-size: 24px;
}
</style>