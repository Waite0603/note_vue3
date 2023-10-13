import axios from "./index";

export const getNotes = (page: number, size: number) => {
    return axios.get(`/note/page/${page}/${size}`); 
};