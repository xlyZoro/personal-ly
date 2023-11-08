import {createBrowserRouter} from 'react-router-dom'
import HomePage from '@/views/HomePage/HomePage';
import Home  from '@/views/home';

const routers =  createBrowserRouter ([
    {
        path:'/',
        Component:Home,
    },
    {
        path:'/HomePage',
        Component:HomePage
    }
])

export default routers;
