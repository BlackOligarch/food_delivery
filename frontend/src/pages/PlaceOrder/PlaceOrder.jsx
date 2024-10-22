import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formElements = e.target.elements;
    const firstName = formElements[0].value.trim();
    const lastName = formElements[1].value.trim();
    const email = formElements[2].value.trim();
    const street = formElements[3].value.trim();
    const city = formElements[4].value.trim();
    const state = formElements[5].value.trim();
    const zipCode = formElements[6].value.trim();
    const country = formElements[7].value.trim();
    const phone = formElements[8].value.trim();

    // Check if all required fields are filled
    if (firstName && lastName && email && street && city && state && zipCode && country && phone) {
      // Display SweetAlert success message
      Swal.fire({
        title: 'Order Placed!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirect after 5 seconds
        setTimeout(() => {
          navigate('/'); // Navigate to the home page
        }, 1000); // 5000 milliseconds = 5 seconds

        e.target.reset(); // Reset the form fields
      });
    } else {
      // Display SweetAlert error message
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields before proceeding.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}> {/* Add onSubmit handler */}
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' required />
          <input type="text" placeholder='Last name' required />
        </div>
        <input type="email" placeholder='Email address' required />
        <input type="text" placeholder='Street' required />
        <div className="multi-fields">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₵{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₵{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₵{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button> {/* Change button type to submit */}
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
