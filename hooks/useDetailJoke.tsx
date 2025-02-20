import { API_URL } from "@/constant/api";
import { jokesInterface } from "@/interface/home.interface";
import { useState, useEffect } from "react";

const useDetailJokeCategories = (category: string, paging: number = 2) => {
    const [joke, setJoke] = useState<jokesInterface>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API_URL + 'joke/' + category + '?type=single&amount=' + paging);

            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();

            setJoke(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, [category, paging]);
    const refreshJoke = () => {
        fetchJoke();
    };

    return {
        joke,
        loading,
        error,
        refreshJoke
    };
}


export default useDetailJokeCategories
