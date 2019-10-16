<template>
    <div id="main">
      <div id="test">
        <div id="body">

          <el-form ref="form" >
          <div id="userId">
<!--            <van-cell-group >-->
<!--              <van-field v-model="value" placeholder="请输入用户名"  />-->
<!--            </van-cell-group>-->
<!--            <el-form-item label="" style="width: 278px;opacity: 0.8;visibility:hidden">-->
<!--              <el-input  v-model="userId" :maxlength="24" style="color: #FEFEFE;visibility:hidden"></el-input>-->
<!--            </el-form-item>-->
            <input type="text" v-model="userId" style="height: 34px;width:220px;display: block;color: #ffffff" />
          </div>
          <div id="userPass">
            <input type="password" v-model="userPass"  style="height: 34px;width:220px;display: block;color: #ffffff" />

          </div>
            <a href="datapage">
          <div id="button">

          </div>
            </a>
        </el-form>
        </div>
{{userId }}
      </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            userId:'',
            userPass:'',
          }
      }
    }
</script>

<style scoped>

#main{
  background-color: #161922;
  /*background-image: url("../assets/寒露.jpg");*/
  background-image: url("../assets/登录4.png");
background-repeat: no-repeat;
  width: 1473.5px;
  height: 755px;
}
  #body{
    width: 400px;
    height: 300px;
    /*background-color: #fff;*/
    margin-left: 880px;
    margin-top: 220px;
    float: left;
    opacity: 0.5;
  }
  #userId{
    width: 340px;
    height: 60px;
    /*background-color: #ffffff;*/
    margin: 20px;
    color: #fff;
    padding-left: 100px;
    padding-top: 24px;
    padding-right: 60px;
  }
#userPass{
     width: 340px;
     height: 60px;
     /*background-color: #ffffff;*/
     margin: 20px;
     color: #fff;
     padding-left: 100px;
     padding-top: 10px;
   }
  #button{
    width: 335px;
    height: 55px;
    /*background-color: #191B30;*/
    margin-top: 44px;
    margin-left: 24px;
    color: #fff;
    padding-left: 0px;
    padding-top: 0px;
    /*color: #01EAFF;*/
  }
input:-webkit-autofill{
  -webkit-box-shadow:0 0 0 1000px red inset !important;
}
input{
  background-color:#010A16;
  border: 0;
  /*visibility: hidden;*/
}
</style>
