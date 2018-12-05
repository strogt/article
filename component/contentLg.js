Vue.component("content-lg",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['beginning','item'], 
    template:`<div class="article-conter-cotainer white">
                <div class="article-content-lg">
                  <a href="">
                    <div class="article-content-image">
                        <img :src="beginning+item.imgSrc">
                        <div class="label"><p>{{item.label}}</p></div>
                    </div>
                    <h3 class="article-content-title">{{item.title}}</h3>
                    <p class="article-content-desc">{{item.desc}}</p>
                    <div class="article-content-other">
                        <p class="data-time">{{item.dataTime}}</p>
                        <img :src="beginning+'mobile/themes/default/images/article/eye_icon.png'" class="eyr-icon">
                        <p class="reading-count">{{item.readingCount}}</p>
                    </div>
                  </a>
                </div>
            </div>`
  }
)