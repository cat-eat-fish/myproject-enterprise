<template>
  <div class="container">
        <MyHead></MyHead>
        
        

        <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
export default {
    components:{
        MyHead,MyFoot
    },
  name: 'home'
}
</script>

<style scoped lang="scss">
    
</style>
