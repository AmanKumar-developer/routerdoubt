// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, author, topic, avatarUrl} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-link-container">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <p className="item-title">{title}</p>
        </div>
        <div className="author-info">
          <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
          <p className="author-name">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
