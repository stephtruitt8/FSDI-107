import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className="pb-4">
            <h1>404 - Page Not Found</h1>
            <p className="text-secondary fs-5">Oh no! The page you are looking for doesn't exist! Try again later!</p>
            <Link className= "btn btn-success" to="/">Go Back!</Link>
        </div>
    )
}

export default Notfound