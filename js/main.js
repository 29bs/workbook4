'use strict';

const signal = 'pink';

switch (signal) {
   case 'red':
     console.log('stop!');
     break;
   case 'yellow':
     console.log('caution!');
     break;
   case 'blue':
   case 'green':
     console.log('go!');
     break;
   default:
     console.log('wrong signal!');
     break;
}
