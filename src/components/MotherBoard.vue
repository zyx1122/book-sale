<template>
  <div>
    <!--页头-->
    <slot name="header">
      <page-header :header="header"
                   :sub-header="subHeader"></page-header>

      <!--<div class='uk-block uk-block-primary uk-contrast'>-->
      <!--<div class='uk-container-center'>-->
      <!--<h1 class='uk-heading-large'>图书-->
      <!--<small>Vue CRUD 示例</small>-->
      <!--</h1>-->
      <!--</div>-->
      <!--</div>-->
    </slot>
    <!--页头-->

    <!--CRUD-->
    <div class='content'>
      <!--工具栏-->
      <div class='uk-grid uk-margin-small-bottom uk-margin-large-top'>
        <div class='uk-width-3-4'>
          <div class='uk-grid'>
            <!--图书统计-->
            <div class='uk-width-1-3'>
              <slot name="counting"></slot>
              <!--<span class='uk-text-large uk-text-muted'>共有-->
              <!--<span class='uk-text-bold'>{{books.length}}</span>本图书-->
              <!--</span>-->
              <!--<span v-if="hasSelection">&nbsp;已选中-->
              <!--<span class="uk-text-bold">{{selection.length}}</span>本图书-->
              <!--</span>-->
            </div>
            <!--图书统计-->
            <!--搜索框-->
            <div class='uk-width-2-3'>
              <slot name="search"></slot>
              <!--<search-box :terms="terms" placeholder='输入要筛选的书名' @search="terms=$event"></search-box>-->

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
            <slot name="buttons"></slot>
            <!--<button title='删除已选中的图书' class='uk-button uk-button-danger' v-if="hasSelection">-->
            <!--<i class='uk-icon-trash'></i>-->
            <!--</button>-->
            <!--<button class='uk-button uk-button-primary'>-->
            <!--<i class='uk-icon-plus'></i>-->
            <!--<span>添加</span>-->
            <!--</button>-->
          </div>
        </div>
      </div>
      <slot></slot>
      <!--工具栏-->
    </div>
    <!--页面正文-->

    <!--对话框-->
    <!--图书编辑/新建 数据表单-->
    <!--对话框-->
  </div>
</template>

<script type="text/ecmascript-6">
  import PageHeader from './PageHeader.vue'

  export default {
    props: [
      'header', 'subHeader'
    ],
    components: {
      PageHeader
    }
  }
</script>
