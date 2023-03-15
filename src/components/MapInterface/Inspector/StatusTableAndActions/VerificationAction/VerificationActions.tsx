import {
  updateVerificationStatus,
  VerificationApiGet,
  VerificationApiPost,
  VerificationStatus,
} from '@api/index'
import { buttonStyles } from '@components/Link'
import { SourceVerificationApiIdentifier } from '@components/MapInterface/mapData'
import { useMapStateInteraction } from '@components/MapInterface/mapStateInteraction'
import { useUserStore } from '@components/MapInterface/UserInfo'
import { SmallSpinner } from '@components/Spinner/Spinner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clsx } from 'clsx'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
  apiIdentifier: SourceVerificationApiIdentifier
  visible: boolean
  disabled: boolean
  osmId: number
  verificationStatus: VerificationStatus | undefined
}

export const VerificationActions: React.FC<Props> = ({
  apiIdentifier,
  visible,
  disabled: outerDisabled,
  osmId,
  verificationStatus,
}) => {
  const queryClient = useQueryClient()
  const { addLocalUpdate, removeLocalUpdate } = useMapStateInteraction()

  const { currentUser } = useUserStore()

  type TFormInput = Pick<VerificationApiPost, 'verified_status' | 'comment'>
  const { register, handleSubmit } = useForm<TFormInput>()
  const onSubmit: SubmitHandler<TFormInput> = ({ verified_status, comment }) => {
    const apiData: VerificationApiPost = {
      apiIdentifier,
      osm_id: osmId,
      osm_type: 'W',
      verified_at: new Date().toISOString(),
      verified_by: currentUser?.id,
      verified_status,
      comment: comment?.trim(),
    }
    mutation.mutate(apiData)
  }

  const queryKey = ['verificationHistory', apiIdentifier, osmId]
  const mutation = useMutation({
    mutationFn: updateVerificationStatus,
    // When mutate is called:
    onMutate: async ({ osm_id, osm_type, verified_at, verified_status, comment }) => {
      const newHistoryItem: VerificationApiGet = {
        osm_id,
        osm_type,
        verified_at,
        verified_by: currentUser?.id,
        verified: verified_status,
        comment,
      }

      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey })

      // Snapshot the previous value
      const previousHistory: VerificationApiGet[] | undefined = queryClient.getQueryData(queryKey)

      // Optimistically update to the new value
      queryClient.setQueryData(queryKey, (data: undefined | { data: VerificationApiGet[] }) => {
        const history = data?.data ? data.data : []
        return {
          data: [newHistoryItem, ...history],
        }
      })

      addLocalUpdate(newHistoryItem)

      // Return a context object with the snapshotted value
      return { previousHistory, newHistoryItem }
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    // use the context returned from onMutate to roll back
    onError: (_err, _variables, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context.previousHistory)
        removeLocalUpdate(context.newHistoryItem)
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(queryKey)
    },
  })

  const verificationOptions: VerificationStatus[] = ['approved', 'rejected']
  const verifiedOnce = verificationStatus && verificationOptions.includes(verificationStatus)

  const disabled = mutation.isLoading || outerDisabled

  if (!visible) return null

  return (
    <div
      className={clsx('mb-4', {
        'flex flex-col': verifiedOnce,
      })}
    >
      <h4 className="mb-2 font-semibold text-gray-900">
        {/* TODO <FormattedMessage id={`${disclosureTranslationString}--title`} /> */}
        Prüf-Status {verifiedOnce ? 'ändern' : 'eintragen'}
      </h4>
      {disabled && (
        <div className="mb-2">
          Ein Status kann nur eingetragen werden, wenn die Primärdaten vorliegen.
        </div>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        {mutation.isLoading && <SmallSpinner />}

        <div className="flex">
          {verificationOptions.map((verificationOption) => {
            const verificationOptionTranslations: Record<VerificationStatus, string> = {
              approved: verifiedOnce ? 'Daten richtig' : 'Richtig',
              rejected: 'Daten überarbeiten',
            }
            const active = verificationStatus
              ? verificationOption === verificationStatus
              : verificationOption === 'approved'

            return (
              <div
                key={verificationOption}
                className="flex items-start border p-2 first:-mr-px first:rounded-l-md last:rounded-r-md"
              >
                <div className="flex h-5 items-center">
                  <input
                    type="radio"
                    {...register('verified_status')}
                    value={verificationOption}
                    id={verificationOption}
                    defaultChecked={active}
                    className="h-4 w-4 border-gray-300 text-yellow-500 focus:ring-yellow-200"
                    disabled={disabled}
                  />
                </div>
                <label
                  htmlFor={verificationOption}
                  className="ml-2 block cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {verificationOptionTranslations[verificationOption]}
                </label>
              </div>
            )
          })}
        </div>

        <div>
          <label htmlFor="comment" className="sr-only">
            Optionaler Kommentar
          </label>
          <div className="mt-2">
            <textarea
              {...register('comment')}
              placeholder="Optionaler Kommentar"
              rows={2}
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:py-1.5 sm:text-sm sm:leading-6"
              defaultValue={''}
              disabled={disabled}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={disabled}
          className={clsx(
            buttonStyles,
            'bg-white py-1 px-3',
            disabled
              ? 'cursor-not-allowed border-gray-300 text-gray-400 shadow-sm hover:bg-white'
              : 'border-gray-400 shadow-md'
          )}
        >
          Status speichern
        </button>
      </form>
    </div>
  )
}
