import React from 'react'
import {useState, useEffect} from 'react';
import 'regenerator-runtime/runtime'


export default (props) => {
    const {logout, shops, points, createPoint, updatePoints, fetchPoints, deletePoint, currentId} = props

    const [payment, setPayment] = useState(0)
    const [refresh, setRefresh] = useState(0)
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState(0)

    useEffect(()=> {
        if (refresh > 0) {
            
           async function pointRefresh() {
               const status = await fetchPoints(currentId)
              return status
           }
            pointRefresh()
            setDate('')
            setPayment(0)
            setAmount(0)
            if ((typeof points[0] === "object")) setRefresh(refresh -1)
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
    
        let addTotal 
        if (amount === 0){
             addTotal = Math.floor(Math.random() * 10000)
        } else {
            addTotal = amount
        }
        

        const pointForm = {
            points_available: addTotal,
            owner_id: currentId,
            payer: shopName,
            payer_id: shopId
        }
        if (date) pointForm['created_at'] = date
        createPoint(pointForm)
        setRefresh(refresh +2)
    }
    const removePoint = (pointId) => {
        deletePoint(pointId)
        setRefresh(refresh +2)
    }
    const pointCheck = () => {
       
        if ((points.length === 1) && (typeof points[0] !== "object")){
           setRefresh(refresh +2) 
        } 
       
        
    }
    const pointDisplay = () => {
        
        pointCheck()
    
        if (points) {
           const pointToDisplay = points.map(point => 
                
                   <li key={point.id} className='points'>
                       ${point.points_available}, {point.payer}, {point.created_at}
                       <button onClick={() =>removePoint(point.id)}>delete</button>
                    </li>
               
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
            setRefresh(refresh +2)
        }
    }
    return (
        <div>
            <button onClick={logout}>logout</button>
            <h1>Points Page</h1>
            <p>To collect points click on a payer</p>
            <div className='shops'>
                <label>Set date(defaults to current time)</label>
               <input 
            type="text"
            className='date'
            placeholder='yyyy-mm-ddThh:mm:ss:ssZ'
            value={date}
            onChange={e => setDate(e.target.value)} />
            <label>Must be in the form of yyyy-mm-ddThh:mm:ss:ssZ, ex.  2021-06-08T03:17:32.824Z</label> 
            </div>
            <div className='shops'>
                <label>Set Amount (defaults to random amount)</label>
                <input 
                type="text"
                className='payment'
                value={amount}
                onChange={e=> setAmount(e.target.value)} />
            </div>
            <div className='shops'>
               {shops ? display() : <div></div>} 
            </div>
            <div className='paymentbox'>
                <p>Make a payment </p>
            <input 
            type="text"
            className='payment'
            value={payment}
            onChange={e => setPayment(e.target.value)} />
            <button 
            className='pay-btn'
            onClick={makePayment}>Submit Payment</button> 
            
            </div>
            <ul>
                {pointDisplay()}
            </ul>
             
        </div>
    )
}