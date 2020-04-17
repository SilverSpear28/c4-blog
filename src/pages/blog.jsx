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
                    <p>
                        C4-Blogs
                    </p>
                </div>
                <Carousel />
            </div>
        )
    }

}

export default Blogs
