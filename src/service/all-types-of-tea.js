import axios from 'axios'

function getSmallclass(val) {
  return new Promise((resolve, reject) => {
    axios.get("/static/json/allTypesOfTea.json")
      .then(res => {
        let obj = {
          'a':{name:'红茶',num:0}, 'b':{name:'绿茶',num:0},
          'c':{name:'白茶',num:0},'d':{name:'黑茶',num:0},
          'e':{name:'乌龙茶',num:0},'f':{name:'花茶',num:0},
          'g':{name:'黄茶',num:0},'h':{name:'药茶',num:0},
          'i':{name:'茶具',num:0},'j':{name:'其它',num:0}
        }
        let arr = []
        function PrefixZero(num, n) {
          return (Array(n).join(0) + num).slice(-n);
        }
        for (let i=0;i<res.data.length;i++){
          if (res.data[i].largeclass==obj[val]['name']) {
            arr.push({"value": PrefixZero(obj[val]['num'],3),"label": res.data[i].smallclass})
            obj[val]['num']++
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
