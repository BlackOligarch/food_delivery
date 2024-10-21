import React from 'react';
import Lottie from 'lottie-react'; // Ensure you're importing Lottie correctly
import loaderAnimation from '../assets/serve.json'; // Adjust the path according to your project structure
import './load.css'; // Import CSS for styling

const Loader = () => {
  return (
    <div className="loader">
      <Lottie 
        animationData={loaderAnimation} // Lottie animation data
        loop={true} // Loop the animation
        style={{ width: '100%', height: '100%' }} // Optional: set size if needed
      />
    </div>
  );
};

export default Loader;
