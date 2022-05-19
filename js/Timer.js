const data = async () => {
  const got = await fetch("config.json");
  const obj = await got.json();
  let date = new Date(`${obj.month} ${obj.day} ${obj.year} ${obj.time}`)

  function Counts() {
    let now = new Date();
    gat = date - now;
    let days = Math.floor(gat / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gat / 1000 / 60 / 60 ) %24;
    let minut = Math.floor(gat / 1000 / 60 ) % 60;
    let second = Math.floor(gat / 1000) %60;
    document.getElementById("day").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("min").innerHTML = minut
    document.getElementById("sec").innerHTML = second

    if(days === 0 ){
        if( hours === 0 ){
            if( minut === 0 || second===0){
                document.getElementById("timer").style.display = "none"
            }
        }
    }else{
        document.getElementById("timer").style.display = "block"
    }
  }
  Counts();
  setInterval(Counts,1000)
};
data();
