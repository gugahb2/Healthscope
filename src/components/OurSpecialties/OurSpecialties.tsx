import React from 'react'
import classNames from 'classnames'
import Slider, { CustomArrowProps } from 'react-slick'
import OurSpecialtyItem, { OurSpecialtyItemProps } from './OurSpecialtyItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './our_specialties.module.scss'

export interface OurSpecialtiesProps {
  heading?: string
  description?: string
  items: OurSpecialtyItemProps[]
  backgroundColour?:
  | 'bg-dark'
  | 'bg-white'
  | 'bg-cerulean'
  | 'bg-teal'
  | 'bg-light'
  | 'bg-wave'
}

const PrevArrow = ({
  currentSlide,
  slideCount,
  className,
  ...props
}: CustomArrowProps) => (
  <div {...props} className={classNames(styles.arrow, styles.prev)}>
    <i className='hs hs-arrow-left' aria-hidden />
  </div>
)

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props} className={classNames(styles.arrow, styles.next)}>
    <i className='hs hs-arrow-right' aria-hidden />
  </div>
)

const OurSpecialties = ({
  heading,
  description,
  items,
  backgroundColour,
}: OurSpecialtiesProps) => {
  const settings = {
    dots: true,
    dotsClass: classNames('slick-dots', styles.dots),
    infinite: items && items.length > 3 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: items && items.length > 2 ? true : false
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          infinite: false
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1.18,
          slidesToScroll: 1,
          infinite: false
        },
      },
    ],
  }

  if (!items || !items.length) return null

  return (
    <div className={`${styles.root} ${backgroundColour ? backgroundColour : 'bg-wave'}`}>
      <div className='section-container'>
        {heading && (
          <h3 className={classNames(styles.heading, 'text-heading-3')}>
            {heading}
          </h3>
        )}
        {description &&
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        }
        <div className={styles.slider}>
          <Slider {...settings}>
            {items && !!items.length &&
              items.map((item, index) => {
                if (item.link && item.link.href) {
                  return (
                    <OurSpecialtyItem key={index} {...item} />
                  )
                }
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default OurSpecialties
