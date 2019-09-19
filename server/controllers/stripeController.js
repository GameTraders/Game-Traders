const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    pay: async (req,res)=>{
        const db = req.app.get('db')
        const {user_id} = req.params
        const {token:{id},amount} = req.body;
        stripe.charges.create(
            {
                amount:amount,
                currency:'usd',
                source:id,
                description:'Test Charge'
            },
            async (err, charge) => {
                if(err) {
                    return res.status(500).send(err)
                } else {
                    
                    let points = await db.get_points([user_id])

                    let user_points = points[0].user_points + (amount / 100)
                    let updated_points = db.add_points({user_id, user_points})
                     
                    //this is where you would do something with that purchase (i.e. store that information to your db)
                    return res.status(200).send(updated_points)
                }
            }
        )
    },
}