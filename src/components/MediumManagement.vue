<template>
    <div id="main">

      <div id="medium_management">
<!--        <template slot="filter-field">-->
<!--          <el-select v-model="filterType" placeholder="选择类型">-->
<!--            <el-option label="全部" value=""></el-option>-->
<!--            <el-option v-for="status, index in statuses" :key="status" :label="status" :value="index"></el-option>-->
<!--          </el-select>-->
<!--          <el-date-picker type="daterange" start-placeholder="起始时间" end-placeholder="结束时间"></el-date-picker>-->
<!--        </template>-->


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
          label="申请时间"
          width="110"
          sortable
        align="center">
        </el-table-column>
<!--        <el-table-column-->
<!--          align="center"-->
<!--          prop="medi_id"-->
<!--          label="视频编号"-->
<!--          width="100">-->
<!--        </el-table-column>-->

        <el-table-column
          align="center"
          prop="user_id"
          label="发布人"
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="medi_type"
          label="栏目"
          width="65">
        </el-table-column>
        <el-table-column
          align="center"
          prop="medi_title"
          label="标题"
          width="180"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="medi_desc"
          label="视频简介"
          width="190"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="is_pass"
          label="状态"
          width="80"
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
<!--          <template slot-scope="scope">-->
<!--&lt;!&ndash;            {{pick_data}}&ndash;&gt;-->
<!--          </template>-->

        </el-table-column>
        <el-table-column
          align="center"
          prop="more"
          label="更多"
          width="50">
          <button style="width: 15px;background-color: #3A425D;border: 0"  @click="showMore">
            <i class="el-icon-more-outline" style="font-size: 20px;margin-left: -3px">
            </i>
          </button>

        </el-table-column>
        <el-table-column
          align="center"
          prop="medi"
          label="视频"
          width="90">
          <el-button @click="detialPlayVideo =true" type="primary">查看</el-button>

          <el-dialog title="视频内容" :visible.sync="detialPlayVideo" @close="closePlay">
            <template>
              <div class="container">
                <div class="player">
                  <video-player class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                                :playsinline="false"
                                :options="playerOptions"
                                @play="onPlayerPlay($event)"
                                @pause="onPlayerPause($event)"
                                @statechanged="playerStateChanged($event)"
                  >
                  </video-player>
                </div>
              </div>

            </template>
          </el-dialog>

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
<!--                    {{pick_data}}-->
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



    </div>



    </div>
    </div>

