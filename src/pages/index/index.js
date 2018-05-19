import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import {
  InfiniteScroll
} from 'mint-ui';
import Foot from 'components/Foot.vue'


Vue.use(InfiniteScroll);


let app = new Vue({
    el: '#app' ,
    data: {
        lists: null,
        pageNum: 1,
        loading: false,
        allLoaded: false
    },
    created() {
        this.getLists()
    },
    methods: {
        getLists() {
            if(this.allLoaded) {
                return 
            }
            this.loading = true
            axios.post(url.hotLists, {
              pageNum: this.pageNum,
              pageSize: this.pageSize
            }).then(res => {
                let curLists = res.data.lists
                // 判断所有数据是否加载完毕
                if(curLists.length < this.pageSize) {
                    this.allLoaded = true
                }
                if(this.lists) {
                    console.log('1111')
                    this.lists = this.lists.concat(curLists)
                } else {
                    this.lists = res.data.lists                    
                }
                this.pageNum++
                this.loading = false
            })
        }
    },
    components: {
        Foot
    }
})

