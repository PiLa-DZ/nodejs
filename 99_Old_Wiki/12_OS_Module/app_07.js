// *** User and Environment ***
// *** os.userInfo() ***
// *** Returns information about the currently effective user. ***

const os = require('os');

// Get current user information
const user = os.userInfo();
console.log('User Information:');
console.log(`- Username:         ${user.username}`);
console.log(`- User ID:          ${user.uid}`);
console.log(`- Group ID:         ${user.gid}`);
console.log(`- Home Directory:   ${user.homedir}`);

// On Windows, you can also get the user's domain
if (os.platform() === 'win32') {
  console.log(`- Domain:         ${user.domain || 'N/A'}`);
}

// Note: user.shell is only available on POSIX platforms
if (user.shell) {
  console.log(`- Default Shell:    ${user.shell}`);
}
