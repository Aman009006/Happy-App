export const getPrice = () =>{
  const getPrice = async () => {
    try {
      const myJson = await fetch("config.json");
      const data = await myJson.json();
      console.log(data.plans[0].price);
    
      document.getElementById("standart").textContent = `$${data.plans[0].price}`
      document.getElementById("premium").textContent = `$${data.plans[1].price}`
      document.getElementById("lifetime").textContent = `$${data.plans[2].price}`
    } catch (err) {
      return 0;
    }
  };
    
    getPrice();
}