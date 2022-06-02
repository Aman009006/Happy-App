export const renderPrice = () => {
  const getPrice = async () => {
      const got = await fetch("../../config.json");
      const config = await got.json();
      let price__standart = config.plans

      document.getElementById('name__standart').textContent = price__standart[0].name
      document.getElementById('price__standart').textContent = ("$" + price__standart[0].price)
      document.getElementById('name__premium').textContent = price__standart[1].name
      document.getElementById('price__premium').textContent = ("$" + price__standart[1].price)
      document.getElementById('name__lifetime').textContent = price__standart[2].name
      document.getElementById('price__lifetime').textContent = ("$" + price__standart[2].price)
  };
  getPrice();
}