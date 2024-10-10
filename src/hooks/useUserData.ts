import axios from "axios";
import { useQuery } from "react-query";

const BASE_API_URL = "https://dummyjson.com";

const fetchUsers = async () => {
    const { data } = await axios.get(`${BASE_API_URL}/users`);
    return data.users;
};

export const useUserData = () => {
    return useQuery('users', fetchUsers, {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
    });
};
