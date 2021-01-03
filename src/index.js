import ReactDOM from 'react-dom';
import './index.css';
import {Post} from './Post';
import {posts} from './posts';

const Feed = () => {
	return (
		<div>
			{posts.map((post)=>{
				return <Post key={post.id} post={post}/>
				})}
		</div>	
	)
}

ReactDOM.render(<Feed/>,document.getElementById('root')); 