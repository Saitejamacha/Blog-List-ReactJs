import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="un-list">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
