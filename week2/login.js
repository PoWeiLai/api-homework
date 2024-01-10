// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// createApp({
//   data() {
//     return {
//       user: {
//         username: '',
//         password: '',
//       },
//     }
//   },
//   methods: {
//     login() {
//       const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
//       axios.post(api, this.user).then((response) => {
//         const { token, expired } = response.data;
//         // 寫入 cookie token
//         // expires 設置有效時間
//         document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
//         window.location = 'products.html';
//       }).catch((err) => {
//         alert(err.response.data.message);
//       });
//     },
//   },
// }).mount('#app');

import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data(){
    return{
      users:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    login(){
    const url="https://vue3-course-api.hexschool.io/v2"
    const path="powei"
   
    axios.post(`${url}/admin/signin`,this.users).then((res)=>{   //取出data裡user資訊進入登入頁面
  console.log(res.data)
  const {token,expired} =res.data
  document.cookie = `hasVueToken=${token}; expires=${new Date(expired)}`; //需要把token跟時間取出來，從google找document.cookie

    }).catch((error)=>{console.log(error)})
    

  }
  }

}).mount("#app")

