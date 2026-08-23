import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { MainLayout } from './components/layout/MainLayout';

import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { BookServicePage } from './pages/BookService/BookServicePage';
import { DiagnosticPage } from './pages/Diagnostic/DiagnosticPage';
import { QuotesPage } from './pages/Quotes/QuotesPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { VisitsPage } from './pages/Visits/VisitsPage';
import { VehiclesPage } from './pages/Vehicles/VehiclesPage';
import { RewardsPage } from './pages/Rewards/RewardsPage';
import { MarketplacePage } from './pages/Marketplace/MarketplacePage';
import { NotificationsPage } from './pages/Notifications/NotificationsPage';
import { ProfilePage } from './pages/Profile/ProfilePage';

import './styles/index.css';

function Router() {
  const { screen } = useApp();

  switch (screen) {
    case 'home':
      return <DashboardPage />;
    case 'book':
      return <BookServicePage />;
    case 'diagnostic':
      return <DiagnosticPage />;
    case 'quote':
      return <QuotesPage />;
    case 'pay':
      return <CheckoutPage />;
    case 'track':
      return <VisitsPage />;
    case 'vehicles':
      return <VehiclesPage />;
    case 'rewards':
      return <RewardsPage />;
    case 'market':
      return <MarketplacePage />;
    case 'notif':
      return <NotificationsPage />;
    case 'profile':
      return <ProfilePage />;
    default:
      return <DashboardPage />;
  }
}

export function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Router />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
