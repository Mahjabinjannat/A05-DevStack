# 🚀 DevStack — Build Your Ideal Development Stack

DevStack is an interactive web application that helps developers explore popular development technologies and build their own personalized development stack.

Users can browse different technologies by category, select the technologies they want to use, and manage their selected stack from one place.

---

## ✨ Features

### 🧩 Explore Technologies

Browse popular technologies from different categories such as:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

Each technology card provides useful information such as its name, category, description, rating, difficulty level, and badge.

### 🎯 Build Your Own Stack

Select technologies that you want to include in your development stack. The selected technologies are displayed in the **Your Stack** section.

### 🗑️ Manage Your Stack

Remove individual technologies from your stack or remove all selected technologies at once.

---

## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔔 React Toastify
- 🎯 React Icons
- 📄 JSON

---

## 📸 Project Overview

DevStack provides a clean and modern interface for developers to explore different technologies and create their own development stack.

### 🏠 Hero Section

The hero section introduces the DevStack application and explains its main purpose.

### 💻 Technology Cards

Each technology card displays:

- Technology name
- Category
- Description
- Rating
- Difficulty
- Badge
- Technology icon

### 🧩 Your Stack

The **Your Stack** section displays all technologies selected by the user.

Users can:

- Add technologies to their stack
- Remove individual technologies
- Remove all selected technologies
- See an empty-stack message when no technology is selected

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes creating and understanding UI components easier.

### Example:

```jsx
function App() {
  return <h1>Hello World!</h1>;
}
```

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component. When state changes, React re-renders the component.

Props → Parent → Child
State → Managed inside the component

For example:

```jsx
<TechnologyCard technology={technology} />
```

Here, technology is passed to the child component as a prop.

## 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows a React component to store and update data.

I used useState to keep track of the technologies selected by the user.

```jsx
const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
```

When a user adds or removes a technology, setSelectedStack updates the selected stack.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used in React to perform side effects, such as fetching data or interacting with external systems.

However, in this project, I did **not** use `useEffect` to load the JSON data. Instead, I used React's **`use()` hook** to read the data from a Promise.

### Example:

```tsx
const technologiesPromise = fetch("/data.json").then((res) => res.json());

const technologies = use(technologiesPromise);
```

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which items were added, removed, or changed and update the UI efficiently.

```jsx
technologies.map((technology) => (
  <TechnologyCard key={technology.id} technology={technology} />
));
```

Here, technology.id is used as the unique key.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

For example, I used it to show a message when the user's stack is empty.

```jsx
{
  selectedStack.length === 0 ? (
    <p>Your stack is empty. Start adding technologies!</p>
  ) : (
    <SelectedStack technologies={selectedStack} />
  );
}
```

If there are no selected technologies, the empty-stack message is displayed. Otherwise, the selected technologies are shown.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using props.

<TechnologyCard technology={technology} />

The child receives the data through its props:

function TechnologyCard({ technology }: Props) {
return <h2>{technology.name}</h2>;
}

To send something back to the parent, the parent can pass a function as a prop.

<TechnologyCard
  technology={technology}
  onAdd={handleAddTechnology}
/>

The child can then call that function:

```jsx
<button onClick={() => onAdd(technology)}>Add to Stack</button>
```

### Data Flow

```text
Parent
   ↓
 Props
   ↓
Child

Child
   ↓
Callback Function
   ↓
Parent
```

## 🎯 What I Learned

While building this project, I practiced:

- React components
- Props and state
- `useState`
- `use` , `useEffect`
- Conditional rendering
- `.map()`, `filter` and unique keys
- Parent-child communication
- TypeScript interfaces
- Tailwind CSS
- Fetching JSON data
- Managing selected items
- Building reusable components

## 👩‍💻 Author

**Mahjabin Jannat**

🎓 Computer Science Graduate

💻 Aspiring Frontend Developer

### 🔗 Connect With Me

- GitHub: [Mahjabin Jannat](https://github.com/Mahjabinjannat)
