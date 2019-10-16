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

          <el-progress type="circle" :percentage="100" status="success"  width="100"></el-progress>
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

    </div>
</template>

<script>
    export default {
      name: "UserManagement",
      methods: {
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

      data() {
        return {
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
            {
              user_id: '134245235',
              user_name: '小龙妹',
              user_gender: '女',
              user_email: 'ronil07@tom.com',
              user_intro: '我是一个生活在麻辣汤里面的豆腐皮',
              user_image: ' /img/user/h56ugfsrdg.png'
            },
            {
              user_id: '876978658',
              user_name: 'Lucky One',
              user_gender: '女',
              user_email: 'l743845@163.com',
              user_intro: '为何谎话是大人共同语言，小孩撒谎大人又有怨言',
              user_image: '/ img/user/sdhtr6yu556r.png'
            }, {
              user_id: '356464576',
              user_name: '回忆の痛',
              user_gender: '男',
              user_email: 'holtwqp@hotmail.com',
              user_intro: '多年之后 再看见你 你怎么还安然无恙的活着！！',
              user_image: ' /img/user/78907jmgh.png'
            }, {
              user_id: '356342545',
              user_name: '不暖',
              user_gender: '女',
              user_email: 'lecgc15@126.com',
              user_intro: '时间是检验真理旳标准。',
              user_image: '/img/user/243asdfasdf.png'
            }, {
              user_id: '789678667',
              user_name: '梦在深巷',
              user_gender: '男',
              user_email: 'vkfpfok@56.com',
              user_intro: '老师说忘记也是们学科，那么老师抱歉，我不及格。',
              user_image: ' /img/user/kuyio89678.png'
            }, {
              user_id: '223454645',
              user_name: '武林萌主',
              user_gender: '女',
              user_email: 'v375768@yeah.net',
              user_intro: '烟水两茫茫，蒹葭复苍苍，你就是那一位伫立于水之湄的俏佳人',
              user_image: ' /img/user/ewre2345r3s.png'
            }, {
              user_id: '324236475',
              user_name: '瑾澜',
              user_gender: '男',
              user_email: 'kvdbpwu@126.com',
              user_intro: '你说只身一人，对镜成双； 后来路上三人，岁月情长',
              user_image: '/img/user/werthtgfh.png'
            },
 {
              user_id: '757544532',
              user_name: '指天求虐',
              user_gender: '男',
              user_email: 'rmmsi23@sina.com',
              user_intro: '在下，柸中公仪斐，敢问姑娘芳名？',
              user_image: ' /img/user/srteyhjt75645.png'
            },{
              user_id: '465878768',
              user_name: '凉心人',
              user_gender: '女',
              user_email: 'ugajdii@eyou.com',
              user_intro: '依稀是旧时节，城门上下弦月，白色身影，夜色如水清冽',
              user_image: '/ img/user/asrw2342.png'
            },{
              user_id: '132435235',
              user_name: '倒霉熊',
              user_gender: '女',
              user_email: 'bnatcfk@qq.com',
              user_intro: ' “扫描”到你，我的爱情“程序”就“启动”了，别人都说我们很“兼容”',
              user_image: '/ img/user/sdzsmu765.png'
            },{
              user_id: '457867946',
              user_name: '半面妆。',
              user_gender: '女',
              user_email: 'bpwqdl2@163.net',
              user_intro: '心路，如意为桥',
              user_image: ' /img/user/456thsr3q.png'
            },{
              user_id: '245634576',
              user_name: '橘殃',
              user_gender: '男',
              user_email: 'tmems17@yeah.net',
              user_intro: '琴与弦，是注定的永远;花与叶，是相守的绵延',
              user_image: ' /img/user/asdsfw336.png'
            },{
              user_id: '786575856',
              user_name: '蕞深魡肳',
              user_gender: '女',
              user_email: 'gucooj1@sina.com',
              user_intro: '缘聚缘散缘如水，背负万丈尘寰',
              user_image: '/ img/user/d34523fdfgjs.png'
            },{
              user_id: '678978967',
              user_name: '何必作戏给我看',
              user_gender: '男',
              user_email: 'rvekbr3@126.com',
              user_intro: '一个人也要踏出千军万马的气势。',
              user_image: ' /img/user/fsdgb65633gjs.png'
            },{
              user_id: '467457888',
              user_name: '直女!',
              user_gender: '女',
              user_email: 'wagbnh6@hotmail.com',
              user_intro: '独向浮生，不遇漓人',
              user_image: ' /img/user/d45365633gjs.png'
            },{
              user_id: '436534536',
              user_name: '吻笑眉',
              user_gender: '女',
              user_email: 'i433428@163.net',
              user_intro: '开茶靡花事了，叶落彼岸叶方休。',
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
