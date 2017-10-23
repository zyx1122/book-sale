<template>
  <div>
    <form class="uk-form uk-form-horizontal">
      <div class="uk-container uk-container-center">
        <tabs :index="1">
          <tab label="通用">
            <div class="uk-form-row">
              <label for="name" class="uk-form-label">书名</label>
              <div class="uk-form-controls">
                <input name="name" class="uk-form-width-large" autofocus="autofocus" v-model="current.name" id="name">
              </div>
            </div>
            <div class="uk-form-row">
              <label for="isbn" class="uk-form-label">书号</label>
              <div class="uk-form-controls">
                <input name="isbn" class="uk-form-width-large" v-model="current.isbn" id="isbn">
              </div>
            </div>
            <div class="uk-form-row">
              <label for="price" class="uk-form-label">售价</label>
              <div class="uk-form-controls">
                <input name="price" class="uk-form-width-large" v-model="current.price" id="price">
              </div>
            </div>
            <div class="uk-form-row">
              <label for="catgeory" class="uk-form-label">类别</label>
              <div class="uk-form-controls">
                <input name="catgeory" class="uk-form-width-large" v-model="current.catgeory" id="catgeory">
              </div>
            </div>
            <div class="uk-form-row">
              <label for="published" class="uk-form-label">出版日期</label>
              <div class="uk-form-controls">
                <input type="date" name="published" class="uk-form-width-large" v-model="current.published"
                       id="published" placeholder="yyyy-mm-dd">
              </div>
            </div>
            <div class="uk-form-row">
              <label class="uk-form-label">&nbsp;</label>
              <div class="uk-form-controls">
                <input type="checkbox" v-model="current.is_published">上市销售
              </div>
            </div>
            <div class="uk-form-row">
              <label for="pages" class="uk-form-label">页数</label>
              <div class="uk-form-controls">
                <input type="number" step="any" name="pages" class="uk-form-width-large" v-model="current.pages"
                       id="pages">
              </div>
            </div>
            <div class="uk-form-row">
              <label for="authors" class="uk-form-label">作者</label>
              <div class="uk-form-controls">
                <input name="authors" class="uk-form-width-large" v-model="current.authors" id="authors">
              </div>
            </div>
          </tab>
          <tab label="摘要">
            <html-editor :value="current.summary" @change="current.summary = $event"></html-editor>
          </tab>
        </tabs>
      </div>
    </form>
  </div>
</template>

<script>
  import HtmlEditor from './htmleditor'
  import {Tabs, Tab} from './tabs.js'

  export default {
    data() {
      return {
        current: {}
      }
    },
    props: [
      'book'
    ],
    components: {
      HtmlEditor, Tab, Tabs
    },
    computed: {
      authors: {
        get() {
          return this.current.authors ? this.current.authors.join(',') : ''
        },
        set(val) {
          this.current.authors = val.split(',')
        }
      },
      is_published: {
        get() {
          return this.current.status === '上市销售'
        },
        set(val) {
          this.current.status = val ? '上市销售' : ''
        }
      }
    }
  }
</script>
