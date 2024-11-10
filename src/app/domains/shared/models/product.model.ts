import { Category } from "./category.models";

export interface Product{
    id: number;
    categoria: Category;
    title: string;
    price: number; 
    images: string[];
}