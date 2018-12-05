Vue.component("title-module",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['title'], 
    template:`<div class="module-title white">
                <div class="title-container">
                    <h1>{{title}}</h1>
                </div>
              </div>`
  }
)