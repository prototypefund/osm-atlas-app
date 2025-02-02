/* eslint-disable react/no-unescaped-entities */
import { MapDataVisLayer } from '@components/MapInterface/mapData'
import { useMapDebugState } from '@components/MapInterface/mapStateInteraction/useMapDebugState'
import { IconModal } from '@components/Modal'
import { isDev } from '@components/utils'
import { CommandLineIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = { title: string; layers: MapDataVisLayer[] }

export const LegendDebugInfoLayerStyle: React.FC<Props> = ({ title, layers }) => {
  const { showDebugInfo } = useMapDebugState()

  if (!isDev || !showDebugInfo) return null

  return (
    <div className="absolute bottom-0 right-0 ml-2 inline-block bg-pink-300">
      <IconModal
        title={title}
        titleIcon="info"
        triggerStyle="circle"
        triggerIcon={<CommandLineIcon className="h-4 w-4" />}
      >
        {layers.map((layer) => {
          const { type, paint } = layer
          return (
            <details open key={layer.id} className="prose">
              <summary className="cursor-pointer">
                Layer <code>{layer.id}</code> — Type <code>{type}</code>
              </summary>
              {Object.entries(paint || {}).map(([key, content]) => {
                if (['line-width'].includes(key)) return null
                return (
                  <pre key={key} className="my-0.5 text-xs">
                    paint['{key}']{' '}
                    <span style={{ color: content }}>{JSON.stringify(content, undefined, 2)}</span>
                  </pre>
                )
              })}
            </details>
          )
        })}
      </IconModal>
    </div>
  )
}
