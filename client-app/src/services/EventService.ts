import axios from "axios";
import { Event } from "../pages/UserDashboard/AddEvent";
import { deleteData, getData, postData } from "./utils";
import { json } from "stream/consumers";

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

export async function getEventData() {
  try {
    const response = await getData("/event/event-data");
    return response.data;
  } catch (error) {
    console.error("Error getting event analytics:", error);
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
  
  export const addToWishlistService = async (userId: string, eventId: string) => {
    try {
        const data = {userId, eventId};
      const response = await postData(JSON.stringify(data), "/event/wishlist/add");

      return response.data;
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      throw error;
    }
  };
  

  export const removeFromWishlistService = async (userId: string, eventId: string) => {
    try {
      const response = await deleteData(`/event/wishlist/remove/${userId}`, { eventId });
      return response.data;
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      throw error;
    }
  };
  
  export const getWishlistEvents = async (userId: string) => {
    try {
      const response = await getData(`/event/wishlist/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting wishlist events:', error);
      throw error;
    }
  };
  