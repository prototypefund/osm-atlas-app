import { MapDataTopic } from '../types'
import { pickLayersByGroup, atlasStyle } from './utils'

const topic = 'bikelanes_osmscripts'
export type TopicBikelanesId_Osmscripts = typeof topic
export type TopicBikelanesStyleIds_Osmscripts = 'default' | 'detailed'
export type TopicBikelanesStyleFilterIds_Osmscripts = '_nofilter'

export const topic_bikelanes_osmscripts: MapDataTopic = {
  id: topic,
  name: 'Radinfrastruktur (osmscripts)',
  desc: null,
  sourceId: 'osmscripts_highways',
  styles: [
    {
      id: 'default',
      name: 'Standard',
      desc: null,
      layers: pickLayersByGroup(atlasStyle.layers, 'fmc-radinfra'),
      interactiveFilters: null,
    },
    {
      id: 'detailed',
      name: 'Detailliert',
      desc: 'Kleinteilige Kategorisierung',
      layers: pickLayersByGroup(atlasStyle.layers, 'fmc-radinfra'),
      interactiveFilters: null,
    },
  ],
}
