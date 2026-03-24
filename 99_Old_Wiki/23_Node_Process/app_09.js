// Process Managers
// For production environments, use a process manager to keep your application running smoothly.
// PM2 is the most popular choice:
// --------------------------------------------------------------------------------------------
// 1. Install PM2 Globally
npm install -g pm2

// --------------------------------------------------------------------------------------------
// 2. Basic PM2 Commands
// # Start an application
pm2 start app.js
// # List all running applications
pm2 list
// # Monitor resources
pm2 monit
// # View application logs
pm2 logs
// # Stop an application
pm2 stop app_name
// # Restart an application
pm2 restart app_name
// # Delete an application from PM2
pm2 delete app_name

// --------------------------------------------------------------------------------------------
// 3. PM2 Configuration
// Create an ecosystem file for advanced configuration:
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-app',
    script: 'app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
