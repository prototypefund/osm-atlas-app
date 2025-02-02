import { mapboxStyleImages } from '@components/MapInterface/mapData/topicsMapData/mapboxStyleImages/mapboxStyleImages'
import { type MapStyleImageMissingEvent } from 'maplibre-gl'
import { useEffect } from 'react'
import { type MapRef } from 'react-map-gl'

export const useMissingImage = (map: MapRef | undefined) => {
  useEffect(() => {
    if (!map) return

    // Docs https://maplibre.org/maplibre-gl-js-docs/api/map/#map.event:styleimagemissing
    map.on('styleimagemissing', (e: MapStyleImageMissingEvent) => {
      const imageId = e.id

      const imageSrc = mapboxStyleImages.get(imageId)
      if (!imageSrc) {
        console.warn('useMissingImage NOTICE: Missing image', imageId, mapboxStyleImages)
        return
      }

      // Docs https://maplibre.org/maplibre-gl-js-docs/api/map/#map#loadimage
      map.loadImage(imageSrc, (error, image) => {
        if (error) {
          console.warn('useMissingImage ERROR:', imageId, imageSrc, error)
          return
        }
        if (!image) return

        // Guard against race conditions
        // Docs https://maplibre.org/maplibre-gl-js-docs/api/map/#map#hasimage
        if (!map.hasImage(imageId)) {
          // Docs https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addimage
          map.addImage(imageId, image, { pixelRatio: 2 })
          console.log(
            '🚀 ~ file: useMissingImage.ts:37 ~ map.loadImage ~ imageId, image:',
            imageId,
            image
          )
        }
      })
    })
  }, [map])
}
