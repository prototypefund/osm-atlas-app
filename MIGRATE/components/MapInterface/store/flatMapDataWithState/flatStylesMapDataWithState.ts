import { mapDataConfig, MapDataConfigTopic } from '../../Map/mapData'
import { FlatMapDataStyle, flatMapStyleData } from '../flatMapData'
import { TopicStyleKey } from '../geschichte'
import { addStateToObject, ObjectWithState } from './addStateToObject'

export const flatStylesMapDataWithStateForConfig = (
  thatMapDataConfigTopics: MapDataConfigTopic[],
  selectedStyleKeys: TopicStyleKey[]
): ObjectWithState<FlatMapDataStyle>[] => {
  const styles = flatMapStyleData(thatMapDataConfigTopics)
  return styles.map((s) =>
    addStateToObject<FlatMapDataStyle>(s, selectedStyleKeys.includes(s.key))
  )
}

export const flatStylesMapDataWithState = (
  selectedStyleKeys: TopicStyleKey[]
) => {
  return flatStylesMapDataWithStateForConfig(
    mapDataConfig.topics,
    selectedStyleKeys
  )
}