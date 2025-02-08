import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <p>This page wasn't found</p>
            <Link to='/'><strong>Click to open home page</strong></Link>
        </div>
    )
}
  
export default NotFoundPage
