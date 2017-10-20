<template>
  <div>
    <!--页头-->
    <page-header header="图书" sub-header="Vue CRUD 示例"></page-header>

    <!--<div class='uk-block uk-block-primary uk-contrast'>-->
      <!--<div class='uk-container-center'>-->
        <!--<h1 class='uk-heading-large'>图书-->
          <!--<small>Vue CRUD 示例</small>-->
        <!--</h1>-->
      <!--</div>-->
    <!--</div>-->

    <!--页头-->
    <!--CRUD-->
    <div class='content'>
      <!--工具栏-->
      <div class='uk-grid uk-margin-large-bottom'>
        <div class='uk-width-3-4'>
          <div class='uk-grid'>
            <!--图书统计-->
            <div class='uk-width-1-3'>
              <span class='uk-text-large uk-text-muted'>共有
                <span class='uk-text-bold'>{{books.length}}</span>本图书
              </span>
              <span v-if="hasSelection">&nbsp;已选中
                <span class="uk-text-bold">{{selection.length}}</span>本图书
              </span>
            </div>
            <!--图书统计-->
            <!--搜索框-->
            <div class='uk-width-2-3'>
              <search-box :terms="terms" placeholder='输入要筛选的书名' @search="terms=$event"></search-box>

              <!--<div class='uk-form'>-->
                <!--<div class='uk-form-icon'>-->
                  <!--<i class='uk-icon-search'></i>-->
                  <!--<input type='search' v-model="terms" placeholder='输入要筛选的书名' class='search-box uk-from-width-large'>-->
                <!--</div>-->
              <!--</div>-->

            </div>
            <!--搜索框-->
          </div>
        </div>
        <!--按钮组-->
        <div class='uk-width-1-4'>
          <div class='uk-float-right'>
            <button title='删除已选中的图书' class='uk-button uk-button-danger' v-if="hasSelection">
              <i class='uk-icon-trash'></i>
            </button>
            <button class='uk-button uk-button-primary'>
              <i class='uk-icon-plus'></i>
              <span>添加</span>
            </button>
          </div>
        </div>
      </div>
      <!--工具栏-->
    </div>
    <!--页面正文-->

    <!--正文-->
    <!--图书数据表格-->
    <table class='uk-table uk-table-striped' v-if="bookFilter.length">
      <thead>
      <tr>
        <th class='uk-text-center disable-select'
            :class="{'sorting':sorted('name')}"
            data-col="name"
            @click="sortBy('name')">
          <div>书名
            <span :class="{'uk-icon-sort-asc':direction=='asc','uk-icon-sort-desc':direction=='desc'}" v-if="sortingKey=='name'"></span>
          </div>
        </th>
        <th class='uk-text-center disable-select uk-width-1-6'>类别</th>
        <th class='uk-text-center disable-select uk-width-1-6'>书名</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='book in bookFilter' :class="{'book-selected':book.selected}">
        <td class='book-name uk-form uk-grid'>
          <div class='uk-width-1-10'>
            <input type='checkbox' class='uk-margin-right' v-model="book.selected" :data-isbn="book.isbn"
                   @change="selectChanged(book,$event)">
          </div>
          <div class='uk-width-9-10'>
            <a href='javascript:;' :title='book.name' class='uk-h3'>{{book.name}}</a>
            <p class='authors uk-text-muted uk-text-small'>{{book.authors}}</p>
          </div>
        </td>
        <td class='small'>{{book.category}}</td>
        <td class='published uk-text-center'>{{book.published}}</td>
      </tr>
      </tbody>
    </table>
    <div class="uk-text-muted uk-text-large uk-text-center" v-show="bookFilter.length===0">
      抱歉,没有找到符合条件的图书
    </div>
    <!--图书数据表格-->
    <!--正文-->

    <!--对话框-->
    <!--图书编辑/新建 数据表单-->
    <!--对话框-->
  </div>
</template>

<script>
  import BookData from './fixtures/items.json'
  import _ from 'lodash'
  import PageHeader from './components/PageHeader.vue'
  import SearchBox from './components/SearchBox.vue'

  export default {
    data() {
      return {
        books: BookData,
        terms: '',
        selection: [],
        sortingKey: '',
        direction: 'asc'
      }
    },
    components: {PageHeader, SearchBox},
    computed: {
      bookFilter() {
        return this.terms.length ? this.books.filter(x => x.name.indexOf(this.terms) > -1) : this.books
      },
      hasSelection() {
        return this.selection.length > 0
      }
    },
    methods: {
      selectChanged(book, e) {
        if (e.target.checked) {
          this.selection.push(book.isbn)
          this.selection = _.uniq(this.selection)
        } else {
          this.selection = _.reject(this.selection, b => book.isbn === b)
        }
      },
      sortBy (key) {
        if (key === this.sortingKey) {
          this.direction = this.direction === 'asc' ? 'desc' : 'asc'
        }
        this.sortingKey = key
        this.books = _.orderBy(this.books, key, this.direction)
      },
      sorted (key) {
        return key === this.sortingKey
      }
    }
  }
</script>

<style lang='less' scoped>
  @import './assets/less/site-table.less';
</style>