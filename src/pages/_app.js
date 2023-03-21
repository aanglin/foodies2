import { useEffect } from 'react'
import '@/styles/globals.css'
import Cookies from 'js-cookie'

function setUserId(userId) {
  Cookies.set('userId', userId)
}

function getUserId() {
  return Cookies.get('userId')
}

export default function App({ Component, pageProps }) {
  function generateNewUserId() {
    const existingUserId = getUserId();
    if (existingUserId) {
      return existingUserId;
    }
    const newUserId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (new Date().getTime() + Math.random()*16)%16 | 0;
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    setUserId(newUserId);
    return newUserId;
  }
  
  useEffect(() => {
    generateNewUserId();
  }, [])
  
  return <Component {...pageProps} />
}
