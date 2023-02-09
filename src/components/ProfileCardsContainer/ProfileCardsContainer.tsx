import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import ProfileCard, { IProps as IProfileCard } from '../ProfileCard/ProfileCard'
import styles from './styles.module.scss'
import classNames from 'classnames'

export interface IProps {
  items: IProfileCard[]
  message?: string
  totalCount?: number
  totalPages?: number
}

const ProfileCardsContainer = ({
  items,
  message,
  totalCount=20,
  totalPages=4,
}: IProps) => {
  const router = useRouter()
  const PAGINATION_LEN = 5
  const PAGINATION_STEP = 5
  const [page, setPage] = useState(1)
  const [pgNumList, setPgNumList] = useState(Array.from(Array(PAGINATION_LEN), (_, index) => index + 1))

  useEffect(() => {
    const temp = router
      && router.query.slug
      && router.query.slug[0]
      && router.query.slug[0].split('?')

    if (temp && temp.length > 1) {
      const queries = temp[1].split('&')
      const pageParam = queries.find((item) => item.includes('page'))?.split('=')
      const currentPage = pageParam && pageParam.length > 1 && parseInt(pageParam[1]) || 1
      setPage(currentPage)
    } else {
      setPage(1)
    }
  }, [router])

  const prevBar = () => {
    if (pgNumList[0] <= 1) return

    const temp = []
    for (const item of pgNumList) {
        if (item - PAGINATION_STEP > 0) {
            temp.push(item - PAGINATION_STEP)
        }
    }
    setPgNumList(temp)
  }

  const nextBar = () => {
      if (pgNumList[PAGINATION_LEN - 1] >= totalPages) return

      const temp = []
      for (const item of pgNumList) {
          temp.push(item + PAGINATION_STEP)
      }
      setPgNumList(temp)
  }

  const handlePage = (currentPage: number) => {
    setPage(currentPage)

    const temp = router
      && router.query.slug
      && router.query.slug[0]
      && router.query.slug[0].split('?')

    const pathname = temp ? temp[0] : ''
    
    const params = temp.length > 1 ? new URLSearchParams(temp[1]) : new URLSearchParams()
    if (params.has('page')) {
      params.delete('page')
    }
    params.append('page', currentPage.toString())
    const url = `/${pathname}?${params.toString()}`

    if (router) router.push({ pathname: url }, undefined, {scroll: false})
    else if (typeof window !== 'undefined') window.location.href = url
  }

  return items && items.length > 0 ? (
    <div id="profile-container" className="section-container">
      <div className={styles.container}>
        <div
          className={`${styles.card__container} flex flex-wrap`}>
          {items.map((item, index) => {
            // if (!item.phone || !item.specialties || item.specialties.length === 0) return null;
            return (
              <div key={index} className='w-full md:w-1/2 lg:w-1/3 pl-0 pr-0 md:pl-3 md:pr-3 pb-6'>
                <ProfileCard {...item} />
              </div>
            )
          })}
        </div>
        <div className={styles.pagination}>
          <div className='text-body mr-5 mb-2 sm:mb-0'>{totalCount} Items found</div>
          <div className='flex items-center'>
            {pgNumList[0] > 1 && (
              <div onClick={prevBar} className='p-3 cursor-pointer'>{'<'}</div>
            )}
            {pgNumList.map((item, idx) => {
              if (item <= totalPages) {
                return (
                  <a key={idx} href="#profile-container">
                    <div
                      className={classNames(
                        styles.btnPaginagion,
                        'flex justify-center items-center',
                        item === page ? 'bg-cerulean' : 'bg-white'
                      )}
                      onClick={() => handlePage(item)}
                    >
                      {item}
                    </div>
                  </a>
                )
              } else return null
            })}
            {pgNumList[pgNumList.length - 1] < totalPages && (
              <div onClick={nextBar} className='p-3 cursor-pointer'>{'>'}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='text-center py-14 text-white text-heading-4'>
      {message || 'Sorry, we didn\'t find any specialists matching your search.'}
    </div>
  )
}

export default ProfileCardsContainer
