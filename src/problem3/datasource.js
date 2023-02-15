// your code here:
class Datasource {
  static async getPrices() {
    const response = await fetch("https://interview.switcheo.com/test.json");
    const pricesData = await response.json();

    return pricesData.data.prices.map(price => ({
        pair: price.pair,
        buy: price.buy,
        sell: price.sell,
        mid: () => (price.buy + price.sell) /2,
        quote: () => price.pair.substr(-3)
    }));
  }
}

  
  

Datasource.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error)
    });

