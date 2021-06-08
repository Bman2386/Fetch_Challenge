

export const getShops = () => {
    return $.ajax({
        url: 'api/shops',
        method: 'GET',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    })
}

export const getPoints = (owner_id) => {
    return $.ajax({
        url: 'api/points',
        method: "GET",
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {owner_id}
    })
}

export const createPoints = point => {
    return $.ajax({
        url: 'api/points',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method: 'POST',
        data: {point}
    })
}

export const updatePoint = points => {
    return $.ajax({
        url: `api/points/${points.id}`,
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method: 'PATCH',
        data: {points}
    })
}

export const destroyPoint = pointId => {
    return $.ajax({
        url: `api/points/${pointId}`,
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method: 'DELETE'

    })
}