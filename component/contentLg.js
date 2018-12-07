Vue.component("content-lg",{
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
                <div class="article-content-lg">
                  <a href="">
                    <div class="article-content-image">
                        <img :src="item.imgSrc">
                        <div class="label" v-if="item.label"><p>{{item.label}}</p></div>
                    </div>
                    <h3 class="article-content-title">{{item.title}}</h3>
                    <p class="article-content-desc">{{item.desc}}</p>
                    <div class="article-content-other">
                        <p class="data-time">{{item.dataTime}}</p>
                        <img src="images/eye_icon.png" class="eyr-icon">
                        <p class="reading-count">{{item.readingCount}}</p>
                    </div>
                  </a>
                </div>
            </div>`
  }
)