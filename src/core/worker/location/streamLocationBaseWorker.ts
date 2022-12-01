
interface IStreamLocationbaseWorker {
  getAllProvince(): Promise<any>;
  getAllRegency(locationId: String): Promise<any>;
}
export class StreamLocationBaseWorker implements IStreamLocationbaseWorker {
  getAllProvince(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const axios = require('axios');
        let res = await axios.get(
          'https://pemilu2019.kpu.go.id/static/json/wilayah/0.json'
        );
        console.log(res)
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error)
      }
    });
  }
  getAllRegency(locationId: String): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const axios = require('axios');
        let res = await axios.get(
          'https://pemilu2019.kpu.go.id/static/json/wilayah/'+locationId+'.json'
        );
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error)
      }
    });
  }
  
}
