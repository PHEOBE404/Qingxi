<template>
    <div>
      <div id="aapp">
        <h1>网站列表</h1>
        <div
          v-for="site in info"
        >
          {{ site.user_name }}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AjaxTest",
      data () {
        return {
          info: "",
        }
      },

      mounted () {
        this.$axios.get("http://localhost:3000/userInfo")
              .then( (response)=> {
                console.log(response);
               this.info = response.data;
              })
      }
    }
</script>

<style scoped>

</style>
