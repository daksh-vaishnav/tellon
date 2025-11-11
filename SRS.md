# What Project Tellon
    - tellon is the opinion prediction market
    - where admin can create new market which is related to anything might be based on recent events or based on user's request from platform
    - after that user can buy share via splitting money or token
    - from that share user can start trade their shares
    - and hence market is started
    - market have multiple single yes/no outcome or multiple outcomes 
      - like who is going to win 2024 election modi,rahul gandhi, mamta didi, lalu prasad yadav
      - each outcome have two option yes or no, so modi -> yes/no, rahul -> yes/no
    - Users don’t just bet; they trade — buying or selling shares of outcomes whose prices reflect the probability of the event happening
      - If “YES” shares trade at $0.65, the market implies a 65% probability that the event will happen.

## market
    - what is market?
      - market where users trade shares representing possible outcomes of future events
      - market can be like 
        - does donald trump going to be win election?
        - who is going to be win US election? => trump, hilery, etc
        - Will Bitcoin be above $100k by Dec 2025?
        - Will SpaceX land on Mars before 2030?
        - etc
    - how market outcome is going to be fixed or who decide
      - admin going to decide the outcome based on prof of events
    - Each market has:
        - A question (e.g., “Will India win the 2027 Cricket World Cup?”)
        - Multiple outcomes (e.g., “YES”, “NO”)
        - A price per outcome, between 0 and 1 (or $0 to $1 in Web2 terms)
        - A liquidity pool or orderbook to match traders
    - When user trade:
      - first user have to get YES/NO by split_share
      - user buy outcome shares (betting that outcome will occur)
      - user sell shares (closing a position or betting against that outcome)
      - user can merge_share and pull out money
    - When the market/event resolves:
      - Winning outcomes = $1 per share
      - Losing outcomes = $0 per share

## OrderBooks
    - An orderbook is a ledger that lists all buy and sell orders for an asset at various prices
    - some jargons for orderbook
      - current share price / best price - last executed trade price
      - market price - The best available price right now if you were to buy or sell immediately
      - arbitrage - difference between two different exchange
      - bid - highest bid is best price someone is willing to buy
      - ask - lowest ask is best price someone is willing to sell
      - spread - difference between bid and ask
      - limit order - which means buyer/seller wait until someone’s willing to sell/buy at that price.
      - market order - which means buyer/seller don’t care about the price — just them in or out now.
      - executed_quantity - when user set order, then how much of it executed
      - remaining_quantity - if user get some of share at given price and then remaining no share is called
      - split_share - user put some money to but yes/no share
      - merge_share - user pull out money by giving share (same no of yes and no share)
      - order status - open, partially filled, filled, cancelled
      - order_type - buy/sell or bid/asks
    
    - The orderbook continuously updates:
      - Highest BUY = best bid
      - Lowest SELL = best ask
      - When they cross (bid ≥ ask), a trade is executed.

## liquidity
  - the smaller spared => the higher liquidity
  - the wider spread  => less liquidity