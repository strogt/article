Vue.component("title-module",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['title','hot','details'], 
    template:`<div class="module-title white">
                <div class="title-container">
                     <h1><i class='hot' v-if='hot'></i>{{title}}</h1>
                     <div class="title-other" v-if='details'>
                         <div class="label">{{details.label}}</div>
                         <div class="data-time">{{details.dataTime}}</div>
                         <div class="share"><img src="images/share_icon.png"></div>
                     </div>
                </div>
            </div>`
  }
)