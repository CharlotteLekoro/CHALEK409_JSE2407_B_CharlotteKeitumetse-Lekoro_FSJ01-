**CHALEK409_JSE2407_B_CharlotteKeitumetse-Lekoro_FSJ01**

## Introduction
I built an e-commerce store with features like product browsing, pagination, detailed product views, and error handling. This helped me learn server-side rendering and data fetching while ensuring a smooth experience for users.

## Technologies
- Next.js: Framework for building the React application with server-side rendering
- React: Utilized React's state management with useState for handling the image gallery
- CSS3: Styling with Tailwind CSS for a utility-first approach
- Error Boundaries: Implemented error boundaries or similar mechanisms to manage and display errors gracefully during data fetching
- API: E-commerce product data provided through vercel

## Setup Instructions 
Requirements
- Node.js: Ensure you have Node.js installed.

1. Clone the Repository & Open Terminal
2. Install Dependencies: `npm install`
3. Start the Development Server: npm run dev

## Usage Examples 
### Home Page 
The main page functions as the landing page for the shopping app. It includes a prominent `View Products` button that directs users to a page displaying a list of products.

### Products Page 
This page presents a grid of 20 product cards. Each card features the product’s image, title, description, price, and category, along with a `View Details` button. 

### Pagination
Use the pagination controls to navigate through product pages. The URL updates to show the current page, and the page number is displayed next to the navigation buttons.

### Product Detail Page 
To access the detail page, click on the `View Details` button from the products page . This page displays the product image on the left (with scrolling controls for multiple images) and includes the title, brand, description, price, category, tags, rating, and stock availability on the right. Below this, the reviews section lists each reviewer's name, the date the review was added, the comment, and the rating given.

### Error Handling 
Loading State: A loading indicator is shown while fetching data.
Error Messages: Friendly error messages are displayed if product data fails to load.
