# vue-books

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
 data () {
      return {
        announcement: '今日图书特价',
        slides: [
          {id: 1, img_url: '/static/sliders/t1.svg'},
          {id: 2, img_url: '/static/sliders/t2.svg'}
        ],
        latestUpdated: [
          {
            id: 1,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/1.svg'

          },
          {
            id: 2,
            title: '春',
            authors: ['Amili'],
            img_url: '/static/covers/2.svg'

          },
          {
            id: 3,
            title: '秋',
            authors: ['Daniel'],
            img_url: '/static/covers/3.svg'

          },
          {
            id: 4,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/4.svg'

          },
          {
            id: 5,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/5.svg'

          }
        ],
        recommended: [
          {
            id: 1,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/1.svg'

          },
          {
            id: 2,
            title: '春',
            authors: ['Amili'],
            img_url: '/static/covers/2.svg'

          },
          {
            id: 3,
            title: '秋',
            authors: ['Daniel'],
            img_url: '/static/covers/3.svg'

          },
          {
            id: 4,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/4.svg'

          },
          {
            id: 5,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/5.svg'

          }
        ]
      }
    }

```
###orgin-table-search code
>Explorer.vue To MotherBoard.vue

```
<!--页头-->
    <page-header header="图书" sub-header="Vue CRUD 示例"></page-header>
    
    <!--正文-->
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