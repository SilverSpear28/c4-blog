import React from 'react'

class Carousel extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentImgIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);

        this.imgUrl = []
    }

    prevSlide = () => {
        const lastIndex = this.imgUrl.length - 1;
        const { currentImgIndex } = this.state;
        const shouldResetIndex = currentImgIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImgIndex;

        this.setState({
            currentImgIndex: index
        });
    }

    render(){
        return(
            <div className='carousel'></div>
        )
    }
}