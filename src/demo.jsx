import React, { useState } from 'react';
import pic from './assets/Untitled.png'
import "./style.css"

function Demo() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  function like() {
    setLikes(likes + 1); 
  }
  function comment() {
    setComments(comments + 1);
  }
  function share() {
    setShares(shares + 1);
  }

  return (
    <div>
        <img src={pic} ></img><br></br>
      <button onClick={like}>LIKE</button> {likes}
      <div onClick={like}>❤️</div>
      <button onClick={comment}>COMMENT</button> {comments}
      <div onClick={comment}>💬</div>
      <button onClick={share}>SHARE</button> {shares}
      <div onClick={share}>➡️</div>
      
      
    </div>
  );
}

 export default Demo;

 
// import React, { useState } from 'react';

// function Demo() {
//   const [field, setField] = useState('');

//   function handleChange(event) {
//     setField(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={field} onChange={handleChange} />
//       hello {field}
//     </div>
//   );
// }

// export default Demo;

