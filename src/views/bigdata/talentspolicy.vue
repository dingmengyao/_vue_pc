<template>
  <div style="background: rgba(244, 245, 246, 1);">
    <navbar class="navbar"></navbar>
    <div class="search">
      <p><input type="text"
               id="text"
               placeholder="请输入姓名、领域、文章或者专利查询需要的人才"
               v-model="searchText">
        <input id="searchHandle1"
               type="button"
               @click="searchTanlent">
        <img id="searchHandle2"
             src="../../../static/img/search1.png"
             alt=""
             class="seach-img"
             @click="searchTanlent">
      </p>
    </div>
    <div class="list-bgcolor">
      <div class="list-inner"
           v-if="list.length!=0">
        <ul>
          <li v-for="(item,index) in list"
              :key="index">
            <div class="list-box">

              <h5 @click="todetails(item.id)">{{item.title}}</h5>
              <p class="list-content"
                 @click="todetails(item.id)">{{item.introduction}}</p>
              <div class="list-copy">
                <p class="fl">
                  <span>{{item.rangeScope}}</span>
                  <span>{{item.govtName}}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else
           style="text-align: center;font-size:20px;margin: 10px 0;min-height: 200px;line-height: 200px;">
        暂无数据
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import navbar from '@/components/navbar'
import myfooter from '@/components/myfooter'
export default {
  name: 'talentsAndPolicy',
  components: {
    navbar,
    myfooter
  },
  data () {
    return {
      inpVal: '',
      type: '',
      searchText: '',
      list: []
    }
  },
  methods: {
    searchTanlent () {
      this.$http.get('http://www.forwork.cn/psnl/psnl/searchPolicyContainPsnl?searchStr=' + this.searchText).then(res => {
        if (res.status == 200) {

          //   console.log(res.data.content)
          this.list = res.data.content.policies
        }
      })
    },
    todetails (id) {
      //   console.log(id)
      this.$router.push({ path: '/bigdata/policydetail', query: { id } })
    }
  },
  created () {
    // console.log(this.$route.query)
    this.searchText = this.$route.query.inputV;
    this.type = this.$route.query.searchtype;
    this.$http.get('http://www.forwork.cn/psnl/psnl/searchPolicyContainPsnl?searchStr=' + this.$route.query.inputV + '&searchType=' + this.type).then(res => {
      //   console.log(res.data.content)
      this.list = res.data.content.policies
    });
    let that = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key === 13) {
        that.searchTanlent();//方法
      }
    }
  }
}
</script>
<style scoped>
	body{
		    background: rgba(244, 245, 246, 1);
	}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
}
.search {
  text-align: center;
  position: unset;
  padding: 40px 0;
  background-color: #fff;
  margin-top: 80px;
}
.search p {
  position: relative;
}
.search p input[type="text"] {
  width: 900px;
  height: 50px;
  font-size: 15px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  /* color: rgba(193, 193, 193, 1); */
  padding-left: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border: 1px solid rgba(47, 95, 244, 1);
}

.search p input[type="button"] {
  width: 50px;
  height: 50px;
  background-color: #0a43f6;
  border-radius: 5px;
  position: absolute;
  top: 0;
  right: 11%;
}

.seach-img {
  position: absolute;
  top: 25%;
  right: 11.9%;
  cursor: pointer;
}

.search p select {
  position: absolute;
  top: 11%;
  right: 15%;
  border: none;
  border-left: 1px solid rgba(231, 234, 240, 1);
  outline: none;
}
.search p select option {
  border: 1px solid rgba(231, 234, 240, 1);
}
/*  */
.list-bgcolor {
  background: rgba(244, 245, 246, 1);
  padding-top: 30px;
}

.list-inner {
  width: 1200px;
  margin: 0 auto;
}
.list-inner ul {
  margin: 0;
}
.list-inner ul li {
  background-color: #fff;
  margin-bottom: 30px;
}
.list-box {
  width: 996px;
  margin: 0 auto;
  padding: 23px 0;
  box-shadow: 0px 8px 23px 0px rgba(230, 232, 254, 0.41);
}

.list-box h5 {
  font-size: 20px;
  font-family: "PingFangSC-Semibold";
  font-weight: 600;
  color: rgba(44, 49, 53, 1);
  display: inline-block;
  cursor: pointer;
}

.list-content {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(93, 96, 99, 1);
  margin: 16px 0;
  cursor: pointer;
}

.list-copy {
  font-size: 14px;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: rgba(165, 167, 180, 1);
  overflow: hidden;
}

.list-copy p:first-child span {
  display: inline-block;
  background: rgba(242, 245, 247, 1);
  border-radius: 13px;
  padding: 2px 12px;
  margin-right: 20px;
}
</style>
