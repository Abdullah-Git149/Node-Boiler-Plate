
 const getTheHelloWorld = async (req,res)=>{
     try {
     res.send("Hello ")    
     } catch (error) {
         console.log(error.message)
     }
 }

 module.exports = { getTheHelloWorld}