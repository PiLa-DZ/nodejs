// *** Importing and Setup ***
// *** The Util module can be imported in several ways depending on your module system and needs: ***
// *** ES Modules (Node.js 12+) ***

// Default import
import util from 'util';

// Named imports
import { promisify, inspect } from 'util';

// Rename imports
import { promisify as pify } from 'util';

// Dynamic import (Node.js 14+)
const { promisify } = await import('util');

// Using with TypeScript types
// import * as util from 'util';
// import type { InspectOptions } from 'util';

