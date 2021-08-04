<template>
  <div class="row PictureOfTheDay">
    <h1>Choose a Date for Your Picture Surprise!</h1>
    <form @submit.prevent="getApod">
      <input v-model="state.query" type="date" name="" id="">
      <button type="submit">Choose!</button>
    </form>
  </div>
  <div class="row">
    <div class="col-12">
<img :src="apod.url" alt="" srcset="" class="img-fluid">    </div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
import { apodService } from '../services/ApodService'
// import { AppState } from '../AppState';
export default {
  name: 'PictureOfTheDay',
  setup(){
    const state = reactive({
      query: ''
    })

    return {
      state,
      getApod(){
        // console/.log(state.query)
        apodService.getApod(state.query)
      },
      apod: computed(() => AppState.apod)
      
    }
  },
}
</script>

<style lang="scss" scoped>

</style>