# Drag and Drop Todo List

## Overview
This is a simple **drag and drop** Todo List application built with **React**. It allows users to add, edit, delete, and reorder todo items dynamically. The app also fetches initial data from an API.

## Features
- **Add new todos** with a title and body.
- **Edit existing todos** inline.
- **Delete todos** easily.
- **Drag and drop reordering** of todo items.
- **API integration** to fetch initial data.

## Technologies Used
- React (Functional Components & Hooks)
- DnD Kit (Drag and Drop functionality)
- Axios (API calls)
- CSS (Custom styling)

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the project**
   ```sh
   npm run dev
   ```

## File Structure
```
📂 src
├── 📄 Input.jsx           # Handles adding new todos
├── 📄 Todo.jsx            # Displays and manages todo items
├── 📄 SortableItem.jsx    # Implements drag-and-drop for todo items
├── 📄 TodoApi.jsx         # Fetches initial data from an API
├── 📄 input.css           # Styles for the input component
├── 📄 todo.css            # Styles for the todo list
```

## Usage
1. Enter a title and body in the input fields and click **ADD**.
2. Click **Edit** to modify a todo, then click **Save**.
3. Click **Delete** to remove a todo.
4. Drag and drop todos to reorder them.

## API Source
The app fetches initial data from:
```
https://jsonplaceholder.typicode.com/posts
```

## Contributing
Feel free to fork the repository and submit pull requests.
## Output

![image](https://github.com/user-attachments/assets/7d39d721-e0b3-4ec5-ab21-d568e7a94b28)

