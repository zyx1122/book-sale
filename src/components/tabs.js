export const Tab = {
  name: 'Tab',
  props: {
    label: {
      type: String,
      default: 'Tab'
    }
  },
  template: '<li><slot></slot></li>'
}

export const Tabs = {
  name: 'Tabs',
  data() {
    return {
      tabItems: []
    }
  },
  beforeMount() {
    this.tabItems = this.$slots.default.filter(node => node.componentOptions && node.componentOptions.tag === 'tab').map((node, index) => {
      const data = node.componentOptions.propsData
      data.index = index
      return node
    })
  },
  template: `<div>
    <ul class="uk-tab" data-uk-tab="{active:0,connect:'#tabContents'}">
      <li v-for="tab in tabItems">
        <a href="">{{ tab.componentOptions.propsData.label }}</a>
      </li>
    </ul>
    <ul class="uk-switcher uk-margin" id="tabContents">
      <slot></slot>
    </ul>
  </div>`
}
