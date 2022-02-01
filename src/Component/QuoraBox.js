import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import '../css/QuoraBox.css'
import { selectUser } from '../featers/UserSlice'
// import { selectUser } from '../app/Store'

const QuoraBox=()=>{

    const user= useSelector(selectUser)
    return(
        <div className='quoraBox'>
         <div className='quoraBox__info'>
             <Avatar src={user.photo} />
             <h5>{user.displayName}</h5>
         </div>
         <div className='quoraBox__quora'>
         <p>What is your qestion or link?</p>
         </div>
        </div>
    )
}

export default QuoraBox