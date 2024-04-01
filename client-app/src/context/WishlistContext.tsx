
import React, { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  topic?: string;
  categories?: string[];
}

interface WishlistContextType {
  wishlist: Event[];
  addToWishlist: (event: Event) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Event[]>([]);
  const user = useSelector(selectUser);
  const userId = user?.id;

  const addToWishlist = useCallback(async (event: Event) => {
    if (!wishlist.some(e => e.id === event.id)) {
      try {
        const response = await axios.post(`http://localhost:8000/api/event/wishlist/add`, {
          userId,
          eventId: event.id,
        });
        if (response.data.success) {
          setWishlist(currentWishlist => [...currentWishlist, event]);
        }
      } catch (error) {
        console.error('Error adding to wishlist:', error);
      }
    }
  }, [wishlist, userId]);

  const removeFromWishlist = useCallback(async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/event/wishlist/remove/${userId}`, {
        data: { eventId: id },
      });
      if (response.data.success) {
        setWishlist(currentWishlist => currentWishlist.filter(e => e.id !== id));
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  }, [userId]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
