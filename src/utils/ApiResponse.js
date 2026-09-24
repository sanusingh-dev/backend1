class ApiResponse {
    constructor(statusCode, data, massage = "Success") {
        this.statusCode = statusCode
        this.data = data
        this, massage = massage
        this.succcess = statusCode < 400
    }
}