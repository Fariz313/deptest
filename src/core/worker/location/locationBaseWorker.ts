import { QueryProxy } from '@core/kernel/cub.storage';
import { Location } from '@core/model/location';

interface ILocationbaseWorker {
  getAllProvince(): Promise<any>;
  getProvinceDetail(locationId: number,fetchAllDetail:boolean): Promise<any>
  getRegency(locationId: number): Promise<any>;
  getDistrict(locationId: number): Promise<any>;
  getVillage(locationId: number): Promise<any>;
}
export class LocationBaseWorker implements ILocationbaseWorker {
  qp?: QueryProxy;
  constructor() {
    this.qp = new QueryProxy(Location);
  }
  getVillage(locationId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp
        .aggregate([
          {
            $unwind: '$regencies'
          },
          {
            $unwind: '$regencies.districts'
          },
          {
            $unwind: '$regencies.districts.villages'
          },
          {
            $match: {
              'regencies.districts.villages.id': locationId
            }
          },
          {
            $project: {
              name: '$regencies.districts.villages.name',
              id: '$regencies.districts.villages.id',
              district: {
                id: '$regencies.districts.id',
                name: '$regencies.districts.name'
              },
              regency: {
                id: '$regencies.id',
                name: '$regencies.name'
              },
              province: {
                id: '$id',
                name: '$name'
              }
            }
          },
          {
            $replaceRoot: {
              newRoot: {
                name: '$name',
                id: '$id',
                province: '$province',
                regency: '$regency',
                district: '$district'
              }
            }
          }
        ])
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
  getAllProvince(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      return resolve(await Location.find({}).select('name id -_id'));
    });
  }
  getProvinceDetail(locationId: number,fetchAllDetail:boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      let aggregate:any[] = [
        {
          $project: {
            name: '$name',
            id: '$id',
            regencies: {
              $map: {
                input: '$regencies',
                as: 'regencies',
                in: {
                  id: '$$regencies.id',
                  name: '$$regencies.name',
                },
              },
            },
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              name: '$name',
              id: '$id',
              regencies: '$regencies',
            },
          },
        },
      ]

      if(!fetchAllDetail) {
        aggregate.push({
          $match: { id:locationId }
        });
      }
      this.qp
        .aggregate(aggregate)
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
  getRegency(locationId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp
        .aggregate([
          {
            $unwind: '$regencies'
          },
          {
            $match: {
              'regencies.id': locationId
            }
          },
          {
            $project: {
              name: '$regencies.name',
              id: '$regencies.id',
              province: {
                id: '$id',
                name: '$name'
              },
              districts: {
                $map: {
                  input: '$regencies.districts',
                  as: 'districts',
                  in: {
                    id: '$$districts.id',
                    name: '$$districts.name'
                  }
                }
              }
            }
          },
          {
            $replaceRoot: {
              newRoot: {
                name: '$name',
                id: '$id',
                province: '$province',
                districts: '$districts'
              }
            }
          }
        ])
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
  getDistrict(locationId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp
        .aggregate([
          {
            $unwind: '$regencies'
          },
          {
            $unwind: '$regencies.districts'
          },
          {
            $match: {
              'regencies.districts.id': locationId
            }
          },
          {
            $project: {
              name: '$regencies.districts.name',
              id: '$regencies.districts.id',
              province: {
                id: '$id',
                name: '$name'
              },
              regency: {
                id: '$regencies.id',
                name: '$regencies.name'
              },
              villages: {
                $map: {
                  input: '$regencies.districts.villages',
                  as: 'villages',
                  in: {
                    id: '$$villages.id',
                    name: '$$villages.name'
                  }
                }
              }
            }
          },
          {
            $replaceRoot: {
              newRoot: {
                name: '$name',
                id: '$id',
                province: '$province',
                regency: '$regency',
                villages: '$villages'
              }
            }
          }
        ])
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
}
