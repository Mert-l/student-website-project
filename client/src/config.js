const URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:4000" : "";
module.exports = {
URL
}
 
