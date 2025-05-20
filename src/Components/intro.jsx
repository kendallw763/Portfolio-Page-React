import React from 'react'

function Intro () {
  return (
    <>
     <div className='main-section'>
     <div className='intro-picture-left'>
        <img src="src/assets/icons/intro_pic.png" alt="Picture of developer" />
    </div>

    <div className='vert-rule-middle-intro'>
      <img src="src/assets/icons/vertical_rule.png" alt="" />
    </div>


    
    <div className='icon-right'>
        <img src="src/assets/icons/intro_icon.png" alt="" />

  </div>

        <div className='main-paragraph'> 
   <h4> 
      Hello 👋🏽, my name Is Kendall White and I enjoy building applications from end-to-end. 
      When I am not building apps, I am playing God Of War Ragnarok and the Last of us Part II, 
      spening time with family or on the water, or at the range. 
      My nich is Front-end applications with react and my favorite programming language is Java.
   </h4>
   </div>
  </div>
    </>
)
}

export default Intro