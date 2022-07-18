<script setup lang="ts">
import Sidebar from "@ehs/views/sidebar/index.vue"
import Main from "@ehs/views/main/index.vue"
import {ref} from "vue"
const menuid = ref(1)
function changeId(id:number)
{
  menuid.value = id;
}
</script>

<template>
  <Sidebar class="sidebar" @changeId="changeId" :menuid="menuid"></Sidebar>
  <Main class="main" :menuid="menuid"></Main>
</template>

<style>
#app{
  display:grid;
  width:100vw;
  height:100vh;
}
</style>
<style scoped>
.main{
  padding-left:var(--aside-telephone-width);
  width:inherit;
  height:inherit;
}
.sidebar{
  height:100%;
  display:flex;
  flex-flow:column;
}
@media screen and (min-width: 800px) {
  .main{
  padding-left:var(--aside-desktop-width);
  }
}
</style>
