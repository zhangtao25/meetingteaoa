import axios from 'axios'

function getAllLargeclass(_this) {
  return new Promise((resolve, reject) => {
    axios.get("/static/json/allTypesOfTea.json")
      .then(res => {
        let virtualDatas = []
        for (let i=0;i<res.data.length;i++){
          virtualDatas.push({
            "largeclass":res.data[i]["zh"+"_largeclass"],
            "smallclass":res.data[i]["zh"+"_smallclass"]
          })
        }
        let virtualObj = {
          "红茶":[],"绿茶":[],"白茶":[],"黑茶":[],"乌龙茶":[],
          "花茶":[],"黄茶":[],"药茶":[],"茶具":[],"其它":[]
        }

        function handleVirtualDatas(largeclass){
          for (let i=0;i<virtualDatas.length;i++){
            if (virtualDatas[i].largeclass == largeclass){
              virtualObj[largeclass].push(virtualDatas[i].smallclass)
            }
          }
        }
        for(let i in virtualObj){
          handleVirtualDatas(i)
        }
        resolve(virtualObj)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

export default {
  getAllTypesOfTea
}
