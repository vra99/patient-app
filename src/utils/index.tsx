export const fetchData = async() => {
    try {
    const data= await fetch('data.json'
        ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
        }
    });
        const response= await data.json();
        return response
    }
    catch(error){
        return error
    }
}