# User story

# market creation
    - admin create market
    - user come and split share based on fixed price
    - user have now yes and no share for the same market
    - user can now trade on same market
    - order will be store in order book
    - engine will pickup data from orderbook table and if order price match then executed
    - or else user can merge share (the common no of share taken out at fixed price)
    - after order execution (means trade happened) new entry is made in trade table
    - order execution sequence is based on order creation time
    - consider partial order execution as well
    - user can check their all holding
    - split, merge 
