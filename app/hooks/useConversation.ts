import { useParams } from 'next/navigation'
import { useMemo } from 'react'

const useConversation = () => {
  const params = useParams()

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return ''
    }
    return params.conversationId as string
  }, [params?.conversationId])

  // 当conversationId变化的时候，useMemo 会重新计算 isOpen的值
  const isOpen = useMemo(() => Boolean(conversationId), [conversationId])

  // 同时返回 conversationId 和 isOpen 两个计算后的值
  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  )
}

export default useConversation
