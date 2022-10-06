import {
  mapDataConfig,
  MapDataConfigTopicIds,
  MapDataConfigTopicStyleIds,
} from '../mapDataConfig.const'
import { MapDataConfigTopic } from '../types'

export const getMapDataTopic = (topicId: MapDataConfigTopicIds) => {
  return mapDataConfig.topics.find((t) => t.id === topicId)
}

export const getMapDataTopicStyle = (
  topicInput: MapDataConfigTopicIds | MapDataConfigTopic,
  styleId: MapDataConfigTopicStyleIds
) => {
  if (typeof topicInput === 'string') {
    const topic = mapDataConfig.topics.find((t) => t.id === topicInput)
    return topic?.styles.find((s) => s.id === styleId)
  } else {
    return topicInput?.styles.find((s) => s.id === styleId)
  }
}