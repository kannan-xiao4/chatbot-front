<template>
  <nav class="header-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/about">About</router-link></li> 
      <li><router-link to="/chat/page">Chat</router-link></li> 
      <li><router-link to="/chat/login">Login</router-link></li> 
      <li><router-link to="/chat/signup">Signup</router-link></li> 
    </ul> 
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavHeader extends Vue {}
</script>
