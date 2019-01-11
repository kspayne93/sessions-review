module.exports = {
   addProduct: (req, res) => {
      let {product} = req.body

      if (req.session.cart) {
         req.session.cart.push(product) //if req.session.cart exists, push a product onto the cart
      } else {
         req.session.cart = []
         req.session.cart.push(product) //if the cart doesn't exist, just create one.
      }
         res.status(200).send(req.session.cart)
   },

   getCart: (req, res) => {
      res.status(200).send(req.session.cart)
   }
}