import '../css/Widget.css'
import WidgetOptions from  './WidgetOptions'
const Widget=()=>{
    return(
        <div className='widget'
        >
        <div className='widget__header'>
        <h5> Spaces to follow</h5>
        </div>
        <WidgetOptions/>
        </div>
    )
}

export default Widget;