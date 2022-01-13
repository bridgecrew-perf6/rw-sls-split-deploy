import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <h2>Bazinga 2</h2>
      <BlogPostsCell />;
    </>
  )
}

export default HomePage
