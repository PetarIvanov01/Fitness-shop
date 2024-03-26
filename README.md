# Fitness E-Commerce - StrongEqup 💪

Welcome to **StrongEqup**, a fitness equipment store project aimed at enhancing my skills in React and other technologies. This project serves primarily as a learning exercise, providing challenges and opportunities for growth.

## 🔑 Features

-   **Registration and Profile Creation**
    -   Users can create an account on the platform, providing the necessary information. Upon registration, a user profile is created, allowing for personalized experiences and order tracking.
-   **Address Management for Future Orders** ⚠️(Still in development)
    -   Users can manage their delivery addresses within their profile settings. This feature enables users to save multiple addresses for convenient selection during the checkout process.
-   **Catalog with Various Equipment Categories**
    -   Users have a choice of different fitness equipment. They can be filtered by categories, price, rating, and more.
-   **Sorting and Pagination Functionalities**
    -   The catalog page provides sorting options, allowing users to arrange products based on criteria such as price, popularity, or alphabetical order. Pagination is implemented to manage large product lists, ensuring smooth navigation and improved user experience.
-   **Shopping Cart that Retains Orders Even After Exiting the Application**
    -   Users can add products to their shopping cart and continue browsing the website or even exit the application. The shopping cart retains the selected items, allowing users to resume their shopping session later without losing their selections.
-   **User Profile Options Including Editing Personal Information and Adding Multiple Addresses** ⚠️(Still in development)
    -   Within their user profile, users have access to various options for managing their account settings. They can edit personal information, add or remove delivery addresses as needed, providing flexibility and customization.
-   **Planned Feature: View Order History Under "My Orders" Section**
    -   This feature will enable users to view their order history, including details such as order dates, item descriptions, and order statuses, providing transparency and order tracking capabilities.

<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0; padding: 0;">
  
  <foreignObject width="100%" height="100%" style="margin: 0; padding: 0;">
    <div xmlns="http://www.w3.org/1999/xhtml">
    <h2>Screenshots</h2>
    <p>Here are some screenshots showcasing various views of the StrongEqup application:</p>
     <style>
        details {
            border: 1px solid #000; 
            box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.85);
            border-radius: 3px;
            margin-bottom: 20px;
            background-color: gray; 
        }
        summary {
            font-weight: bold;
            color: #333;
            cursor: pointer;
            background-color: #f0f0f0; 
            padding: 10px;
            border-radius: 3px;
            margin-bottom: 5px;
        }
        details p {
            font-family: "Lato";
            color:black;
            padding: 2px 5px;
            font-size: 16px;
            border-bottom: 1px solid #000;
        }
        .image-wrapper {
            overflow-x: hidden; 
            overflow-y: auto; 
            scrollbar-width: thin; 
            scrollbar-color: #888 #f4f4f4; 
            max-height: 700px; 
        }
        .image-wrapper img {
        max-width: 100%;
            height: auto; 
        }
        .image-wrapper::-webkit-scrollbar {
            width: 5px; 
        }
        .image-wrapper::-webkit-scrollbar-thumb {
            background-color: white; 
            border-radius: 5px; 
        }
        .image-wrapper::-webkit-scrollbar-thumb:hover {
            background-color: #555; 
        }
    </style>
    <div>
        <details>
            <summary>Home Page</summary>
            <p>The Home Page serves as the main entry point to the StrongEqup application. Here, users are greeted with an overview of featured products, promotional offers, and important announcements. The design aims to provide a visually appealing and engaging experience, encouraging users to explore the catalog and make purchases.</p>
            <div class="image-wrapper">
                <img src="screenshots/home-page.png" alt="Home Page Screenshot"> 
            </div>
        </details>
        <details>
            <summary><b>Catalog Page</b></summary>
            <p>The Catalog Page showcases the wide range of fitness equipment available on StrongEqup. Users can browse through various categories such as cardio machines, strength training equipment, accessories, and more. The page features intuitive navigation and filtering options, allowing users to easily find products that suit their fitness needs and preferences.</p>
            <div class="image-wrapper">
                <img src="screenshots/catalog-page.png"/> 
            </div>
        </details>
        <details>
            <summary><b>Profile Page</b></summary>
            <p>The Profile Page provides users with personalized account management features. Here, users can view and edit their personal information, manage delivery addresses, track order history, and update account settings. The page is designed to offer convenience and control, empowering users to tailor their StrongEqup experience to their individual preferences.</p>
            <div class="image-wrapper">
                <img src="screenshots/profile-page.png"/>
            </div>
        </details>
        <details>
            <summary><b>Cart Page</b></summary>
            <p>The Cart Page displays the items that users have added to their shopping cart while browsing the StrongEqup catalog. Users can review the selected products, adjust quantities, and proceed to checkout. The page is designed to be user-friendly and intuitive, providing a seamless shopping experience from product selection to purchase confirmation.</p>
            <div class="image-wrapper">
                <img src="screenshots/cart-page.png"/>
            </div>
        </details>
        </div>
    </div>
  </foreignObject>
</svg>

## Future Plans

In the future, my goal is to deploy the StrongEqup web application so that everyone can access its features. Stay tuned for updates on the deployment progress!

## 🔧 Installation

Follow these steps to set up StrongEqup on your local machine:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/PetarIvanov01/Fitness-shop.git
    ```
2. **Configure and start the server to utilize all features of the application.**

    Server repository: [DrizzleExpress-API](https://github.com/PetarIvanov01/DrizzleExpress-API)

3. **Navigate to the project directory and install dependencies**

    `npm install`

4. **Start the application**

    `npm run dev`

## License

This project is licensed under the [MIT License](LICENSE).
