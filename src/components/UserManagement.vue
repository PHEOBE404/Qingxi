<template>
    <div id="user_management">
      <div id="image">
        <div id="user_online">
          <div class="user_online_title" >用户概况</div>
          <div class="today_online">
            今日上线总人数
          </div>
          <div class="_data">
            <p>032573</p>

          </div>
          <div class="today_online">
            今日在线总时长
          </div>
          <div class="_data">
            <p style="color: #FE8BAB">013636</p>

          </div>

        </div>
        <div id="user_prefer">
          <div class="user_online_title" >意见与反馈</div>
<!--          <div id="progress">-->
<!--            <p>本日处理进度</p>-->
<!--           <el-progress :text-inside="true" :stroke-width="18" :percentage="84" >3a</el-progress>-->

<!--          </div>-->
          <div id="circle_progress">

          <el-progress type="circle" :percentage="100" status="success"  width=100></el-progress>
            <p>
              本月已完成 <em>428</em> 件
            </p>
          </div>

            <div id="rate">
<p>
  用户好评度

</p>


            <el-rate
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
          >
            </el-rate>

        </div>




        </div>
      </div>

      <div id="user_all_info">
        <div id="user_all_info_title" class="user_online_title">用户信息</div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :cell-style="cellClass"
          :header-cell-style="headerCellClass"
          :row-style="rowClass"
        >
          <el-table-column

            prop="user_id"
            label="用户ID"
            width="100">
          </el-table-column>
          <el-table-column
            prop="user_name"
            label="用户名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="user_gender"
            label="性别"
            width="60">
          </el-table-column>
          <el-table-column
            prop="user_email"
            label="邮箱"
            width="180">
          </el-table-column>
          <el-table-column
            prop="user_intro"
            label="个人简介"
            width="203">
          </el-table-column>
          <el-table-column
            prop="user_image"
            label="头像URL"
            width="228">
          </el-table-column>
          <el-table-column
            label="操作"
            width="270"
         >

            <template slot-scope="scope">
              <el-popover
                ref="popover2"
                placement="bottom"
                title="更多"
                width="200"
                trigger="click"

                >
                <div style="line-height: 25px">
                  用户类型：认证用户 <br>
                  关注：58 <br>
                  评论量：23 <br>
                  弹幕量：77 <br>
                  发布作品数：13 <br>
                </div>
              </el-popover>




              <el-button type="primary" v-popover:popover2>更多</el-button>
              <el-button @click="dialogFormVisible =true" type="primary">编辑</el-button>
              <el-button type="danger" v-popover:popover5 @click="visible2=true">删除</el-button>



              <el-popover
                ref="popover5"
                placement="top"
                width="200"
                v-model="visible2">
                <p>确定删除该用户信息吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                  <el-button type="primary" size="mini" :@click="visible2 = false">确定</el-button>
                </div>
              </el-popover>



            </template>
          </el-table-column>
        </el-table>
        <div id="page" >

          <el-dialog title="个人信息" :visible.sync="dialogFormVisible"  width="32%">

            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
              <img src="../assets/头像1.jpg"><el-button>更改头像</el-button>
              <br>
              <label style="line-height: 40px">性别</label>
              <br>
              <el-radio-group v-model="formLabelAlign.gender" >

                <el-radio   :label="1">男</el-radio>
                <el-radio   :label="2">女</el-radio>
              </el-radio-group>
              <br>

              <el-form-item label="用户ID">
                <el-input v-model="formLabelAlign.id"></el-input>
              </el-form-item>
              <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formLabelAlign.email"></el-input>
              </el-form-item>

              <el-form-item label="个人简介">
                <el-input v-model="formLabelAlign.intro"></el-input>
              </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="updata">确 定</el-button>
            </div>

          </el-dialog>


        </div>


      </div>
      <div
        v-for="site in info"
      >
        {{ site.name }}
      </div>
    </div>
</template>

