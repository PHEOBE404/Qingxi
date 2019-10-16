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
            label="申请编号"
            width="120">
          </el-table-column>

          <el-table-column
            align="center"
            prop="user_id"
            label="用户名"
            width="105"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="college"
            label="高校"
            width="200"
          ></el-table-column>

          <el-table-column
            align="center"
            prop="intro"
            label="认证介绍"
            width="190"
            show-overflow-tooltip>
          </el-table-column>

          <el-table-column
            align="center"
            prop="concern"
            label="关注量"
            width="80">


          </el-table-column>
          <el-table-column
            align="center"
            prop="medi_total"
            label="作品数"
            width="80">
          </el-table-column>

          <el-table-column
            align="center"
            prop="read"
            label="总点击"
            width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="paper"
            label="申请资料"
            width="90">
            <el-tooltip class="el-icon-document" effect="light" content="Left Bottom 提示文字" placement="left-end">

              <div slot="content" style="width: 550px;height: 700px;margin: 0 auto;line-height: 30px;overflow: auto">
                <!--             <p style="font-size: 30px">{{noticeItem.title}}</p>-->
                <!--              <p style="font-size: 20px">{{noticeItem.describe}}</p>-->
                <!--                <img src="../assets/头像1.jpg">-->
                <!--                <img v-bind:src="noticeItem.imgURL">-->
                <p style="font-size: 24px; ">黄梅山一号大学认证申请书</p><br>
