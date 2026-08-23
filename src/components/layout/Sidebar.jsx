import React from 'react';
import { useApp } from '../../context/AppContext';
import { SHOPS, USER_PROFILE } from '../../data/mockData';
import spanrIcon from '../../assets/spanr-icon.svg';
import {
  Home,
  Calendar,
  Clock,
  FileText,
  Car,
  Award,
  ShoppingBag,
  Bell,
  ChevronDown,
  User,
  History,
  LogOut
} from 'lucide-react';

export function Sidebar() {
  const {
    screen,
    navigateTo,
    currentShop,
    profileMenuOpen,
    toggleProfileMenu,
    showToast
  } = useApp();

  const activeShop = SHOPS[currentShop] || SHOPS.kojo;

  const navItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'book', label: 'Book a Service', icon: Calendar },
    { id: 'track', label: 'My Visits', icon: Clock, badge: '1', badgeType: 'amber' },
    { id: 'quote', label: 'Quotes', icon: FileText },
    { id: 'vehicles', label: 'My Vehicles', icon: Car },
    { id: 'rewards', label: 'Rewards', icon: Award },
    { id: 'market', label: 'Marketplace', icon: ShoppingBag },
    { id: 'notif', label: 'Notifications', icon: Bell, badge: '3', badgeType: 'blue' }
  ];

  return (
    <aside
      style={{
        width: '264px',
        height: '100%',
        flex: 'none',
        background: '#fff',
        borderRight: '1px solid rgba(22,24,29,.12)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 14px 16px',
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
    >
      {/* Brand logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '0 8px 16px' }}>
        <img src={spanrIcon} alt="SPANR" style={{ width: '26px', height: '26px' }} />
        <span style={{ font: '800 20.5px/1 var(--ui), sans-serif', letterSpacing: '.06em' }}>
          SPANR
        </span>
      </div>

      {/* Navigation menu */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <div
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-45)',
            padding: '4px 8px 6px'
          }}
        >
          Menu
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = screen === item.id;
          const color = isActive ? '#0e4fff' : '#4a4e57';
          const bg = isActive ? '#eef3ff' : 'transparent';

          return (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.id);
              }}
              className="hover-bg-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                height: '40px',
                padding: '0 10px',
                borderRadius: '8px',
                font: '600 15px/1 var(--ui), sans-serif',
                color,
                background: bg,
                transition: 'background 0.15s ease'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '11px', whiteSpace: 'nowrap' }}>
                <Icon size={18} strokeWidth={2} />
                {item.label}
              </span>
              {item.badge && (
                <span
                  style={{
                    font: '800 11px/1 var(--ui), sans-serif',
                    padding: '4px 6px',
                    borderRadius: '5px',
                    background: item.badgeType === 'amber' ? '#fff4e3' : '#0e4fff',
                    color: item.badgeType === 'amber' ? '#8a4b00' : '#fff'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </div>

      {/* Footer / Current Shop & User Profile */}
      <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
        {/* Current Shop Widget */}
        <div
          style={{
            border: '1px solid rgba(22,24,29,.12)',
            borderRadius: '9px',
            padding: '10px 12px 12px',
            background: '#fafbfc'
          }}
        >
          <div
            style={{
              font: '800 10.5px/1 var(--ui), sans-serif',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-45)'
            }}
          >
            Current shop
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              marginTop: '8px'
            }}
          >
            <div>
              <div style={{ font: '800 14px/1.2 var(--ui), sans-serif' }}>
                {activeShop.name}
              </div>
              <div
                style={{
                  font: '400 12.5px/1 var(--ui), sans-serif',
                  color: 'var(--ink-60)',
                  marginTop: '4px'
                }}
              >
                {activeShop.branch}
              </div>
            </div>
            <ChevronDown size={15} strokeWidth={2.5} color="#16181d" />
          </div>
        </div>

        {/* Profile Selector */}
        <div style={{ position: 'relative', marginTop: '10px' }}>
          <div
            onClick={(e) => {
              e.preventDefault();
              toggleProfileMenu();
            }}
            className="hover-bg-light"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 8px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#16181d',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                font: '800 14px/1 var(--ui), sans-serif'
              }}
            >
              {USER_PROFILE.initials}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '800 14px/1 var(--ui), sans-serif' }}>
                {USER_PROFILE.shortName}
              </div>
              <div
                style={{
                  font: '400 12.5px/1 var(--ui), sans-serif',
                  color: 'var(--ink-60)',
                  marginTop: '4px'
                }}
              >
                {USER_PROFILE.memberTier}
              </div>
            </div>
            <ChevronDown size={14} strokeWidth={2.3} color="var(--ink-45)" />
          </div>

          {/* Profile Dropdown Menu */}
          {profileMenuOpen && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '66px',
                background: '#fff',
                border: '1px solid rgba(22,24,29,.14)',
                borderRadius: '10px',
                boxShadow: '0 10px 26px rgba(22,24,29,.16)',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                zIndex: 10
              }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('profile');
                }}
                className="hover-bg-light"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '40px',
                  padding: '0 10px',
                  borderRadius: '7px',
                  color: '#16181d',
                  font: '600 13.5px/1 var(--ui), sans-serif'
                }}
              >
                <User size={16} strokeWidth={2} />
                Profile &amp; Settings
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('vehicles');
                }}
                className="hover-bg-light"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '40px',
                  padding: '0 10px',
                  borderRadius: '7px',
                  color: '#16181d',
                  font: '600 13.5px/1 var(--ui), sans-serif'
                }}
              >
                <History size={16} strokeWidth={2} />
                My Vehicles &amp; History
              </a>
              <div style={{ height: '1px', background: 'rgba(22,24,29,.1)', margin: '4px 6px' }} />
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('You have been logged out.');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  height: '40px',
                  padding: '0 10px',
                  borderRadius: '7px',
                  color: '#ae1800',
                  font: '600 13.5px/1 var(--ui), sans-serif'
                }}
              >
                <LogOut size={16} strokeWidth={2} />
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
