import './index.scss'
import avatar from '@/assets/image/avatar.jpg'
// import Router from '@/router/homeRouter'
// import { RouterProvider } from 'react-router-dom'
// import  { Component } from 'react';
import { useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()
    function loadPage(){
        console.log('yemian')
        navigate("/HomePage",{
            state:"any"
        })
    }
        return (
            <div className="home_box">
                <div className="navigation">
                    <div className='avatar' onClick={loadPage}>
                        <img src={avatar} alt='头像'/>
                    </div>
                    <p className='name'>LaiYang Xin</p>
                    <p className='action'>
                        <span>Input</span>&
                        <span>Think</span>&
                        <span>Output</span>
                    </p>
    
                    <div className='listing'>
                        <ul className='items'>
                            <li>Blog</li>
                            <li>travel</li>
                            <li>Thinking</li>
                            <li>about</li>
                            <li>photo</li>
                        </ul>
                    </div>
                </div>
    
                {/* <RouterProvider router={Router} fallbackElement={<p>Initial Load...</p>}></RouterProvider> */}
            </div>
        )
}

export default Home