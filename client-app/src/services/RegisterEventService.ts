import {TicketRegistration} from "../components/ParticipantForm";
import { deleteData, postData } from "./utils";
import { json } from "stream/consumers";

// const API_URL = "http://localhost:8000/api";
const API_URL = "https://eventify-2f9d.onrender.com/api"; //for prod 

export async function createEventRegistration(eventData: TicketRegistration) {
    try {
        const response = await postData(JSON.stringify(eventData), "/register/create");
        return response;
    } catch (error) {
        console.error("Error registering for event:", error);
        return null;
    }
}


export const deleteEventRegistration = async (registrationId: string) => {
    try {
      const response = await deleteData(`/register/delete/${registrationId}`);
      return response.data;
    } catch (error) {
      console.error('Error cancelling the registration:', error);
      throw error;
    }
  };
