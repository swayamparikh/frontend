// import React, { useState } from 'react';

// function Form1() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div>
//       <div style={{ maxWidth: 400, margin: 'auto' }}>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>
//               Name:<br />
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           <div>
//             <label>
//               Email:<br />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           <div>
//             <label>
//               Password:<br />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           <button type="submit" style={{ marginTop: 10 }}>
//             Submit
//           </button>
//         </form>

//         {submittedData && (
//           <div style={{ marginTop: 20 }}>
//             <h3>Submitted Data:</h3>
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Email:</strong> {submittedData.email}</p>
//             <p><strong>Password:</strong> {submittedData.password}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Form1;
