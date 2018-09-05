import axios from 'axios'

function getSmallclass(val) {
  return new Promise((resolve, reject) => {
    axios.get("/static/json/allTypesOfTea.json")
      .then(res => {
        let obj = {'a':'红茶','b':'绿茶','c':'白茶','d':'黑茶','e':'乌龙茶','f':'花茶','g':'黄茶','h':'药茶','i':'茶具','j':'其它'}
        let arr = []
        function PrefixZero(num, n) {
          return (Array(n).join(0) + num).slice(-n);
        }
        for (let i=0;i<res.data.length;i++){
          if (res.data[i].largeclass==obj[val]) {
            arr.push({"value": PrefixZero(i,3),"label": res.data[i].smallclass})
          }
        }
        resolve(arr)
      })
      .catch(err=>{
        reject(err)
      });
  });
}
function getLargeclass() {
  return [{
    value: 'a',
    label: '红茶'
  }, {
    value: 'b',
    label: '绿茶'
  }, {
    value: 'c',
    label: '白茶'
  }, {
    value: 'd',
    label: '黑茶'
  }, {
    value: 'e',
    label: '乌龙茶'
  },{
    value: 'f',
    label: '花茶'
  }, {
    value: 'g',
    label: '黄茶'
  }, {
    value: 'h',
    label: '药茶'
  }, {
    value: 'i',
    label: '茶具'
  }, {
    value: 'j',
    label: '其它'
  }]
}

export default {
  getSmallclass,
  getLargeclass
}
