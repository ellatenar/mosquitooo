import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>
        Sorry, what you seek is not to be found here.
      </p>
      <Link to="/">Go home</Link>.
     
    </main>
  )
}

export default NotFoundPage
