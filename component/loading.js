Vue.component("loading",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['loading'],
    template:`<div class="loading-container white">
            		<div class="loadmore" v-if="loading">
            			<span class="loadmore-content">加载更多</span>
            				<i class="loading-ui"></i>
            		</div>
            		<div class="loadmore" v-else>
            			<span class="loadmore-content">~ 暂无更多数据 ~</span>
            		</div>
            	</div>`
  }
)
