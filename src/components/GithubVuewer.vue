<template>
  <v-container>
    <GithubRepo @userselected="onUserSelected" @reposelected="onRepoSelected"/>
    <ProfileCard :user="user"/>
    <GithubFiles :user="user" :repo="repo" @openmodal="onOpenModal"/>
    <FileContent :download_url="download_url"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubFiles from './GithubFiles';
  import ProfileCard from './ProfileCard';
  import FileContent from './FileContent';

  export default {
    components: {
      GithubRepo,
      GithubFiles,
      ProfileCard,
      FileContent,
    },
    data: () => ({
      repo: null,
      user: null,
      download_url: null,
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      },
      onUserSelected(user){
        this.user = user
      },
      onOpenModal(download_url){
        this.download_url = download_url
      }
    }
  }
</script>
