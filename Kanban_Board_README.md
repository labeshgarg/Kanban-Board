
# Kanban Board Application

This project is a Kanban Board Application built using React.js. It allows users to manage tasks across various statuses like "To-do", "In Progress", and "Done", and features sorting, grouping, and filtering to organize tasks by priority, status, or assigned user.

## Features

- **Group By**: Tasks can be grouped by Status, Priority, or User.
- **Sorting**: Tasks can be sorted by Priority or Title.
- **Responsive Design**: Adjusts to different screen sizes.
- **User Avatars**: Display avatars or initials on task cards.
- **Task States**: Visual indicators for different statuses such as To-do, In Progress, Cancelled, etc.
- **LocalStorage**: Preferences for view states are maintained after a page reload.

## Folder Structure

```
├── public
│   └── index.html         # Main HTML file
├── src
│   ├── assets             # Assets like SVGs and images
│   ├── components         # React components
│   │   ├── Board.js       # Main board component
│   │   ├── Column.js      # Displays tasks in categories
│   │   ├── Card.js        # Individual task card
│   │   ├── DisplayDropdown.js # Dropdown for task sorting and grouping
│   ├── App.js             # Root component
│   ├── App.css            # Global CSS
│   ├── index.js           # React app entry point
│   └── index.css          # Base styles
└── README.md              # Project documentation
```

## Key Features Implementation

### Grouping and Sorting
- **Group by**: Status, Priority, User.
- **Sort by**: Priority (descending), Title (alphabetically).
- **Implementation**: Handled in `Board.js` through helper functions.

### User Avatars and Status
- **Avatars**: Displayed in `Card.js`, fallback to initials if no avatar.
- **Status Icons**: Indicate task status like In Progress, Cancelled.

### Responsive Design
- **Adaptability**: Responsive to mobile, tablet, and desktop screens.
- **Media Queries**: Defined in `Board.css` for layout adjustments.

### LocalStorage Integration
- **Persistence**: Saves groupBy and orderBy settings locally.

## How to Run Locally

```bash
git clone [https://github.com/your-username/kanban-board.git](https://github.com/labeshgarg/Kanban-Board)
cd kanban-board
npm install
npm start
```

Navigate to `http://localhost:3000/` to view the app.

## API Integration

Tasks data fetched from a REST API, replace API URL in `App.js`. The API provides a list of tasks and users.

## Technologies Used

- **React.js**: For UI components and state management.
- **CSS**: For styling, includes responsive layout adaptations.
- **LocalStorage**: For storing user preferences client-side.
- **SVG Icons**: For task statuses and user avatars.
