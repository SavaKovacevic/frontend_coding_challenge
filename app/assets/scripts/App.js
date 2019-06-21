import axios from 'axios';

axios.get('https://itk-exam-api.herokuapp.com/api/offices').then(response => {
    let offices = [];
    offices.push(response.data)
        
})
