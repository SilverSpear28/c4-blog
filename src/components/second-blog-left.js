import React from 'react'
import BlogCard from './blog-cards'

class SecondBlogLeft extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className='c4-second-blog-left'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        )
    }
}

export default SecondBlogLeft