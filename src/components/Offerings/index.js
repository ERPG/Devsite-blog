import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const Offerings = (props) => {
  const { gridItems } = props
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className='column' style={{ borderRadius: '5px' }}>
          <section className={`section ${(idx + 1) % 2 ? 'even-image-container' : ''}`}>
            <div className='offering-image-container'>
              <img
                className='offering-image'
                src={item.image.publicURL}
                alt={`gatsby-business-starter-${idx}`}
              />
            </div>
            <div className='offering-text-container'>
              <p className='offering-text' dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
