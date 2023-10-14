export interface Note {
    content: string;
    date: string;
    _v?: number;
};

export type NoteList = Note[];