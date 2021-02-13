import React from 'react'
import { Link } from 'gatsby'

const ReviewCard = (props) => {
  const { reviews } = props

  return (
    <div className='container'>
      {reviews
        .filter(post => post.node.frontmatter.templateKey === 'review-page')
        .map(({ node: post }) => (
          <div
            className='content'
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
            <p>
              <Link className='has-text-primary' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default ReviewCard
