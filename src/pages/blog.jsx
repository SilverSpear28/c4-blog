import React from 'react'
import Carousel from '../components/carosel'
import MainCard from '../components/cards/main-card'
import SecondBlog from '../components/second-blog'

class Blogs extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='c4-blog'>
                <div className='c4-blog-heading'>
                    <p>
                        C4-Blogs
                    </p>
                </div>
                <Carousel />
                <div className='c4-main-card'>
                    <MainCard />
                    <MainCard />
                    <MainCard />
                </div>
                <SecondBlog />
            </div>
        )
    }

}

export default Blogs
