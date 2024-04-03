import {TicketRegistration} from "../components/ParticipantForm";
import { deleteData, postData } from "./utils";
import { json } from "stream/consumers";

const API_URL = "http://localhost:8000/api";

export async function createEventRegistration(eventData: TicketRegistration) {
    try {
        const response = await postData(JSON.stringify(eventData), "/register/create");
        return response;
    } catch (error) {
        console.error("Error registering for event:", error);
        return null;
    }
}

export async function deleteEventRegistration(eventData: string) {
    try {
        const response = await deleteData(JSON.stringify(eventData), "/register/delete/:id");
        return response;
    } catch (error) {
        console.error("Error registering for event:", error);
        return null;
    }
}
