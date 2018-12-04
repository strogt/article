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
    props: ['beginning','title'], 
    template:`<div class="article-header">
                <a href="javascript:document.referrer === '' ? window.location.href = './' : window.history.go(-1);" class="goback"></a>
                <p class="article-title" >{{title}}</p>
                <img :src="beginning+'mobile/themes/default/images/article/meun_icon.png'" class="meun-icon" @click="navFun">
                <div class="meun-container" v-if="isShow">
                  <div class="meun-nav">
                    <a href="/">
                      <img :src="beginning+'mobile/themes/default/images/gzh/search_meun_icon.png'">
                      <span>首页</span>                
                    </a>
                    <a href="/category">
                      <img :src="beginning+'mobile/themes/default/images/gzh/tab__icon_class_default.png'">
                      <span>分类</span>
                    </a>
                    <a href="/user/index.html">
                        <img :src="beginning+'mobile/themes/default/images/gzh/tab__icon_mine_default.png'">
                        <span>我的</span>
                    </a>        
                  </div>
                </div>
            </div>`
  }
)