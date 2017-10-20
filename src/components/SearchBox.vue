<template>
  <div class='uk-form'>
    <div class='uk-form-icon'>
      <i class='uk-icon-search'></i>
      <input type='search' :value="terms" @keyup="$emit('search',$event.target.value)" :placeholder='placeholder' class='search-box uk-from-width-large'>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: [
      'terms', 'placeholder'
    ]
  }
</script>
