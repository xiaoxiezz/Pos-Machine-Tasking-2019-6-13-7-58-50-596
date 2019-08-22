
const getItemsList = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
];

function createReceipt(items) {
    const countedItems = countItems(items);
    const products = fillDetailedItems(countedItems, getItemsList);
    const total = caculateTotal(products);
    return generateReceipt(products, total);
}

function countItems(items) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        let index = findId(result, items[i]);
        if (index !== -1) {
            result[index].count++;
        } else {
            result.push({
                id: items[i],
                count: 1
            });
        }
    }
    // console.log(result);
    return result;
}
function findId(result, id) {
    for (let index = 0; index < result.length; index++) {
        if (result[index].id === id) {
            return index;
            // return true;
        }
    }
    return -1;
}
function fillDetailedItems(countItems, getItemsList) {
    let products = [];
    for (let i = 0; i < countItems.length; i++) {
        for (let j = 0; j < getItemsList.length; j++) {
            if (getItemsList[j].id === countItems[i].id) {
                products.push({
                    id: countItems[i].id,
                    count: countItems[i].count,
                    name: getItemsList[j].name,
                    price: getItemsList[j].price
                });
            }
        }

    }
    return products;
}

// 计算总价
function caculateTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].count * products[i].price;
    }
    return total;
}

function generateReceipt(products, total) {
    let title = `Receipts
-----------------------------------------------
`;
    let tail = `-----------------------------------------------
Price: ${total}
    `;
    let line = '';
    for (let i = 0; i < products.length; i++) {
        line += products[i].name+"\t\t\t"+products[i].price+"\t\t\t"+products[i].count+"\n";
    }
    let receipt = title + line + tail;
    return receipt;
}
var items = ['0001', '0002', '0002'];
console.log(createReceipt(items));
// var  countItems=countItems(items);
// console.log(countItems);
