import React from 'react'
import Points from './points'

class PointClass extends React.Component {
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        this.props.fetchShops()
        this.props.fetchPoints(this.props.ownerId)
    }
    render(){
        const {logout, shops, points, createPoint, updatePoints, fetchPoints} =this.props
        return (
             <Points 
             shops = {shops}
             logout={logout}
             points = {points}
             createPoint = {createPoint}
             updatePoints = {updatePoints}
             fetchPoints = {fetchPoints}/>
        )
       
    }
}

export default PointClass;