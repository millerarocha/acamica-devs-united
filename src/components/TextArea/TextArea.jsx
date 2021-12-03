import {useState} from 'react';
import './TextArea.scss';

const TextArea = ({
    max=100,
    placeholder="What's happening?"
}) => {

    const [count,setCount] = useState(0);
    const [progress,setProgress] = useState(0);

    const charCounter = (text)=>{        
        setCount(text.length);
        setProgress((count/max)*100);        
    }

    return (
        <>
            <textarea 
                className="textarea"
                placeholder={placeholder}
                maxlength={max}
                onChange={(e)=>charCounter(e.target.value)}
            ></textarea>
            <hr 
                className="textarea__line"
                style={{width:(progress) + '%'}}
            />
            <div className="textarea__counter-wrapper">
                <p className="textarea__counter">{count}</p>
                <p className="textarea__counter textarea__counter--red">{max} max.</p>
            </div>
        </>
    )
}

export default TextArea;
