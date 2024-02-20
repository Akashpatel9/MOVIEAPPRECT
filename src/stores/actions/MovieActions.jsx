import axios from '../../assets/axios';
import { loadMovie } from '../reducers/MovieSlice';
export {removeMovie} from "../reducers/MovieSlice";

export const asyncLoadMovie = (id)=> async(dispatch,getState)=>{
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalId = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
        let theultimatedetails = {
            detail:detail.data, 
            externalId:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        }
        dispatch(loadMovie(theultimatedetails))
    } catch (error) {
        console.log(error);
    }
}