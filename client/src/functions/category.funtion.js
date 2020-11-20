import axios from 'axios';

export const getAllCategories = async ()=>{
    try{
        const categories = await axios.get("/category");
        return categories;
    }catch(err){
        return false;
    }
}

export const getCategory = async(slug) =>{
    try{
        const category = await axios.get(`/category/${slug}`);
        return category;
    }catch(err){
        return false;
    }
}

export const removeCategory = async(slug)=>{
    try{
        const category = await axios.delete(`/category/${slug}`);
        return category;
    }catch(err){
        return false;
    }
}

export const updateCategory = async(slug,name)=>{
    try{
        const category = await axios.patch(`/category/${slug}`,{name});
        return category;
    }catch(err){
        return false;
    }
}

export const createCategory = async(name)=>{
    try{
        const category = await axios.post(`/category}`,{name});
        return category;
    }catch(err){
        return false;
    }
}