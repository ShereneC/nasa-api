<template>
  <div class="component">
<div class="row">
<div class="col-md-12 bg-success">
  <img /> 
  <PictureOfTheDay/>
</div>
</div>
  
</div>


</template>


<script>
import { reactive } from 'vue';
import PictureOfTheDay from '../components/PictureOfTheDay.vue'
export default {
  name: 'component',
  setup(){
    const state = reactive({

    })
    return { state }
  },
  components:{PictureOfTheDay}
}
</script>


<style lang="scss" scoped>

</style>