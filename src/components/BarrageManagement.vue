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
          :default-sort = "{prop: 'medi_submit_time', order: 'descending'}"
          size="medium "
        >
          <el-table-column
            text
            prop="medi_submit_time"
            label="发送时间"
            width="110"
            sortable
            align="center">
          </el-table-column>


          <el-table-column
            align="center"
            prop="medi_id"
            label="弹幕编号"
            width="140">
          </el-table-column>

          <el-table-column
            align="center"
            prop="medi_content"
            label="弹幕内容"
            width="345"
            show-overflow-tooltip>
          </el-table-column>

         <el-table-column
         align="center"
         prop="medi_sum"
         label="举报次数"
         width="90">


         </el-table-column>

          <el-table-column
            align="center"
            prop="is_pass"
            label="状态"
            width="90"
            :filters="[{ text: '待审核', value: '待审核' }, { text: '通过', value: '通过' }, { text: '不通过', value: '不通过' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="typetag(scope.row)"
                close-transition
              >
                {{scope.row.is_pass}}
              </el-tag>
            </template>


          </el-table-column>
          <el-table-column
            align="center"
            prop="deal_time"
            label="审核时间"
            width="110"
            sortable>
          </el-table-column>
          <el-table-column
            align="center"
            prop="more"
            label="更多"
            width="80">
            <button style="width: 20px;background-color: #3A425D;border: 0"  @click="showMore"  v-popover:popover1>
              <i class="el-icon-more-outline" style="font-size: 30px">
              </i>
            </button>
            <el-popover
              ref="popover1"
              placement="bottom-end"
              title="弹幕信息"
              width="200"
              trigger="hover"
             >
              <div >
             <p style="line-height: 24px">
              媒体类型： 短视频<br>
               媒体名称：多剧种国粹水袖<br>
               媒体编号：264423567<br>
               发送人ID：876978658<br>
               发送人昵称：Lucky One<br>
             </p>
              </div>
            </el-popover>
          </el-table-column>


          <el-table-column
            align="center"
            label="操作"
            width="200"
            :formatter="formatter"
          >

            <template slot-scope="scope">

              <el-button @click="passMedi(scope.row)" type="success" :disabled="isDisable(scope.row)">通过</el-button>
              <el-button @click="showRufusePanel(scope.row)" type="danger" :disabled="isDisable(scope.row)" >拒绝</el-button>


              <el-dialog title="拒绝信息" :visible.sync="dialogFormVisible">
                <el-form :model="refuseForm">

                  <el-form-item label="拒绝理由" :label-width="formLabelWidth">

                    <el-select v-model="refuseForm.reason" placeholder="请选择" style="margin-left:-380px ">
                      <el-option label="1.不符合栏目要求" value="r1"></el-option>
                      <el-option label="2.发布的内容违背相关现行政策与法律法规" value="r2"></el-option>
                      <el-option label="3.内容含有广告信息 " value="r3"></el-option>
                      <el-option label="4.内容尺度涉嫌色情低俗 " value="r4"></el-option>
                      <el-option label="5.其他 " value="r5"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="管理员" :label-width="formLabelWidth" >
                    <div style="width: 180px;">
                      <el-input
                        placeholder="梁山伯的哥哥"
                        v-model="input1"
                        :disabled="true">
                      </el-input>
                    </div>

                  </el-form-item>
                  <el-form-item>
                    <label style="margin-right: 10px">审核日期</label>
                    <el-date-picker
                      v-model="pick_data"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy/M//d"
                      style="margin-right: 305px"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer" >
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="refuse(scope.row)">确 定</el-button>
                </div>
              </el-dialog>




            </template>

          </el-table-column>


        </el-table>

        <el-dialog title="拒绝信息" :visible.sync="dialogFormVisible">
          <el-form :model="refuseForm">

            <el-form-item label="拒绝理由" :label-width="formLabelWidth">
              <el-select v-model="refuseForm.reason" placeholder="请选择">
                <el-option label="1.不符合栏目要求" value="r1"></el-option>
                <el-option label="2.发布的内容违背相关现行政策与法律法规" value="r2"></el-option>
                <el-option label="3.内容含有广告信息 " value="r3"></el-option>
                <el-option label="4.内容尺度涉嫌色情低俗 " value="r4"></el-option>
                <el-option label="5.其他 " value="r4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="管理员" :label-width="formLabelWidth">
              <div style="width: 180px">
                <el-input
                  placeholder="梁山伯的哥哥"

                  v-model="input1"
                  :disabled="true">
                </el-input>
              </div>
            </el-form-item>

            <el-date-picker
              v-model="refuseForm.ascertain_data"
              type="date"
              :default-value="nowData"
              placeholder="选择日期">
            </el-date-picker>



          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="refuse">确 定</el-button>
          </div>
        </el-dialog>

      </div>


    </div>
  </div>
