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
        const index = shouldResetIndex ? lastIndex : currentImgIndex - 1;

        this.setState({
            currentImgIndex: index
        });
    }

    nextSlide = () => {
        const lastIndex = this.imgUrl.length - 1;
        const { currentImgIndex } = this.state;
        const shouldResetIndex = currentImgIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImgIndex + 1 ;
    }

    render(){
        return(
            <div className='carousel'></div>
        )
    }
}