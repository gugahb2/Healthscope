import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { loadGMaps } from '../../scripts/utils'

import { ILoaction, IMapIcon } from '../../interfaces/base'

import styles from './gmap_widget.module.scss'

interface GMapControlsProps {
  zoomControl: Boolean
  mapTypeControl: boolean,
  scaleControl: boolean,
  streetViewControl: boolean,
  rotateControl: boolean,
  fullscreenControl: boolean
}

export interface GMapWidgetProps {
  zoom: number
  center: ILoaction
  locations: ILoaction[]
  mapIcon?: IMapIcon
  controls?: GMapControlsProps
}

const defaultControlOptions = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false
}

const GMapWidget = ({ zoom, center, locations, mapIcon, controls }: GMapWidgetProps) => {
  const googleMapRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [map, setMap] = useState<any>()
  const [markers, setMarkers] = useState<Array<any>>([])
  const [isGLoaded, setIsGLoaded] = useState(false)

  useEffect(() => {
    loadGMaps(() => setIsGLoaded(true))

    return () => setIsGLoaded(false)
  }, [])

  useEffect(() => {
    if (!map && isGLoaded && googleMapRef && googleMapRef.current) initMap()
  }, [isGLoaded, googleMapRef])

  useEffect(() => {
    updateMap()
  }, [zoom, center])

  useEffect(() => {
    updateMarkers()
  }, [locations])

  const initMap = () => {
    if (typeof (window as any).google !== 'undefined') {
      const controlOptions = controls || {};
      const googleMap = new (window as any).google.maps.Map(
        googleMapRef.current,
        {
          zoom: zoom || 15,
          center: center || { lat: 0.0, lng: 0.0 },
          ...defaultControlOptions,
          ...controlOptions
        }
      )

      setMap(googleMap)
      addMarkers(googleMap)
    } else {
      setTimeout(initMap, 500)
    }
  }

  const updateMap = () => {
    if (!map) return

    map.setZoom(zoom)
    map.setCenter(center)
  }

  const updateMarkers = () => {
    if (!map) return

    removeMarkers(map)
    addMarkers(map)
  }

  const addMarkers = (map: any) => {
    if (!locations || !locations.length) return

    const icon =
      mapIcon && mapIcon.url
        ? {
            url: mapIcon.url,
            scaledSize: {
              width: mapIcon.width || 36,
              height: mapIcon.height || 36,
            },
          }
        : null
    
    let _markers = locations.map((location) => {
      const _marker = new (window as any).google.maps.Marker({
        position: location,
        url: `https://maps.google.com/maps?daddr=${location.lat},${location.lng}&amp;ll=`,
        map,
      })

      icon && _marker.setIcon(icon)

      return _marker
    })

    setMarkers(_markers)
  }

  const removeMarkers = (map: any) => {
    if (!markers.length) return

    markers.forEach((marker) => {
      marker.setMap(null)
    })

    setMarkers([])
  }

  return (
    <div className={styles.root}>
      <div className={styles.google_map} ref={googleMapRef}></div>
    </div>
  )
}

export default GMapWidget
