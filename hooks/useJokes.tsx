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
    const moveCategoryIndex = (fromIndex: number, toIndex: number) => {
        if (!categories?.categories || !Array.isArray(categories.categories)) {
            return categories?.categories;
        }
        const newCategories = [...categories.categories];
        if (fromIndex < 0 || fromIndex >= newCategories.length || toIndex < 0 || toIndex >= newCategories.length) {
            return newCategories;
        }
        const element = newCategories.splice(fromIndex, 1)[0];
        newCategories.splice(toIndex, 0, element);

        categories.categories = newCategories
        return categories
    };
    useEffect(() => {
        fetchCategories();
    }, [categories]);
    const refreshCategories = () => {
        fetchCategories();
    };

    return {
        categories,
        loading,
        error,
        refreshCategories,
        moveCategoryIndex,
    };
}


export default useJokeCategories
