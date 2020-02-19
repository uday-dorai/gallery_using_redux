import {all,fork,takeEvery,put} from 'redux-saga/effects'



function* getImagesFromUrl(){
    yield takeEvery('GET_IMAGE',getImageWorker)
}

function* getImageWorker(searchData){
    // console.log('worker')
    // console.log(searchData)
    const search = searchData.data
    // console.log(search)
    const url = `https://api.unsplash.com/photos/?q=${search}&client_id=VP6_62Jyc_f478u0pqEsyFeEFGhCv63AJrm-A3-vyCQ`
    const payload1 = yield fetch(url,{method:'GET'}).then(resp => {return resp.json()})
    
    const payload = payload1.map(data => {
        return {
            favorite:'false',
            id:data.id,
            urls: {
                thumb: data.urls.thumb,
            }
        }
    })
    // console.log(payload1)
    yield put ({type:'GET_IMAGE_SUCCESS',payload})
}


function* searchImages(){
    yield takeEvery('SEARCH_IMAGE',searchImageWorker)

}

function* searchImageWorker(search){
    // console.log('search worker')
    // console.log(search.data)
    const url = `https://api.unsplash.com/photos/?q=${search}&client_id=VP6_62Jyc_f478u0pqEsyFeEFGhCv63AJrm-A3-vyCQ`
    const payload1 = yield fetch(url,{method:'GET'}).then(resp => {return resp.json()})
    
    const payload = payload1.map(data => {
        return {
            favorite:'false',
            id:data.id,
            urls: {
                thumb: data.urls.thumb,
            }
        }
    })
    // console.log(payload)
    yield put ({type:'SEARCH_IMAGE_SUCCESS',payload})
}


function* addToFavorite(){
    yield takeEvery('ADD_TO_FAVORITE',addTofavoriteWorker)
}

function* addTofavoriteWorker(data){
    console.log('******_____*******----')
    console.log(data);
    const payload = data.data;
    yield put ({type:'ADD_FAVORITE_SUCCESS',payload})
}




function* removeFromfavorite(){
    yield takeEvery('REMOVE_FROM_FAVORITE',removeFromFavoriteWorker)
}

function* removeFromFavoriteWorker(data){
    console.log(data)
    const payload = data.data;
    yield put ({type:'REMOVE_FROM_FAVORITE_SUCCESS',payload})

}




function* toggleBetweenImageCollectionAndFavorite(){
    yield takeEvery('TOGGLE', toggleBetweenImageCollectionAndFavorite_worker)

}

function* toggleBetweenImageCollectionAndFavorite_worker(data){
    console.log(data.data)
    const payload = data.data
    yield put ({type:'TOGGLE_SUCCESS',payload})

}





export default function* rootSaga() {
    yield all([
        fork(getImagesFromUrl),
        fork(searchImages),
        fork(addToFavorite),
        fork(removeFromfavorite),
        fork(toggleBetweenImageCollectionAndFavorite),
    ]);
}