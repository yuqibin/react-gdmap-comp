// 通信中间件 类似 Vue的bus

import { EventEmitter } from 'events'

export default new EventEmitter()