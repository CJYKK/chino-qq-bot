import { User } from '@/database/table'

import _ from 'lodash'

import type { Event } from '@/types/user'

export default async (args: string[], event: Event) => {
    const result = await User.findOne({
        where: {
            id: event.author.member_openid
        }
    })
    const user = result.toJSON()

    const msg = _.trim(`你的信息如下：\nID：${user.id}\nIntegral：${user.integral}`)

    event.reply({
        content: msg,
        msg_type: 0
    })
}
