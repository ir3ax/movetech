
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const SlideShow = () => {
      
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1534459905198-35d70a2d9370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1511517016446-faa23cd55bf9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq',
        },
        {
            url: 'https://images.unsplash.com/photo-1530961915006-1cbd0d169f28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1630469696305-4a2a2eb78c24?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1628260630453-da5cf1ff5209?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='h-[700px] max-sm:h-[300px]' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
            </Slide>
      </div>
    )
}
