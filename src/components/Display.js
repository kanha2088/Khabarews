import React, { useState, useEffect } from 'react';
import './Display.css';
import Spinner from './Spinner';
import Card from './Card';
import CommentPopup from './CommentPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Display = ({apikey}) => {
  const [newsdata, setdata] = useState([]);
  const [query, setQuery] = useState("all");
  const [loading, setLoading] = useState(true);
  const [save, setsave] = useState([]);
  const [show, setshow] = useState(true);
  const [currentarticleComment, setcurrentarticleComment] = useState(null);
  const [comments, setComments] = useState({});


  
  const handleSaveArticle = (article) => {
    if (!save.some(savedArticle => savedArticle.title === article.title)) {
      setsave([...save, article]);
      toast.success('Article saved!');
    } else {
      toast.info('Article already saved.');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if (value !== '') {
      setQuery(value);
    } 
  };


  async function news() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`
      );
      const data = await res.json();
      setdata(data.articles); 
    } catch (error) {
      alert("error fetching");
      console.error('Error fetching the news:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyenter = (event) => {
    if (event.key === 'Enter') {
      handleInputChange(event);
    }
  };

  useEffect(() => {
    news();
  }, [query]);

  const filteredArticles = newsdata.filter(article => article.urlToImage);

  const handleOpenComment = (article) => {
    setcurrentarticleComment(article);
  };

  const handleCloseComment = () => {
    setcurrentarticleComment(null);
  };

  const handleAddComment = (article, commentText) => {
    setComments(prevComments => ({
      ...prevComments,
      [article.title]: [...(prevComments[article.title] || []), commentText]
    }));
  };
  const trimSentence = (sentence, wordLimit) => {
    const words = sentence.split(' ');
 
    if (words.length > wordLimit) {
    
      return words.slice(0, wordLimit).join(' ') + '...';
    }
  
    return sentence;
  };
  const handleDeleteArticle = (title) => {
    // Create a new array by filtering out the article with the specified title
    const newArticles = newsdata.filter(article => article.title !== title);
  
    // Update the state with the new array
    setdata(newArticles);
  
    // Display a success message
    toast.success('Article deleted!');
  };


  return (
    <div>
      <ToastContainer autoClose={1000} />
      <div className="button-group">
        <h1>Khabarews</h1>
        <button onClick={() => setshow(true)}>Articles</button>
        <button onClick={() => setshow(false)}>Saved<span className='button-grouph2'>{save.length}</span></button>
        
      </div>

      {show ? (
        <div className="displaycard-container">
                <div className='search'>
                  <label>Search:</label>
                  <input
                    type="text"
                    className="search-input"
                    onKeyDown={handleKeyenter}
                  />
                </div>
                    <div className="category-buttons">
                      {['Politics',
'Business and Economy',
'Technology',
'Health',
'Science',
'Sports',
'Entertainment',
'World News',
'Lifestyle',
'Education',
'Environment',
].map(category => (
                        <button key={category} value={category} onClick={() => setQuery(category)}>{category}</button>
                      ))}
                    </div>
                      <div className='queryh1'>
                      <h1>{query}</h1>
                      </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className='displaycarditems'>
            
            {filteredArticles.map((article) => (
  <div key={article.title} className='displaycard'>
    {article.urlToImage && (
      <img className="displaycardimg" src={article.urlToImage} alt={article.title} />
    )}
    <h3>{trimSentence(article.title, 20)}</h3>
    <p>Description</p>
    <p>{trimSentence(article.description, 20)}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    <div className='displaycardbtn'>
      <button onClick={() => handleSaveArticle(article)}>Save</button>
      <button onClick={() => handleDeleteArticle(article.title)}>Delete</button>
      <button onClick={() => handleOpenComment(article)}>Comments</button>
    </div>
  </div>
))}
            </div>
          )}
        </div>
      ) : (
        <Card save={save} setsave={setsave} />
      )}

      {currentarticleComment && (
        <CommentPopup
          article={currentarticleComment}
          comments={comments[currentarticleComment.title] || []}
          onAddComment={(commentText) => handleAddComment(currentarticleComment, commentText)}
          onClose={handleCloseComment}
        />
      )}
    </div>
  );
};

export default Display;