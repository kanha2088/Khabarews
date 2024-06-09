# Khabarews

Khabarews is a news application that fetches the latest articles from various categories using the News API. Users can search for specific news, save articles, delete articles, and add comments to the articles.

## Features

- Fetches news articles based on the query.
- Allows users to search for news articles.
- Displays articles in various categories.
- Users can save, delete, and comment on articles.
- Displays saved articles separately.

## Technologies Used

- React
- News API
- Toastify for notifications
- CSS for styling

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/khabarews.git
    cd khabarews
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add your News API key:

    ```env
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Open the application in your browser:

    ```
    http://localhost:3000
    ```

2. Use the search bar to search for specific news articles.
3. Click on category buttons to filter articles by category.
4. Save articles by clicking the "Save" button.
5. View saved articles by clicking the "Saved" button in the header.
6. Delete articles by clicking the "Delete" button.
7. Add comments to articles by clicking the "Comments" button.

## Components

- `Display.js`: The main component that handles fetching and displaying news articles.
- `Spinner.js`: A component to show a loading spinner while fetching data.
- `Card.js`: A component to display saved articles.
- `CommentPopup.js`: A component to display and add comments to articles.

## CSS Files

- `Display.css`: The main stylesheet for the application.

## Acknowledgements

- [News API](https://newsapi.org/) for providing the news data.
- [React Toastify](https://github.com/fkhadra/react-toastify) for notifications.
