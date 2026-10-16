// import { useState } from 'react';

// const empty = {
//   name: "",
//   username: "",
//   email: ""
// };

// function AddUserForm({ onAdd }) {
//   const [form, setForm] = useState(empty);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const found = {};

//     if (!form.name.trim())
//       found.name = "Required";

//     if (!form.username.trim())
//       found.username = "Required";

//     if (!form.email.includes("@"))
//       found.email = "Invalid email";

//     setErrors(found);

//     if (Object.keys(found).length > 0) return;

//     onAdd(form);
//     setForm(empty);
//     setErrors({});
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add New User</h2>

//       <label>Name: </label>
//       <input
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       {errors.name && <small>{errors.name}</small>}

//       <br /><br />

//       <label>Username: </label>
//       <input
//         name="username"
//         value={form.username}
//         onChange={handleChange}
//       />
//       {errors.username && <small>{errors.username}</small>}

//       <br /><br />

//       <label>Email: </label>
//       <input
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       {errors.email && <small>{errors.email}</small>}

//       <br /><br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddUserForm;

import { useState } from 'react';

function AddUserForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
    companyName: '',
    catchPhrase: '',
    bs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.username || !form.email.includes('@')) {
      alert('Enter a name, username, and valid email.');
      return;
    }

    onAdd(form);

    setForm({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      lat: '',
      lng: '',
      companyName: '',
      catchPhrase: '',
      bs: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>

      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="website" placeholder="Website" value={form.website} onChange={handleChange} />

      <h3>Address</h3>
      <input name="street" placeholder="Street" value={form.street} onChange={handleChange} />
      <input name="suite" placeholder="Suite" value={form.suite} onChange={handleChange} />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
      <input name="zipcode" placeholder="Zipcode" value={form.zipcode} onChange={handleChange} />

      <h3>Coordinates</h3>
      <input name="lat" placeholder="Latitude" value={form.lat} onChange={handleChange} />
      <input name="lng" placeholder="Longitude" value={form.lng} onChange={handleChange} />

      <h3>Company</h3>
      <input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} />
      <input name="catchPhrase" placeholder="Catch Phrase" value={form.catchPhrase} onChange={handleChange} />
      <input name="bs" placeholder="Business" value={form.bs} onChange={handleChange} />

      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
