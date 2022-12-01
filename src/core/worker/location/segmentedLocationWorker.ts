import { LocationBaseWorker } from './locationBaseWorker';

export interface ISegmentedLocationBaseWorker {
  getAllOrda(): Promise<any>;
  createOrda(name: string, segmentArea: string[]): Promise<any>;
  getOrdaDetail(locationId: Number): Promise<any>;
}
export class SegmentedLocationBaseWorker
  extends LocationBaseWorker
  implements ISegmentedLocationBaseWorker
{
  createOrda(name: string, segmentArea: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qp
        .update({}, {})
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  }
  getAllOrda(): Promise<any> {
    // wrap group of regencies
    throw new Error('Method not implemented.');
  }
  getOrdaDetail(locationId: Number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
