import { Portal, usePopper } from '@components/utils'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { LocationGenerics } from '@routes/routes'
import { useNavigate, useSearch } from '@tanstack/react-location'
import classNames from 'classnames'
import produce from 'immer'
import React, { Fragment } from 'react'
import { getStyleData, TopicIds } from '../mapData'
import { createTopicStyleKey } from '../utils'

type Props = { scopeTopicId: TopicIds }

export const SelectStyles: React.FC<Props> = ({ scopeTopicId }) => {
  const navigate = useNavigate<LocationGenerics>()
  const { config: configThemesTopics, theme: themeId } =
    useSearch<LocationGenerics>()
  const topicConfig = configThemesTopics
    ?.find((th) => th.id === themeId)
    ?.topics.find((t) => t.id === scopeTopicId)

  const [trigger, container] = usePopper({
    placement: 'bottom-start',
    strategy: 'fixed',
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  })

  type ToggleActiveProps = { topicId: string; styleId: string }
  const toggleActive = ({ topicId, styleId }: ToggleActiveProps) => {
    navigate({
      search: (old) => {
        const oldConfig = old?.config
        if (!oldConfig) return { ...old }
        return {
          ...old,
          config: produce(oldConfig, (draft) => {
            const topic = draft
              ?.find((th) => th.id === themeId)
              ?.topics.find((t) => t.id === topicId)
            if (topic) {
              const style = topic.styles.find((s) => s.id === styleId)
              topic.styles.forEach((s) => (s.active = false))
              style && (style.active = !style.active)
            }
          }),
        }
      },
    })
  }

  if (!topicConfig) return null
  // Hide UI for inactive topics
  if (!topicConfig.active) return null
  // Hide UI for topics with only one style
  if (topicConfig.styles.length === 1) return null

  const activeStyleConfig = topicConfig?.styles.find((s) => s.active)
  const activeStyleData = getStyleData(topicConfig.id, activeStyleConfig?.id)

  return (
    <section className="mt-1.5">
      <Menu as="div" className="relative inline-block w-full text-left">
        <div>
          <Menu.Button
            ref={trigger}
            // `w-*` has to be set fo the `truncate` to work
            className="inline-flex w-[13.5rem] justify-between rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            <span className="truncate">Stil: {activeStyleData?.name}</span>
            <ChevronDownIcon
              className="-mr-1 ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Portal>
          <Menu.Items
            ref={container}
            className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {topicConfig.styles.map((styleConfig) => {
                const styleData = getStyleData(topicConfig.id, styleConfig.id)
                if (!styleData) return null
                const key = createTopicStyleKey(topicConfig.id, styleConfig.id)
                return (
                  <Menu.Item key={key}>
                    <button
                      type="button"
                      onClick={() =>
                        toggleActive({
                          topicId: topicConfig.id,
                          styleId: styleConfig.id,
                        })
                      }
                      className={classNames(
                        styleConfig.active
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Stil: {styleData.name}
                    </button>
                  </Menu.Item>
                )
              })}
            </div>
          </Menu.Items>
        </Portal>
      </Menu>
    </section>
  )
}
