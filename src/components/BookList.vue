<template>
  <div class="book-list">
    <div class="header">
      <div class="heading">{{heading}}</div>
      <div class="more">更多...</div>
    </div>
    <div class="book-item">
      <div class="book" v-for="book in books" @click="$emit('onBookSelect',book)">
        <div class="cover">
          <img :src="book.img_url">
        </div>
        <div class="title">{{book.title}}</div>
        <div class="authors">{{book.authors | join}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'heading',
      'books'
    ],
    filters: {
      join (args) {
        return args.join(',')
      }
    }
  }
</script>

<style lang="less">
  @import './list.less';
  .book-item {
    overflow: hidden;
  }
</style>
