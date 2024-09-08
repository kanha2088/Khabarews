# Khabarews

Khabarews is a news application built with React that fetches the latest articles from various categories using the News API. Users can search for specific news, save articles, delete articles, and add comments to the articles.

## Features

- **Fetch News Articles:** Retrieves news articles from the News API based on the query or selected category. Articles are fetched and displayed with relevant details such as title, description, and a link to the full article.
- **Search Functionality:** Allows users to enter a query and fetch news articles related to the search term. The search bar supports pressing "Enter" to trigger the search.
- **Category Filtering:** Provides a list of predefined categories (e.g., Politics, Business, Technology) that users can click to filter articles based on the selected category.
- **Save Articles:** Users can save articles by clicking the "Save" button. Saved articles are stored in the state and can be viewed separately.
- **Delete Articles:** Users can delete articles from the list by clicking the "Delete" button. This removes the article from the displayed list.
- **Add Comments:** Users can add comments to the articles. Comments are stored and displayed in a popup for each article.
- **Responsive Design:** The layout adjusts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.

## Components

- **Display.js:** The main component that handles fetching and displaying news articles. It manages the state for news data, search query, loading status, saved articles, and comments.
- **Spinner.js:** A component to show a loading spinner while fetching data. It is displayed when the application is in the loading state.
- **Card.js:** A component to display saved articles. It renders a list of saved articles with options to view, delete, or add comments.
- **CommentPopup.js:** A component to display and add comments to articles. It shows existing comments and provides an input field for adding new comments.
- **ToastContainer:** Part of the `react-toastify` library, used to display notifications for actions such as saving or deleting articles.

## CSS Files

- **Display.css:** The main stylesheet for the application. It includes styles for the layout, buttons, search bar, article cards, and other components. Media queries are used to ensure responsiveness.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **News API:** For fetching news data.
- **Toastify:** For displaying notifications.
- **CSS:** For styling the components.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/khabarews.git
    cd khabarews
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root of your project and add your News API key:**

    ```env
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

## Usage

1. **Open the application in your browser:**

    ```
    http://localhost:3000
    ```

2. **Use the search bar to search for specific news articles.**
3. **Click on category buttons to filter articles by category.**
4. **Save articles by clicking the "Save" button.**
5. **View saved articles by clicking the "Saved" button in the header.**
6. **Delete articles by clicking the "Delete" button.**
7. **Add comments to articles by clicking the "Comments" button.**


## Acknowledgements

- [News API](https://newsapi.org/) for providing the news data.
- [React Toastify](https://github.com/fkhadra/react-toastify) for notifications.

