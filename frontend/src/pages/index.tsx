
import React,{useEffect,useState} from 'react';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
setIsLoading(false)
    },2000)
  },[])

  if (isLoading){
    return<div> Loading...</div>
  }
  return(<div className='homePage'>
    <div className='hero'>
      <div className='hero__left'>
        <h1>ggwwga</h1>
      </div>
      <div className='hero__right'>

      </div>
    </div>


  </div>);
};

export default Index;