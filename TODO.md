
User:
  id: number
  username: string
  avatar: string
  groups: Group[]

.................

Group:
  id: number
  name: string(150)
  owner: User
  admin: User[]
  chats: Chat
  memebers: User[]

  useCases:
    create
    addAmin
    removeAdmin
    joinGroup
    unjoinGroup
    banUser
    invite
    destroyGroup

...................    

Chat:
  messages: Message[]


  useCases:
    addMessage
    removeMessage
    editMessage

....................

Message:
  user: User
  type: "text"
  content: string
