import React, {useState, useEffect} from 'react';

    function PracticeUseEffect(){

        const [width, setWindowWidth] = useState(()=> { return window.width; } );
        
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        }

        useEffect(() => {
            window.addEventListener('resize',handleResize)
        },[])

        return(
            <>
                <div>{width}</div>
            </>
        )
    }

export default PracticeUseEffect;