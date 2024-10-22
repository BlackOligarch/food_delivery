import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Loader from './components/load'; // Import Loader component
import Swal from 'sweetalert2'; // Import SweetAlert2 for toast

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleSignOut = () => {
    setIsLoggedIn(false); // Set login state back to false when signing out
    
    // Show success toast
    Swal.fire({
      title: "Logged out!",
      text: "You have been logged out successfully.",
      icon: "success",
      toast: true,
      position: "top-right",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  return (
    <>
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
      {loading ? (
        <Loader /> // Show Loader while loading
      ) : (
        <div className='app'>
          <Navbar 
            setShowLogin={setShowLogin} 
            isLoggedIn={isLoggedIn} 
            handleSignOut={handleSignOut} 
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
