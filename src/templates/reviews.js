import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import ReviewCard from '../components/ReviewCard'
import Layout from '../components/Layout'

const PaginationLink = props => {
  console.log('props pagination link ----')
  console.log(props)
  if (!props.test) {
    return (
      <Link to={`/review/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

const ReviewPage = (props) => {
  const { pageContext: { first, group, index, last } } = props
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString() + '/'

  const websiteSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
  }

  return (
    <Layout>
      <Helmet>
        <title>Reviews | The Devsite</title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    Reviews
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <ReviewCard reviews={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='Previous Page' />
            <PaginationLink test={last} url={nextUrl} text='Next Page' />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default ReviewPage
