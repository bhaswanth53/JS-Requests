import Request from "../core/request";

class PostRequest extends Request {
    constructor(data) {
        super()
        this.payload = data
        this.target = 'https://api.restful-api.dev/objects'
        this.mode = 'POST'
        this.headers = {}
    }

    validate() {
        const validator = this.validator()
        validator.attr('title').label('Post Title').required()
        validator.attr('subtitle').label('Subtitle').required()
        validator.attr('excerption').label('Excerption').maxLength(100)
        validator.attr('content').label('Post content').required().maxLength(1000)
        if(!validator.isSuccess()) {
            this.faults = validator.getErrors()
            return false
        }
        return true
    }

    execute() {
        return this.run()
    }
}

export default PostRequest