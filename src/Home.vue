<template>
  <div>
    <div class="section">
      <!--热门推荐-->
      <slider :slides="page_data.top"></slider>
      <!--快讯-->
      <div class="announcement">
        <label>快讯</label>
        <span>{{page_data.announcement.text}}</span>
      </div>
    </div>
    <div class="section">
      <book-list :books="page_data.promotions" heading="最新更新" @onBookSelect="preview($event)"></book-list>
    </div>
    <div class="section">
      <book-list :books="page_data.promotions" heading="编辑推荐" @onBookSelect="preview($event)"></book-list>
    </div>
    <modal-dialog ref="dialog" @dialogClose="selected={}" headerText="书籍详情">
      <div>
        <img :src="selected.img_url">
      </div>
      <div>
        {{selected.title}}
      </div>
    </modal-dialog>
  </div>
</template>

<script>
  import BookList from './components/BookList.vue'
  import Slider from './components/Slider.vue'
  import ModalDialog from './components/dialog.vue'
  import faker from './fixtures/faker'

//  const debug = process.env.NODE_ENV !== 'production'

  export default {
    data () {
      return {
        page_data: undefined,
//        announcement: {},
//        slides: [],
//        latestUpdated: [],
//        recommended: [],
        selected: {}
      }
    },
    created () {
      this.page_data = faker.getHomeData()
//      开发环境下使用模拟数据
//      if (debug) {
//        const fakeData = faker.getHomeData()
//        for (var prop in fakeData) {
//          this[prop] = fakeData[prop]
//        }
//      } else {
//        this.$http.get('/static/home/home.json')
//          .then(res => {
//            for (var prop in res.body) {
//              this[prop] = res.body[prop]
//            }
//          }
//          , (error) => {
//            console.log('获取数据失败:${error}')}
//          )
//      }
    },
    components: {
      BookList, Slider, ModalDialog
    },
    methods: {
      preview (book) {
        this.selected = book
        this.$refs.dialog.open()
      }
    }
  }
</script>

<style>
  .announcement {
    font-size: 12px;
    padding: 5px;
    background: #fff;
  }

  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;

  }

  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display: inline-block;
  }

</style>