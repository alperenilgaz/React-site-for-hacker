
import { useTypewriter,Cursor } from 'react-simple-typewriter';


function Header() {
  const [header] = useTypewriter({
    words:['$whoami ?','hy3n4','Can Kadioglu'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
    

  })
  const [desc1] = useTypewriter({
    words:['software developer'],
    loop:1,
    typeSpeed:120,
    deleteSpeed:80,
  })

  const [desc2] = useTypewriter({
    words:['Penetration Tester'],
    loop:1,
    typeSpeed:120
   
  })

  return (
    <div className='header'>
      <div className='logo'>
         <span>{header}</span>
          <span><Cursor cursorStyle='|'/></span>
          
      </div>
      <div className="description">
        <span>{desc1}</span>
        <span>{desc2}</span>

      </div>
    </div>
  );
}

export default Header;
