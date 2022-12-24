type MessageType = 'image' | 'audio' | 'string'

type Message = {
  id: number
  type: MessageType
  sendmessage: string
}

let messages: Message[] = [
  {
    id: 1, type: 'image', sendmessage: '你好啊,今晚咱们一起去三里屯吧'
  },
  {
    id: 2, type: 'audio', sendmessage: '朝辞白帝彩云间,千里江陵一日还'
  },
  {
    id: 3, type: 'audio', sendmessage: '你好啊,张无忌'
  },
  {
    id: 4, type: 'image', sendmessage: '刘老根'
  },
]

// 1. 不用函数重载
//    缺点: 1. 函数结构不分明
// function getMessage(value: number | MessageType): Message | Message[] | undefined {
//   if (typeof value === 'number') {
//     return messages.find(msg => msg.id === value)
//   } else {
//     return messages.filter(msg => msg.type === value)
//   }
// }

// 2. 使用函数重载

function getMessage(value: number): Message
function getMessage(value: MessageType): Message[]
function getMessage(value: number | MessageType): Message | Message[] | undefined {
  if (typeof value === 'number') {
    return messages.find(msg => msg.id === value)
  } else {
    return messages.filter(msg => msg.type === value)
  }
}

console.log('getMessage(1)', getMessage('audio'), getMessage(1))
// TS没有办法在运行之前根据传递的值来推导方法最终返回数据的数据类型
// 只可以根据方法定义的类型展现
// const msg = <Message>getMessage(2)
// console.log(msg.sendmessage)


export { }