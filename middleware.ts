import { withAuth } from 'next-auth/middleware'

// 自定义高阶组件，作用是用于页面身份验证
export default withAuth({
  pages: {
    signIn: '/',
  },
})

// 这部分 是页面路由配置，config 对象的 matcher 字段指定了一个路径匹配规则。在这里，它匹配了以“/users/”开头的路径，并且后面可以跟任何子路径
export const config = {
  matcher: ['/users/:path*', '/conversations/:path*'],
}
