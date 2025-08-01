import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Aheader from './Aheader';

const headerStyle = {
  backgroundColor: '#6b46c1',
  color: 'white',
  padding: '15px',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px'
};

function Managebook() {
  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', author: '', genre: '' });

  useEffect(() => { fetchBooks(); }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/mybook');
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3000/mybook/${id}`);
    alert("Book deleted!");
    fetchBooks();
  };

  const startEdit = (book) => {
    setEditId(book.id);
    setEditForm({ title: book.title, author: book.author, genre: book.genre });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    await axios.put(`http://localhost:3000/mybook/${id}`, editForm);
    alert("Book updated!");
    setEditId(null);
    fetchBooks();
  };

  return (
    <>
      <Aheader />
      <div className="container admin-main" style={{ padding: '20px' }}>
        <div style={headerStyle}>📘 Manage Books</div>

        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#eee' }}>
            <tr>
              <th>ID</th><th>Title</th><th>Author</th><th>Genre</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) =>
              editId === book.id ? (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td><input name="title" value={editForm.title} onChange={handleChange} /></td>
                  <td><input name="author" value={editForm.author} onChange={handleChange} /></td>
                  <td><input name="genre" value={editForm.genre} onChange={handleChange} /></td>
                  <td>
                    <button onClick={() => saveEdit(book.id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button onClick={() => startEdit(book)}>Edit</button>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Managebook;
