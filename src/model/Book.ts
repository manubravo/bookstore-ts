export interface Book {
    id?: number;
    title: string;
    description: string;
    borrowed?: boolean;
    type?: number;
}