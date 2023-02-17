WITH trades_info AS
  (SELECT *
   FROM trades
   WHERE block_height >= 730000 ),
     balance_info AS
  (SELECT t.address,
          b.amount,
          CASE
              WHEN t.denom = 'usdc' THEN 0.00001
              WHEN t.denom = 'swth' THEN 0.00000005
              WHEN t.denom = 'tmz' THEN 0.003
          END AS currency
   FROM trades_info t
   INNER JOIN balances b ON t.address = b.address),
     converting_currency AS
  (SELECT address,
          (amount * currency) AS base_currency
   FROM balance_info),
     how_much_in_wallet AS
  (SELECT address,
          sum(base_currency) AS total_balance
   FROM converting_currency
   GROUP BY address)
SELECT *
FROM how_much_in_wallet
WHERE total_balance >= 500