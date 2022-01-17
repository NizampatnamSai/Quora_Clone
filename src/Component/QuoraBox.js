import { Avatar } from '@material-ui/core'
import '../css/QuoraBox.css'

const QuoraBox=()=>{
    return(
        <div className='quoraBox'>
         <div className='quoraBox__info'>
             <Avatar/>
             <h5>Username</h5>
         </div>
         <div className='quoraBox__quora'>
         <p>What is your qestion or link?</p>
         </div>
        </div>
    )
}

export default QuoraBox