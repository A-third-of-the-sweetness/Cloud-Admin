import { userGroupManager } from '@/views/manager/managerGroup'

const userModle = {
  path: '/usergroupmanager',
  name: 'usergroupmanager',
  redirect: '/usergroupmanager',
  component: userGroupManager,
  meta: { title: '用户组管理页面', keepAlive: true, icon: 'thunderbolt' },
}

export default userModle
