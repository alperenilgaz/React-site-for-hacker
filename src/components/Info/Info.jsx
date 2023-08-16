import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';


function Info  ({title, comment, github}) {
const [header] = useTypewriter({
  words:[title],
  loop:1,
  typeSpeed:60,
 
}) 
const [desc] = useTypewriter({
  words:[comment],
  loop:1,
  typeSpeed:50,
 
})  
  return (

    <div className="container">
        <div className="title">
            <ul>
                <li>{header}</li>
            </ul>
        </div>
        <div className="comment">
            {desc}{
              github ? <a href={github}> github</a> : ''
            }
        </div>
    </div>
  )
}

export default Info;