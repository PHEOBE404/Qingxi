
<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div id="main">

    <div id="medium_management">
      <div id="user_all_info">
        <el-table
          :data="tableData"

          style="width: 100%"
          :cell-style="cellClass"
          :header-cell-style="headerCellClass"
          :row-style="rowClass"
          :default-sort = "{prop: 'medi_submit_time', order: 'ascending'}"
          size="medium "
        >



          <el-table-column
            align="center"
            prop="medi_id"
            label="编号"
            width="80">
          </el-table-column>

          <el-table-column
            align="center"
            prop="question"
            label="问题"
            width="365"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="answer"
            label="回答"
            width="510"
          ></el-table-column>




          <el-table-column
            align="center"
            label="操作"
            width="220"
            :formatter="formatter"
          >

            <template slot-scope="scope">

              <el-button @click="passMedi(scope.row)" type="primary" >编辑</el-button>
              <el-button @click="showRufusePanel(scope.row)" type="danger"  >删除</el-button>






            </template>

          </el-table-column>


        </el-table>


      </div>


    </div>
  </div>
</template>


<script>

  export default {
    name: "Assistant",

    data() {

      return {

        input1: '',
        rowindex:'',
        pick_data:'',
        dialogFormVisible: false,
        formLabelWidth: '50px',
        data:[],
        filterType:'',
        tableData: [
          {
            medi_id:'52345',
            question:'为什么弹幕显示异常？',
            answer:'刷新页面重新载入视频尝试。'
          },{
            medi_id:'14324',
            question:'怎么申请成为认证用户？',
            answer:'在‘我的’中点击‘申请为认证用户’~'
          },{
            medi_id:'63453',
            question:'为什么我的账号未告知理由就被永久封停？',
            answer:'凡是ID（用户名)/昵称，头像等使用国家相关部门和相关人物及其他严重违规情况将被立即永久封停。'
          },{
            medi_id:'97686',
            question:'不小心泄露了账号信息,使账号丢失怎么办？',
            answer:'请妥善保管自己的账号信息，勿泄露给其他人。如果您发现账号信息泄露，请及时更改密码，同时检查绑定手机，邮箱有效性，以减少可能的损失。'
          },{
            medi_id:'79876',
            question:'密码丢失怎么办?？',
            answer:'若密码丢失，个人账号可以通过绑定的手机或邮箱，验证信息后重置密码。'
          },{
            medi_id:'14234',
            question:'为什么我发布的动态被折叠了？？',
            answer:'一个用户在短时间内频繁刷屏的话，动态会被折叠哦。仅视频投稿产生的动态和转发的动态会被折叠。'
          },{
            medi_id:'24414',
            question:'通过扫描二维码我有没有可能重复支付？',
            answer:'不会的，一旦通过任一途径支付后，二维码便会失效，无法进行新的支付。异常的重复支付系统会进行自动退款，若发现重复支付未退款可联系客服。'
          },{
            medi_id:'25435',
            question:'支付已成功,为什么订单状态还是"待付款"?',
            answer:'一般来说，网上支付是即时到账的。但有时因为网络原因，可能会有几分钟的延迟，请您耐心等待，并及时查询您的银行卡或支付宝、微信账户余额，如果费用已扣，但订单状态依然是“等待付款”，请联系客服处理。'
          },{
            medi_id:'34635',
            question:'审核资讯的规则是是什么？',
            answer:'管理员会严格按照国家制定的敏感词规则，以及我站《规范》对资讯进行审核。审核结果分为两种：审核通过、拒绝。'
          },{
            medi_id:'74565',
            question:'怎么举报视频？',
            answer:'举报视频需填写详细举报事由；恶意及滥用举报功能将导致账号被封停。'
          },{
            medi_id:'23455',
            question:'我想分享视频',
            answer:'Qing戏为视频分享提供了多种方式，让您可以非常方便的把视频分享给各位小伙伴。视频播放页面下方便捷分享。'
          },





        ],
        visible2: false,
        labelPosition: 'top',
        formLabelWidth: '120px',
        dialogTableVisible: false,
        dialogFormVisible: false,
        value5: 4.7,
        currentPage4: 4,
      }
    },
    computed:{
      nowData:function () {
        var nowdata=new Date();
        return nowdata;
      }
    },

    methods:{

      showMore(){
        console.log("点击查看【更多】视频信息");
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.is_pass === value;
      },

      cellClass({row, column, rowIndex, columnIndex}) {
        return {
          background: '#3A425D',
          color: '#D9DADE',
          border: '1px solid #262D47',

        }

      },
      rowClass({row, rowIndex}) {
        return {
          background: '#3A425D',
          color: '#D9DADE',
          border: '1px solid #262D47',

        }

      },
      headerCellClass({row, rowIndex, columnIndex}) {
        return {
          background: '#3A425D',
          color: '#D9DADE',
          border: '1px solid #262D47',

        }
      },



    }
  }

</script>

<style scoped>
  #main{
    padding: 0;

    margin: 0;
  }
  #user_all_info{
    background-color:#262D47;
    background-color:#fff;
    float: left;
    /*width: 100%;*/
    width: 100%;
    height: 652px;

  }
  #medium_management{
    overflow: hidden;
    float: left;
    /*width: 100%;*/

    background-color:#262D47;
  }
  .el-icon-zoom-in{
    font-size: 20px;
    padding: -5px;
    /*color: #409EFF;*/
  }

</style>




