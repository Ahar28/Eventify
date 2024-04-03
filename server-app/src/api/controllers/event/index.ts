import { createEvent, updateEvent, deleteEvent, getEventsByOrganizer, getEventById, getEventsExcludingOrganizer, getEventsRegisteredByUser} from "./event";
import { addToWishlist, removeFromWishlist, getWishlistEvents } from "./wishlist";

export default { createEvent, updateEvent, deleteEvent, getEventsByOrganizer, getEventById, getEventsExcludingOrganizer, addToWishlist, removeFromWishlist, getWishlistEvents, getEventsRegisteredByUser};
