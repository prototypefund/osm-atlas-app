import { MapDataSourceInspectorEditor } from '@components/MapInterface/mapData/types'
import { pointFromGeometry } from './pointFromGeometry'

type Props = {
  urlTemplate: MapDataSourceInspectorEditor['urlTemplate']
  geometry: maplibregl.GeoJSONFeature['geometry']
  osmType?: string
  osmId?: number | string
}

export const editorUrl = ({ urlTemplate, geometry, osmType, osmId }: Props) => {
  const [lng, lat] = pointFromGeometry(geometry)
  if (!lng || !lat) return undefined

  return urlTemplate
    .toString()
    .replace('{zoom}', '19')
    .replace('{latitude}', lat.toString())
    .replace('{longitude}', lng.toString())
    .replace('{osm_type}', osmType ?? '')
    .replace('{osm_id}', osmId?.toString() ?? '')
}
