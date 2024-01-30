Project Documentation

Table of Contents
- Overview
- Setup and Installation
- Project Structure
- Components
- Styling
- Routing
- API Integration
- Testing
- Deployment
- Contributing
- License


1. Overview
This is a Reddit-like App that features posts from a South Korea subreddit using reddit API. It allows for viewing post details and searching for posts using keywords or phrases.

2. Setup and Installation

# Clone the repository
git clone https://github.com/ejayd04/RedditApp.git

# Navigate to the project directory
cd your-repo

# Install dependencies
npm install

# Start the development server
npm start


3. Project Structure

src/
|-- components/
|   |-- SearchBar.js
|   |-- PostList.js
|   |-- PostDetails.js
|   |-- App.js
|   |-- Filter.js
|   |-- Header.js
|   |-- ErrorState.js
|-- reducers/
|   |-- index.js
|-- store/
|   |-- actions.js
|   |-- index.js
|   |-- reducers.js
|-- index.css
|-- index.js
|-- jest.config.js
|-- Routes.js
|-- setupTests.js



4. Components

4.1 SearchBar
Designed a SearchBar component for users to input search queries.

4.2 PostList
Created a PostList component to display a list of posts.
Fetched and displayed posts dynamically from the Reddit API.
Linked each post to its details page.

4.3 PostDetails
Developed a PostDetails component for displaying detailed information about a specific post.
Utilized React Router for navigation between the post list and post details.


5. Styling
Styled a simple header with a Reddit logo, subreddit name, and search bar.
Redesigned the post list and details page for better user experience.


6. API Integration
Connected to the Reddit API using the fetch function and the Reddit API endpoints.
Handled asynchronous calls to the API using async and await in utility functions.


7. Deployment
Provide instructions on how to deploy the project.

10. Contributing
Explain how others can contribute to the project. Include guidelines for submitting issues and pull requests.

11. License
Specify the project's license.
