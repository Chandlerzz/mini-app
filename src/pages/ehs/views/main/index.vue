<template>
  <div>
  <iframe :src="url" frameborder="0">
  </iframe>
  </div>
</template>

<script setup lang="ts">
import {menu} from "../../../../data/menu"
import {computed,onMounted,defineEmits,defineProps,ref} from "vue"
const props = defineProps({
  menuid: {
    type: Number,
    default: 1,
  },
});
const url = computed(() => {
  let one = menu.filter((item:any) => item.id === props.menuid)
  return one[0].url
})
</script>

<style scoped>
iframe{
  width:100%;
  height:100%;
}


</style>

