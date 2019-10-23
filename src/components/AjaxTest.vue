<template>
    <div>
      <div id="aapp">
        <h1>网站列表</h1>
        <div
          v-for="site in info"
        >
          {{ site.name}}
      </div>
        <div>
          <el-button @click="login">登录</el-button>
        </div>

      </div>
      {{obj}}
    </div>
</template>

<script>
    export default {
        name: "AjaxTest",
      data () {
        return {
          info: null,
          obj :{
            "uniqueName": '2222220',
            "password": '12345',
          }
        }
      },
      created(){
          // this.$axios({
          //   method:'put',
          //   url:'http://39.106.45.130:8080/user/register',
          //   dataType: 'json',
          //   data:this.obj,
          // }).then(function(response){
          //   console.log(response);
          //   console.log("11111");
          //
          // })

      },

      mounted () {

      },



      methods:{
       login(){
         // this.$axios({
         //   method:'get',
         //   url:'http://39.106.45.130:8080/user/login',
         //   //dataType: 'json',
         //   data:{
         //     "uniqueName": "2222220",
         //     "password": "12345",
         //   }
         //   // data:this.obj,
         // }).then((response)=>{
         //   console.log(response);
         //   console.log("222");
         //
         // })
         //   .catch((error)=> {
         //     console.log(error);
         //   })

         // this.$axios.interceptors.request.use(config => {
         //   if(config.type == 'formData' || config.method != 'post'){
         //     return config
         //   }
         //   config.data = qs.stringify(config.data)
         //   return config
         // }, (err) =>{
         //   return Promise.reject(err);
         // })
         this.$axios.get('http://39.106.45.130:8080/user/login', {
           params: {
             "uniqueName": "2222220",
             "password": "12345"
           },
         }).then((response) => {
           console.log(response);
           // this.resData = response.data;
         }).catch((error) => {
           console.log(error.response);
         });

       }

       }



    }
</script>

<style scoped>

</style>
