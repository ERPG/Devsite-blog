import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, meta_title, meta_description, main_image, heading, description, offerings, testimonials } } } } = props

  return (
    <Layout>
      <HomePageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        main_image={main_image}
        heading={heading}
        description={description}
        offerings={offerings}
        testimonials={testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
                heading
        description
        offerings {
          blurbs {
            image {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 72) {
                        ...GatsbyImageSharpFluid
                    }
                }
                publicURL
            }
            text
          }
        }
        testimonials {
          author
          quote
        }
        main_image {
          childImageSharp {
            fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  }
`
