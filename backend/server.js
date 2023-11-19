import  express  from "express";
const app = express();
app.get('/',(req,res)=>{
  res.send('server is ready');
});

const port =  3000;
// detail for doctor 
app.get('/api/data',(req,res)=>{
  const data = [
    {
      id:1,
      name:'Dr. Gupta',
      fee:'500',
      address:'Dehradun',
      image: "https://i.postimg.cc/hGVQKFZq/pexels-thirdman-5327656.jpg",
    },
    {
      id:2,
      name:'Dr.Rahul singh',
      fee:'500',
      address:'varnasi',
      image: "https://i.postimg.cc/DZkWx1qL/pexels-cottonbro-studio-7583382.jpg",
    },
    {
      id:3,
      name:'Dr.Rohan singh',
      fee:'500',
      address:'kanpur',
      image: "https://i.postimg.cc/DZkWx1qL/pexels-cottonbro-studio-7583382.jpg",
    },
  
  ];
  res.send(data)
})
app.listen(port,()=>{
  console.log('server at http://localhost:${port}');
});