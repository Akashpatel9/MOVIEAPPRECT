import axios from "../../assets/axios";
import { loadPerson } from "../reducers/PersonSlice";
export { removePerson } from "../reducers/PersonSlice";

export const asyncLoadPerson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const changes = await axios.get(`/person/${id}/changes`);
    const combined_credits = await axios.get(`/person/${id}/combined_credits`);
    const external_ids = await axios.get(`/person/${id}/external_ids`);
    const images = await axios.get(`/person/${id}/images`);
    const latest = await axios.get(`/person/latest`);
    const movie_credits = await axios.get(`/person/${id}/movie_credits`);
    const tv_credits = await axios.get(`/person/${id}/tv_credits`);
    const translations = await axios.get(`/person/${id}/translations`);
    const tagged_images = await axios.get(`/person/${id}/tagged_images`);
    let theultimatedetails = {
      detail: detail.data,
      changes: changes.data,
      combined_credits: combined_credits.data,
      external_ids: external_ids.data,
      images: images.data,
      latest: latest.data,
      movie_credits: movie_credits.data,
      tv_credits: tv_credits.data,
      translations: translations.data,
      tagged_images: tagged_images.data,
    };
    dispatch(loadPerson(theultimatedetails));
  } catch (error) {
    console.log(error);
  }
};
