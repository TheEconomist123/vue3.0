<script setup>
import {ref} from "vue";
import axios from "axios";


axios.defaults.timeout = 60000; // 超时时间为60秒
axios.defaults.baseURL = "http://localhost:8089/easyexcel"

const imgUrl=ref();
function optionallyRequest() {
  return axios.get('/test', {
    params: {
      id: 12345,
      name: "周政之"
    }
  }).then(function (response) {
    console.log(response.data);
    return response
  }).catch(function (error) {
    console.log(error);

  })
      .finally(function () {
        // always executed
      });
}


function searchArticle() {
  return axios.get("/article", {
    params: {
      category: "YL",
      state: "0"
    }
  }).then(function (repsponse) {

    console.log(repsponse.data);
    return response

  }).catch(function (error) {
    console.log("error:" + error);
  });

}

//演示post请求
function postParamsEntity() {
  return axios.post('/postParamsEntity', {
    firstName: '周',
    lastName: '政之'
  })
      .then(function (response) {


        console.log(response.data);
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
}


//并发去请求数据
async function concurrentRequest() {
  const [getParams, PostEntity] = await Promise.all([optionallyRequest(), postParamsEntity()]);
  console.log(getParams);
  console.log(PostEntity);
}

//获取图片

function getRomoteImage() {
  // GET request for remote image in node.js
  axios({
    method: 'get',
    url: '/image',
    responseType: 'arraybuffer'
  }).then(function (response) {
    
    console.log("response：" + response)
    /* response.data.pipe(fs.createWriteStream('qwiawr-umplash.jpeg'))*/
    // 将获取的二进制数据转换成 Blob 对象
    const blob = new Blob([response.data], {type: 'image/jpeg'});
    // 创建一个临时 URL
    imgUrl.value = URL.createObjectURL(blob);
    // 创建一个 <a> 元素，设置 href 为图片 URL，设置 download 属性为想要保存的文件名
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = 'downloaded_image.jpg';
    // 将 <a> 元素插入到文档中，并模拟点击下载
    document.body.appendChild(link);
    link.click();
    // 清理临时 URL 和 <a> 元素
    URL.revokeObjectURL(imgUrl);
    document.body.removeChild(link);

  });

}

</script>

<template>

  <!--
    <button @click="getRequest">Make a request for a user with a given ID</button>
  -->
  <br>
  <button @click="optionallyRequest">带有多个参数的get请求（params）</button>
  <br>
  <br>
  <button @click="searchArticle">search article with require</button>
  <br>
  <br>
  <button @click="postParamsEntity">post 请求只能用后来实体类去接受</button>
  <br>
  <br>
  <button @click="concurrentRequest"> mutile concurrent request</button>
  <br>
  <button @click="getRomoteImage"> 获取图片</button>
  <br>

  <img :src="imgUrl">

</template>

<style scoped>

</style>