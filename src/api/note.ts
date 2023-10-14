import axios from "./index";

export const getNotes = <T>(page: number, size: number) => {
    return axios.get<T>(`/note/page/${page}/${size}`) as Promise<T>;
};