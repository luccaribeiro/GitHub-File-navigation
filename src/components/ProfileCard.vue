<template>
<div>
    <div v-for="informacao in items" :key="informacao">
    <v-card class="mx-auto" max-width="1200" tile>
    <v-img height="200" src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png"></v-img>
    <v-row style="margin:2.5%;position:absolute; top: 130px">

    <v-list-item>
    <v-list-item-avatar size="100">
    <img
        :src="informacao.avatar_url"
        alt="John"
    >
    </v-list-item-avatar>
    <v-list-item-content>
    <v-list-item-title class="title" style="margin-top:40px;">Nome: {{informacao.name}}</v-list-item-title>
    <v-list-item-subtitle>Bio: {{informacao.bio}}</v-list-item-subtitle>
    <v-list-item-subtitle>Repositorios: {{informacao.public_repos}}</v-list-item-subtitle>
    </v-list-item-content>
    </v-list-item>
    </v-row>
  </v-card>
</div>
</div>
</template>
  
<script>
  
    import {api} from '~api'
  
    export default {
      props: ['user'],
      data: () => ({
        items: []
      }),
      methods: {
        async listaInfos(){
          const file_list = await api.listaInfos(this.user)
          this.items = []
          this.items = this.items.concat(file_list)
        },
      },
      watch: {
        user(){
            this.listaInfos()
            console.log(this.items)
        }
      }
    }
  </script>
  
<style >
.mx-auto{
    margin-top: 50px;
    margin-bottom: 100px;
}
</style>