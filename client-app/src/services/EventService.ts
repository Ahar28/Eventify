import axios from "axios";
import { Event } from "../pages/UserDashboard/AddEvent";
import { getData, postData } from "./utils";

const API_URL = "http://localhost:8000/api";

export async function createEvent(eventData: Event) {
    try {
        const response = await postData(JSON.stringify(eventData), "/event/create");
        return response;
    } catch (error) {
        console.error("Error adding event:", error);
        return null;
    }
}

export async function getEventsByOrganizer(organizerId: string) {
    try {
        const response = await getData("/event/organizer/" + organizerId);
        return response;
    } catch (error) {
        console.error("Error getting event:", error);
        return null;
    }    
}

export async function getEventsExcludeOrganizer(organizerId: string) {
    try {
        const response = await getData("/event/events-exclude-organizer/" + organizerId);
        return response;
    } catch (error) {
        console.error("Error getting event:", error);
        return null;
    }    
}

interface WishlistData {
    userId: string;
    eventId: string;
  }
  
  export const addToWishlist = async ({ userId, eventId }: WishlistData) => {
    try {
        const response = await axios.post(`${API_URL}/event/wishlist/add`, { userId, eventId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const removeFromWishlist = async (userId: string, eventId: string) => {
    try {
        const response = await axios.delete(`${API_URL}/event/wishlist/remove/${userId}`, { data: { eventId } });
        return response.data;
    } catch (error) {
        throw error;
    }
};