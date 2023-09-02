import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { FullConversationType } from '../types'
import { User } from '@prisma/client'

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession()

  // 拿到其他用户
  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email // 当前用户的邮箱
    const otherUser = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    ) // 其他用户
    return otherUser[0]
  }, [session?.data?.user?.email, conversation.users])

  return otherUser
}

export default useOtherUser
