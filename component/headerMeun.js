Vue.component("header-meun",{
    data: function () {
      return {
        isShow:false
      }
    },
    methods:{
      navFun(){
        this.isShow=!this.isShow;
      }
     
    },
    mounted(){

    },
    props: ['title'], 
    template:`<div class="article-header">
                <a href="javascript:document.referrer === '' ? window.location.href = './' : window.history.go(-1);" class="goback"></a>
                <p class="article-title" >{{title}}</p>
                <img src="images/meun_icon.png" class="meun-icon" @click="navFun">
                <div class="meun-container" v-if="isShow">
                  <div class="meun-nav">
                    <a href="articleIndex.html">
                      <img src="images/search_meun_icon.png">
                      <span>首页</span>                
                    </a>
                    <a href="articleClass.html">
                      <img src="images/tab__icon_class_default.png">
                      <span>分类</span>
                    </a>
                    <a href="">
                        <img src="images/tab__icon_mine_default.png">
                        <span>我的</span>
                    </a>        
                  </div>
                </div>
            </div>`
  }
)