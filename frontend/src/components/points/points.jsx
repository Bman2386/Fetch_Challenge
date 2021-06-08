import React from 'react'
import {useState, useEffect} from 'react';
import 'regenerator-runtime/runtime'


export default (props) => {
    const {logout, shops, points, createPoint, updatePoints, fetchPoints} = props

    const [payment, setPayment] = useState(0)
    const [refresh, setRefresh] = useState(false)
    
    useEffect(()=> {
        if (refresh) {
            const ownerId = window.currentUser.id
           async function pointRefresh() {
               const status = await fetchPoints(ownerId)
           }
           pointRefresh()
           debugger
            setRefresh(false)
            setPayment(0)
        }
    }, [refresh])
    function display() {
        const pointShop = shops.map(shop => 
                <button 
                onClick={()=> pointCreator(shop.shop_name, shop.id)}
                key={shop.id}>{shop.shop_name}</button>
        )
        return pointShop
    }

    const pointCreator = (shopName, shopId) => {
        const ownerId = window.currentUser.id
        const addTotal = Math.floor(Math.random() * 10000)
        const pointForm = {
            points_available: addTotal,
            owner_id: ownerId,
            payer: shopName,
            payer_id: shopId
        }
        createPoint(pointForm)
        setRefresh(true)
    }
    const pointDisplay = () => {
      
        if (points) {
           const pointToDisplay = points.map(point => 
                
                   <div key={point.id}>${point.points_available}, {point.payer}, {point.created_at}</div>
               
                )
                return pointToDisplay
        }
    }

    const makePayment = () => {
        let totalPoints = 0
        points.forEach(point => {
            totalPoints += point.points_available
        })
        if (totalPoints < payment){
            return (
                <p>Not enough Points!</p>
            )
        } else {
            const ownerId = window.currentUser.id
            const spendForm = {
                owner_id: ownerId,
                spend_amount: payment,
                id: points[0].id
            }
            updatePoints(spendForm)
            setRefresh(true)
        }
    }
    return (
        <div>
            <button onClick={logout}>logout</button>
            <div>Points Page</div>
            <p>To collect points click on a payer</p>
            <div className='shops'>
               {shops ? display() : <div></div>} 
            </div>
            
               <p>Make a payment</p>
            <input 
            type="text"
            className='payment'
            value={payment}
            onChange={e => setPayment(e.target.value)} />
            <button onClick={makePayment}>Submit Payment</button> 
            
            
            {pointDisplay()}
            
        </div>
    )
}