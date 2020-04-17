import React from 'react'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImgIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);

        this.imgUrl = [
            "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
            "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
            "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
        ]
    }

    nextSlide = () => {
        const lastIndex = this.imgUrl.length - 1;
        const { currentImgIndex } = this.state;
        const shouldResetIndex = currentImgIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImgIndex + 1;

        this.setState({
            currentImgIndex: index
        })
    }

    arrow = (dir, clickFunc, gylph) => {
        return (
            <div className={`slide-arrow ${dir}`} onClick={clickFunc}>{gylph}</div>
        )
    };

    imageSlide = (url) => {
        return (
            <div className="image-slide" onClick={this.nextSlide}>
                <img src={url} />
                <div className="layer">
                    <div className="c4-blog-img-details">
                        <div className="h">
                            We must lub cats!!!
                        </div>
                        <div className="d">
                            and lub anime!!
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="carousel">
                {this.imageSlide(this.imgUrl[this.state.currentImgIndex])}
            </div>
        )
    }
}

export default Carousel
