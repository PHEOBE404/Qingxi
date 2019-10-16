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
          :default-sort = "{prop: 'create_time', order: 'descending'}"
          size="medium "
        >
          <el-table-column type="expand" label="排名" width="70">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label=""  style="width: 80px;">
<!--                  <span>{{ props.row.user_rank }}</span>-->
                  排名 <br>
                  <sapn>0001</sapn>
                  <br>
                  <sapn>0002</sapn>
                  <br>
                  <sapn>0003</sapn>
                  <br>...

                </el-form-item>

                <el-form-item label=""style="width: 120px">
<!--                  <span>{{ props.row.user_id }}</span>-->
                  用户ID<br>
                  <sapn>732445</sapn>
                  <br>
                  <sapn>563875</sapn>
                  <br>
                  <sapn>235435</sapn>
                  <br>...

                </el-form-item>
                <el-form-item label="" style="width: 120px">
<!--                  <span>{{ props.row.user_name }}</span>-->
                  用户名
                  <br>
                  <sapn>武林萌主</sapn>
                  <br>
                  <sapn>回忆の痛</sapn>
                  <br>
                  <sapn>倒霉熊</sapn>
                  <br>...
                </el-form-item>
                <el-form-item label="" style="width: 200px">
<!--                  <span>{{ props.row.score }}</span>-->
                  得分<br>
                  <sapn>467575</sapn>
                  <br>
                  <sapn>456766</sapn>
                  <br>
                  <sapn>451234</sapn>
                  <br>...

                </el-form-item>
                <el-form-item label="" style="width: 200px">
<!--                  <span>{{ props.row.answer }}</span>-->
                  创建时间<br>
                  <sapn>2019/9/8</sapn>
                  <br>
                  <sapn>2019/9/9</sapn>
                  <br>
                  <sapn>2019/9/9</sapn>
                  <br>...

                </el-form-item>

              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            prop="game_id"
            label="游戏编号"
            width="140"
            align="center">

          </el-table-column>
          <el-table-column
            prop="game_name"
            label="游戏名称"
            width="270"
            align="center">

          </el-table-column>
          <el-table-column
            prop="read"
            label="点击"
            width="90"
            align="center">

          </el-table-column>
          <el-table-column
            prop="barrage"
            label="弹幕"
            width="90"
            align="center">

          </el-table-column>

          <el-table-column
            text
            prop="create_time"
            label="创建时间"
            width="150"
            sortable
            align="center">
          </el-table-column>





          <el-table-column
            align="center"
            prop="updata_time"
            label="更新时间"
            width="150"
            sortable>
          </el-table-column>


          <el-table-column
            align="center"
            label="操作"
            width="200"
            :formatter="formatter"
          >

            <template slot-scope="scope">

              <el-button @click="passMedi(scope.row)" type="primary" >编辑</el-button>
              <el-button @click="showRufusePanel(scope.row)" type="danger" >删除</el-button>






            </template>

          </el-table-column>


        </el-table>


      </div>


    </div>
  </div>
</template>





<script>

  export default {
    name: "GameRank",

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
            create_time:'2019/9/2',
            game_name:"贪吃蛇",
            game_id:'48656234',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'23546',
            barrage:'455'

          }, {
            create_time:'2019/9/2',
            game_name:"我在唱什么",
            game_id:'867985757',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'3562',
            barrage:'89'


          }, {
            create_time:'2019/9/2',
            game_name:"识别脸谱",
            game_id:'134216534',
            is_pass:"待审核",
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'467',
            barrage:'55'
          }, {
            create_time:'2019/9/2',
            game_name:"曲水流觞",
            game_id:'56754756',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'8097',
            barrage:'867'
          },{
            create_time:'2019/9/1',
            game_name:"明帝王图",
            game_id:'243342543',
            updata_time:"2019/9/1",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'14311',
            barrage:'46'

          },{
            create_time:'2019/9/3',
            game_name:"鹊桥美人",
            game_id:'145456544',
            updata_time:"2019/9/4",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'78667',
            barrage:'876'

          },{
            create_time:'2019/9/3',
            game_name:"黄梅之宝",
            game_id:'867957890',
            updata_time:"2019/9/4",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'342',
            barrage:'43',
              // user_rank:[
              //   {
              //     rank:'0001',
              //     user_id:'34521',
              //     user_name:'alpha',
              //     score:'7721',
              //     create_time:'2019/9/9'
              //   }
              // ],


          },{
            create_time:'2019/9/2',
            game_name:"再战穆桂英",
            game_id:'13434533',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'4762',
            barrage:'78'
          },{
            create_time:'2019/9/2',
            game_name:"我与花木兰",
            game_id:'234143232',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'6574',
            barrage:'222'
          },{
            create_time:'2019/9/2',
            game_name:"梁山伯的梦",
            game_id:'765865476',
            updata_time:"2019/9/5",
            ques_number:'113455',
            queston:'',
            answer:'',
            read:'42',
            barrage:'3'
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
        row.updata_time=nowdata.toLocaleDateString();
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
          row.updata_time='--------';
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

        this.rowindex.updata_time=  this.pick_data;
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
