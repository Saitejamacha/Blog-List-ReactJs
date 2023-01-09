import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails

  return (
    <li className="li-items">
      <div className="top-con">
        <h1>{title}</h1>
        <p className="date-para">{publishedDate}</p>
      </div>
      <p className="text-para">{description}</p>
    </li>
  )
}

export default BlogItem
