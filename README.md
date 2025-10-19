# Companies Directory

A responsive React web application built with Material UI that allows users to search, filter, and view a directory of companies by various attributes, including name, industry, location, and country.

## Features

- Search companies by name.
- Filter companies by industry, location, and country.
- Responsive and clean interface using Material UI components.
- Data loaded from a JSON file (`companies.json`).
- Easy to extend with new fields or data sources.

### Prerequisites

- Node.js (version 14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/companies-directory.git
    cd companies-directory
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Run the application in development mode:
    ```
    npm start
    ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `/public/companies.json` - Company Data, which includes id, name, industry, location, and country.
- `/src/CompanyFilter.js` - Component for filtering companies.
- `/src/CompanyList.js` - Component to display the list of companies.
- `/src/App.js` - Main app component where state and logic reside.
- `/src/App.css` - Styles for app and components.

## Video
https://drive.google.com/file/d/1AtSqtOmAoOoBiORoViBD-Vo6YZYCpyVQ/view?usp=drive_link

