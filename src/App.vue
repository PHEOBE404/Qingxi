<template>
  <div id="app">
<!--   <create-drama></create-drama>-->
<!--    <login></login>-->
<!--    <home></home>-->
<!--    <router-link :to="{ name: 'store' }"></router-link>-->
<!--    <nav-bar></nav-bar>-->
<!--<store-detail></store-detail>-->
<!--    <router-view></router-view>-->
<!--    <shopping></shopping>-->
    <ajax-test></ajax-test>
<!--    <user-management></user-management>-->
  </div>

</template>

<script>
import CreateDrama from "./components/CreateDrama";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from  "./components/NavBar"
import Store from  "./components/Store"
import StoreDetail from  "./components/StoreDetail"
import Shopping from  "./components/Shopping"
import AjaxTest from  "./components/AjaxTest"
import UserManagement from  "./components/UserManagement"

export default {
  name: 'App',
  components: {
    CreateDrama,
    Login,
    Home,
    NavBar,
    Store,
    StoreDetail,
    Shopping,
    AjaxTest,
    UserManagement
  },

}
</script>

<style>
  @import "./css/clear.css";
</style>
