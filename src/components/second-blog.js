import React from 'react'
import SecondBlogLeft from './second-blog-left'
import MorePost from './morepost'

class SecondBlog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='c4-second-blog'>
                <div className='c4-second-blog-head'>
                    <h1>Developer Category</h1>
                </div>
                <div className='c4-second-blog-details'>
                    <SecondBlogLeft />
                    <div className='c4-second-blog-right'>
                        <div className='c4-bio-box'>
                            <img src="https://colorlib.com/preview/theme/balita/images/person_1.jpg" alt="Image Placeholder" />
                            <div className="bio">
                                <h2>Hinata Hyuga</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.
                                </p>
                                <p>
                                    <button className='explore-bio'>Read my bio</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='c4-second-blog-head'>
                    <h1>More Blog Posts</h1>
                    <div className='c4-more-blog-post'>
                        <MorePost />
                    </div>
                </div>
            </div>
        )
    }

}

export default SecondBlog