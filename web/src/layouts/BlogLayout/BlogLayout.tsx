type BlogLayoutProps = {
  children?: React.ReactNode
}

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut, currentUser } = useAuth()
  return (
    <>
      <header className="relative flex items-center justify-between px-8 py-4 text-white bg-blue-700">
        <h1 className="text-3xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 transition duration-100 hover:text-blue-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                to={routes.posts()}
              >
                Admin
              </Link>
            </li>

            <li>
              {isAuthenticated ? (
                <button onClick={logOut}>Logout</button>
              ) : (
                <Link
                  className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                  to={routes.login()}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-4xl p-12 mx-auto mt-3 bg-white rounded-b shadow-lg">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
