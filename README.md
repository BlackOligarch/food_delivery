# **Tasti Fries 🍟**
A Taste Heaven

## Author:
[Godfred Hammond](linkedin.com/in/godfredhammond/)

## What is this?
Tasti Fries is a sleek and interactive web application designed for a restaurant, allowing customers to place online orders with ease. This project focuses on providing an intuitive and visually appealing frontend, simulating backend processes like user sign-in and payment checkout via a mock API.

## Screenshots

![HomePage](<Screenshot (187).png>)

![Menu View](<Screenshot (192).png>)

![Cart View](<Screenshot (193).png>)


## Features
* User Sign-in: Allows users to log a mock API.
* Payment Checkout: A payment checkout pop-up is triggered during the payment process.
* Category Menu Section: Horizontally scrollable menu section for easy navigation through food categories.
* Cart System: A smooth cart system with the ability to add or remove items, showing real-time totals and checkout options.
* Lottie Animation: A restaurant food cover bowl animation (via Lottie) is displayed while the page is loading, enhancing user experience before the homepage is fully rendered.
* Responsive Design: Mobile-friendly design that looks great on all devices.

## Technologies Used
[React](https://react.dev/): For building the user interface and managing application state.
[Vite](https://vite.dev): Development tool for a faster and leaner build setup compared to traditional bundlers.
[HTML5](https://html.spec.whatwg.org/multipage/) & [CSS3](https://www.w3.org/Style/CSS/Overview.en.html): For structuring and styling the web pages.
[JavaScript (ES6+)](https://www.javascript.com/): For interactivity and dynamic content handling.
[SweetAlert](https://sweetalert2.github.io/#download): For custom alert modals, especially during payment checkout.
[Lottie-react](https://lottiefiles.com/): For rendering animations like the loading cover bowl.
[React Router DOM](https://reactrouter.com/en/main): For handling navigation and routing between different pages within the app.

## Installation and Setup

### Prerequisites
(Node.js)[https://nodejs.org/en] (v14+ recommended)
npm or yarn package manager

### Local Setup
 shell
git clone https://github.com/BlackOligarch/food_delivery.git  # clone repo
cd food-delivery  # navigate to directory
npm install # install all dependencies (replace with yarn where necessary)
npm run dev # run the application on localhost

## Mock API
The mock API simulates key backend processes such as:

* User authentication (Sign-in)
* Payment handling (Checkout)
These processes are fully frontend-based to demonstrate the app's functionality without the need for an actual backend server.

## File Structure
The project follows a structured folder hierarchy to keep the code organized:
```
src/
|-- assets/              # Images, icons, and static assets
|-- components/          # Reusable React components (e.g., Navbar, Footer)
|-- context/             # Context API logic for managing global state (e.g., cart)
|-- pages/               # Main pages of the application (e.g., Home, Checkout)
|-- App.js               # Main App component
|-- main.jsx             # Entry point for the application
|-- index.html           # HTML template
```

## Features in Detail
### Files
[Navbar](./frontend/src/components/Navbar/)
The navbar includes the logo, links for different sections like "Home", "Menu", and "Contact Us", and a search icon along with a cart icon. The active page is highlighted based on the current state.

[Cart](./frontend/src/pages/Cart/)
Cart and Checkout
The cart displays added items with their quantities, total prices, and a "Remove" option. Users can proceed to the checkout, and when payment is simulated, a checkout pop-up appears using SweetAlert.

[Menu Section](./frontend/src/components/ExploreMenu)
The menu features a horizontally scrollable category view where users can explore different food options.

### Packages
[Lottie Animation](https://lottiefiles.com/)
When the page is loading, a Lottie animation of a restaurant food cover bowl appears, adding a polished loading experience before the homepage renders.

## Contributions
Feel free to fork the repository and submit pull requests to suggest improvements or add features.
For any queries, feel free to reach out via email.

## License
This project is licensed under the MIT License - see the LICENSE file for details.