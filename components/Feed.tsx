 
import PostInput from './PostInput'
import Post from './Post'
const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/1");
    
      if (!response.ok) {
        throw new Error("Failed to add new quest");
      }
    
      const data = await response.json();
    console.log(data)
     
      
    };
const Feed = async({user}:{user:any}) => {
  const userData = JSON.parse(JSON.stringify(user));

  const data = await fetchData()
  console.log(data);
  // useEffect(()=> {
  //   // fetch('https://fakestoreapi.com/products/1')
  //   //         .then(res=>res.json())
  //   //         .then(json=>console.log(json))
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products/1");
    
  //     if (!response.ok) {
  //       throw new Error("Failed to add new quest");
  //     }
    
  //     const data = await response.json();
  //   console.log(data)
     
      
  //   };
  //   fetchData();
  // },[])
  return(
  <div className='flex-1'>
   <PostInput user={userData}/>
 <Post/>
  </div>

  


)}

export default Feed