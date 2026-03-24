// Processing Large CSV Files

const fs = require('fs');
const { Transform } = require('stream');
const csv = require('csv-parser'); // npm install csv-parser

// Create a transform stream to filter and transform CSV data
const filterTransform = new Transform({
  objectMode: true,
  transform(row, encoding, callback) {
    // Only pass through rows that meet our criteria
    if (parseInt(row.age) > 18) {
      // Modify the row
      row.isAdult = 'Yes';
      // Push the transformed row
      this.push(row);
    }
    }
    callback();
  }
});

// Create a writable stream for the results
const results = [];
const writeToArray = new Transform({
  objectMode: true,
  transform(row, encoding, callback) {
    results.push(row);
    callback();
  }
});

// Create the processing pipeline
fs.createReadStream('./dir/people.csv')
  .pipe(csv())
  .pipe(filterTransform)
  .pipe(writeToArray)
  .on('finish', () => {
    console.log(`Processed ${results.length} records:`);
    console.log(results);
  }
  })
  .on('error', (err) => {
    console.error('Error processing CSV:', err);
  }
  });
