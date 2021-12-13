import { RouteLayout } from '@/layouts'

const userModle = {
  path: '/usermanager',
  name: 'usermanager',
  redirect: '/usermanager/manager',
  component: RouteLayout,
  meta: { title: '用户管理页面', keepAlive: true, icon: 'thunderbolt' },
  children: [
    {
      path: '/usermanager/manager',
      name: 'usermanagerlist',
      component: () => import('@/views/user/manager'),
      meta: { title: 'table', keepAlive: true },
    },
  ],
}

export default userModle
