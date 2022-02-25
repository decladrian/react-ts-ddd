
User:
  id: number
  username: string
  avatar: string
  groups: Group[]

  useCases:
    find: (id) => User.model

.................

Group:
  id: number
  name: string
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
    report

...................    

Chat:
  messages: Message[]

  useCases:
    findMessages: () => Message[]
    

....................

Message:
  user: User
  type: "text"
  content: string
  chat: Chat
  
  useCases:
    addMessage
    removeMessage
    editMessage

