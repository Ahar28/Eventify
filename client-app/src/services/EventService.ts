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

export async function getEventData() {
  try {
    const response = await getData("/event/event-data");
    return response.data;
  } catch (error) {
    console.error("Error getting event analytics:", error);
    return null;
  }
}
