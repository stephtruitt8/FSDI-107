import { Link } from 'react-router-dom'

import { IconXboxX, IconHome } from '@tabler/icons-react';


function Notfound() {
    return (
        <div className="pb-4">
            <IconXboxX stroke={2} color="red" size={84} />
           

            {/* <IconArrowLeft color="red" size={48} /> */}
            <h1>404 - Page Not Found</h1>
            <p className="text-secondary fs-5">Oh no! The page you are looking for doesn't exist! Try again later!</p>
            <Link className="btn btn-success" to="/">
            <IconHome stroke={2} style={{ marginRight: "8px" }} />
            Go Back Home!
            </Link>
        </div>
    )
}

export default Notfound