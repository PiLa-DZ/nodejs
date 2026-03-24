// *** Process Monitoring and Performance ***
// *** 1. Memory Usage ***

// Get memory usage in MB
function getMemoryUsage() {
  const used = process.memoryUsage();
  return {
    rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
    external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
  };
}

// Monitor memory usage every 5 seconds
setInterval(() => {
  console.log('Memory usage:', getMemoryUsage());
}, 5000);