<script>
    export default {
      name: "UserManagement",
      methods: {
        fetchUserInfo(){
          this.$http.get("https://www.runoob.com/try/ajax/json_demo.json")
            .then(function (response) {
              console.log(response);
              this.info=response.body;
            })
        },
        updata(){
          this.dialogFormVisible = false;
          this.formLabelAlign.name='王小明嘻嘻嘻嘻嘻';
          this.tableData[1].user_name='王小明嘻嘻嘻嘻嘻'


        },
        handleSizeChange(val) {
          // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          // console.log(`当前页: ${val}`);
        },
        handleClick(row) {
          // console.log(row);
        },
        cellClass({row, column, rowIndex, columnIndex}) {
          // console.log(rowIndex);
          return {

            background: '#3A425D',
            color: '#D9DADE',
            // border: 1px solid black;
            // borderColor:'#262D47'
            border: '1px solid #262D47',
            // borderCollapse:'collapse'

          }

        },
        rowClass({row, rowIndex}) {
          // console.log(rowIndex);
          return {
            background: '#3A425D',
            color: '#D9DADE',
            // border: 1px solid black;
            // borderColor:'#262D47'
            border: '1px solid #262D47',

          }

        },
        headerCellClass({row, rowIndex, columnIndex}) {
          return {
            background: '#3A425D',
            color: '#D9DADE',
            // border: 1px solid black;
            // borderColor:'#262D47'
            border: '1px solid #262D47',

          }
        },
        // drawline() {
        //
        //   var myChart_1 = echarts.init(document.getElementById('user_online'));
        //   yChart_1.setOption({
        //
        //   })
        // }
      },
      // mounted () {
      //   this.$axios
      //     .get('https://www.runoob.com/try/ajax/json_demo.json')
      //     .then(response => (this.info = response))
      //     .catch(function (error) { // 请求失败处理
      //       console.log(error);
      //     });
      // },
      data() {
        return {
          info: null,
          visible2: false,
          labelPosition: 'top',
          formLabelAlign: {
            name: '王小明',
            id: '567213728',
            email: 'sadgsagsjk@163.com',
            gender:1,
            intro:'越剧爱好者',
            img_url:'\t\n' +
              './ddsfhgjs.png',
            password:'',
            descripe:''
          },

          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px',


          value5: 4.7,
          currentPage4: 4,
          tableData: [
            {
              user_id: '567213728',
              user_name: '他比我美i',
              user_gender: '男',
              user_email: '2x5ookr@eyou.com',
              user_intro: '感谢是爱心的第一步',
              user_image: ' /img/user/iuyu9o6788.png'
            },
            {
              user_id: '545435422',
              user_name: '王小明',
              user_gender: '男',
              user_email: 'sadgsagsjk@163.com',
              user_intro: '越剧爱好者',
              user_image: ' /img/user/ddsfhgjs.png'
            },




          ]

        }
      }
    }
</script>

<style scoped>
  #user_management{
    /*float: left;*/
    overflow: auto;

  }
  #image{
    background-color: #004dfe;
  }
#user_online{
  background-color: #3A425D;
  width: 570px;
  height: 260px;
  margin-right: 18px;
  margin-bottom: 20px;
  float: left;
  /*font-size: 60px;*/
  display: inline-block;
}
  #user_prefer{
    background-color: #3A425D;
    width: 570px;
    height: 260px;
    /*margin-right: 20px;*/
    float: left;
    font-size: 60px;
    display: inline-block;

  }
  #user_all_info{
    background-color:#262D47;
    float: left;
    width: 100%;
    height: 373px;

  }
 /*. hidden-columns{*/
 /*  background-color: #42b983;*/
 /*}*/
  .el-pager li {
    font-size:8px;
  }

  /*.el-table--border,*/
  /*.el-table--group {*/
  /*  border-color: red;*/
  /*}*/
.user_online_title{
  background-color:#262D47 ;
  font-size: 22px;
  padding-left: 10px;
  line-height: 1.8;

}
  .today_online
 {
    padding-left: 210px;
    padding-top: 4px;
    margin: 0 auto;
   color: #fff;
    font-size: 20px;
 }
  ._data{
    width: 400px;
    height: 80px;
    /*background-color: #FEFEFE;*/
    /*background-image: url("../assets/数字背景.PNG");*/
    background-image: url("../assets/数字背景.png");
    margin-left: 150px;
    margin-top: 8px;
    background-repeat:no-repeat ;
    font-size: 40px;
    letter-spacing: 19px;
  }
  ._data p{
    color: #F0CC50;
    padding-left: 6px;
  }
  #progress{
    width: 450px;
    margin: 0 auto;

  }
  #progress{
    font-size: 20px;

  }
  #circle_progress{
    color: #FEFEFE;
    width: 250px;
    margin-left: 90px;
    margin-top: 34px;
    float: left;
  }
 #circle_progress p{
   margin-top: 10px;
   font-size: 20px;
   margin-left: -20px;
 }
  #rate p{
    font-size: 20px;
  }
  #rate{
    margin-top: 60px;
   padding-left: -40px;
  }
</style>
