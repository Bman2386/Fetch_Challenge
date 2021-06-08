import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { fetchShops, fetchPoints, updatePoints, createPoint, deletePoint } from '../../actions/other'
import PointClass from './point-class';

const mSTP = (state) => {
    return {
        ownerId: state.session.currentUser.id,
        shops: state.shops ? Object.keys(state.shops).map(key => state.shops[key]) : '',
        points: state.points ? Object.keys(state.points).map(key => state.points[key]) : ''
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchShops: () => dispatch(fetchShops()),
    fetchPoints: (ownerId) => dispatch(fetchPoints(ownerId)),
    createPoint: (point) => dispatch(createPoint(point)),
    updatePoints: (points) => dispatch(updatePoints(points)),
    deletePoint: (pointId) => dispatch(deletePoint(pointId))
})

export default connect(mSTP,mDTP)(PointClass)