import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import Header from './header.js';
import Package from './package.js';
export default {
    components: {
      Package,
      Header
    },
  template: `
  <div class="container mt-5">
    <Header></Header>
    <Package></Package>
  </div>
  `
}