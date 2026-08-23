import React from 'react';

export function Button({
  children,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'green', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  fullWidth = false,
  disabled = false,
  style = {},
  className = '',
  href
}) {
  const getStyles = () => {
    let bg = '#0e4fff';
    let color = '#fff';
    let border = 'none';
    let hoverBg = '#0b3ecc';

    if (variant === 'secondary') {
      bg = '#eef3ff';
      color = '#0e4fff';
      border = '1px solid #b9cdff';
      hoverBg = '#e3ecff';
    } else if (variant === 'outline') {
      bg = 'transparent';
      color = '#16181d';
      border = '1px solid rgba(22, 24, 29, 0.16)';
      hoverBg = '#eef3ff';
    } else if (variant === 'green') {
      bg = '#12735a';
      color = '#fff';
      border = 'none';
      hoverBg = '#0f5c48';
    } else if (variant === 'danger') {
      bg = 'transparent';
      color = '#ae1800';
      border = 'none';
      hoverBg = '#fdeceb';
    }

    let height = '44px';
    let padding = '0 20px';
    let fontSize = '13.5px';

    if (size === 'sm') {
      height = '34px';
      padding = '0 12px';
      fontSize = '12.5px';
    } else if (size === 'lg') {
      height = '50px';
      padding = '0 26px';
      fontSize = '14px';
    }

    return { bg, color, border, hoverBg, height, padding, fontSize };
  };

  const s = getStyles();

  const buttonStyle = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    height: s.height,
    padding: s.padding,
    borderRadius: '9px',
    background: s.bg,
    color: s.color,
    border: s.border,
    font: `800 ${s.fontSize}/1 var(--ui), sans-serif`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
    textDecoration: 'none',
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    ...style
  };

  const handleMouseEnter = (e) => {
    if (!disabled && s.hoverBg) {
      e.currentTarget.style.backgroundColor = s.hoverBg;
      if (variant === 'outline') {
        e.currentTarget.style.borderColor = '#0e4fff';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = s.bg;
      if (variant === 'outline') {
        e.currentTarget.style.borderColor = 'rgba(22, 24, 29, 0.16)';
      }
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {Icon && <Icon size={16} strokeWidth={2.2} />}
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {Icon && <Icon size={16} strokeWidth={2.2} />}
      {children}
    </button>
  );
}
