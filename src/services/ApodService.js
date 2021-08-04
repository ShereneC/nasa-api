import { AppState } from "../AppState"
import { apodApi } from "./AxiosService"

class ApodService {

  async getApod(query){
    const res = await apodApi.get('apod?api_key=mxUHZissrqW88y3WxyCWExvluM4MZ1AEsylby9U7&date=' + query)
    AppState.apod = res.data
    console.log(res.data)
  }

}

export const apodService = new ApodService()