

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
            prop="create_time"
            label="创建时间"
            width="110"
            sortable
            align="center">
          </el-table-column>


          <el-table-column
            align="center"
            prop="medi_id"
            label="编号"
            width="100">
          </el-table-column>

          <el-table-column
            align="center"
            prop="type"
            label="类型"
            width="80"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="rank"
            label="级别"
            width="80"
          ></el-table-column>

          <el-table-column
            align="center"
            prop="content"
            label="内容"
            width="585"
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
    name: "LogManagement",

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
            type:'认证',
            content:'No active profile set, falling back to default profiles: default。',
            create_time:'2019/9/8',
            rank:'提醒'
          },{
            medi_id:'52345',
            type:'视频',
            content:'Multiple Spring Data modules found, entering strict repository configuration mode!',
            create_time:'2019/9/6',
            rank:'提醒'
          },{
            medi_id:'52345',
            type:'弹幕',
            content:'Spring Data JPA - Could not safely identify store assignment for repository candidate interface com.jalinyiel.qingxi.repository.GuessOperaRepository.',
            create_time:'2019/9/8',
            rank:'提醒'
          },{
            medi_id:'52345',
            type:'用户',
            content:'Spring Data MongoDB - Could not safely identify store assignment for repository candidate interface com.jalinyiel.qingxi.repository.CommentRepository.',
            create_time:'2019/9/7',
            rank:'提醒'
          },{
            medi_id:'52345',
            type:'认证',
            content:'Tomcat initialized with port(s): 8080 (http)',
            create_time:'2019/9/8',
            rank:'警告'
          },{
            medi_id:'52345',
            type:'视频',
            content:'Starting Servlet engine: [Apache Tomcat/9.0.22]',
            create_time:'2019/9/8',
            rank:'调试'
          },{
            medi_id:'52345',
            type:'用户',
            content:'Tomcat started on port(s): 8080 (http) with context path ',
            create_time:'2019/9/8',
            rank:'调试'
          },{
            medi_id:'52345',
            type:'认证',
            content:'Completed initialization in 39 ms',
            create_time:'2019/9/8',
            rank:'警告'
          },{
            medi_id:'52345',
            type:'弹幕',
            content:'Root WebApplicationContext: initialization completed in 7164 ms',
            create_time:'2019/9/7',
            rank:'调试'
          },{
            medi_id:'52345',
            type:'视频',
            content:'HHH000204: Processing PersistenceUnitInfo',
            create_time:'2019/9/6',
            rank:'危险'
          },{
            medi_id:'52345',
            type:'弹幕',
            content:'Initialized JPA EntityManagerFactory for persistence unit \'default\'',
            create_time:'2019/9/7',
            rank:'调试'
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