<!--                <img src="../assets/大学认证材料.jpg" width="200px">-->
                <p style="font-size: 18px">
                  伟成戏剧社是一个以话剧小品表演与创作为兴趣的自发性综合性的学生社团。社团在草堂校区成立于2012年，至今已走过七个学年。
                  <br> <br>
                  社团致力于开发学生的舞台表演才能和剧本创作热情，基于此并加之平时的刻苦认真排练，使得社团多次走上学校的大型晚会舞台。<br>
                  <br>
                  社团主要分为秘书处、策划部、编导部、美装部、宣传联络部五大部门。
                </p>
                <img src="../assets/剧照.jpg"width="400px">
                <p style="font-size: 18px">
                  社团在2015-2019年度期间举办大小活动共十五个，活动总体运行完整，达到了预期效果，也在2015年拿到了“黄梅山杯国学诗词会”校赛一等奖的荣誉；
                  <br> <br>
                  于2016年4月成功举办跨校级活动“时光的记忆”戏剧专场，此活动在全校范围内赢得了广泛好评，得到校团委和老师的一致认可；
                  <br> <br>
                  在2015-2016年度“争先创优”中更是获得黄梅山一号大学“十佳社团”称号；也在全国最具影响力社团校赛中斩获佳绩。
                  <br> <br>
                  整个社团整体影响力也逐渐由校内扩大到校外。社团发展势头蒸蒸日上。

                </p>
                <img src="../assets/认证.jpg"width="400px">


              </div>

              <el-button  type="primary" icon=" " style="font-size: 16px"></el-button>

            </el-tooltip>
          </el-table-column>


          <el-table-column
            align="center"
            label="操作"
            width="200"
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
    name: "collegeIdentification",

    data() {

      return {
        noticeItem:{
          title:'我是大标题',
          describe:'我是一段很长长长长长长长长长的描述',
          imgURL:'../assets/头像1.jpg',
        },
        input1: '',
        rowindex:'',
        pick_data:'',
        dialogFormVisible: false,
        refuseForm: {
          name: '',
          reason: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          ascertain_time:'',
          ascertain_data:''
        },
        formLabelWidth: '50px',
        data:[],
        filterType:'',
        statuses: ['未开始', '进行中', '搁置', '完成'],
        medi_item:{
          //时间用字符串表示
          medi_submit_time:'2019-08-15',
          user_id:"32452421",
          medi_type:"",
          medi_title:"",
          medi_desc:"",
          is_pass:"",
          deal_time:"",
          medi_sum:''

        },
        tableData: [
           {
            medi_submit_time:'2019/9/2',
            user_id:"伟成戏剧社",
            medi_id:'867985757',
            medi_type:"",
            medi_title:"我和戏曲（一个00后的真实故事）",
            like:'43',
            comment:'22',
            read:'5464',
             college:'黄梅山一号大学',
             intro:'传统戏剧',
             concern:'537',
             medi_total:'12',


          }, {
            medi_submit_time:'2019/9/2',
            user_id:"离屿话剧社",
            medi_id:'56754756',
            medi_type:"",
            medi_title:"浅谈历届央视春晚戏曲节目(附视频资源)",
            medi_desc:"宝藏京剧演员",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'好！',
            like:'232',
            comment:'76',
            read:'675',
            college:'黄梅山二十三号大学',
            intro:'学校传统社团',
            concern:'537',
            medi_total:'43',
          },{
            medi_submit_time:'2019/9/3',
            user_id:"优盛社团",
            medi_id:'145456544',
            medi_type:"",
            medi_title:"戏曲角色的简介",
            medi_desc:"",
            is_pass:"通过",
            deal_time:"2019/9/4",
            medi_sum:'0',
            medi_content:'这时候是真美！！！',
            like:'32',
            comment:'44',
            read:'6456',
            college:'黄梅山三十号大学',
            intro:'曾举办国家话剧团演出',
            concern:'537',
            medi_total:'111',

          },{
            medi_submit_time:'2019/9/2',
            user_id:"离屿话剧社",
            medi_id:'13434533',
            medi_type:"",
            medi_title:"大好光景中，传统戏曲人时不我待",
            medi_desc:"第一次拍戏曲被国粹美哭",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'秦腔太好玩了吧',
            like:'6',
            comment:'4',
            read:'111',
            college:'黄梅山十六号大学',
            intro:'话剧爱好者集合地',
            concern:'537',
            medi_total:'6',
          },{
            medi_submit_time:'2019/9/2',
            user_id:"墨香文学",
            medi_id:'765865476',
            medi_type:"",
            medi_title:"戏曲艺术的未来——从电视布袋戏说起",
            medi_desc:"戏剧作为最后的手工艺品之一",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'名场面',
            like:'12',
            comment:'4',
            read:'87',
            college:'黄梅山九号大学',
            intro:'剧本写作与知识科普',
            concern:'537',
            medi_total:'82',
          },{
            medi_submit_time:'2019/9/2',
            user_id:"东风软社团",
            medi_id:'564865346',
            medi_type:"",
            medi_title:"我与戏曲的“缘分”",
            medi_desc:"曾经和变脸并称的绝技",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'第一遍报道',
            like:'1332',
            comment:'455',
            read:'3643',
            college:'黄梅山五号大学',
            intro:'歌舞相应',
            concern:'537',
            medi_total:'32',
          },{
            medi_submit_time:'2019/9/1',
            user_id:"梦在深巷",
            medi_id:'567867642',
            medi_type:"",
            medi_title:"【考研方向介绍】中传戏剧戏曲学",
            medi_desc:"",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'教授带入感很强',
            like:'154',
            comment:'44',
            read:'746',
            college:'黄梅山六十六号大学',
            intro:'新星社团',
            concern:'537',
            medi_total:'21',

          },{
            medi_submit_time:'2019/9/1',
            user_id:"王小明",
            medi_id:'351465412',
            medi_type:"",
            medi_title:"表现形式——中国传统戏曲VS中国流行戏曲剧",
            medi_desc:"",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'妗子是不是舅马的意思',
            like:'876',
            comment:'698',
            read:'56798',
            college:'黄梅山十一号大学',
            intro:'五星社团',
            concern:'537',
            medi_total:'8',

          },{
            medi_submit_time:'2019/9/1',
            user_id:"风甜",
            medi_id:'36753412',
            medi_type:"",
            medi_title:"不了解戏曲？那也一定要了解戏曲服饰！",
            medi_desc:"",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'我也看到尾咯，本来听一段就准备睡觉的',
            like:'46',
            comment:'67',
            read:'3543',
            college:'黄梅山七号大学',
            intro:'小有名气黄梅戏',
            concern:'537',
            medi_total:'19',

          },{
            medi_submit_time:'2019/9/1',
            user_id:"青青子衿",
            medi_id:'134214234',
            medi_type:"",
            medi_title:"作为一个戏曲观众很开心",
            medi_desc:"",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'迟团！',
            like:'900',
            comment:'345',
            read:'8672',
            college:'黄梅山二号大学',
            intro:'戏剧爱好者',
            concern:'537',
            medi_total:'132',

          }


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
      refuse(){
        this.dialogFormVisible = false;
        // this.refuseForm.ascertain_data;



      },
      showRufusePanel(row){
        this.dialogFormVisible =true;
        this.rowindex=row;
        // console.log(row); //行标正常
      },
      passMedi(row){
        row.is_pass='通过';
        var nowdata=new Date();
        row.deal_time=nowdata.toLocaleDateString();
      },
      showMore(){
        console.log("点击查看【更多】视频信息");
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.is_pass === value;
      },

      isDisable(row){
        if (row.is_pass==='通过'){
          return true;
        }
        if (row.is_pass==='不通过'){
          return true;
        }
        if (row.is_pass==='待审核'){
          return false;
        }
      },
      refuse(row){
        // console.log("拒绝234234方法");

        this.dialogFormVisible = false;
        // this.refuseForm.ascertain_data;

        this.rowindex.deal_time=  this.pick_data;
        this.rowindex.is_pass='不通过';
        // console.log(row);
        // console.log(this.rowindex.is_pass);//成功



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


