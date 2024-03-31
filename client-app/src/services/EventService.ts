import { Event } from "../pages/UserDashboard/AddEvent";
import { getData, postData } from "./utils";

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