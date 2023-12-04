/* Imports */
import Header from "../Header";

/* Error page component */
const Error = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>404 Error - Not found page</h1>
                    <p>Uh oh, that page doesn't exist.</p>
                </div>
            </main>
        </>
    )
}

export default Error;
