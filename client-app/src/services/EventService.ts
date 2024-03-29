import { Event } from "../pages/UserDashboard/AddEvent";
import { postData } from "./utils";

export async function createEvent(eventData: Event) {
    try {
        const response = await postData(JSON.stringify(eventData), "/event/create");
        return response;
    } catch (error) {
        console.error("Error adding event:", error);
        return null;
    }
}
