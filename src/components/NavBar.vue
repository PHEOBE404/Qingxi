<template>
  <div id="main">
    <div id="header">
      <div id="logo">
<!--          <span class="fontFamily ali_iconicon_LOGO ">-->
<!--          <p id="logo_p">Qing戏</p>-->
<!--        </span>-->

        <img src="../assets/logooooo.png" alt="" width="50px"
             style="display: inline-block;float: left;margin-right: 10px;padding: 2px">
        <p id="logo_p">Qing戏后台管理系统</p>


      </div>
      <div id="user_nav">
          <span id="user_photo" >
            <router-link to="datapage" href="#" title="头像">
              <img src="../assets/头像1.jpg" alt="" width="26px">
            </router-link>
          <span id="user_more" class="fontFamily ali_iconjiantouarrow486"></span>


          </span>
        <span id="user_alarm" class="fontFamily ali_icontixing"></span>
        <span id="user_exit" class="fontFamily ali_iconshut-down" ></span>

      </div>



    </div>
    <div id="body">
      <div id="nav_menu">

        <el-menu

          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#3A425D"
          text-color="#D9DADE"
          active-text-color="#ffd04b"
          router
          unique-opened>
          <el-submenu index="1">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconshenhe menu_bar_first"></span>
              <span>审核管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="mediummanagement" >
                <span class="fontFamily ali_iconshipin menu_bar_second"></span>
                <span> 视频审核管理</span>
              </el-menu-item>
              <el-menu-item index="noticemanagement">
<!--                index里放路由名称-->
                <span class="fontFamily ali_iconzixun menu_bar_second"></span>
                <span> 通告资讯审核</span>
              </el-menu-item>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="2" >
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconyonhu menu_bar_first"></span>
              <span>用户管理</span>
            </template>

            <el-menu-item index="usermanagement"  >
              <span class="fontFamily ali_iconzhanghaoguanli menu_bar_second"></span>

              <span slot="title" >
                用户账号
              </span>


            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconxiju menu_bar_first"></span>
              <span>戏剧管理</span>
            </template>

            <el-menu-item index="3-1">
              <span class="fontFamily ali_iconyishushejichuanmei menu_bar_second"></span>
              <span slot="title" >戏曲内容</span>
            </el-menu-item>
            <el-menu-item index="betterMedi">
              <span class="fontFamily ali_iconyishujiang menu_bar_second"></span>
              <span slot="title" >优选段</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <span class="fontFamily ali_iconyishu menu_bar_second"></span>
              <span slot="title" >普通用户小视频</span>
            </el-menu-item>

          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconyouxi-2 menu_bar_first"></span>
              <span>游戏管理</span>
            </template>

            <el-menu-item index="gameStoreroom">
              <span class="fontFamily ali_iconyouxi-1 menu_bar_second"></span>

              <span slot="title" >游戏资料库</span>
            </el-menu-item>
            <el-menu-item index="gameRank">
              <span class="fontFamily ali_iconyouxi- menu_bar_second"></span>

              <span slot="title" >游戏排名</span>
            </el-menu-item>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconzhushou2 menu_bar_first"></span>
              <span>戏曲小助手</span>
            </template>

            <el-menu-item index="assistant">
              <span class="fontFamily ali_iconlicaiwenda menu_bar_second"></span>

              <span slot="title" >问答库</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconpinglun menu_bar_first"></span>
              <span>弹幕评论</span>
            </template>

            <el-menu-item index="BarrageManagement">
              <span class="fontFamily ali_icondanmu menu_bar_second"></span>

              <span slot="title" >弹幕管理</span>
            </el-menu-item>
            <el-menu-item index="CommentMenagement">
              <span class="fontFamily ali_iconiconfontpinglun menu_bar_second"></span>

              <span slot="title" >评论管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconrenzheng menu_bar_first"></span>
              <span>认证管理</span>
            </template>

            <el-menu-item index="collegeIdentification">
              <span class="fontFamily ali_icongenjufenshuxuandaxuen menu_bar_second"></span>
              <span slot="title" >高校戏曲社团</span>
            </el-menu-item>
            <el-menu-item index="7-2">
              <span class="fontFamily ali_iconleishehuifuwux menu_bar_second"></span>
              <span slot="title" >社会戏团</span>
            </el-menu-item>
            <el-menu-item index="7-3">
              <span class="fontFamily ali_iconmingrentang menu_bar_second"></span>
              <span slot="title" >名人名家</span>
            </el-menu-item>

          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              <!--                <i class=" fontFamily el-icon-location menu_bar"></i>-->
              <span class="fontFamily ali_iconrizhixitong menu_bar_first"></span>
              <span>日志管理</span>
            </template>

            <el-menu-item index="LogManagement">
              <span class="fontFamily ali_iconrizhixitong menu_bar_second"></span>

              <span slot="title" >日志记录</span>
            </el-menu-item>
          </el-submenu>

<!--          <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->

<!--            <router-link class="el-menu-item link" to="/login">注册</router-link>-->
<!--            <router-link class="el-menu-item link" to="/parthome">登陆</router-link>-->
<!--          </el-menu>-->

        </el-menu>
      </div>
      <div id="photo_item">
<!--      <router-view name="his"></router-view>-->
<!--        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->

<!--          <router-link class="el-menu-item link" to="/login">注册</router-link>-->
<!--          <router-link class="el-menu-item link" to="/mainPage">登陆</router-link>-->
<!--        </el-menu>-->
        <router-view></router-view>

      </div>



    </div>



    <div id="footer">
      <div id="cop">
        版权所有(C)Qing戏文化传媒有限公司
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "NavBar",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .ali_iconicon_LOGO:before {
    content: "\e6ba";
    font-size: 30px;
    display: block;
    float: left;
    padding: 12px 2px 10px 14px;
  }
  #main{
    width: 1470px;
    height: 705px;
    background-color: #191B30;
    color: #fff;

  }
  #header{
    width: 100%;
    height: 50px;
    background-color: #262D47;
  }
  #footer{
    width: 100%;
    height: 48px;
    background-color: #262D47;
    margin-bottom: 0px;
    color: #FEFEFE;
  }
  #body{
    width: 100%;
    height: 652px;
  }
  #cop{
    /*height: 100%;*/
    max-width: 560px;
    margin: 0 auto;
    padding-top: 6px;
    padding-left: 250px;
  }
  #logo{
    width: 500px;
    height: 50px;
    float: left;

  }
  #logo_p{
    font-size: 22px;
    padding-top: 12px;
    color: #fff;
  }
  #user_nav{
    float: right;
    width: 150px;
    padding: 12px 0px  0px 0px ;
  }
  #nav_menu{
    background-color: #3A425D;
    width: 280px;
    height: 100%;
    margin-right: 12px;
    float: left;
  }
  .menu_bar_first{
    padding-left: 2px ;
    margin-right: 5px;
    font-size: 22px;
    color: #7D9399;
  }
  .menu_bar_second{
    padding-left: 2px ;
    margin-right: 5px;
    font-size: 18px;
    color: #7D9399;
  }
  .photo_item_model{
    width:572px ;
    height: 310px;
    background-color: #191B30;
    float: left;
    margin-right: 13.7px;
    margin-bottom: 13.7px;
  }
  #photo_item{
    /*float: right;*/

  }
  .photo_item_model img{
    padding-top: 14px;
  }
</style>
