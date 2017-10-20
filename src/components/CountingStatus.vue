<template>
  <div>
    <span class='uk-text-large uk-text-muted'>共有
    <span class='uk-text-bold'>{{total}}</span>本图书
  </span>
    <span v-if="selection">&nbsp;已选中
    <span class="uk-text-bold">{{selection}}</span>本图书
  </span>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    props: [
      'total', 'selection'
    ]
  }
</script>
