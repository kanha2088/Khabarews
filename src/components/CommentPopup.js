import React, { useState } from 'react';
import './CommentPopup.css';

const CommentPopup = ({ article, comments, onAddComment, onClose }) => {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="comment-popup">
      <div className="comment-popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Comments</h2>
        <h3>{article.title}</h3>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            name="comment"
            className='inputcmnt'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button className="cmntbtn" type="submit">Add Comment</button>
        </form>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              {comment}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
