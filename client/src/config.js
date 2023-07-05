const URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:400 : ""
module.exports = {
URL
}
// we will fill empty quotes later

// If you want to import URL in the component: 
import {URL} from 'path../config