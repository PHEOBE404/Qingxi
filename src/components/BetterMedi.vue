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
            text
            prop="medi_submit_time"
            label="发布时间"
            width="105"
            sortable
            align="center">
          </el-table-column>


          <el-table-column
            align="center"
            prop="medi_id"
            label="视频编号"
            width="110">
          </el-table-column>

          <el-table-column
            align="center"
            prop="medi_title"
            label="视频标题"
            width="240"
            ></el-table-column>

          <el-table-column
            align="center"
            prop="medi_desc"
            label="视频简介"
            width="190"
            show-overflow-tooltip>
          </el-table-column>

          <el-table-column
            align="center"
            prop="medi_sum"
            label="举报"
            width="50">


          </el-table-column>


          <el-table-column
            align="center"
            prop="user_id"
            label="发布人"
            width="110">
          </el-table-column>
          <el-table-column
            align="center"
            prop="like"
            label="点赞"
            width="55">
          </el-table-column>
          <el-table-column
            align="center"
            prop="comment"
            label="评论"
            width="55">
          </el-table-column>

          <el-table-column
            align="center"
            prop="read"
            label="浏览"
            width="60">
          </el-table-column>


          <el-table-column
            align="center"
            label="操作"
            width="180"
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
    name: "BetterMedi",

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
            user_id:"无锡润春",
            medi_id:'48656234',
            medi_type:"",
            medi_title:"戏曲刀马旦与武旦的区别",
            medi_desc:"曾经和变脸并称的绝技",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'喜欢梅香的那个站住！！',
            like:'12',
            comment:'4',
            read:'234'

          }, {
            medi_submit_time:'2019/9/2',
            user_id:"伟成戏剧社",
            medi_id:'867985757',
            medi_type:"",
            medi_title:"我和戏曲（一个00后的真实故事）",
            medi_desc:"戏剧作为最后的手工艺品之一",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'眼神真绝了',
            like:'43',
            comment:'22',
            read:'5464'


          }, {
            medi_submit_time:'2019/9/2',
            user_id:"弥枳文化",
            medi_id:'134216534',
            medi_type:"",
            medi_title:"戏曲入坑小指南与学习戏曲评论的渠道分享",
            medi_desc:"戏腔仙嗓青花瓷",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'这么客气的，再唱一遍。',
            like:'2453',
            comment:'234',
            read:'64354'
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
            read:'675'
          },{
            medi_submit_time:'2019/9/1',
            user_id:"新贵文化",
            medi_id:'243342543',
            medi_type:"",
            medi_title:"戏曲末行的简介",
            medi_desc:"第一次拍戏曲被国粹美哭",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'跪了',
            like:'52',
            comment:'4',
            read:'765'

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
            read:'6456'

          },{
            medi_submit_time:'2019/9/3',
            user_id:"浩巨黄梅站",
            medi_id:'867957890',
            medi_type:"",
            medi_title:"河南地方戏曲简介",
            medi_desc:"",
            is_pass:"通过",
            deal_time:"2019/9/4",
            medi_sum:'0',
            medi_content:'前方高能！！！！',
            like:'765',
            comment:'55',
            read:'76543'

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
            read:'111'
          },{
            medi_submit_time:'2019/9/2',
            user_id:"共暖原创",
            medi_id:'234143232',
            medi_type:"",
            medi_title:"天刀暖春戏曲版本今日上线，国粹献礼海量福利！",
            medi_desc:"个人很喜欢的几段",
            is_pass:"待审核",
            deal_time:"2019/9/5",
            medi_sum:'0',
            medi_content:'这两位老师真真厉害',
            like:'373',
            comment:'44',
            read:'2134'
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
            read:'87'
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
            read:'3643'
          },{
            medi_submit_time:'2019/9/3',
            user_id:"古色古香服饰",
            medi_id:'132124234',
            medi_type:"",
            medi_title:"戏曲剧本：带你看古人从一更熬夜到五更",
            medi_desc:"",
            is_pass:"通过",
            deal_time:"2019/9/4",
            medi_sum:'0',
            medi_content:'正常版的坐宫',
            like:'1252',
            comment:'334',
            read:'4234'

          },{
            medi_submit_time:'2019/9/3',
            user_id:"梦在深巷",
            medi_id:'7896798',
            medi_type:"",
            medi_title:"王者荣耀与越剧合作，妲己戏曲皮肤，大小乔皮肤有望免费送",
            medi_desc:"",
            is_pass:"通过",
            deal_time:"2019/9/4",
            medi_sum:'0',
            medi_content:'我滴妈呀',
            like:'1542',
            comment:'874',
            read:'23486'

          },{
            medi_submit_time:'2019/9/3',
            user_id:"橘殃",
            medi_id:'234532465',
            medi_type:"",
            medi_title:"七夕将至，戏曲中的这些动人情话，学来对谁说？",
            medi_desc:"",
            is_pass:"通过",
            deal_time:"2019/9/4",
            medi_sum:'0',
            medi_content:'妗子这称呼真好听',
            like:'187',
            comment:'54',
            read:'653'

          },{
            medi_submit_time:'2019/9/1',
            user_id:"吻笑眉",
            medi_id:'21523423',
            medi_type:"",
            medi_title:"关于戏曲中的“风搅雪”。",
            medi_desc:"",
            is_pass:"不通过",
            deal_time:"2019/9/1",
            medi_sum:'0',
            medi_content:'好可爱呀。',
            like:'46',
            comment:'22',
            read:'333'

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
            read:'746'

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
            read:'56798'

          },{
            medi_submit_time:'2019/9/1',
            user_id:"风是甜的",
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
            read:'3543'

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
            read:'8672'

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





