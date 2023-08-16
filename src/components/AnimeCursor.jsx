import AnimatedCursor from "react-animated-cursor"

function AnimeCursor() {
  return (
    <>
        <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color='128, 128, 128'
      outerAlpha={0.8}
      innerScale={0.9}
      outerScale={5}
     
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      
    />
    </>
  )
}

export default AnimeCursor