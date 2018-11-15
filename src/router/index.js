// eslint-disable-next-line
Vue.use(VueRouter)
const test = () => import('@/views/test/test')
const line = () => import('@/views/chart/line')
const pie = () => import('@/views/chart/pie')
const bar = () => import('@/views/chart/bar')

// eslint-disable-next-line
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/line',
      component: line
    },
    {
      path: '/pie',
      component: pie
    },
    {
      path: '/bar',
      component: bar
    }
  ]
})
