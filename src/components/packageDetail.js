
export default ({
    props: {
        data: Object
      },

    template: `
      <table class="table table-striped table-borderless rounded-3 overflow-hidden">
        <tbody>
          <tr class="table-dark">
            <th scope="col">事件</th>
            <th scope="col">時間</th>
          </tr>
          <tr v-for="(item,index) in data.tracking" :key="index">
            <th scope="row">{{  item.rtn_msg }}</th>
            <td>{{ item.event_time }}</td>
          </tr>
        </tbody>
      </table>
      <p>資料來源: {{ data.logistics_provider }}</p>
    `
  });