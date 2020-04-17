import React from 'react'
import Carousel from '../components/carosel'

class Blogs extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='c4-blog'>
                <div className='c4-blog-heading'>
                    <h1>
                        C4-Blogs
                    </h1>
                </div>
                <Carousel />
            </div>
        )
    }

}