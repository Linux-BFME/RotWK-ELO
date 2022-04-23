import './App.css';
import React from 'react';

/**
 * Background component that shows The One Ring, blurred and static on the page
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
function Background() {
  const blurRadius = 5;

  return (
    <div style={{
      backgroundImage: 'url(images/background.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // Add blur effect to background
      filter: `blur(${blurRadius}px)`,
      // Take up whole page
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      width: '110%',
      height: '120%',
      marginLeft: '-5%',
      marginTop: '-5%',
      transform: 'translateZ(0)',
    }} />
  );
}

export default Background;

