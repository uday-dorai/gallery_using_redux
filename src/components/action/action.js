export const getImagesAction= (data) =>{
    // console.log('action');
    return{
        type:'GET_IMAGE',
        data
    }
}

export const SearchImages=(data) =>{
    return{
        type:'SEARCH_IMAGE',
        data
    }
}

export const favoriteImage = (data) =>{
    // console.log('data')
    // console.log(data);
    return{
        type:'ADD_TO_FAVORITE',
        data
    }
}

export const removeFromFavorite = (data)=>{
    // console.log('remove_from_favorite',data);
    return{
        type:'REMOVE_FROM_FAVORITE',
        data
    }
}

export const toggleGallery = (data) =>{
    // console.log(data);
    return{
        type:'TOGGLE',
        data
    }
}

