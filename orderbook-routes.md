Below is a **complete and production-ready API design** for an **orderbook system like Polymarket**, using a **Web2 centralized backend** (Node.js + Express + Prisma + PostgreSQL).
This includes:

* Endpoint routes
* Expected request/response formats
* Backend logic flow
* Validation
* Matching engine integration
* Status transitions

You can paste this directly into an SRS or API Contract section.

---

# ✅ **Orderbook API Specification (Polymarket-style Platform)**

---

# 1. **Base URL**

```
/api/v1
```

---

# 2. **Orderbook Routes Overview**

| Method | Endpoint                        | Description                                     |
| ------ | ------------------------------- | ----------------------------------------------- |
| POST   | `/orderbook`                    | Create a buy/sell order                         |
| GET    | `/orderbook/market/:marketId`   | Get all orderbooks for a market                 |
| GET    | `/orderbook/outcome/:outcomeId` | Get aggregated orderbook for a specific outcome |
| GET    | `/order/:id`                    | Get details of an order                         |
| DELETE | `/order/:id/cancel`             | Cancel an open order                            |

---

# 3. **POST /orderbook — Create an Order**

### **URL**

```
POST /api/v1/orderbook
```

### **Request Body**

```json
{
  "marketId": 1,
  "outcomeId": 2,
  "userId": 5,
  "type": "BUY", 
  "price": 0.63,
  "quantity": 10
}
```

### **Validations**

* Market + outcome must exist
* User must exist
* Balance must be sufficient (BUY)
* Holdings must be sufficient (SELL)
* Price must be between 0–1
* Quantity > 0
* User cannot place BUY/SELL at negative price or quantity

### **Behavior**

1. Validate input
2. Create order entry in database
3. Trigger **matching engine**
4. Return created order + executed trades

---

### **Response Example**

```json
{
  "order": {
    "id": 120,
    "type": "BUY",
    "price": 0.63,
    "quantity": 10,
    "executedQty": 4,
    "status": "PARTIAL"
  },
  "trades": [
    {
      "id": 77,
      "buyOrderbookId": 120,
      "sellOrderbookId": 87,
      "price": 0.62,
      "qty": 4
    }
  ]
}
```

---

# 4. **GET /orderbook/market/:marketId**

Returns **full orderbook for all outcomes** in a market.

### URL

```
GET /api/v1/orderbook/market/:marketId
```

### Response Example

```json
{
  "marketId": 1,
  "outcomes": [
    {
      "outcomeId": 10,
      "label": "YES",
      "bids": [
        { "price": 0.62, "quantity": 20 },
        { "price": 0.60, "quantity": 15 }
      ],
      "asks": [
        { "price": 0.65, "quantity": 10 },
        { "price": 0.67, "quantity": 6 }
      ]
    },
    {
      "outcomeId": 11,
      "label": "NO",
      "bids": [...],
      "asks": [...]
    }
  ]
}
```

---

# 5. **GET /orderbook/outcome/:outcomeId**

Returns summarized orderbook for a single outcome.

### URL

```
GET /api/v1/orderbook/outcome/:outcomeId
```

### Response Example

```json
{
  "outcomeId": 10,
  "bids": [
    { "price": 0.61, "quantity": 12 },
    { "price": 0.59, "quantity": 9 }
  ],
  "asks": [
    { "price": 0.64, "quantity": 8 },
    { "price": 0.66, "quantity": 11 }
  ]
}
```

---

# 6. **GET /order/:id — Fetch order details**

```
GET /api/v1/order/:id
```

### Example Response

```json
{
  "id": 120,
  "marketId": 1,
  "outcomeId": 10,
  "type": "BUY",
  "price": 0.63,
  "quantity": 10,
  "executedQty": 4,
  "status": "PARTIAL",
  "trades": [
    {
      "id": 77,
      "price": 0.62,
      "qty": 4
    }
  ]
}
```

---

# 7. **DELETE /order/:id/cancel — Cancel Order**

### URL

```
DELETE /api/v1/order/:id/cancel
```

### Behavior

* Only `OPEN` or `PARTIAL` orders can be canceled
* Refund unused balance for BUY
* Restore holdings for SELL
* Update order status → `CANCEL`

### Response

```json
{
  "success": true,
  "orderId": 120,
  "status": "CANCEL"
}
```

---

# 8. **Matching Engine Logic (High-Level)**

When an order is created:

### 🔹 BUY ORDER

Match against **lowest priced SELL** orders:

```
bestAsk.price <= buy.price
```

Follows:

* FIFO per price level
* Partial fills allowed

### 🔹 SELL ORDER

Match against **highest priced BUY** orders:

```
bestBid.price >= sell.price
```

### After Trade

* Update executed quantity
* Create Trade record
* Update user balances
* Update user holdings
* Update order statuses

### Order Status Transitions

```
OPEN → PARTIAL → FILLED
OPEN → CANCEL
PARTIAL → CANCEL
```

---

# 9. **Example Node.js Controller (Prisma)**

Here is a clean template you can use:

```ts
// POST /orderbook
export const createOrder = async (req, res) => {
  const { marketId, outcomeId, userId, type, price, quantity } = req.body;

  // Validate input...
  
  const order = await prisma.orderbook.create({
    data: {
      marketId,
      outcomeId,
      userId,
      type,
      price,
      quantity,
      executedQty: 0,
      status: "OPEN"
    }
  });

  // Trigger matching engine
  const trades = await runMatchingEngine(order);

  res.json({ order, trades });
};
```

---

# 10. **Matching Engine Pseudocode**

```ts
async function runMatchingEngine(order) {
  let trades = [];

  if (order.type === "BUY") {
    let sellOrders = await prisma.orderbook.findMany({
      where: {
        outcomeId: order.outcomeId,
        type: "SELL",
        status: { in: ["OPEN", "PARTIAL"] },
        price: { lte: order.price }
      },
      orderBy: [{ price: "asc" }, { id: "asc" }]
    });

    // matching loop...
  }

  // Same for SELL orders...

  return trades;
}
```

---

# 📌 Want Next Step?

I can generate:

✅ Full **TypeScript controllers code**
✅ Full **matching engine implementation**
✅ Full **API documentation (Swagger / Postman)**
✅ Complete **SRS for the entire trading system**
✅ Architecture diagrams (matching engine + user flows)

Just tell me what you want next.
