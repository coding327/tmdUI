import Demo from './demo'
import Card from './card'

const components = [
  Demo,
  Card
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.use(component)
  })
}

export {
  install,
  Demo,
  Card
}

export default {
  install
}