</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  import '../../node_modules/video.js/dist/video-js.css'
  import '../../node_modules/vue-video-player/src/custom-theme.css'

  export default {
      name: "MediumManagement",
    props: {
      videoUrl: String,
      state: Boolean
    },

      data() {

        return {
          playerOptions: {
// playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, // 如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: 'video/mp4',
              src:'http://vjs.zencdn.net/v/oceans.mp4',// 你的m3u8地址（必填）
            }],
// poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg', // 你的封面地址
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试'// 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          },

          detialPlayVideo:false,
          rowindex:'',
          pick_data:'',
          input1: '',
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

          },
          tableData: [
            {
              medi_submit_time:'2019/9/2',
              user_id:"优盛社团",
              medi_type:"精选",
              medi_title:"中国戏曲入坑指南",
              medi_desc:"高能名场面合集",
              is_pass:"待审核",
              deal_time:""
            },{
              medi_submit_time:'2019/9/1',
              user_id:"信源文学社",
              medi_type:"短视频",
              medi_title:"台上人唱着 心碎离别歌 ",
              medi_desc:" 第一次拍戏曲被国粹美哭！",
              is_pass:"不通过",
              deal_time:"2019/9/1"

            },{
              medi_submit_time:'2019/9/3',
              user_id:"新贵文化",
              medi_type:"短视频",
              medi_title:"多剧种国粹水袖",
              medi_desc:"",
              is_pass:"通过",
              deal_time:"2019/9/4"

            },{
            medi_submit_time:'2019/9/5',
          user_id:"伟成戏剧社",
          medi_type:"短视频",
          medi_title:"戏幕起 戏幕落 终是客",
          medi_desc:"这次场地和时间有限，只拍了一天，所以成片只有一分钟~",
          is_pass:"通过",
          deal_time:"2019/9/6"
      },{
            medi_submit_time:'2019/9/5',
          user_id:"无锡润春",
          medi_type:"精选",
          medi_title:"水上灯 | 她台前那一立 胜多少刀与戟",
          medi_desc:"宝藏京剧演员",
          is_pass:"通过",
          deal_time:"2019/9/6"
      },{
            medi_submit_time:'2019/9/5',
          user_id:"墨香文学",
          medi_type:"精选",
          medi_title:"听完想去亲眼看看此间美景",
          medi_desc:"戏腔仙嗓青花瓷",
          is_pass:"通过",
          deal_time:"2019/9/6"
      },{
            medi_submit_time:'2019/9/5',
          user_id:"南风京剧社团",
          medi_type:"短视频",
          medi_title:"【京剧名场面】至爱国粹一眼间",
          medi_desc:"个人很喜欢的几段，根本停不下来",
          is_pass:"待审核",
          deal_time:""
      },{
            medi_submit_time:'2019/9/5',
          user_id:"轻听风语手工",
          medi_type:"精选",
          medi_title:" 在剧院工作——自己动手做戏剧",
          medi_desc:"戏剧作为最后的手工艺品之一，常常是由能做各种相关工作的人创作的。只要有毅力、创造力和平衡一份日常工作、一个剧院的夜晚以及其间的所有工作的能力，任何事情都是可能的。",
          is_pass:"待审核",
          deal_time:""
      },{
            medi_submit_time:'2019/9/5',
          user_id:"共暖原创",
          medi_type:"精选",
          medi_title:"中国失传以及濒临失传绝技大观",
          medi_desc:"曾经和变脸并称的绝技，如今却几乎销声匿迹，他该留下，还是淘汰？",
          is_pass:"待审核",
          deal_time:""
      },{
              medi_submit_time:'2019/9/3',
              user_id:"南殷设计",
              medi_type:"短视频",
              medi_title:"【粘土】#小花旦#不重要的贴后脑勺鬓发和敷衍的身体",
              medi_desc:"用超轻粘土去做传统的角色会怎样呢?",
              is_pass:"待审核",
              deal_time:"2019/9/4"

            },{
              medi_submit_time:'2019/9/3',
              user_id:"离屿话剧社",
              medi_type:"短视频",
              medi_title:"1分钟京剧系小姐姐教你学会京剧正确发音！",
              medi_desc:"点开你就能学会！",
              is_pass:"通过",
              deal_time:"2019/9/4"

            },{
              medi_submit_time:'2019/9/3',
              user_id:"厚如高校",
              medi_type:"短视频",
              medi_title:"秦腔《忠保国》选段，原谅我笑出了声",
              medi_desc:"特别有意思，表演得好，笑出声。。。",
              is_pass:"待审核",
              deal_time:"2019/9/4"

            },{
              medi_submit_time:'2019/9/3',
              user_id:"浩巨黄梅站",
              medi_type:"精选",
              medi_title:"古老的中国腔韵，听过的人不多了",
              medi_desc:"广成韵，唐代高道杜光庭创作于四川青城山",
              is_pass:"待审核",
              deal_time:"2019/9/4"

            },{
              medi_submit_time:'2019/9/3',
              user_id:"古色古香服饰",
              medi_type:"精选",
              medi_title:"超级仙的戏曲风汉服发型教程",
              medi_desc:"衣服是馥比仙，因为很素雅，所以妆造也很素。发型用了一点戏曲元素。花花头饰自制，两边的流苏头饰是戏曲头饰里的耳挖子。",
              is_pass:"待审核",
              deal_time:"2019/9/4"

            },{
            medi_submit_time:'2019/9/4',
          user_id:"东风软社团",
          medi_type:"精选",
          medi_title:"戏曲传承已经快断了",
          medi_desc:"",
          is_pass:"待审核",
          deal_time:""
      },{
            medi_submit_time:'2019/9/4',
          user_id:"弥枳文化",
          medi_type:"精选",
          medi_title:"自带轮滑效果的京剧演出现场~脚底下功夫简直太厉害了",
          medi_desc:"宋朝时，宋江收阎惜姣为外室，阎惜姣却与张文远私通，并以宋江与梁山来往书信要挟，宋江忍无可忍怒杀惜姣。阎惜姣死后心有不甘，鬼魂不甘寂寞，来到阳世找昔日相好三郎张文远，要勾三郎魂魄到阴间与她玩乐。三郎不从，被阎惜娇鬼魂活捉。此剧是从《水浒》戏发展而成。演叙阎惜娇被宋江杀死后，不忘与姘夫张文远的旧情，入夜前来活捉张文远与张到阴间再做夫妻。表演者叶翱畅，为男旦演员（男扮女装）！\n" +
            "收起",
          is_pass:"待审核",
          deal_time:""
      },{
            medi_submit_time:'2019/9/4',
          user_id:"南烟戏曲爱好者",
          medi_type:"精选",
          medi_title:"一棵小葱《墨梅》戏腔",
          medi_desc:"转自《梦想的声音第三季》",
          is_pass:"待审核",
          deal_time:""
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
    watch: {
//更改视频源 videoUrl从弹出框组件传值
      videoUrl: function (val) {
        if (val !== '') {
          this.$refs.videoPlayer.player.src(val)
        }
      },

//弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值

      state: function (val) {
        if (val) {
          this.$refs.videoPlayer.player.pause()
        }
      }
    },
    components: {
      videoPlayer
    },
    computed:{
        nowData:function () {
          var nowdata=new Date();
          return nowdata;
        },
      player () {
        return this.$refs.videoPlayer.player
      }
      },

      methods:{
        onPlayerPlay (player) {
        },
        onPlayerPause (player) {
        },
        playerStateChanged (player) {
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
          // console.log("通过成功");
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
  /*width: 1400px;*/
/*height: 600px;*/
  margin: 0;
  padding: 0;

}
#user_all_info{
  background-color:#262D47;
  background-color:#fff;
  float: left;
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
.container {
  background-color: #efefef;
  min-height: 100%;
}
</style>
