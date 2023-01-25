<template>
  <v-container>
    <GithubRepo @userselected="onUserSelected" @reposelected="onRepoSelected"/>
    <ProfileCard :user="user"/>
    <GithubFiles :user="user" :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubFiles from './GithubFiles';
  import ProfileCard from './ProfileCard';

  export default {
    components: {
      GithubRepo,
      GithubFiles,
      ProfileCard,
    },
    data: () => ({
      repo: null,
      user: null,
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      },
      onUserSelected(user){
        this.user = user
      }
    }
  }
</script>
