import axios from 'axios';
import React, {useState} from 'react';
import '../styles/Blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const convertPromiseToValue = async () => {
    let cachedNotes = await fetchNotes;
    cachedNotes = cachedNotes.map(note => {
      return (
        <figure key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </figure>
      );
    });
    setNotes(cachedNotes);
    setLoading(false);
  };
  const fetchNotes = axios
    .get('http://localhost:5000/blogs')
    .then(response => response.data);

  const [notes, setNotes] = useState(convertPromiseToValue);

  return (
    <section className="blog">
      <h1>Blog</h1>
      {!loading && notes}
    </section>
  );
};

export default Blog;
