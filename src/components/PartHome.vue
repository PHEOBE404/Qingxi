<template>
  <div id="main">

    <div id="body">

      <div id="photo_item">
        <div class="photo_item_model" id="photo_item_model_1">
<!--          <img src="../assets/2019-08-20_165440.png"></img>-->

        </div>

        <div class="photo_item_model" id="photo_item_model_2">
<!--          <img src="../assets/后台界面-主页-2.png">-->
        </div>


        <div class="photo_item_model" id="photo_item_model_3">
          <img src="../assets/2019-08-20_165544.png">
        </div>
        <div class="photo_item_model" id="photo_item_model_4">
<!--          <img src="../assets/2019-08-20_165554.png">-->

          </div>






      </div>



    </div>



<!--    <div id="footer">-->
<!--      <div id="cop">-->

<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>



    export default {
        name: "PartHome",
      mounted() {
          this.drawline();
      },
      methods:{
          drawline(){
         var echarts = require('echarts');

            var myChart_1 = echarts.init(document.getElementById('photo_item_model_1'));
            myChart_1.setOption({
              title:{
                text:"  访问量                                                                      ",
                // subtext:'昨日平均每小时1,327，今日平均每小时1,333',
                left:0,
                backgroundColor:'#2F3753',//标题的背景颜色

                textStyle: {
                  fontSize: 24,
                  fontFamily:'Arial',
                  color:'#FFFFFF',
                  fontWeight:'normal'
                },
                subtextStyle:{
                  align:'right',
                  // color:'#ffffff',
                  fontStyle:'italic',
                  lineHeight:6
                }

              },
              legend:{
                data:[{

                 name: '昨日',
                  icon:'cirle',
                  textStyle:{
                   color:'#ffffff'
                  }
                },
                  {

                    name: '上月今日',
                    icon:'cirle',
                    textStyle:{
                      color:'#ffffff'
                    }
                  },
                  {

                    name: '今日',
                    icon:'cirle',
                    textStyle:{
                      color:'#ffffff'
                    }
                  },
                ],//与series中的name对应才能显示
                bottom:5,
                // borderColor:'#00ffff', //图例外面的一圈框框
                // borderWidth:10
                pageTextStyle:{
                  color:'#00ffff',
                  fontWeight:'bolder'
                }
              },
              grid:{
                show:true,
                borderColor:'#2F3753',
                borderWidth:0,//左右边框，为0则不显示
                containLabel:false,
                // backgroundColor:'#ffffff'
                tooltip:{
                  axisPointer:{
                    lineStyle:{ //无效
                      color:'#00ffff',
                      width:10
                    },
            crossStyle:{
                      color:'#00ffff'
            }


            }
            }


              },

              tooltip:{},
              xAxis:{
                name:'（时）',//name必须有否则不能显示坐标样式
                data:["8","9","10","11","12","13","14","15","16","17","18","19",],
                nameTextStyle:{
                  color:'#ffffff',
                  backgroundColor:'#3A425D'//坐标名称的背景色
                },
                axisLine:{
                  lineStyle:{
                    color:'#2F3753'
                  }
                },
                splitLine: {

                  lineStyle: {
                    color: '#0000ff', //分隔线颜色设置
                    width:100

                  }

                }
              },
              yAxis:{
                min:600,
                max:1800
              },
              series:[{
                name: "昨日",//与legend中的data对应才能显示
                type: "line",
                data: [800, 920, 1000, 1123, 1200, 1170, 1100, 1000, 800, 910, 1000, 1200],
                symbolSize: 6,
                itemStyle: {
                  color: '#FE8BAB',
                  borderWidth: 2,

                }
              }

              ,{
                name:"上月今日",//与legend中的data对应才能显示
                type:"line",
                data:[750,1000,1020,1200,1172,1300,1200,1080,720,1100,1200,1300],
                  symbolSize: 6,
                  itemStyle:{
                  color:'#F0CC50',
                    borderWidth: 2,

                  }
              },{
                name:"今日",//与legend中的data对应才能显示
                type:"line",
                data:[700,1100,920,1300,1400,1430,1100,1200,1190,1300,1270,1400],
                  symbolSize: 6,
                  itemStyle:{
                  color:'#4A9BDB',
                    borderWidth: 2,

                  }
              }],
              textStyle:{
                color:'00ffff',
                font:18
              }


            });
            var myChart_2 = echarts.init(document.getElementById('photo_item_model_2'));
            myChart_2.setOption({
              title:{
                text:'   认证用户入驻目标                                                    ',
                backgroundColor:'#2F3753',//标题的背景颜色

              textStyle: {
              fontSize: 24,
                fontFamily:'Arial',
                color:'#FFFFFF',
                fontWeight:'normal'
            },
              },
              tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
              },
              toolbox: {
                feature: {
                  restore: {},
                  saveAsImage: {}
                }
              },
              series: [
                {
                  name: '业务指标',
                  type: 'gauge',
                  detail: {formatter:'{value}%'},
                  data: [{value: 38, name: ''}],
                  radius:"120",
                  startAngle:240,
                  endAngle:-60,
                  axisLine:{
                    lineStyle:{
                     color:[[0.65, '#4A9BDB'],  [1, '#F0CC50']],
                      width:75

                    },
                  },
                  splitLine:{
                    show:false
                  },
                  axisTick:{
                    show:false

                  },
                  axisLabel:{
                    show:true,
                    distance:-50,
                    // backgroundColor:'#2F3753',
                    // borderColor:'#2F3753'
                  },
                  // formatter:{
                  //   function (value) {
                  //     return value+'30' + 'km/h';
                  //   }
                  // },
                  pointer:{
                    length:'100%',
                    width:6

                  },
                  itemStyle:{
                    color:'#ffffff'
                  },
                  detail:{
                    show:true,
                    width:80,
                    height:80,
                    backgroundColor:"#2F3753",//可以换成图片
                    offsetCenter:[180,10],
                    color:'#4A9BDB',
                    // padding:
                    fontSize:50,
                    borderWidth:40,
                    borderColor:'#2F3753',
                    borderRadius:5
                  },
                  markPoint:{
                    symbol:'triangle',
                    symbolSize:50,
                    symbolOffset:[20,20],
                    label:{ //没效果
                      show:false,
                      color:'#0000ff',
                      backgroundColor:'#00ffff'
                    },
                    itemStyle:{//无效
                      color:'#EE0000'
                    },
                    data:[
                      {
                        name:'达成',
                        symbolSize:30

                      },{
                      name:'计划'
                      }
                    ]

                  },
                  markLine:{
                    label:{
                      show:'true',
                      position:'start'
                    }
                  }

                },

              ]
            });



            var myChart_3 = echarts.init(document.getElementById('photo_item_model_3'));
            myChart_3.setOption({
              title:{
                text:'   用户在线总时长                                                           ',
                backgroundColor:'#2F3753',
                textStyle:{
                  fontSize: 24,
                  fontFamily:'Arial',
                  color:'#FFFFFF',
                  fontWeight:'normal'
                }

              },
              legend: {
                textStyle:{
                  color:'#ffffff'
                },
                bottom:5,

              },
              tooltip: {},
              dataset: {
                source: [
                  ['product', '昨日', '上月今日', '日销量'],
                  ['视频时长', 43.3, 85.8, 93.7],
                  ['娱乐时长', 83.1, 73.4, 55.1],
                  ['资讯时长', 86.4, 65.2, 82.5]

                ],
                textStyle:{
                  color:'#ffffff'
                }
              },
              xAxis: {
                type: 'category',
                name:'',
                nameTextStyle:{
                  color:'#ffffff'
                },
                axisLabel:{
                  color:'#ffffff'
                }
              },
              yAxis: {
                axisLabel:{
                  color:'#ffffff'
                }
              },
              // Declare several bar series, each will be mapped
              // to a column of dataset.source by default.
              series: [
                {type: 'bar',
                itemStyle:{
                  color:'#FE8BAB',
                }},
                {type: 'bar',
                  itemStyle:{
                    color:'#F0CC50',

                  }
                },
                {type: 'bar',
                  itemStyle:{
                    color:'#4A9BDB',

                  }
                }
              ]


            });
            var myChart_4 = echarts.init(document.getElementById('photo_item_model_4'));
            myChart_4.setOption({
              title:{
                text:'   收入与盈利                                                                 ',
                backgroundColor:'#2F3753',
                textStyle:{
                  fontSize: 24,
                  fontFamily:'Arial',
                  color:'#FFFFFF',
                  fontWeight:'normal'
                }

              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                bottom:15,
                left:35,
                data:[
                  {name:'文化商城',
                  textStyle:{
                    color:'#ffffff'
                  }
                  },
                  {name:'广告投放',
                    textStyle:{
                      color:'#ffffff'
                    }},
                  {name:'线下活动',
                    textStyle:{
                      color:'#ffffff'
                    }}
                  ]
              },
              textStyle:{
                color:'#ffffff'

              },
              series: [
                {
                  name:'收入来源',
                  type:'pie',
                  radius: ['0%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:335,
                      name:'文化商城',
                      itemStyle:{
                      color:'#4A9BDB',
                      },


                      labelLine:{
                      show:true,
                        length:10,
                        length2:10,
                        lineStyle:{
                        color:'#00ffff',
                          width:10
                        }
                      },
                       markPoint:{
                      itemStyle:{
                        color:'#00ffff'
                      }
                       }
                    },
                    {value:310,
                      name:'广告投放',
                      itemStyle:{
                        color:'#F0CC50'
                      }
                    },
                    {value:135,
                      name:'线下活动',
                      itemStyle:{
                        color:'#FE8BAB'
                      }
                    }

                  ]
                }
              ]

            })

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
    height: 570px;
    background-color: #191B30;
    color: #fff;
  }
  #header{
    width: 100%;
    height: 50px;
    background-color: #3A425D;
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
  }
  #logo{
    width: 200px;
    height: 50px;
    float: left;

  }
  #logo_p{
    font-size: 22px;
    padding-top: 12px;
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

  }
  .photo_item_model img{
    padding-top: 14px;
  }
  #photo_item_model_1{
    background-color: #3A425D;
    /*background-color: #ffffff;*/

  }
  #photo_item_model_3{
    background-color: #3A425D;
    /*background-color: #ffffff;*/

  }#photo_item_model_2{
    background-color: #3A425D;
    /*background-color: #ffffff;*/


  }#photo_item_model_4{
    /*background-color: #3A425D;*/
    background-color: #3A425D;


  }
</style>
