import React from 'react'

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
                    <div className='c4-second-blog-left'></div>
                    <div className='c4-second-blog-right'>
                        <div className='c4-right-box'>
                            <img src="https://colorlib.com/preview/theme/balita/images/person_1.jpg" alt="Image Placeholder" />
                        </div>
                    </div>
                    </div>
            </div>
        )
    }

}

export default SecondBlog