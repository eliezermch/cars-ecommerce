import { CarsType, CarType } from "../model/carModel";
import { getData } from "../utils/functions";

const API_DOMAIN = "https://challenge.agenciaego.tech/api/models/";

function getCars(): Promise<CarsType[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(API_DOMAIN);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

function getCarById(id: string | undefined): Promise<CarType | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await getData(`${API_DOMAIN}${id}`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export { getCars, getCarById };
