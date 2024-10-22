**Tasti Fries 🍟**

Tasti Fries is a sleek and interactive web application designed for a restaurant, allowing customers to place online orders with ease. This project focuses on providing an intuitive and visually appealing frontend, simulating backend processes like user sign-in and payment checkout via a mock API.

Features

User Sign-in Simulation: Allows users to simulate logging in through the mock API.
Payment Checkout Simulation: A payment checkout pop-up is triggered during the simulated payment process.
Category Menu Section: Horizontally scrollable menu section for easy navigation through food categories.
Cart System: A smooth cart system with the ability to add or remove items, showing real-time totals and checkout options.
Lottie Animation: A restaurant food cover bowl animation (via Lottie) is displayed while the page is loading, enhancing user experience before the homepage is fully rendered.
Responsive Design: Mobile-friendly design that looks great on all devices.

Technologies Used

React: For building the user interface and managing application state.
Vite: Development tool for a faster and leaner build setup compared to traditional bundlers.
HTML5 & CSS3: For structuring and styling the web pages.
JavaScript (ES6+): For interactivity and dynamic content handling.
SweetAlert: For custom alert modals, especially during payment checkout.
Lottie-react: For rendering animations like the loading cover bowl.
React Router DOM: For handling navigation and routing between different pages within the app.
Installation and Setup
Prerequisites
Node.js (v14+ recommended)
npm or yarn package manager
Local Setup
Clone the repository:

bash

git clone https://github.com/your-username/tasti-fries.git
Navigate to the project folder:

bash

cd tasti-fries
Install dependencies: If you're using npm:

bash

npm install
Or with yarn:

bash

yarn install
Start the development server: To run the project locally, use:

bash

npm run dev
This will launch the app in your default browser at http://localhost:3000 (or any specified port).

Build for Production
To create a production build:

bash

npm run build
This will generate a dist/ folder with the optimized build.

Mock API
The mock API simulates key backend processes such as:

User authentication (Sign-in)
Payment handling (Checkout)
These processes are fully frontend-based to demonstrate the app's functionality without the need for an actual backend server.

File Structure
The project follows a structured folder hierarchy to keep the code organized:

graphql

src/
|-- assets/              # Images, icons, and static assets
|-- components/          # Reusable React components (e.g., Navbar, Footer)
|-- context/             # Context API logic for managing global state (e.g., cart)
|-- pages/               # Main pages of the application (e.g., Home, Checkout)
|-- App.js               # Main App component
|-- main.jsx             # Entry point for the application
|-- index.html           # HTML template

Features in Detail
Navbar
The navbar includes the logo, links for different sections like "Home", "Menu", and "Contact Us", and a search icon along with a cart icon. The active page is highlighted based on the current state.

Cart and Checkout
The cart displays added items with their quantities, total prices, and a "Remove" option. Users can proceed to the checkout, and when payment is simulated, a checkout pop-up appears using SweetAlert.

Menu Section
The menu features a horizontally scrollable category view where users can explore different food options.

Lottie Animation
When the page is loading, a Lottie animation of a restaurant food cover bowl appears, adding a polished loading experience before the homepage renders.

Contributions
Feel free to fork the repository and submit pull requests to suggest improvements or add features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author:
Godfred Hammond

For any queries, feel free to reach out via email.

