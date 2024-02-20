import axios from '../../assets/axios';
import { loadTv } from '../reducers/TvSlice';
export {removeTv} from "../reducers/TvSlice";

export const asyncLoadTv = (id)=> async(dispatch,getState)=>{
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
        let theultimatedetails = {
            detail:detail.data, 
            externalId:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        }
        dispatch(loadTv(theultimatedetails))
    } catch (error) {
        console.log(error);
    }
}