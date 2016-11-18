import React from 'react'
import Logo from '../components/Logo';
import PrimaryNavigation from '../components/PrimaryNavigation';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <PrimaryNavigation />
    </div>
  );
}
