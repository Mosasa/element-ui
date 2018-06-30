<!--*入口组件-->
<template>
  <div id="app">
  <header class="header-fixed">
   <!-- *布局组件 -->
      <el-row>
        <el-col :span="24" > 
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
  </header>
  <main>
      <div class="main-left">
        <!-- *导航菜单组件 -->
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <!-- *步骤条组件 -->
          <el-steps :space="200" :active="step">
              <el-step title="活动信息"></el-step>
              <el-step title="报名签到"></el-step>
              <el-step title="分享设置"></el-step>
              <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <!-- *表单组件 -->
            <el-form class="demo-ruleForm" ref="ruleForm"  label-position="top" :model="ruleForm"> 
              <!-- ref:锚点 类似DOM操作 -->
              <el-form-item prop="name" label="活动名称">
                <el-input v-model="ruleForm.name" size="larget"></el-input>
                <!-- v-model具有双向绑定的能力，相当于 （input事件+change事件）， 但是仅限于在表单中使用 -->
              </el-form-item>
              <el-form-item label="" prop="fenlei">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item_label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button @click.prevent="dialogFormFenLeiVisible=true" type="text">设置</el-button>
                  </el-col>
                </el-row>
                <!-- 单选按钮组容器组件 -->
                <el-radio-group v-model="ruleForm.FenLei">
                  <el-radio v-for="item of ruleForm.fenleis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="tag in dynamicTags" type="primary" :key="tag" :closable="true" :disable-transitions="false" @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                </el-form-item>
              </el-form>
            </el-dialog>
            <div class="el-form-item_label">活动标签</div>
            <el-tag v-for="tag in dynamicTags" type="primary" :key="tag" :closable="true" :disable-transitions="false" @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-button class="button-new-tag" size="small" @click="dialogTableVisible = true">添加标签</el-button>
            <el-dialog title="添加标签" :visible.sync="dialogTableVisible">
              <el-input  class="input-new-tag" v-model="inputValue" ref="saveTagInput" @keyup.enter.native="handleInputConfirm " @blur="handleInputConfirm"></el-input>
            </el-dialog>
          </div>
          <!-- *按钮组容器组件  上一步  下一步  发布活动 -->
          <el-table :data="activities" style="width:100%"> 
            <el-table-column prop="date" label="日期" style="width:33.3%"></el-table-column>
            <el-table-column prop="name" label="活动名称" style="width:33.3%"></el-table-column>
            <el-table-column prop="other" label=备注></el-table-column>
          </el-table>
          <el-button type="primary" class="fabu">发布活动</el-button>
        </div>
        <el-button-group>
        <el-button v-show="preStep" type="primary" @click.native.prevent="handlePreStep">
          <i class="el-icon-arrow-left el-icon-left"></i>上一步
        </el-button>
        <el-button v-show="nextStep" type="primary" @click.native.prevent="handleNextStep">
          下一步<i class="el-icon-arrow-right el-icon-right"></i>
        </el-button>
       </el-button-group>
      </div> 
  </main>
<!-- 单个按钮组件 -->
    <!-- <el-button type="primary" :loading="isLoading" icon="el-icon-edit">提交</el-button>
    <form action="http://www.baidu.com" method="get">
      <el-button type="success" icon="el-icon-loading"   @click="doSubmit">提交</el-button>
    </form>
    <el-button type="warning" > 提交</el-button>
    <el-button type="danger" :disabled="disabled">提交</el-button> -->
<!-- 按钮组容器组件 -->
    <!-- <el-button-group>
      <el-button type="primary" ><i class="el-icon-arrow-left el-icon-left"></i>上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon-right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" class="el-icon-edit"></el-button>
      <el-button type="primary" class="el-icon-share"></el-button>
      <el-button type="primary" class="el-icon-delete"></el-button>
    </el-button-group> -->
  </div>
</template>

<script>
import ElButton from '@/components/ElButton'
import ElButtonGroup from '@/components/ElButtonGroup';
export default {
  name: 'App',
  data(){
    return {
      disabled: false,
      isLoading:true,
      step:0,
      preStep:true,
      nextStep:true,
      dialogFormFenLeiVisible:false,
      dialogTableVisible: false,
      ruleForm:{
        name:'',
        fenleis:[
          {
            name:'未发布'
          },
          {
            name:'测试活动'
          },
          {
            name:'精彩活动'
          }
          ],
          fenlei:'测试活动',
      },
      inputValue:'',
      dynamicTags:['标签一','标签二','标签三'],
      inputVisible:false,
      activities:[
        {
          date:'2018-06-26',
          name:'激流勇进',
          other:'啦啦啦啦啦啦'
        },
        {
          date:'2018-06-27',
          name:'过山车',
          other:'无'
        },
        {
          date:'2018-06-28',
          name:'旋转木🐎',
          other:'///'
        }
      ]
    }
  },
  components: {
    // 'el-button': ElButton,
    // 'el-button-group': ElButtonGroup
  },
  mounted(){
    setTimeout(() => {
      this.disabled = true;
    },2000)
  },
  methods: {
    doLoading(){
      console.log('aaa')
    },
    doSubmit(evt){
      console.log(evt);
    },
    handlePreStep(){  
      this.step --;
      this.goStep(this.step);
      // this.preStep = !this.preStep;
    },
    handleNextStep(){
      this.step ++;
      this.goStep(this.step);
    },
    goStep(n){
      switch(n){
        case 1:
        this.preStep = false
        this.Next = true
        break;
        case 2:
        case 3:
        this.preStep = true,
        this.nextStep = true
        break;
        case 4:
        this.preStep = true,
        this.nextStep = false
        break;
      }
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput(){
      this.inputVisible = true,
      this.$nextTick(_ => {//$fnextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm(){
      let inputValue = this.inputValue;
      if(inputValue){
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue='';
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header{
  z-index: 1000;
  transition: all 0.5s ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0.2px 4px 0 rgba(0, 0 0, .12), 0 0 6px 0 rgba(0, 0 0, .04);
}
header.header-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo{
  padding-left: 300px !important;
}
main{
  margin-top: 60px;
  display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.el-table{
  margin: 20px 0;
}
.fabu{
  float: right;
}
.el-button-group{
  margin: 50px 0;
  padding: 0 300px;
}
</style>
