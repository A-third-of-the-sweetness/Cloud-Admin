import { roleManager } from '@/views/role/rolemanager'

const roleModle = {
  path: '/rolemanager',
  name: 'rolemanager',
  component: roleManager,
  meta: { title: '角色管理', keepAlive: true, icon: 'thunderbolt' },
}

export default roleModle
