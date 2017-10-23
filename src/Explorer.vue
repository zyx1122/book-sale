<template>
  <div>
    <mother-board header="图书" sub-header="Vue CRUD 示例">
      <!--CRUD 工具栏-->
      <!--图书统计-->
      <div slot="counting">
        <counting-status :total="books.length"
                         :selection="selection.length"></counting-status>
      </div>
      <!--搜索框-->
      <div slot="search">
        <search-box :terms="terms" placeholder='输入要筛选的书名' @search="terms=$event"></search-box>
      </div>
      <!--按钮组-->
      <div slot="buttons">
        <button title='删除已选中的图书' class='uk-button uk-button-danger' v-if="hasSelection" @click="removeBooks">
          <i class='uk-icon-trash'></i>
        </button>
        <button class='uk-button uk-button-primary' @click="newBook">
          <i class='uk-icon-plus'></i>
          <span>添加</span>
        </button>
      </div>
      <!--图书数据表格-->
      <table class='uk-table uk-table-striped' v-if="bookFilter.length">
        <thead>
        <tr>
          <th class='uk-text-center disable-select'
              :class="{'sorting':sorted('name')}"
              data-col="name"
              @click="sortBy('name')">
            <div>书名
              <span :class="{'uk-icon-sort-asc':direction=='asc','uk-icon-sort-desc':direction=='desc'}"
                    v-if="sortingKey=='name'"></span>
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

      <!--对话框-->
      <!--图书编辑/新建 数据表单-->
      <modal ref="modal"
             :headerText="statusText"
             @dialogClose="current=undefined">
        <book-edit-form :book="current"
        ref="form" v-if="current">
        </book-edit-form>

        <div slot="footer"
        class="uk-modal-footer uk-text-right">
        <button class="uk-button-primary">保存</button>
        <button class="uk-button-danger"
        @click="$refs.modal.close()">关闭</button>
        </div>
      </modal>
      <!--对话框-->
    </mother-board>
  </div>
</template>

<script>
  import BookData from './fixtures/items.json'
  import _ from 'lodash'
  import SearchBox from './components/SearchBox.vue'
  import CountingStatus from './components/CountingStatus.vue'
  import MotherBoard from './components/MotherBoard.vue'
  import BookEditForm from './components/BookForm.vue'
  import Modal from './components/dialog.vue'

  export default {
    data() {
      return {
        books: BookData,
        terms: '',
        selection: [],
        sortingKey: '',
        direction: 'asc',
        current: undefined,
        statusText: ''
      }
    },
    components: {SearchBox, MotherBoard, CountingStatus, BookEditForm, Modal},
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
      sortBy(key) {
        if (key === this.sortingKey) {
          this.direction = this.direction === 'asc' ? 'desc' : 'asc'
        }
        this.sortingKey = key
        this.books = _.orderBy(this.books, key, this.direction)
      },
      sorted(key) {
        return key === this.sortingKey
      },
      newBook() {
        this.current = {}
        this.statusText = '添加新的图书'
        this.$refs.modal.open()
      },
      removeBooks() {
        // this.books = this.books.filter(x =>x != book)
        this.$ui.confirm('真的要删除所选中的图书吗?', () => {
          this.$http.delete('/api/books', {body: this.selection})
            .then((res) => {
              this.selection = []
              this.refreshBooks()
            })
        })
      }
    }
  }
</script>

<style lang='less' scoped>
  @import './assets/less/site-table.less';
</style>