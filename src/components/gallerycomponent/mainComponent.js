import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getImagesAction, favoriteImage,removeFromFavorite } from '../action/action'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class mainComponent extends Component {
    componentDidMount() {
        this.props.getImagesAction('random')

    }
   

    onClickHandler = (e) => {
        if(e.target.parentElement.parentElement.firstChild.getAttribute('status') === 'true' || e.target.parentElement.firstChild.getAttribute('status') === 'true'){
            console.log('hello')
            const ItemID = e.target.parentElement.firstChild.id === ''?e.target.parentElement.parentElement.firstChild.id:e.target.parentElement.firstChild.id
            const data = {
                favorite:'false',
                id: ItemID,
            }
            this.props.removeFromFavorite(data)
        }else if(e.target.parentElement.firstChild.getAttribute('status') === 'false' || e.target.parentElement.parentElement.firstChild.getAttribute('status') === 'false'){
            
            const addItemID = e.target.parentElement.firstChild.id === ''?e.target.parentElement.parentElement.firstChild.id:e.target.parentElement.firstChild.id;
            
            const addThumb = e.target.parentElement.firstChild.src === undefined ? e.target.parentElement.parentElement.firstChild.src:e.target.parentElement.firstChild.src
            console.log(addThumb)
            const data = {
                favorite:'true',
                id: addItemID,
                urls: {
                    thumb: addThumb,
                }
            }
            this.props.favoriteImage(data)
        }else{
            
            const data = {
                favorite:'false',
                id: e.target.parentElement.parentElement.firstChild.id,
            }
            this.props.removeFromFavorite(data)
        }
        
    }


    mapImages = () =>{
        // console.log(this.props.imageData)
        if (this.props.imageData !== undefined) {
            return (
                this.props.imageData.map(data => {


                    if(data.favorite === 'true'){
                        return(
                            <div className='thumbnail' key={data.id}>
                                <img src={data.urls.thumb}  id={data.id} status={data.favorite}>
                                
                                </img> 
                                <StarIcon className='starMark' style={{color:'blue'}} onClick={this.onClickHandler}/>
                            </div>
                                
                            );
                    }else{
                        return(
                            <div className='thumbnail' key={data.id}>
                                <img   src={data.urls.thumb}  id={data.id} status={data.favorite}>
                                
                                </img> 
                                <StarBorderIcon className='starMark ' style={{backgroundColor:'blue'}} onClick={this.onClickHandler} style={{color:'#f4f4f4'}}/>
                            </div>
                                
                            );
                    }
                    

                })
            );
        }
    }

    render() {
        return (
            <div className='mainComponentDiv'>
                {this.mapImages()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.gallery.status === 'favorite') {
        return {
            imageData: state.gallery.favorite
        }
    } else {
        return {
            imageData: state.gallery.imageCollection
        }
    }

}

const mapDispatchToProps = {
    getImagesAction,
    favoriteImage,
    removeFromFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(mainComponent)
