import axios from 'axios'

function AddGoods(val) {
  return new Promise((resolve, reject) => {

    axios.get("http://localhost:3030/addGoods",{params:val})
      .then(res => {
        if (res.data == 'ok'){
          resolve('ok')
        } else {
          reject('failed')
        }
      })
      .catch(err=>{
        reject(err)
      });
  });
}

function GetGoods(val) {
  return new Promise((resolve, reject) => {
    axios.get("http://localhost:3030/getGoods")
      .then(res => {
        // console.log(res.data)
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

export default {
  AddGoods,
  GetGoods
}
