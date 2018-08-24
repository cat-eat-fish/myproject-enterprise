<template>
    <div class="container">
        <!-- 最顶部 -->
        <div class="container head">
            <div class="main">
                <!-- 左侧欢迎语 -->
                <div class="welcoming">{{welcoming}}</div>
                <!-- 右侧 -->
                <div class="state">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 顶部导航 -->
    </div>
</template>

<script>
export default {
  name: 'home',
  data(){
      return{
        //   欢迎语
        welcoming:'欢迎来到**网!',
        //   右侧

      }
  }
}
</script>

<style scoped lang="scss">
    
</style>
