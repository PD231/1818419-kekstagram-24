
const showComment = (comment) => {
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const fullPhoto = document.querySelector('.big-picture');
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  fullPhoto.querySelector('.social__comments').appendChild(commentElement);
};

export {showComment};


