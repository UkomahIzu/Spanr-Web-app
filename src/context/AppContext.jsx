import React, { createContext, useContext, useState, useRef } from 'react';
import { CATALOG, INITIAL_QUOTE_ITEMS, VISITS, MARKETPLACE_LISTINGS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('home');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [currentShop, setCurrentShop] = useState('kojo');
  
  // Book Service state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState('brake');
  const [handoverPreference, setHandoverPreference] = useState('leave');
  
  // Quotes state
  const [quoteItems, setQuoteItems] = useState(INITIAL_QUOTE_ITEMS);
  
  // Checkout / Pay state
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // My Visits state
  const [selectedVisitId, setSelectedVisitId] = useState('JOB-4821');
  const [visitRatings, setVisitRatings] = useState({
    'JOB-4821': 0,
    'JOB-4390': 5,
    'JOB-4102': 0,
    'JOB-3877': 4
  });
  
  // My Vehicles state
  const [selectedVehicleId, setSelectedVehicleId] = useState('c300');
  
  // Marketplace state
  const [selectedListingId, setSelectedListingId] = useState('c300');
  const [wishlist, setWishlist] = useState({ c300: false, glc: true, e350: false });
  const [marketFilter, setMarketFilter] = useState({
    make: { mb: true, toyota: false, lexus: false, honda: false },
    status: { available: true, reserved: false }
  });
  
  // Profile settings state
  const [channelToggles, setChannelToggles] = useState({
    whatsapp: true,
    sms: true,
    offers: false
  });
  
  // Notifications state
  const [notificationsRead, setNotificationsRead] = useState(false);
  
  // Toast state
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimerRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const navigateTo = (screenName) => {
    setScreen(screenName);
    setProfileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  const openVisit = (visitId) => {
    setSelectedVisitId(visitId);
    setScreen('track');
    setProfileMenuOpen(false);
  };

  const toggleQuoteItem = (index) => {
    setQuoteItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, selected: !item.selected } : item))
    );
  };

  const toggleWishlist = (listingId) => {
    setWishlist((prev) => {
      const updated = { ...prev, [listingId]: !prev[listingId] };
      const isSaved = updated[listingId];
      showToast(isSaved ? 'Saved to your wishlist.' : 'Removed from your wishlist.');
      return updated;
    });
  };

  const toggleChannelSwitch = (key) => {
    setChannelToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMarketFilter = (group, key) => {
    setMarketFilter((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] }
    }));
  };

  const setRatingForVisit = (visitId, ratingValue) => {
    setVisitRatings((prev) => ({ ...prev, [visitId]: ratingValue }));
  };

  // Computations
  const chosenService = CATALOG.find((s) => s.id === selectedService) || CATALOG[0];

  const activeQuoteTotal = quoteItems.reduce((acc, item) => (item.selected ? acc + item.price : acc), 0);
  const activeQuoteHours = quoteItems.reduce((acc, item) => (item.selected ? acc + item.hours : acc), 0);
  const activeQuoteCount = quoteItems.filter((item) => item.selected).length;
  const activeQuotePoints = Math.round(activeQuoteTotal * 0.002);

  const selectedVisit = VISITS.find((v) => v.id === selectedVisitId) || VISITS[0];
  const selectedListing = MARKETPLACE_LISTINGS[selectedListingId] || MARKETPLACE_LISTINGS.c300;

  const value = {
    screen,
    navigateTo,
    profileMenuOpen,
    toggleProfileMenu,
    currentShop,
    setCurrentShop,
    selectedCategory,
    setSelectedCategory,
    selectedService,
    setSelectedService,
    chosenService,
    handoverPreference,
    setHandoverPreference,
    quoteItems,
    toggleQuoteItem,
    activeQuoteTotal,
    activeQuoteHours,
    activeQuoteCount,
    activeQuotePoints,
    paymentMethod,
    setPaymentMethod,
    selectedVisitId,
    setSelectedVisitId,
    selectedVisit,
    openVisit,
    visitRatings,
    setRatingForVisit,
    selectedVehicleId,
    setSelectedVehicleId,
    selectedListingId,
    setSelectedListingId,
    selectedListing,
    wishlist,
    toggleWishlist,
    marketFilter,
    toggleMarketFilter,
    channelToggles,
    toggleChannelSwitch,
    notificationsRead,
    setNotificationsRead,
    toastMessage,
    showToast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
