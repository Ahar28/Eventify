import axios from "axios";
import { getData } from "./utils";

export const fetchUserBadges = async (userId: string) => {
    try {
        const response = await getData(`/badge/generate/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user badges:', error);
        throw error;
    }
};
