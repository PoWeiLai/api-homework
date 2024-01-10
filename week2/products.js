// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// createApp({
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       apiPath: 'powei',
//       products: [],
//       tempProduct: {},
//     }
//   },
//   methods: {
//     checkAdmin() {
//       const url = `${this.apiUrl}/api/user/check`;
//       axios.post(url)
//         .then(() => {
//           this.getData();
//         })
//         .catch((err) => {
//           alert(err.response.data.message)
//           window.location = 'login.html';
//         })
//     },
//     getData() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
//       axios.get(url)
//         .then((response) => {
//           this.products = response.data.products;
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//         })
//     },
//     openProduct(item) {
//       this.tempProduct = item;
//     }
//   },
//   mounted() {
//     // 取出 Token
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;

//     this.checkAdmin()
//   }
// }).mount('#app');

import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
const app=createApp({
data(){
return{
   url:"https://vue3-course-api.hexschool.io/v2",
   path:"powei",
   tempProduct:{},
   products:[],
}
},
methods:{
 checkAdmin(){
  axios.post(`${this.url}/api/user/check`).then((res)=>{//驗證產品如果成功就會進入getProduct產品訂購畫面，如果驗證不成功跳回原來登入畫面
    this.getProduct()
  }).catch((error)=>{console.log(error)
window.location="login.html"
}
  
  )
 },
 getProduct(){
  axios.get(`${this.url}/api/${this.path}/admin/products`).then((res)=>{
  this.products=res.data.products
  }).catch((error)=>{console.log(error)})
 },openProduct(item){
    this.tempProduct=item   //產品訂購區等同於指定的訂購
 }

},
mounted(){ //元件週期，token可以進入到cookie紀錄裡，然後也可以取出cookie紀錄
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hasVueToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );    
     axios.defaults.headers.common.Authorization = token;
     this.checkAdmin()
}




})
app.mount("#app")