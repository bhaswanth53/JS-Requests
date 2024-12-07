import { postData } from "./data"
import PostRequest from "./requests/post"

const button = document.getElementById('send-request')

button.addEventListener('click', function(e) {
    const request = new PostRequest(postData)
    if(request.validate()) {
        request.run()
            .then((response) => {
                alert('Request success')
                console.log('Response :: ', response.data)
            })
            .catch((error) => {
                alert('Request failure')
                console.log('Error :: ', error)
            })
    } else {
        console.error('Form Errors :: ', request.errors())
    }
})