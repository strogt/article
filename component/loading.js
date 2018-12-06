Vue.component("is-loading",{
    data: function () {
      return {
      }
    },
    methods:{
    },
    mounted(){

    },
    props: ['loading'],
    template:`<div id="loading">
		<div class="weui-loadmore" v-if="loading">
			<span class="weui-loadmore__tips">加载更多</span>
				<i class="weui-loading"></i>
		</div>
		<div class="weui-loadmore weui-loadmore_line" v-else>
			<span class="weui-loadmore__tips">暂无更多数据</span>
		</div>
 
	</div>`
  }
)
