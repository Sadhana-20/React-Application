// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import {useState} from "react";
// import Title from "./components/UI/button/Title.jsx";
// function App() {
//   const [count, setCount]=useState(0);
//   return(
//     <>
//     <Title count={count} />
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//     age: "",
//   });

//   const [submitted, setSubmitted] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(form);
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <label>Email:</label>
//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <label>Age:</label>
//         <input
//           name="age"
//           type="number"
//           value={form.age}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       {submitted && (
//         <div>
//           <h2>Submitted Details</h2>
//           <p>First Name: {submitted.firstName}</p>
//           <p>Email: {submitted.email}</p>
//           <p>Age: {submitted.age}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default App;

import { useEffect, useState } from 'react';
import './App.css';
import AddUserForm from './components/UI/button/Form.jsx';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const userData = await response.json();
      setUsers(userData);
    };

    fetchUsers();
  }, []);
  
const handleAdd = (newUser) => {
  const updatedUsers = [...users];

  updatedUsers.push({
    id: Date.now(),
    name: newUser.name,
    username: newUser.username,
    email: newUser.email,
    phone: newUser.phone,
    website: newUser.website,
    address: {
      street: newUser.street,
      suite: newUser.suite,
      city: newUser.city,
      zipcode: newUser.zipcode,
      geo: {
        lat: newUser.lat,
        lng: newUser.lng
      }
    },
    company: {
      name: newUser.companyName,
      catchPhrase: newUser.catchPhrase,
      bs: newUser.bs
    }
  });

  setUsers(updatedUsers);
};

  console.log(users, 'data');

  return (
    <main className="user-directory">
      <h1>User Directory</h1>

      <AddUserForm onAdd={handleAdd} />

      <section className="user-list" aria-label="Users">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <p>
              <strong>Address:</strong>{' '}
              {user.address.street}, {user.address.suite},{' '}
              {user.address.city}, {user.address.zipcode}
            </p>

            <p>
              <strong>Coordinates:</strong>{' '}
              {user.address.geo.lat}, {user.address.geo.lng}
            </p>

            <p>
              <strong>Company:</strong>{' '}
              {user.company.name} - {user.company.catchPhrase} - {user.company.bs}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default App;
