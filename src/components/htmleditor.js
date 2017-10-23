export default {
  name: 'HtmlEditor',
  props: {
    'value': {
      type: String,
      default: ''
    }
  },
  render(h) {
    return h('div', [
      h('textarea', {
        domProps: {rows: '20', innerHTML: 'fgf'},
        ref: 'editor'
      })]
    )
  },
  mounted() {
    console.log(this.$ui)
    let htmlEditor = window.UIkit.htmleditor(this.$refs.editor, {
      markdown: true,
      mode: 'tab'
    })
    let self = this
    this.$ui.$(this.$refs.editor).on('input', () => {
      const _val = htmlEditor.editor.getValue()
      if (_val !== self.value) {
        this.$emit('change', _val)
      }
    })
  }
}
