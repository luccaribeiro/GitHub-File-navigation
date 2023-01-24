<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubIssues :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  export default {
    components: {
      GithubRepo,
      GithubIssues,
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>
