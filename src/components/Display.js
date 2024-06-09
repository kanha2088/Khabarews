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
  const [currentComment, setCurrentComment] = useState(null);
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

  const handleDeleteArticle = (index) => {
    const updatedArticles = [...newsdata]; // Create a copy of the array
    updatedArticles.splice(index, 1); // Remove the article at the given index
    setdata(updatedArticles); // Update the state with the new array
    toast.success('Article deleted!');
  };

  async function news() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2024-06-03&to=2024-06-03&sortBy=popularity&apiKey=${apikey}`
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleInputChange(event);
    }
  };

  useEffect(() => {
    news();
  }, [query]);

  const filteredArticles = newsdata.filter(article => article.urlToImage);

  const handleOpenComment = (article) => {
    setCurrentComment(article);
  };

  const handleCloseComment = () => {
    setCurrentComment(null);
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
  

  return (
    <div>
      <ToastContainer autoClose={2000} />
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
                    onKeyDown={handleKeyDown}
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
'Crime and Law',
'Culture'].map(category => (
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
            
              {filteredArticles.map((article, index) => (
                <div key={index} className='displaycard'>
                  {article.urlToImage && (
                    <img className="displaycardimg" src={article.urlToImage} alt={article.title} />
                  )}
                  <h3>{trimSentence(article.title, 20)}</h3>
                  <p>Description</p>
                  <p>{trimSentence(article.description, 20)}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  <div className='displaycardbtn'>
                    <button onClick={() => handleSaveArticle(article)}>Save</button>
                    <button onClick={() => handleDeleteArticle(index)}>Delete</button>
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

      {currentComment && (
        <CommentPopup
          article={currentComment}
          comments={comments[currentComment.title] || []}
          onAddComment={(commentText) => handleAddComment(currentComment, commentText)}
          onClose={handleCloseComment}
        />
      )}
    </div>
  );
};

export default Display;
