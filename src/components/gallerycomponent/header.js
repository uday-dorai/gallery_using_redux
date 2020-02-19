import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SearchImages} from '../action/action'


class header extends Component {
    
    onSubmitHandler =(e)=>{
        e.preventDefault();
        // console.log('clicked')
        // console.log(e.target[0].value)
        const searchTag = e.target[0].value;
        this.props.SearchImages(searchTag);
        e.target[0].value = ''
    }


    render() {
        return (
            <div className='headerDiv'>
                {/* <div></div> */}
                <h1 style={{color:'blue'}}>Gallery</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input></input>
                    <button type='submit'>search</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    SearchImages,
}

export default connect(null,mapDispatchToProps)(header)

