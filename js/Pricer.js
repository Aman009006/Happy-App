const price = async () => {
    const got = await fetch("config.json");
    const obj = await got.json();
    document.getElementById("standart").innerHTML = obj.standart
    document.getElementById("premium").innerHTML = obj.premium
    document.getElementById("lifetime").innerHTML = obj.lifetime
    console.log(obj.standart);
   
  };
  price();