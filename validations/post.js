const validator = require("validator")

const isEmpty = require("/is-empty.js")

module.exports = function validatePostInput(date) {
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : "";
    data.item = !isEmpty(data.item) ? data.item : "";
    data.condition = !isEmpty(data.condition) ? data.condition : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.shippingCost = !isEmpty(data.shippingCost) ? data.shippingCost : "";
    data.startingBid = !isEmpty(data.startingBid) ? data.startingBid : "";
    data.buyNow = !isEmpty(data.buyNow) ? data.buyNow : "";
}

if (validator.isEmpty(data.email){
    errors.email = "Post email is required."
})
if (!validator.isEmail(data.email){
    errors.email = "Post email is invalid."
})
if (validator.isEmpty(data.item){
    errors.item = "Post item is required."
})
if (validator.isEmpty(data.condition){
    errors.condition = "Post condition is required."
})
if (validator.isEmpty(data.description){
    errors.description = "Post description is required."
})
if (validator.isEmpty(data.shippingCost){
    errors.shippingCost = "Post shippingCost is required."
})
if (validator.isEmpty(data.startingBid && validator.isEmpty(data.buyNow)){
    errors.buyNow = "Must have either a starting bid or buy now bid"
})
