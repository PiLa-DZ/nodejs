npm install                          # Installing all dependencies
npm outdated                         # Check for Outdated Packages

npm install <package-name>           # Installing a single package
    -S: --save
    -D: --save-dev
    -O: --save-optional
        --no-save                    # Installing Without Saving to package.json

sudo npm install -g <package-name>   # Global Packages
sudo npm install -g npm@latest       # Update npm Itself

npm update                           # Updating packages
npm update <package-name>            # You can specify a single package to update as well:
npm install <package-name>@<version> # You can install a specific version of a package, by running

npm run <task-name>                  # Running Tasks

npm uninstall <package-name>         # Remove a package:
npm uninstall -g <package-name>      # Remove a global package:
npm uninstall --save <package-name>  # Remove a package and its dependencies:
              --save-dev             # for development dependencies.

# -----------------------------------------------------
# *** Using npm-check-updates ***
# Install npm-check-updates globally
npm install -g npm-check-updates
# Check for updates
ncu
# Update package.json
ncu -u
# Install updated packages
npm install 

# -----------------------------------------------------
# *** Security and Auditing ***
# Audit Your Dependencies
npm audit
# Fix Security Vulnerabilities
npm audit fix
# Force Fix All Issues (Use with Caution)
npm audit fix --force
# Check for Known Vulnerabilities
npm audit
# Or using npx with the 'audit' package
npx audit

# -----------------------------------------------------
# *** Troubleshooting Common Issues ***
# Clearing the npm Cache
npm cache clean --force
# Deleting node_modules and Reinstalling
rm -rf node_modules
rm package-lock.json
npm install
# Checking for Peer Dependency Issues
npm ls
# Fixing Broken Dependencies
npm rebuild

