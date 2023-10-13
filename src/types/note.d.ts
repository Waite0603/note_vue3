export interface Note {
    _id?: string;
    content: string;
    createTime: string;
    updateTime: string;
};

export type NoteList = Array<Note>;