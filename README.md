# Cat Breed Search App

This single-page application allows users to explore cat breeds using the [TheCatAPI](https://thecatapi.com). Users can browse, filter, and view detailed information about various cat breeds. The app includes features such as dark/light mode and shareable search results via a URL.

## Features

- **Browse Cat Cards**:
  - View a list of cat breeds with images, descriptions, and a "See More" button for each breed.
  - The card includes an image of the breed fetched from the [TheCatAPI](https://thecatapi.com), along with a brief description.

- **Detailed Cat Info**:
  - Clicking the "See More" button opens a modal displaying additional breed information:

- **Search**:
  - Use the search bar to filter cat breeds by their name. The list of cat cards will update dynamically based on the search term entered.

- **Dark/Light Mode**:
  - Toggle between dark and light modes by clicking an icon.
  - The user's mode preference is stored in **localStorage**, so the app remembers the last used mode even after a page refresh.

- **Shareable Search URL**:
  - After filtering the cat breeds using the search bar, the current search query is reflected in the URL.
  - Users can copy the URL to share the filtered results with others, ensuring that the exact search query is preserved when the link is opened.
