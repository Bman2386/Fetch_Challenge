// import axios from 'axios'
// // export const setAuthToken = token => {
// //   if (token) {
// //       axios.defaults.headers.common['Authorization'] = token;
// //   } else {
// //       delete axios.defaults.headers.common['Authorization'];
// //   }
// // };

// export const postUser = (userData) => {
// console.log(userData)
// debugger
//   return axios.post('/api/users', userData);
// };

// export const postSession = (userData) => {
//   return axios.post('/api/session', userData);
// };

// export const deleteSession = () => (
//   axios.delete('/api/session')
// )


export const postUser = (user) => {
  return $.ajax({
      url: '/api/users',
      method: 'POST',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: { user } 
    })
}
  
  export const postSession = user => {
    return $.ajax({
      url: '/api/session',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      method: 'POST',
      data: { user }
    })
  }
  
  export const deleteSession = () => {
   return $.ajax({
      url: `/api/session`,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      method: 'DELETE',
    })
  }