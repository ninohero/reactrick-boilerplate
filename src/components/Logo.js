import React from 'react';
import LogoImage from '../assets/logo.svg';

export default function Logo() {
  return (
    <img className="logo" src={ LogoImage } role="presentation" height={100} />
  )
}
