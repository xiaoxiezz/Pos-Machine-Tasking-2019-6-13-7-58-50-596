const main = require('../main');
const getItemsList = main.getItemsList;
const isValidBarcodes = main.isValidBarcodes;
const getBarcodesInformation = main.getBarcodesInformation;
const settleItemsFromBarcodes = main.settleItemsFromBarcodes;
const renderTotal = main.renderTotal;
const renderTitle = main.renderTitle;
const renderItems = main.renderItems;
const renderReceipt = main.renderReceipt;
const printReceipt = main.printReceipt;


it (`should return {"id": "0001", "name": "Coca Cola", "price": 3},
    {"id": "0002", "name": "Diet Coke", "price": 4},
    {"id": "0003", "name": "Pepsi-Cola", "price": 5},
    {"id": "0004", "name": "Mountain Dew", "price": 6},
    {"id": "0005", "name": "Dr Pepper", "price": 7},
    {"id": "0006", "name": "Sprite", "price": 8},
    {"id": "0007", "name": "Diet Pepsi", "price": 9},
    {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name": "Fanta", "price": 12} when call getItemsList`, () => {
    expect(getItemsList()).toStrictEqual([
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
    ]);
});

it ("should return true when input ['0001', '0003', '0005', '0003']", () => {
    expect(isValidBarcodes(['0001', '0003', '0005', '0003'])).toBe(true);
});

it ("should return [ { name: 'Coca Cola', price: 3, total: 1 },\n" +
    "  { name: 'Pepsi-Cola', price: 5, total: 2 },\n" +
    "  { name: 'Dr Pepper', price: 7, total: 1 } ] when input ['0001', '0003', '0005', '0003']", () => {
    expect(getBarcodesInformation(['0001', '0003', '0005', '0003'])).toStrictEqual([ { name: 'Coca Cola', price: 3, total: 1 },
        { name: 'Pepsi-Cola', price: 5, total: 2 },
        { name: 'Dr Pepper', price: 7, total: 1 } ]);
});

it (`should return { sum: 20,
itemList:
    [ { name: 'Coca Cola', price: 3, total: 1 },
        { name: 'Pepsi-Cola', price: 5, total: 2 },
        { name: 'Dr Pepper', price: 7, total: 1 } ] }
    when input ['0001', '0003', '0005', '0003']`, () => {
    expect(settleItemsFromBarcodes([ { name: 'Coca Cola', price: 3, total: 1 },
        { name: 'Pepsi-Cola', price: 5, total: 2 },
        { name: 'Dr Pepper', price: 7, total: 1 } ])).toStrictEqual({ sum: 20,
        itemList:
            [ { name: 'Coca Cola', price: 3, total: 1 },
                { name: 'Pepsi-Cola', price: 5, total: 2 },
                { name: 'Dr Pepper', price: 7, total: 1 } ] });
});

it (`should return ------------------------------------------------------------
Price: 20 when input 20`, () => {
    expect(renderTotal(20)).toBe(`------------------------------------------------------------
Price: 20`);
});

it (`should return Receipts
------------------------------------------------------------  when call renderTitle`, () => {
    expect(renderTitle()).toBe(`Receipts
------------------------------------------------------------`);
});

it (`should return         Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1 when input [ { name: 'Coca Cola', price: 3, total: 1 },
        { name: 'Pepsi-Cola', price: 5, total: 2 },
        { name: 'Dr Pepper', price: 7, total: 1 } ]`, () => {
    expect(renderItems([ { name: 'Coca Cola', price: 3, total: 1 },
        { name: 'Pepsi-Cola', price: 5, total: 2 },
        { name: 'Dr Pepper', price: 7, total: 1 } ])).toBe(`
        Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1`);
});
it (`should return Receipts
------------------------------------------------------------
    
        Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1
------------------------------------------------------------
Price: 20 when input { sum: 20,itemList:
        [ { name: 'Coca Cola', price: 3, total: 1 },
            { name: 'Pepsi-Cola', price: 5, total: 2 },
            { name: 'Dr Pepper', price: 7, total: 1 } ] }`, () => {
    expect(renderReceipt({ sum: 20,
        itemList:
            [ { name: 'Coca Cola', price: 3, total: 1 },
                { name: 'Pepsi-Cola', price: 5, total: 2 },
                { name: 'Dr Pepper', price: 7, total: 1 } ] })).toBe(`Receipts
------------------------------------------------------------
    
        Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1
------------------------------------------------------------
Price: 20`);
});

it (`should return Receipts
------------------------------------------------------------
    
        Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1
------------------------------------------------------------
Price: 20 when input ['0001', '0003', '0005', '0003']`, () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toBe(`Receipts
------------------------------------------------------------
    
        Coca Cola     3      1
        Pepsi-Cola     5      2
        Dr Pepper     7      1
------------------------------------------------------------
Price: 20`);
});

it (`should return Error: can't find these barcodes id from database when input ['0011', '0003', '0005', '0003']`, () => {
    expect(printReceipt(['0011', '0003', '0005', '0003'])).toBe(`Error: can't find these barcodes id from database`);
});
