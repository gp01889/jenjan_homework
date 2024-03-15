import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import PackageDetail from './packageDetail.js'

export default ({
  components: {
    PackageDetail,
  },
  setup() {
    let packageNumber = ref('')
    let packageData = ref(null)
    let activeButton = ref(1);

    const search = async() =>{
      try {
        const response = await axios.get('https://wms.jenjan.com.tw/api/v4/logistics/status/P31226228764');
        packageData.value = response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
    }

    return { packageNumber, search, packageData, activeButton }
  },
  template: `
    <div class="row mt-5" :class="packageData === null ? 'justify-content-center' : 'justify-content-between' ">
      <div class="col-auto">
        <div class="package-nav">
          <div class="package-nav-btns d-flex justify-content-around">
            <button @click="activeButton = 1" :class="{ 'btn-primary': activeButton === 1 }" type="button" class="package-nav-btn btn rounded-pill">查詢包裹</button>
            <button @click="activeButton = 2" :class="{ 'btn-primary': activeButton === 2 }" type="button" class="package-nav-btn btn rounded-pill">查詢不明包裹</button>
          </div>
          <div class="text-center mt-5">
            <h1>您的包裹在哪?</h1>
            <h3>請輸入包裹代碼</h3>
            <div class="input-group mb-3 mt-3">
              <div class="input-group input-group-lg">
                <input type="text" v-model="packageNumber"  class="form-control" placeholder="輸入物流單號">
                <div class="input-group-append">
                  <button class="d-flex align-items-center btn btn-outline-secondary" type="button" id="button-addon2"><i class="me-2 bi bi-upc-scan"></i>QR</button>
                </div>
              </div>
            </div>
            <div class="mt-5 d-flex justify-content-between">
              <button type="button" @click="packageNumber = ''" class="package-btn-width btn btn-outline-primary">清除重填</button>
              <button type="button" @click="search" class="package-btn-width btn btn-outline-primary">查詢</button>
            </div>
            <h5 class="mt-5">
              輸入包裹查詢號碼時請勿輸入「-」或國字或是全形數字等符號。
              資料保留時間僅為三個月，您將無法查詢三個月之前的資料。
            </h5>
          </div>
        </div>
    </div>
    <div v-if="packageData !== null" class="col-6">
      <PackageDetail :data=packageData></PackageDetail>
    </div>
  </div>
  `
});