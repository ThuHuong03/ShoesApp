 # ShoeApp
## Description

The Converse Shoe Selling App is built with React Native and provides an online shopping platform for users to browse and purchase Converse shoe products. This app combines both frontend React Native development and backend PHP and MySQL handling to manage product data, users, and transactions.

## Key Features

- Browse product categories
- Search products by keywords
- View product details
- Add products to cart
- Manage cart items
- Checkout for orders
- User account management

## Installation

### Requirements

- XAMPP
- npm or yarn
- React Native CLI

### Installation Steps

1. **Clone Repository**
2. **Install Dependencies**
  - npm install # or yarn install
3. **Start Apache Sever through XAMPP**
    - Copy folder API into XAMPP/htdocs
    - Start Apache and MySQL on XAMPP Control Pannel
    - create Database: db_app on http://localhost/phpmyadmin/.
    - Copy code in File API/db_app.sql and run SQL query
    - Change Localhost in File: Components/src/MyContext.js by your IP Address
    - Running app by: npx expo start --tunnel
    - Using Expo App on your Device.
 ## Folder Structure:
- /API:  php BackEnd Source Code
- /components :  ReactNative FrontEnd Source Code
