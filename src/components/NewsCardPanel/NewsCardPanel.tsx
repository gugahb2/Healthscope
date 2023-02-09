import classnames from 'classnames'
import React from 'react'
import Slider, { CustomArrowProps } from 'react-slick'
import Link from 'next/link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ILink } from '../../interfaces/base'
import ImageCardTile, {
  IProps as CardTileProps,
} from '../ImageCardTile/ImageCardTile'

import styles from './styles.module.scss'

export interface IProps {
  title?: string
  readAllLink?: ILink
  cards: CardTileProps[]
}

const PrevArrow = ({
  currentSlide,
  slideCount,
  className,
  ...props
}: CustomArrowProps) => (
  <div {...props} className={classnames(styles.arrow, styles.prev)}>
    <i className='hs hs-arrow-left' aria-hidden />
  </div>
)

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props} className={classnames(styles.arrow, styles.next)}>
    <i className='hs hs-arrow-right' aria-hidden />
  </div>
)

const NewsCardPanel = ({ title, readAllLink, cards }: IProps) => {
  const settings = {
    dots: true,
    dotsClass: classnames('slick-dots', styles.dots),
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.13,
        },
      },
    ],
  }

  return (
    <div className={styles.container}>
      <div className='section-container'>
        <div className={styles.card_header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {readAllLink && (
            <Link href={readAllLink.href}>
              <a className={styles.text_all_news}>{readAllLink.text}</a>
            </Link>
          )}
        </div>
        {cards && cards.length > 0 ? (
          <>
            <div className={classnames(styles.panel_pc)}>
              {cards.map((item, index) => (
                <div key={index}>
                  <ImageCardTile
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
            <div className={styles.panel_mobile}>
              <Slider {...settings}>
                {cards.map((item, index) => (
                  <div key={index} className='pr-3'>
                    <ImageCardTile {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default NewsCardPanel
