export const renderRadiobutton = () => {
    const getRadiobutton = async () => {
        const got = await fetch("../../config.json");
        const config = await got.json();
        let radioButton = config.plans
        document.querySelector('.standert').textContent = radioButton[0].name
        document.querySelector('.premium').textContent = radioButton[1].name
        document.querySelector('.lifetime').textContent = radioButton[2].name
    };
    getRadiobutton();
}