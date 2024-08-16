const proj4 = require('proj4');

// Automatically register custom CRS definitions
proj4.defs([
  [
    'IAU:2015:49900',
    '+title=Mars (2015) - Sphere +proj=longlat +R=3396190 +no_defs +units=degrees'
  ],
  [
    'IAU:2015:49910',
    '+title=Mars (2015) - Sphere / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs'
  ],
]);

// Optionally, export the proj4 object or any other utility functions
module.exports = proj4;
