import { userManager } from '@/views/manager/manager'

const userModle = {
  path: '/usermanager',
  name: 'usermanager',
  component: userManager,
  meta: { title: '用户管理页面', keepAlive: true, icon: 'thunderbolt' },
}

export default userModle
