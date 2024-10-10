import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.BASE_API_URL}/users`);
    return data;
};

export const useUserData = () => {
    return useQuery('users', fetchUsers);
};
