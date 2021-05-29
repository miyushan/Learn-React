import React, {useState} from 'react';

    function PracticeUseState(){

        const [Value, setValue] = useState(()=>{
            return 4;
        });

        function increment(){
            setValue(prevCnt => prevCnt + 1)
        }

        return (
            <>
                <button onClick={increment}>+</button>
                <span>{Value}</span>
            </>
        )
    }

export default PracticeUseState;