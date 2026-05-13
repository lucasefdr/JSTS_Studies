// === Exercise 1 ===


function calculateMonthlySaaS(tables, hasDelivery) {
    if (typeof tables !== 'number' || typeof hasDelivery !== 'boolean') {
        throw new TypeError("Invalid input: 'tables' should be a number and 'hasDelivery' should be a boolean.");
    }

    let totalFee = 0;
    const baseRate = 100;
    let activeTables = tables;
    let isDelivery = hasDelivery;

    totalFee = baseRate * (activeTables) * (isDelivery ? 1.2 : 1);

    return `The monthly fee is ${totalFee.toFixed(2)}`;
}

console.log(calculateMonthlySaaS(10, true));
console.log(calculateMonthlySaaS(10, false));