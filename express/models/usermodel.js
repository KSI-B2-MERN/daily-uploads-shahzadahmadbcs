module.exports ={

    updateUser : ()=> {


        try {
            return{
                response : "user was updated successfully"
            }
            
        } catch (error) {
            return{

                error : error 
            }
            
        }
    },
    deleteUser : ()=>{
        try {
            return{
                response : "user deleted"
            }
        } catch (error) {
            return{
                error : error
            }
            
        }
    }
}
    