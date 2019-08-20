
const getItemsList = () => [
    {"id": "0001", "name": "Coca Cola", "price": 3},
    {"id": "0002", "name": "Diet Coke", "price": 4},
    {"id": "0003", "name": "Pepsi-Cola", "price": 5},
    {"id": "0004", "name": "Mountain Dew", "price": 6},
    {"id": "0005", "name": "Dr Pepper", "price": 7},
    {"id": "0006", "name": "Sprite", "price": 8},
    {"id": "0007", "name": "Diet Pepsi", "price": 9},
    {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name": "Fanta", "price": 12}
];

const isValidBarcodes = barcodes => {
    const allItemsList = getItemsList();
    for (let i = 0; i < barcodes.length; i++) {
        for(let j=0;j<allItemsList.length;j++){
            if(barcodes[i]==allItemsList[j].id){
                break;
            }
            if(j==allItemsList.length-1){
                return false;
            }
        }
    }
    return true;
}

const getBarcodesInformation = barcodes => {
    const allItemsList = getItemsList();
    const itemsList = [];
    for (let i = 0; i < barcodes.length; i++) {
        for(let j=0;j<allItemsList.length;j++){
            if(barcodes[i]==allItemsList[j].id){
                itemsList.push(
                    {
                        name:allItemsList[j].name,
                        price:allItemsList[j].price,
                        total:1
                    });
                break
            }
        }
    }
    for(let i=0; i<itemsList.length-1;i++){
        for(let j=1; j<itemsList.length; j++){
            if(itemsList[i].name==itemsList[j].name&&i!=j){
                itemsList[i].total=itemsList[i].total+1;
                itemsList.splice(j,1);
            }
        }
    }
    return itemsList;
}

const settleItemsFromBarcodes = itemList=>{
    let sum = 0;
    for(let i=0; i<itemList.length; i++){
        sum= sum+itemList[i].total*itemList[i].price
    }
    return {sum:sum,itemList:itemList};
}

const renderTotal = sum=>{
    let totalString =`------------------------------------------------------------
Price: ${sum}`;
    return totalString;
}

const renderTitle = ()=>{
    let titleString =`Receipts
------------------------------------------------------------`;
    return titleString;
}

const renderItems = itemList=>{
    let itemsString =``;
    for(let i=0; i<itemList.length;i++){
        itemsString= `${itemsString}
        ${itemList[i].name}     ${itemList[i].price}      ${itemList[i].total}`;
    }
    return itemsString;
}

const renderReceipt=items=>{
    let title = renderTitle();
    let item=renderItems(items.itemList);
    let total=renderTotal(items.sum);

    let receipt = `${title}
    ${item}
${total}`;
    // // console.log(total);
    return receipt;
}

const printReceipt=barcodes=>{
    if(isValidBarcodes(barcodes)){
        let itemList = getBarcodesInformation(barcodes);
        let items = settleItemsFromBarcodes(itemList);
        let receipt = renderReceipt(items);
        return receipt;
    }else{
        return `Error: can't find these barcodes id from database`;
    }
}

exports.getItemsList = getItemsList;
exports.isValidBarcodes = isValidBarcodes;
exports.getBarcodesInformation = getBarcodesInformation;
exports.settleItemsFromBarcodes = settleItemsFromBarcodes;
exports.renderTotal = renderTotal;
exports.renderTitle = renderTitle;
exports.renderItems = renderItems;
exports.renderReceipt = renderReceipt;
exports.printReceipt = printReceipt;