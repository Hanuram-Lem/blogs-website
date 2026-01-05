import './Banner.css';
function Banner() {
    return (
        <>
            <div className='banner-div'>
                <div className='overlay'>
                    <h1 id='banner-title'>Welcome to Our Blogs Website</h1>
                </div>
                <img src="/media/banner.jpg" alt="" width={'100%'} height={'650px'} style={{objectFit:'cover'}}/>
            </div>
        </>
    )
}
export default Banner;