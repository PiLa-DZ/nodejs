// Exporting a Single Item

const Random_Number = (Min = 1, Max = 10) => Math.floor(Math.random() * (Max - Min + 1)) + Min

// exports.Random_Number = Random_Number
module.exports = Random_Number
