import React, { useEffect, useState } from 'react';
import './DiscussionBoard.css';
import DynamicComponent from './DynamicComponent';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
const DiscussionBoard = () => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [subforums, setSubforums] = useState([
    {
      title: 'General Information',
      posts: [
        {
          title: 'Description Title:',
          content: 'Lorem Ipsumnd hsefkjh ehkfjwhf kjhfkjhf jhfhefk kjhfk',
          info: 'Last post by Nilesh Thakur on 22 DEC 2023',
        },
        //... other posts
      ],
    },
    //... other subforums
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentSubforumIndex, setCurrentSubforumIndex] = useState(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const navigate = useNavigate();

  const handleCreatePost = (subforumIndex) => {
    setShowModal(true);
    setCurrentSubforumIndex(subforumIndex);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let seconds = String(currentDate.getSeconds()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const postId = uuidv4(); // Generate unique ID
    const newPostObject = {
      id: postId, // Add ID to the new post object
      title: newPostTitle,
      content: newPostContent,
      info: 'Last post by [Your Name] on [Current Date]',
      date: formattedDate,
    };

    const updatedSubforum = {
      ...subforums[currentSubforumIndex],
      posts: [...subforums[currentSubforumIndex].posts, newPostObject],
    };

    setSubforums([
      ...subforums.slice(0, currentSubforumIndex),
      updatedSubforum,
      ...subforums.slice(currentSubforumIndex + 1),
    ]);

    setNewPostTitle(''); // Clear input field
    setNewPostContent(''); // Clear input field
    setShowModal(false);

    // Navigate to the new page with the generated ID
    // navigate(`/posts/${postId}`);
  };

  const handleDivClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const [show, setShow] = useState(false);
  const [userToken, setUserToken] = useState(null);
  console.log(userToken);
  console.log(show);
  useEffect(() => {
    // Retrieve the token from the cookie
    const token = Cookies.get('userToken');
    if (token) {
      try {
        const parseToken = JSON.parse(token);
        // console.log(parseToken);
        setUserToken(parseToken)
        setShow(parseToken.flag_password_change)
      } catch (e) {
        console.log("Failed to parse token:", e);
      }
    }
  }, []);
  return (
    <>
      {show ? <div className="discussion_container">
        {subforums.map((subforum, index) => (
          <div key={index} className="subforum">
            <div className="subforum-title">
              <h1>{subforum.title}</h1>
            </div>
            <div className='subform_main'>
              <div className='subform_post'>

                {
                subforum.posts.length>1?
                subforum.posts.map((post, postIndex) => (
                  postIndex>=1?
                  <div key={postIndex} className="subforum-row">
                    <div className="subforum-icon subforum-column center">
                      {/* <i className="fa fa-car"></i> */}
                      <img src='/IMAGES/user.png' alt='images'/>
                      <div className='viewProfile_btn'>

                      </div>
                    </div>
                    <div className="subforum-description subforum-column" onClick={(() => navigate(`/posts/${post.id}`))}>
                      {/* <div className="subforum-description subforum-column" onClick={handleDivClick}> */}
                      <h1>{post.title}</h1>
                      <p>{post.content}</p>
                      {isComponentVisible && <DynamicComponent />}
                    </div>
                    <div className="subforum-info subforum-column">
                      <b>
                        <a href=" ">{post.info}</a>
                      </b>
                      <br />
                      on <small>{post.date}</small>
                    </div>
                  </div>:<></>
                )):<>We don't have any discussion yet, be the first to start the discussion</>}
              </div>
              <div className='filter'>
                <div className='topDiscus'><h2>Top Discussions</h2></div>
                <div className='recentDiscus'>Recent Discussions</div>
                <div className='activeUsers'>Active Users</div>

              </div>
            </div>

            <div className="create-post">
              <button className="createPost" onClick={() => handleCreatePost(index)}>
                Create Post
              </button>
              {showModal && currentSubforumIndex === index && (
                <div className="modal">
                  <form onSubmit={handleSubmit}>
                    <label>
                      Title:
                      <input
                        className="modal-content"
                        type="text"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        placeholder="Enter post title..."
                      />
                    </label>
                    <br />
                    <label>
                      Content:
                      <textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="Enter post content..."
                      />
                    </label>
                    <br />
                    <button type="submit">Create Post</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
      </div> : <div>
        <h1>Please login first</h1>
      </div>}
    </>
  );
};

export default DiscussionBoard;
