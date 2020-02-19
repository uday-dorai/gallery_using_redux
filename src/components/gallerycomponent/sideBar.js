import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleGallery} from '../action/action'

class sideBar extends Component {
    gallery = () =>{
        this.props.toggleGallery('imageCollection')
    }

    favorite = () =>{
        this.props.toggleGallery('favorite')
    }

    render() {
        return (
            <div className='sideBar'>
                <button className='sidebarBtn' onClick={this.gallery}>gallery</button>
                <button className='sidebarBtn' onClick={this.favorite}>favourite</button>
            </div>
        )
    }
}

const mapDispatchToProps ={
    toggleGallery,
}

export default connect(null,mapDispatchToProps)(sideBar)
