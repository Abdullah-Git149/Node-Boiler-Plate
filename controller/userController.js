
 const getTheHelloWorld = async (req,res)=>{
     try {
     res.send("Hello world")    
     } catch (error) {
         console.log(error.message)
     }
 }

 module.exports = { getTheHelloWorld}