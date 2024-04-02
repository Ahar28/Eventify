import { createEvent, updateEvent, deleteEvent, getEventsByOrganizer, getEventsExcludingOrganizer} from "./event";
import { addToWishlist, removeFromWishlist, getWishlistEvents } from "./wishlist";

export default { createEvent, updateEvent, deleteEvent, getEventsByOrganizer, getEventsExcludingOrganizer, addToWishlist, removeFromWishlist, getWishlistEvents};
