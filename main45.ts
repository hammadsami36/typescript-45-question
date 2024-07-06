function cardetails (manufacturer: string, modelname: string,...additionalInfo){
    const car = {manufacturer, modelname, ... Object . fromEntries (additionalInfo)}
    return car;
};
const mycardetails = cardetails ("toyota","corolla",[`colour`,`black`],[`years`,2023]);
console.log(mycardetails);