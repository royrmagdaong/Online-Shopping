import Home from './views/Home'
import About from './views/About'

export default[
    {
        path:'/',
        component: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    }
]