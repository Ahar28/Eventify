
import React, { createContext, useContext, ReactNode, useState } from 'react';

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

  const addToWishlist = (event: Event) => {
    if (!wishlist.some(e => e.id === event.id)) {
      setWishlist(currentWishlist => [...currentWishlist, event]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(currentWishlist => currentWishlist.filter(e => e.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
