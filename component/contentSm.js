Vue.component("content-sm",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['item'], 
    template:`<div class="article-conter-cotainer white">
                <div class="article-content-sm">
                  <a href="">
                    <img :src="item.imgSrc" class="content-sm-image">
                    <div class="content-sm">
                        <h3 class="content-sm-title">{{item.title}}</h3>
                        <div class="content-sm-lable" v-if="item.label"><p>{{item.label}}</p></div>
                        <div class="content-sm-other">
                            <p class="data-time">{{item.dataTime}}</p>
                            <div>
                                <img src="images/eye_icon.png" class="eyr-icon">
                                <p class="reading-count">{{item.readingCount}}</p>
                            </div>
                        </div>
                    </div>
                  </a>
                </div>
            </div>`
  }
)