</template>

<script>
   export default {
      name: "BarrageManagement",

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
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'喜欢梅香的那个站住！！'

            }, {
              medi_submit_time:'2019/9/2',
              user_id:"伟成戏剧社",
              medi_id:'867985757',
              medi_type:"",
              medi_title:"我和戏曲（一个00后的真实故事）",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'眼神真绝了'


            }, {
              medi_submit_time:'2019/9/2',
              user_id:"弥枳文化",
              medi_id:'134216534',
              medi_type:"",
              medi_title:"戏曲入坑小指南与学习戏曲评论的渠道分享",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'这么客气的，再唱一遍。'
            }, {
              medi_submit_time:'2019/9/2',
              user_id:"离屿话剧社",
              medi_id:'56754756',
              medi_type:"",
              medi_title:"浅谈历届央视春晚戏曲节目(附视频资源)",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'好！'
            },{
              medi_submit_time:'2019/9/1',
              user_id:"新贵文化",
              medi_id:'243342543',
              medi_type:"",
              medi_title:"戏曲末行的简介",
              medi_desc:"",
              is_pass:"不通过",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'跪了'

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
              medi_content:'这时候是真美！！！'

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
              medi_content:'前方高能！！！！'

            },{
              medi_submit_time:'2019/9/2',
              user_id:"离屿话剧社",
              medi_id:'13434533',
              medi_type:"",
              medi_title:"大好光景中，传统戏曲人时不我待",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'秦腔太好玩了吧'
            },{
              medi_submit_time:'2019/9/2',
              user_id:"共暖原创",
              medi_id:'234143232',
              medi_type:"",
              medi_title:"天刀暖春戏曲版本今日上线，国粹献礼海量福利！",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'这两位老师真真厉害'
            },{
              medi_submit_time:'2019/9/2',
              user_id:"墨香文学",
              medi_id:'765865476',
              medi_type:"",
              medi_title:"戏曲艺术的未来——从电视布袋戏说起",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'名场面'
            },{
              medi_submit_time:'2019/9/2',
              user_id:"东风软社团",
              medi_id:'564865346',
              medi_type:"",
              medi_title:"我与戏曲的“缘分”",
              medi_desc:"很长但放上来能看到全部",
              is_pass:"待审核",
              deal_time:"2019/9/5",
              medi_sum:'0',
              medi_content:'第一遍报道'
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
              medi_content:'正常版的坐宫'

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
              medi_content:'我滴妈呀'

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
              medi_content:'妗子这称呼真好听'

            },{
              medi_submit_time:'2019/9/1',
              user_id:"吻笑眉",
              medi_id:'21523423',
              medi_type:"",
              medi_title:"关于戏曲中的“风搅雪”。",
              medi_desc:"",
              is_pass:"待审核",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'好可爱呀。'

            },{
              medi_submit_time:'2019/9/1',
              user_id:"梦在深巷",
              medi_id:'567867642',
              medi_type:"",
              medi_title:"【考研方向介绍】中传戏剧戏曲学",
              medi_desc:"",
              is_pass:"待审核",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'教授带入感很强'

            },{
              medi_submit_time:'2019/9/1',
              user_id:"王小明",
              medi_id:'351465412',
              medi_type:"",
              medi_title:"表现形式——中国传统戏曲VS中国流行戏曲剧",
              medi_desc:"",
              is_pass:"待审核",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'妗子是不是舅马的意思'

            },{
              medi_submit_time:'2019/9/1',
              user_id:"风是甜的",
              medi_id:'36753412',
              medi_type:"",
              medi_title:"不了解戏曲？那也一定要了解戏曲服饰！",
              medi_desc:"",
              is_pass:"待审核",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'我也看到尾咯，本来听一段就准备睡觉的'

            },{
              medi_submit_time:'2019/9/1',
              user_id:"青青子衿",
              medi_id:'134214234',
              medi_type:"",
              medi_title:"作为一个戏曲观众很开心",
              medi_desc:"",
              is_pass:"待审核",
              deal_time:"2019/9/1",
              medi_sum:'0',
              medi_content:'迟团！'

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
        typetag(row){
          if (row.is_pass==='通过'){
            return 'success';
          }
          if (row.is_pass==='不通过'){
            return 'danger';
          }
          if (row.is_pass==='待审核'){
            row.deal_time='--------';
            return 'info';
          }

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
