<template>
  <div class="uk-modal" ref="modal">
    <div class="uk-modal-dialog">
      <div class="uk-modal-header">
        <a class="uk-modal-close uk-close uk-float-right"></a>
        <h2 class="uk-display-inline">{{headerText}}</h2>
      </div>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: undefined
      }
    },
    props: [
      'headerText'
    ],
    mounted() {
      this.dialog = this.$ui.modal(this.$refs.modal)
      var self = this
      this.dialog.on('show.uk.modal', () => self.$emit('dialogOpen'))
      this.dialog.on('hide.uk.modal', () => self.$emit('dialogClose'))
    },
    methods: {
      open() {
        this.dialog.show()
      },
      close() {
        this.dialog.hide()
      }
    }
  }
</script>
