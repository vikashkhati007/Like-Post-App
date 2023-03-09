import React , {useState} from "react";
import img from './img/krishna.jpg';
import { AiFillHeart, AiOutlineHeart, AiFillSmile, AiOutlineComment } from 'react-icons/ai'
export default function Like(){
    const [like , setLike] = useState(false);
    const [count, setCount] = useState(0);
  function toogleLike(){
    if(!like){
        setLike(true);
        setCount(count+1);
    }
    else{
        setLike(false);
        setCount(count-1);
    }
  }
    return(
        <div>
            <h1>Like Post - APP</h1>
            <h3>Like Counter: {count}</h3>
            <div className="Card-Box">
                <header className="header">
                <AiFillSmile className="icon"/>
                <h2>Title</h2>
                </header>
                <div className="container">
                <img src={img} alt="" onDoubleClick={toogleLike}/>
                </div>
                <footer>
                <AiOutlineComment className="icon"/>
                {like ? <AiFillHeart className="icon danger" onClick={toogleLike}/>: <AiOutlineHeart className="icon" onClick={toogleLike}/>}
                </footer>
            </div>
        </div>
    )
}