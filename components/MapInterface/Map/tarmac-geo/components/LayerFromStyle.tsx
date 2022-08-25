import React from 'react'
import { Layer } from 'react-map-gl'
import { StyleLayerLayoutVisibility } from '../../utils'
import { scopedId } from '../../utils/scopedId/scopedId'
import { TarmacStyle, TarmacStyleGroups } from '../utils'

type Props = {
  style: TarmacStyle
  source: string
  group: TarmacStyleGroups
} & StyleLayerLayoutVisibility

export const LayerFromStyle: React.FC<Props> = ({
  style,
  source,
  group,
  visibility,
}) => {
  const relevantLayers = style.layers.filter(
    (l) => l.metadata.groupName === group
  )

  if (!relevantLayers.length) return null

  return (
    <>
      {relevantLayers.map((layer) => {
        const { id, type, layout, filter, paint, minzoom } = layer
        return (
          <Layer
            key={scopedId(group, id)}
            id={scopedId(group, id)}
            type={type as any}
            source={source}
            source-layer={layer['source-layer']}
            {...(!!minzoom && { minzoom })}
            // minzoom={minzoom || undefined} // TODO error
            layout={{
              visibility,
              ...layout,
            }}
            filter={filter || ['all']}
            paint={paint || {}}
          />
        )
      })}
    </>
  )
}
