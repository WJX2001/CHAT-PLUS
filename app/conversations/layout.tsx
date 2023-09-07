import getConversations from '../actions/getConversations'
import getUsers from '../actions/getUsers'
import Sidebar from '../components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()
  // 获取用户
  const users = await getUsers()
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initiallItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}
