import React from 'react';
import './index.css';

export const Post = (props) => {
	const {username,userpicture,location,caption,likes,image,time} = props.post;
	return (
		<section className='post'>
			<header>
				<img className='profilePicture' src={userpicture}/>
				<p className='usernameLocation'><b>{username}</b><br/>{location}</p>
				<img className='optionsButton' src='https://static.thenounproject.com/png/658625-200.png'/>
			</header>
			<article>
				<img className='postImage' src={image}/>				
			</article>
			<footer>
				<img className='likeIcon' src='https://i.ibb.co/BZ6cPDr/like.jpg'/>
				<img className='commentIcon' src='https://i.ibb.co/jhRdJNw/comment.jpg'/>
				<img className='sendIcon' src='https://i.ibb.co/gWRn75S/send.png'/>			
				<img className='saveIcon' src='https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png'/>
				<p style={{marginLeft:"10px",fontSize:"0.95rem"}}>{likes} likes</p>
				<p className='caption'><b>{username}</b> {caption}</p>
				<p style={{color:"grey",fontSize:"0.7rem",marginLeft:"10px"}}>{time} hours ago</p>
				<div className='comment'>
					<input className='commentBox' placeholder='Add a comment...' type='text'></input>
					<button className='commentButton'>Post</button>
				</div>
			</footer>
		</section>		
	)
}
