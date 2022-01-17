import '../css/Feed.css'
import QuoraBox from './QuoraBox';
import Post from './Post';
const Feed =()=>{
    return(
        <div className='feed'>
            <QuoraBox/>
            <Post/>
            <Post/>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}

export default Feed;