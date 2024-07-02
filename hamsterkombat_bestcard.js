// Analysis of the best Hamster Telegram playing cards
// Programmer: @NabiKAZ (https://twitter.com/NabiKAZ)
// Manual: https://github.com/nabikaz/hamsterkombat-scripts

var upgrades = { "upgradesForBuy": [{ "id": "ceo", "name": "CEO", "price": 159841, "profitPerHour": 2255, "condition": null, "section": "PR&Team", "level": 14, "currentProfitPerHour": 2014, "profitPerHourDelta": 241, "isAvailable": true, "isExpired": false }, { "id": "marketing", "name": "Marketing", "price": 159841, "profitPerHour": 1579, "condition": null, "section": "PR&Team", "level": 14, "currentProfitPerHour": 1410, "profitPerHourDelta": 169, "isAvailable": true, "isExpired": false }, { "id": "it_team", "name": "IT team", "price": 319681, "profitPerHour": 5412, "condition": null, "section": "PR&Team", "level": 14, "currentProfitPerHour": 4834, "profitPerHourDelta": 578, "isAvailable": true, "isExpired": false }] }
var cards = upgrades.upgradesForBuy;
cards = cards.map(card => ({
    ...card,
    ROI: card.price / card.profitPerHourDelta,
}));
cards.sort((a, b) => {
    if (a.isExpired) return 1;
    if (b.isExpired) return -1;
    if (isNaN(a.ROI)) return 1;
    if (isNaN(b.ROI)) return -1;
    if (a.ROI === Infinity) return 1;
    if (b.ROI === Infinity) return -1;
    return a.ROI - b.ROI;
});
var table = [];
cards.forEach(card => {
    if (card.isAvailable && !card.isExpired) {
        table.push({
            name: card.name,
            section: card.section,
            price: parseFloat(card.price.toFixed()).toLocaleString(),
            profit: parseFloat(card.profitPerHourDelta.toFixed()).toLocaleString(),
            cooldown: card.cooldownSeconds ?? 0,
            ROI: parseFloat(card.ROI.toFixed(2)).toLocaleString(),
        });
    }
});
console.table(table);
