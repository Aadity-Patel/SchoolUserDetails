import React from 'react'
import UserButton from '../components/UserButton.js';

export default function HomePage() {
  return (
    <div>
      <UserButton buttonText = "Add" onClick={() => console.log('Hello')} />
      <UserButton buttonText = "Update" onClick={() => console.log('Hello')} />
      <UserButton buttonText = "Search" onClick={() => console.log('Hello')} />
      <UserButton buttonText = "Email" onClick={() => console.log('Hello')} />
      
    </div>
  )
}