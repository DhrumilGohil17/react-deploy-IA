import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '9px',
        color: '#000',
        padding: '0.4rem',
        fontWeight: 'bolder',
      }}>
      {children}
    </span>
  );
}