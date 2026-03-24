// *** Process Monitoring and Performance ***
// *** 2. CPU Usage ***

const startUsage = process.cpuUsage();

// Do some CPU-intensive work
for (let i = 0; i < 1000000000; i++) {}

const endUsage = process.cpuUsage(startUsage);
console.log('CPU usage (user):', endUsage.user / 1000, 'ms');
console.log('CPU usage (system):', endUsage.system / 1000, 'ms');
