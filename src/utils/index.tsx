export const fetchData = async() => {
    try {
        const data= await fetch(`/patients`);
        const response= await data.json();
        return response
    }
    catch(error){
        return error
    }
}