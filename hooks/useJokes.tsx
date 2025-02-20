import { API_URL } from "@/constant/api";
import { CategoriesInterface } from "@/interface/home.interface";
import { useState, useEffect } from "react";

const useJokeCategories = () => {
    const [categories, setCategories] = useState<CategoriesInterface>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API_URL + 'categories');

            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();

            setCategories(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    // const move = (data: CategoriesInterface | null): CategoriesInterface | null => {
    //     if (data && Array.isArray(data) && data.length > 3) {
    //         const elementToMove = data[3];
    //         const newData = [...data];
    //         newData.splice(3, 1);
    //         newData.unshift(elementToMove);
    //         return newData;
    //     }
    //     return data;
    // };

    useEffect(() => {
        fetchCategories();
    }, []);
    const refreshCategories = () => {
        fetchCategories();
    };

    return {
        categories,
        loading,
        error,
        refreshCategories
    };
}


export default useJokeCategories
