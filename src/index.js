const proj4 = require('proj4');

// Automatically register custom CRS definitions
proj4.defs([
    [
        'IAU:2015:1000',
        '+title=Sun (2015) - Sphere / Ocentric +proj=longlat +R=695700000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000500',
        '+title=Borrelly (2015) - Sphere / Ocentric +proj=longlat +R=4220 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000510',
        '+title=Borrelly (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000515',
        '+title=Borrelly (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000520',
        '+title=Borrelly (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000525',
        '+title=Borrelly (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000530',
        '+title=Borrelly (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000535',
        '+title=Borrelly (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000540',
        '+title=Borrelly (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000545',
        '+title=Borrelly (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000550',
        '+title=Borrelly (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000555',
        '+title=Borrelly (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000560',
        '+title=Borrelly (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000565',
        '+title=Borrelly (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000570',
        '+title=Borrelly (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000575',
        '+title=Borrelly (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000580',
        '+title=Borrelly (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000585',
        '+title=Borrelly (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100000590',
        '+title=Borrelly (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=4220 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001200',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric +proj=longlat +R=1650 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001210',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001215',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001220',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001225',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001230',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001235',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001240',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001245',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001250',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001255',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001260',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001265',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001270',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001275',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001280',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001285',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100001290',
        '+title=Churyumov-Gerasimenko (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003600',
        '+title=Halley (2015) - Sphere / Ocentric +proj=longlat +R=8000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003601',
        '+title=Halley (2015) / Ographic +proj=longlat +a=8000 +b=4000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003610',
        '+title=Halley (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003611',
        '+title=Halley (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003615',
        '+title=Halley (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003616',
        '+title=Halley (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003620',
        '+title=Halley (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003621',
        '+title=Halley (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003625',
        '+title=Halley (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003626',
        '+title=Halley (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003630',
        '+title=Halley (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003631',
        '+title=Halley (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003635',
        '+title=Halley (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003636',
        '+title=Halley (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003640',
        '+title=Halley (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003641',
        '+title=Halley (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003645',
        '+title=Halley (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003646',
        '+title=Halley (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003650',
        '+title=Halley (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003651',
        '+title=Halley (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003655',
        '+title=Halley (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003656',
        '+title=Halley (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003660',
        '+title=Halley (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003661',
        '+title=Halley (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003665',
        '+title=Halley (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003666',
        '+title=Halley (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003670',
        '+title=Halley (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003671',
        '+title=Halley (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003675',
        '+title=Halley (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003676',
        '+title=Halley (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003680',
        '+title=Halley (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003681',
        '+title=Halley (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003685',
        '+title=Halley (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003686',
        '+title=Halley (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003690',
        '+title=Halley (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100003691',
        '+title=Halley (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=8000 +b=4000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004100',
        '+title=Hartley 2 (2015) - Sphere / Ocentric +proj=longlat +R=580 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004110',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004115',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004120',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004125',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004130',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004135',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004140',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004145',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004150',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004155',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004160',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004165',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004170',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004175',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004180',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004185',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100004190',
        '+title=Hartley 2 (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=580 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009300',
        '+title=Tempel 1 (2015) - Sphere / Ocentric +proj=longlat +R=3000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009310',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009315',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009320',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009325',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009330',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009335',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009340',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009345',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009350',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009355',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009360',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009365',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009370',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009375',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009380',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009385',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100009390',
        '+title=Tempel 1 (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010700',
        '+title=Wild 2 (2015) - Sphere / Ocentric +proj=longlat +R=1975 +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010710',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010715',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010720',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010725',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010730',
        '+title=Wild 2 (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010735',
        '+title=Wild 2 (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010740',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010745',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010750',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010755',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010760',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010765',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010770',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010775',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010780',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010785',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:100010790',
        '+title=Wild 2 (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1975 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1010',
        '+title=Sun (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1015',
        '+title=Sun (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1020',
        '+title=Sun (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1025',
        '+title=Sun (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1030',
        '+title=Sun (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1035',
        '+title=Sun (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1040',
        '+title=Sun (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1045',
        '+title=Sun (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1050',
        '+title=Sun (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1055',
        '+title=Sun (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1060',
        '+title=Sun (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1065',
        '+title=Sun (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1070',
        '+title=Sun (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1075',
        '+title=Sun (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1080',
        '+title=Sun (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1085',
        '+title=Sun (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:1090',
        '+title=Sun (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=695700000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19900',
        '+title=Mercury (2015) - Sphere / Ocentric +proj=longlat +R=2440530 +no_defs +type=crs'
    ],
    [
        'IAU:2015:19901',
        '+title=Mercury (2015) / Ographic +proj=longlat +a=2440530 +b=2438260 +no_defs +type=crs'
    ],
    [
        'IAU:2015:19910',
        '+title=Mercury (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19911',
        '+title=Mercury (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19912',
        '+title=Mercury (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19915',
        '+title=Mercury (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19916',
        '+title=Mercury (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19917',
        '+title=Mercury (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19920',
        '+title=Mercury (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19921',
        '+title=Mercury (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19922',
        '+title=Mercury (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19925',
        '+title=Mercury (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19926',
        '+title=Mercury (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19927',
        '+title=Mercury (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19930',
        '+title=Mercury (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19931',
        '+title=Mercury (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19932',
        '+title=Mercury (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19935',
        '+title=Mercury (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19936',
        '+title=Mercury (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19937',
        '+title=Mercury (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19940',
        '+title=Mercury (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19941',
        '+title=Mercury (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19942',
        '+title=Mercury (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19945',
        '+title=Mercury (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19946',
        '+title=Mercury (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19947',
        '+title=Mercury (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19950',
        '+title=Mercury (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19951',
        '+title=Mercury (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19952',
        '+title=Mercury (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19955',
        '+title=Mercury (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19956',
        '+title=Mercury (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19957',
        '+title=Mercury (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19960',
        '+title=Mercury (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19961',
        '+title=Mercury (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19962',
        '+title=Mercury (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19965',
        '+title=Mercury (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19966',
        '+title=Mercury (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19967',
        '+title=Mercury (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19970',
        '+title=Mercury (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19971',
        '+title=Mercury (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19972',
        '+title=Mercury (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19975',
        '+title=Mercury (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19976',
        '+title=Mercury (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19977',
        '+title=Mercury (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19980',
        '+title=Mercury (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19981',
        '+title=Mercury (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19982',
        '+title=Mercury (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19985',
        '+title=Mercury (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19986',
        '+title=Mercury (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19987',
        '+title=Mercury (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19990',
        '+title=Mercury (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2440530 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19991',
        '+title=Mercury (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:19992',
        '+title=Mercury (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=2440530 +b=2438260 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000100',
        '+title=Ceres (2015) - Sphere / Ocentric +proj=longlat +R=487300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000101',
        '+title=Ceres (2015) / Ographic +proj=longlat +a=487300 +b=446000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000110',
        '+title=Ceres (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000111',
        '+title=Ceres (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000115',
        '+title=Ceres (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000116',
        '+title=Ceres (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000120',
        '+title=Ceres (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000121',
        '+title=Ceres (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000125',
        '+title=Ceres (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000126',
        '+title=Ceres (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000130',
        '+title=Ceres (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000131',
        '+title=Ceres (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000135',
        '+title=Ceres (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000136',
        '+title=Ceres (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000140',
        '+title=Ceres (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000141',
        '+title=Ceres (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000145',
        '+title=Ceres (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000146',
        '+title=Ceres (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000150',
        '+title=Ceres (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000151',
        '+title=Ceres (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000155',
        '+title=Ceres (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000156',
        '+title=Ceres (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000160',
        '+title=Ceres (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000161',
        '+title=Ceres (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000165',
        '+title=Ceres (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000166',
        '+title=Ceres (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000170',
        '+title=Ceres (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000171',
        '+title=Ceres (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000175',
        '+title=Ceres (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000176',
        '+title=Ceres (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000180',
        '+title=Ceres (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000181',
        '+title=Ceres (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000185',
        '+title=Ceres (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000186',
        '+title=Ceres (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000190',
        '+title=Ceres (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=487300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000191',
        '+title=Ceres (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=487300 +b=446000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000400',
        '+title=Vesta (2015) - Sphere / Ocentric +proj=longlat +R=255000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000410',
        '+title=Vesta (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000415',
        '+title=Vesta (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000420',
        '+title=Vesta (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000425',
        '+title=Vesta (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000430',
        '+title=Vesta (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000435',
        '+title=Vesta (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000440',
        '+title=Vesta (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000445',
        '+title=Vesta (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000450',
        '+title=Vesta (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000455',
        '+title=Vesta (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000460',
        '+title=Vesta (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000465',
        '+title=Vesta (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000470',
        '+title=Vesta (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000475',
        '+title=Vesta (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000480',
        '+title=Vesta (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000485',
        '+title=Vesta (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200000490',
        '+title=Vesta (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=255000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001600',
        '+title=Psyche (2015) - Sphere / Ocentric +proj=longlat +R=113000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001610',
        '+title=Psyche (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001615',
        '+title=Psyche (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001620',
        '+title=Psyche (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001625',
        '+title=Psyche (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001630',
        '+title=Psyche (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001635',
        '+title=Psyche (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001640',
        '+title=Psyche (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001645',
        '+title=Psyche (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001650',
        '+title=Psyche (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001655',
        '+title=Psyche (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001660',
        '+title=Psyche (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001665',
        '+title=Psyche (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001670',
        '+title=Psyche (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001675',
        '+title=Psyche (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001680',
        '+title=Psyche (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001685',
        '+title=Psyche (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200001690',
        '+title=Psyche (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=113000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002100',
        '+title=Lutetia (2015) - Sphere / Ocentric +proj=longlat +R=52500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002110',
        '+title=Lutetia (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002115',
        '+title=Lutetia (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002120',
        '+title=Lutetia (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002125',
        '+title=Lutetia (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002130',
        '+title=Lutetia (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002135',
        '+title=Lutetia (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002140',
        '+title=Lutetia (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002145',
        '+title=Lutetia (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002150',
        '+title=Lutetia (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002155',
        '+title=Lutetia (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002160',
        '+title=Lutetia (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002165',
        '+title=Lutetia (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002170',
        '+title=Lutetia (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002175',
        '+title=Lutetia (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002180',
        '+title=Lutetia (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002185',
        '+title=Lutetia (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200002190',
        '+title=Lutetia (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=52500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005200',
        '+title=52 Europa (2015) - Sphere / Ocentric +proj=longlat +R=157500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005210',
        '+title=52 Europa (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005215',
        '+title=52 Europa (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005220',
        '+title=52 Europa (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005225',
        '+title=52 Europa (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005230',
        '+title=52 Europa (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005235',
        '+title=52 Europa (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005240',
        '+title=52 Europa (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005245',
        '+title=52 Europa (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005250',
        '+title=52 Europa (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005255',
        '+title=52 Europa (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005260',
        '+title=52 Europa (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005265',
        '+title=52 Europa (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005270',
        '+title=52 Europa (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005275',
        '+title=52 Europa (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005280',
        '+title=52 Europa (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005285',
        '+title=52 Europa (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200005290',
        '+title=52 Europa (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=157500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021600',
        '+title=Kleopatra (2015) - Sphere / Ocentric +proj=longlat +R=65333.333333 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021610',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021615',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021620',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021625',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021630',
        '+title=Kleopatra (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021635',
        '+title=Kleopatra (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021640',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021645',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021650',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021655',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021660',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021665',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021670',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021675',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021680',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021685',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200021690',
        '+title=Kleopatra (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=65333.333333 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025300',
        '+title=Mathilde (2015) - Sphere / Ocentric +proj=longlat +R=26500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025310',
        '+title=Mathilde (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025315',
        '+title=Mathilde (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025320',
        '+title=Mathilde (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025325',
        '+title=Mathilde (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025330',
        '+title=Mathilde (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025335',
        '+title=Mathilde (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025340',
        '+title=Mathilde (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025345',
        '+title=Mathilde (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025350',
        '+title=Mathilde (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025355',
        '+title=Mathilde (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025360',
        '+title=Mathilde (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025365',
        '+title=Mathilde (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025370',
        '+title=Mathilde (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025375',
        '+title=Mathilde (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025380',
        '+title=Mathilde (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025385',
        '+title=Mathilde (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200025390',
        '+title=Mathilde (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=26500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043300',
        '+title=Eros (2015) - Sphere / Ocentric +proj=longlat +R=17000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043301',
        '+title=Eros (2015) / Ographic +proj=longlat +a=17000 +b=5500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043310',
        '+title=Eros (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043311',
        '+title=Eros (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043315',
        '+title=Eros (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043316',
        '+title=Eros (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043320',
        '+title=Eros (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043321',
        '+title=Eros (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043325',
        '+title=Eros (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043326',
        '+title=Eros (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043330',
        '+title=Eros (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043331',
        '+title=Eros (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043335',
        '+title=Eros (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043336',
        '+title=Eros (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043340',
        '+title=Eros (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043341',
        '+title=Eros (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043345',
        '+title=Eros (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043346',
        '+title=Eros (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043350',
        '+title=Eros (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043351',
        '+title=Eros (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043355',
        '+title=Eros (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043356',
        '+title=Eros (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043360',
        '+title=Eros (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043361',
        '+title=Eros (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043365',
        '+title=Eros (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043366',
        '+title=Eros (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043370',
        '+title=Eros (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043371',
        '+title=Eros (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043375',
        '+title=Eros (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043376',
        '+title=Eros (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043380',
        '+title=Eros (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043381',
        '+title=Eros (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043385',
        '+title=Eros (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043386',
        '+title=Eros (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043390',
        '+title=Eros (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=17000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200043391',
        '+title=Eros (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=17000 +b=5500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051100',
        '+title=Davida (2015) - Sphere / Ocentric +proj=longlat +R=150000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051110',
        '+title=Davida (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051115',
        '+title=Davida (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051120',
        '+title=Davida (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051125',
        '+title=Davida (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051130',
        '+title=Davida (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051135',
        '+title=Davida (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051140',
        '+title=Davida (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051145',
        '+title=Davida (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051150',
        '+title=Davida (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051155',
        '+title=Davida (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051160',
        '+title=Davida (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051165',
        '+title=Davida (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051170',
        '+title=Davida (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051175',
        '+title=Davida (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051180',
        '+title=Davida (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051185',
        '+title=Davida (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200051190',
        '+title=Davida (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=150000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286700',
        '+title=Steins (2015) - Sphere / Ocentric +proj=longlat +R=2700 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286710',
        '+title=Steins (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286715',
        '+title=Steins (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286720',
        '+title=Steins (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286725',
        '+title=Steins (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286730',
        '+title=Steins (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286735',
        '+title=Steins (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286740',
        '+title=Steins (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286745',
        '+title=Steins (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286750',
        '+title=Steins (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286755',
        '+title=Steins (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286760',
        '+title=Steins (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286765',
        '+title=Steins (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286770',
        '+title=Steins (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286775',
        '+title=Steins (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286780',
        '+title=Steins (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286785',
        '+title=Steins (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200286790',
        '+title=Steins (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417900',
        '+title=Toutatis (2015) - Sphere / Ocentric +proj=longlat +R=1331.666667 +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417910',
        '+title=Toutatis (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417915',
        '+title=Toutatis (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417920',
        '+title=Toutatis (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417925',
        '+title=Toutatis (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417930',
        '+title=Toutatis (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417935',
        '+title=Toutatis (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417940',
        '+title=Toutatis (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417945',
        '+title=Toutatis (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417950',
        '+title=Toutatis (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417955',
        '+title=Toutatis (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417960',
        '+title=Toutatis (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417965',
        '+title=Toutatis (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417970',
        '+title=Toutatis (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417975',
        '+title=Toutatis (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417980',
        '+title=Toutatis (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417985',
        '+title=Toutatis (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:200417990',
        '+title=Toutatis (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1331.666667 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514300',
        '+title=Itokawa (2015) - Sphere / Ocentric +proj=longlat +R=173 +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514310',
        '+title=Itokawa (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514315',
        '+title=Itokawa (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514320',
        '+title=Itokawa (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514325',
        '+title=Itokawa (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514330',
        '+title=Itokawa (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514335',
        '+title=Itokawa (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514340',
        '+title=Itokawa (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514345',
        '+title=Itokawa (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514350',
        '+title=Itokawa (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514355',
        '+title=Itokawa (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514360',
        '+title=Itokawa (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514365',
        '+title=Itokawa (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514370',
        '+title=Itokawa (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514375',
        '+title=Itokawa (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514380',
        '+title=Itokawa (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514385',
        '+title=Itokawa (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:202514390',
        '+title=Itokawa (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=173 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101000',
        '+title=Ida (2015) - Sphere / Ocentric +proj=longlat +R=15650 +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101010',
        '+title=Ida (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101015',
        '+title=Ida (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101020',
        '+title=Ida (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101025',
        '+title=Ida (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101030',
        '+title=Ida (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101035',
        '+title=Ida (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101040',
        '+title=Ida (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101045',
        '+title=Ida (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101050',
        '+title=Ida (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101055',
        '+title=Ida (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101060',
        '+title=Ida (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101065',
        '+title=Ida (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101070',
        '+title=Ida (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101075',
        '+title=Ida (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101080',
        '+title=Ida (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101085',
        '+title=Ida (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:243101090',
        '+title=Ida (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15650 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29900',
        '+title=Venus (2015) - Sphere / Ocentric +proj=longlat +R=6051800 +no_defs +type=crs'
    ],
    [
        'IAU:2015:29910',
        '+title=Venus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29915',
        '+title=Venus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29920',
        '+title=Venus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29925',
        '+title=Venus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29930',
        '+title=Venus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29935',
        '+title=Venus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29940',
        '+title=Venus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29945',
        '+title=Venus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29950',
        '+title=Venus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29955',
        '+title=Venus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29960',
        '+title=Venus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29965',
        '+title=Venus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29970',
        '+title=Venus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29975',
        '+title=Venus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29980',
        '+title=Venus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29985',
        '+title=Venus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:29990',
        '+title=Venus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6051800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30100',
        '+title=Moon (2015) - Sphere / Ocentric +proj=longlat +R=1737400 +no_defs +type=crs'
    ],
    [
        'IAU:2015:30110',
        '+title=Moon (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30115',
        '+title=Moon (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30120',
        '+title=Moon (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30125',
        '+title=Moon (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30130',
        '+title=Moon (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30135',
        '+title=Moon (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30140',
        '+title=Moon (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30145',
        '+title=Moon (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30150',
        '+title=Moon (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30155',
        '+title=Moon (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30160',
        '+title=Moon (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30165',
        '+title=Moon (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30170',
        '+title=Moon (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30175',
        '+title=Moon (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30180',
        '+title=Moon (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30185',
        '+title=Moon (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:30190',
        '+title=Moon (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1737400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39900',
        '+title=Earth (2015) - Sphere / Ocentric +proj=longlat +R=6378136.6 +no_defs +type=crs'
    ],
    [
        'IAU:2015:39901',
        '+title=Earth (2015) / Ographic +proj=longlat +a=6378136.6 +b=6356751.9 +no_defs +type=crs'
    ],
    [
        'IAU:2015:39910',
        '+title=Earth (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39911',
        '+title=Earth (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39915',
        '+title=Earth (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39916',
        '+title=Earth (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39920',
        '+title=Earth (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39921',
        '+title=Earth (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39925',
        '+title=Earth (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39926',
        '+title=Earth (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39930',
        '+title=Earth (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39931',
        '+title=Earth (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39935',
        '+title=Earth (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39936',
        '+title=Earth (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39940',
        '+title=Earth (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39941',
        '+title=Earth (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39945',
        '+title=Earth (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39946',
        '+title=Earth (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39950',
        '+title=Earth (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39951',
        '+title=Earth (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39955',
        '+title=Earth (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39956',
        '+title=Earth (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39960',
        '+title=Earth (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39961',
        '+title=Earth (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39965',
        '+title=Earth (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39966',
        '+title=Earth (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39970',
        '+title=Earth (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39971',
        '+title=Earth (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39975',
        '+title=Earth (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39976',
        '+title=Earth (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39980',
        '+title=Earth (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39981',
        '+title=Earth (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39985',
        '+title=Earth (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39986',
        '+title=Earth (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39990',
        '+title=Earth (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6378136.6 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:39991',
        '+title=Earth (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6378136.6 +b=6356751.9 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40100',
        '+title=Phobos (2015) - Sphere / Ocentric +proj=longlat +R=11080 +no_defs +type=crs'
    ],
    [
        'IAU:2015:40110',
        '+title=Phobos (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40115',
        '+title=Phobos (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40120',
        '+title=Phobos (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40125',
        '+title=Phobos (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40130',
        '+title=Phobos (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40135',
        '+title=Phobos (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40140',
        '+title=Phobos (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40145',
        '+title=Phobos (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40150',
        '+title=Phobos (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40155',
        '+title=Phobos (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40160',
        '+title=Phobos (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40165',
        '+title=Phobos (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40170',
        '+title=Phobos (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40175',
        '+title=Phobos (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40180',
        '+title=Phobos (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40185',
        '+title=Phobos (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40190',
        '+title=Phobos (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=11080 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40200',
        '+title=Deimos (2015) - Sphere / Ocentric +proj=longlat +R=6200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:40210',
        '+title=Deimos (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40215',
        '+title=Deimos (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40220',
        '+title=Deimos (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40225',
        '+title=Deimos (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40230',
        '+title=Deimos (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40235',
        '+title=Deimos (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40240',
        '+title=Deimos (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40245',
        '+title=Deimos (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40250',
        '+title=Deimos (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40255',
        '+title=Deimos (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40260',
        '+title=Deimos (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40265',
        '+title=Deimos (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40270',
        '+title=Deimos (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40275',
        '+title=Deimos (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40280',
        '+title=Deimos (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40285',
        '+title=Deimos (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:40290',
        '+title=Deimos (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49900',
        '+title=Mars (2015) - Sphere / Ocentric +proj=longlat +R=3396190 +no_defs +type=crs'
    ],
    [
        'IAU:2015:49901',
        '+title=Mars (2015) / Ographic +proj=longlat +a=3396190 +b=3376200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:49910',
        '+title=Mars (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49911',
        '+title=Mars (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49912',
        '+title=Mars (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49915',
        '+title=Mars (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49916',
        '+title=Mars (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49917',
        '+title=Mars (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49920',
        '+title=Mars (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49921',
        '+title=Mars (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49922',
        '+title=Mars (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49925',
        '+title=Mars (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49926',
        '+title=Mars (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49927',
        '+title=Mars (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49930',
        '+title=Mars (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49931',
        '+title=Mars (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49932',
        '+title=Mars (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49935',
        '+title=Mars (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49936',
        '+title=Mars (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49937',
        '+title=Mars (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49940',
        '+title=Mars (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49941',
        '+title=Mars (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49942',
        '+title=Mars (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49945',
        '+title=Mars (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49946',
        '+title=Mars (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49947',
        '+title=Mars (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49950',
        '+title=Mars (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49951',
        '+title=Mars (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49952',
        '+title=Mars (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49955',
        '+title=Mars (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49956',
        '+title=Mars (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49957',
        '+title=Mars (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49960',
        '+title=Mars (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49961',
        '+title=Mars (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49962',
        '+title=Mars (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49965',
        '+title=Mars (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49966',
        '+title=Mars (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49967',
        '+title=Mars (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49970',
        '+title=Mars (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49971',
        '+title=Mars (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49972',
        '+title=Mars (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49975',
        '+title=Mars (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49976',
        '+title=Mars (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49977',
        '+title=Mars (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49980',
        '+title=Mars (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49981',
        '+title=Mars (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49982',
        '+title=Mars (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49985',
        '+title=Mars (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49986',
        '+title=Mars (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49987',
        '+title=Mars (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49990',
        '+title=Mars (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49991',
        '+title=Mars (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:49992',
        '+title=Mars (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50100',
        '+title=Io (2015) - Sphere / Ocentric +proj=longlat +R=1821490 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50110',
        '+title=Io (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50115',
        '+title=Io (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50120',
        '+title=Io (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50125',
        '+title=Io (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50130',
        '+title=Io (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50135',
        '+title=Io (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50140',
        '+title=Io (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50145',
        '+title=Io (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50150',
        '+title=Io (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50155',
        '+title=Io (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50160',
        '+title=Io (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50165',
        '+title=Io (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50170',
        '+title=Io (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50175',
        '+title=Io (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50180',
        '+title=Io (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50185',
        '+title=Io (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50190',
        '+title=Io (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1821490 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50200',
        '+title=Europa (2015) - Sphere / Ocentric +proj=longlat +R=1560800 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50210',
        '+title=Europa (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50215',
        '+title=Europa (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50220',
        '+title=Europa (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50225',
        '+title=Europa (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50230',
        '+title=Europa (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50235',
        '+title=Europa (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50240',
        '+title=Europa (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50245',
        '+title=Europa (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50250',
        '+title=Europa (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50255',
        '+title=Europa (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50260',
        '+title=Europa (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50265',
        '+title=Europa (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50270',
        '+title=Europa (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50275',
        '+title=Europa (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50280',
        '+title=Europa (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50285',
        '+title=Europa (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50290',
        '+title=Europa (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1560800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50300',
        '+title=Ganymede (2015) - Sphere / Ocentric +proj=longlat +R=2631200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50301',
        '+title=Ganymede (2015) / Ographic +proj=longlat +R=2631200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50310',
        '+title=Ganymede (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50311',
        '+title=Ganymede (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50315',
        '+title=Ganymede (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50316',
        '+title=Ganymede (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50320',
        '+title=Ganymede (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50321',
        '+title=Ganymede (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50325',
        '+title=Ganymede (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50326',
        '+title=Ganymede (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50330',
        '+title=Ganymede (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50331',
        '+title=Ganymede (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50335',
        '+title=Ganymede (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50336',
        '+title=Ganymede (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50340',
        '+title=Ganymede (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50341',
        '+title=Ganymede (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50345',
        '+title=Ganymede (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50346',
        '+title=Ganymede (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50350',
        '+title=Ganymede (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50351',
        '+title=Ganymede (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50355',
        '+title=Ganymede (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50356',
        '+title=Ganymede (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50360',
        '+title=Ganymede (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50361',
        '+title=Ganymede (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50365',
        '+title=Ganymede (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50366',
        '+title=Ganymede (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50370',
        '+title=Ganymede (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50371',
        '+title=Ganymede (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50375',
        '+title=Ganymede (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50376',
        '+title=Ganymede (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50380',
        '+title=Ganymede (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50381',
        '+title=Ganymede (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50385',
        '+title=Ganymede (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50386',
        '+title=Ganymede (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50390',
        '+title=Ganymede (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50391',
        '+title=Ganymede (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2631200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50400',
        '+title=Callisto (2015) - Sphere / Ocentric +proj=longlat +R=2410300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50401',
        '+title=Callisto (2015) / Ographic +proj=longlat +R=2410300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50410',
        '+title=Callisto (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50411',
        '+title=Callisto (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50415',
        '+title=Callisto (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50416',
        '+title=Callisto (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50420',
        '+title=Callisto (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50421',
        '+title=Callisto (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50425',
        '+title=Callisto (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50426',
        '+title=Callisto (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50430',
        '+title=Callisto (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50431',
        '+title=Callisto (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50435',
        '+title=Callisto (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50436',
        '+title=Callisto (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50440',
        '+title=Callisto (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50441',
        '+title=Callisto (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50445',
        '+title=Callisto (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50446',
        '+title=Callisto (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50450',
        '+title=Callisto (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50451',
        '+title=Callisto (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50455',
        '+title=Callisto (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50456',
        '+title=Callisto (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50460',
        '+title=Callisto (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50461',
        '+title=Callisto (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50465',
        '+title=Callisto (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50466',
        '+title=Callisto (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50470',
        '+title=Callisto (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50471',
        '+title=Callisto (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50475',
        '+title=Callisto (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50476',
        '+title=Callisto (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50480',
        '+title=Callisto (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50481',
        '+title=Callisto (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50485',
        '+title=Callisto (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50486',
        '+title=Callisto (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50490',
        '+title=Callisto (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50491',
        '+title=Callisto (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2410300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50500',
        '+title=Amalthea (2015) - Sphere / Ocentric +proj=longlat +R=83500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50510',
        '+title=Amalthea (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50515',
        '+title=Amalthea (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50520',
        '+title=Amalthea (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50525',
        '+title=Amalthea (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50530',
        '+title=Amalthea (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50535',
        '+title=Amalthea (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50540',
        '+title=Amalthea (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50545',
        '+title=Amalthea (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50550',
        '+title=Amalthea (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50555',
        '+title=Amalthea (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50560',
        '+title=Amalthea (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50565',
        '+title=Amalthea (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50570',
        '+title=Amalthea (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50575',
        '+title=Amalthea (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50580',
        '+title=Amalthea (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50585',
        '+title=Amalthea (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50590',
        '+title=Amalthea (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=83500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50600',
        '+title=Himalia (2015) - Sphere / Ocentric +proj=longlat +R=85000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50610',
        '+title=Himalia (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50615',
        '+title=Himalia (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50620',
        '+title=Himalia (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50625',
        '+title=Himalia (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50630',
        '+title=Himalia (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50635',
        '+title=Himalia (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50640',
        '+title=Himalia (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50645',
        '+title=Himalia (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50650',
        '+title=Himalia (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50655',
        '+title=Himalia (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50660',
        '+title=Himalia (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50665',
        '+title=Himalia (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50670',
        '+title=Himalia (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50675',
        '+title=Himalia (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50680',
        '+title=Himalia (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50685',
        '+title=Himalia (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50690',
        '+title=Himalia (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=85000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50700',
        '+title=Elara (2015) - Sphere / Ocentric +proj=longlat +R=40000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50710',
        '+title=Elara (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50715',
        '+title=Elara (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50720',
        '+title=Elara (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50725',
        '+title=Elara (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50730',
        '+title=Elara (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50735',
        '+title=Elara (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50740',
        '+title=Elara (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50745',
        '+title=Elara (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50750',
        '+title=Elara (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50755',
        '+title=Elara (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50760',
        '+title=Elara (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50765',
        '+title=Elara (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50770',
        '+title=Elara (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50775',
        '+title=Elara (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50780',
        '+title=Elara (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50785',
        '+title=Elara (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50790',
        '+title=Elara (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50800',
        '+title=Pasiphae (2015) - Sphere / Ocentric +proj=longlat +R=18000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50810',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50815',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50820',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50825',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50830',
        '+title=Pasiphae (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50835',
        '+title=Pasiphae (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50840',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50845',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50850',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50855',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50860',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50865',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50870',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50875',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50880',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50885',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50890',
        '+title=Pasiphae (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50900',
        '+title=Sinope (2015) - Sphere / Ocentric +proj=longlat +R=14000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:50910',
        '+title=Sinope (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50915',
        '+title=Sinope (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50920',
        '+title=Sinope (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50925',
        '+title=Sinope (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50930',
        '+title=Sinope (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50935',
        '+title=Sinope (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50940',
        '+title=Sinope (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50945',
        '+title=Sinope (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50950',
        '+title=Sinope (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50955',
        '+title=Sinope (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50960',
        '+title=Sinope (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50965',
        '+title=Sinope (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50970',
        '+title=Sinope (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50975',
        '+title=Sinope (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50980',
        '+title=Sinope (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50985',
        '+title=Sinope (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:50990',
        '+title=Sinope (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51000',
        '+title=Lysithea (2015) - Sphere / Ocentric +proj=longlat +R=12000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51010',
        '+title=Lysithea (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51015',
        '+title=Lysithea (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51020',
        '+title=Lysithea (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51025',
        '+title=Lysithea (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51030',
        '+title=Lysithea (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51035',
        '+title=Lysithea (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51040',
        '+title=Lysithea (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51045',
        '+title=Lysithea (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51050',
        '+title=Lysithea (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51055',
        '+title=Lysithea (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51060',
        '+title=Lysithea (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51065',
        '+title=Lysithea (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51070',
        '+title=Lysithea (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51075',
        '+title=Lysithea (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51080',
        '+title=Lysithea (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51085',
        '+title=Lysithea (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51090',
        '+title=Lysithea (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51100',
        '+title=Carme (2015) - Sphere / Ocentric +proj=longlat +R=15000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51110',
        '+title=Carme (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51115',
        '+title=Carme (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51120',
        '+title=Carme (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51125',
        '+title=Carme (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51130',
        '+title=Carme (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51135',
        '+title=Carme (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51140',
        '+title=Carme (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51145',
        '+title=Carme (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51150',
        '+title=Carme (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51155',
        '+title=Carme (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51160',
        '+title=Carme (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51165',
        '+title=Carme (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51170',
        '+title=Carme (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51175',
        '+title=Carme (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51180',
        '+title=Carme (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51185',
        '+title=Carme (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51190',
        '+title=Carme (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51200',
        '+title=Ananke (2015) - Sphere / Ocentric +proj=longlat +R=10000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51210',
        '+title=Ananke (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51215',
        '+title=Ananke (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51220',
        '+title=Ananke (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51225',
        '+title=Ananke (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51230',
        '+title=Ananke (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51235',
        '+title=Ananke (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51240',
        '+title=Ananke (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51245',
        '+title=Ananke (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51250',
        '+title=Ananke (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51255',
        '+title=Ananke (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51260',
        '+title=Ananke (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51265',
        '+title=Ananke (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51270',
        '+title=Ananke (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51275',
        '+title=Ananke (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51280',
        '+title=Ananke (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51285',
        '+title=Ananke (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51290',
        '+title=Ananke (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=10000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51300',
        '+title=Leda (2015) - Sphere / Ocentric +proj=longlat +R=5000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51310',
        '+title=Leda (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51315',
        '+title=Leda (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51320',
        '+title=Leda (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51325',
        '+title=Leda (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51330',
        '+title=Leda (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51335',
        '+title=Leda (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51340',
        '+title=Leda (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51345',
        '+title=Leda (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51350',
        '+title=Leda (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51355',
        '+title=Leda (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51360',
        '+title=Leda (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51365',
        '+title=Leda (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51370',
        '+title=Leda (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51375',
        '+title=Leda (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51380',
        '+title=Leda (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51385',
        '+title=Leda (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51390',
        '+title=Leda (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=5000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51400',
        '+title=Thebe (2015) - Sphere / Ocentric +proj=longlat +R=49300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51410',
        '+title=Thebe (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51415',
        '+title=Thebe (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51420',
        '+title=Thebe (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51425',
        '+title=Thebe (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51430',
        '+title=Thebe (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51435',
        '+title=Thebe (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51440',
        '+title=Thebe (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51445',
        '+title=Thebe (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51450',
        '+title=Thebe (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51455',
        '+title=Thebe (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51460',
        '+title=Thebe (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51465',
        '+title=Thebe (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51470',
        '+title=Thebe (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51475',
        '+title=Thebe (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51480',
        '+title=Thebe (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51485',
        '+title=Thebe (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51490',
        '+title=Thebe (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=49300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51500',
        '+title=Adrastea (2015) - Sphere / Ocentric +proj=longlat +R=8200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51510',
        '+title=Adrastea (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51515',
        '+title=Adrastea (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51520',
        '+title=Adrastea (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51525',
        '+title=Adrastea (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51530',
        '+title=Adrastea (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51535',
        '+title=Adrastea (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51540',
        '+title=Adrastea (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51545',
        '+title=Adrastea (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51550',
        '+title=Adrastea (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51555',
        '+title=Adrastea (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51560',
        '+title=Adrastea (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51565',
        '+title=Adrastea (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51570',
        '+title=Adrastea (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51575',
        '+title=Adrastea (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51580',
        '+title=Adrastea (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51585',
        '+title=Adrastea (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51590',
        '+title=Adrastea (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=8200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51600',
        '+title=Metis (2015) - Sphere / Ocentric +proj=longlat +R=21500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:51610',
        '+title=Metis (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51615',
        '+title=Metis (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51620',
        '+title=Metis (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51625',
        '+title=Metis (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51630',
        '+title=Metis (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51635',
        '+title=Metis (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51640',
        '+title=Metis (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51645',
        '+title=Metis (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51650',
        '+title=Metis (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51655',
        '+title=Metis (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51660',
        '+title=Metis (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51665',
        '+title=Metis (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51670',
        '+title=Metis (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51675',
        '+title=Metis (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51680',
        '+title=Metis (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51685',
        '+title=Metis (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:51690',
        '+title=Metis (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59900',
        '+title=Jupiter (2015) - Sphere / Ocentric +proj=longlat +R=71492000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:59901',
        '+title=Jupiter (2015) / Ographic +proj=longlat +a=71492000 +b=66854000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:59910',
        '+title=Jupiter (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59911',
        '+title=Jupiter (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59912',
        '+title=Jupiter (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59915',
        '+title=Jupiter (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59916',
        '+title=Jupiter (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59917',
        '+title=Jupiter (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59920',
        '+title=Jupiter (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59921',
        '+title=Jupiter (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59922',
        '+title=Jupiter (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59925',
        '+title=Jupiter (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59926',
        '+title=Jupiter (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59927',
        '+title=Jupiter (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59930',
        '+title=Jupiter (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59931',
        '+title=Jupiter (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59932',
        '+title=Jupiter (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59935',
        '+title=Jupiter (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59936',
        '+title=Jupiter (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59937',
        '+title=Jupiter (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59940',
        '+title=Jupiter (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59941',
        '+title=Jupiter (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59942',
        '+title=Jupiter (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59945',
        '+title=Jupiter (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59946',
        '+title=Jupiter (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59947',
        '+title=Jupiter (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59950',
        '+title=Jupiter (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59951',
        '+title=Jupiter (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59952',
        '+title=Jupiter (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59955',
        '+title=Jupiter (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59956',
        '+title=Jupiter (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59957',
        '+title=Jupiter (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59960',
        '+title=Jupiter (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59961',
        '+title=Jupiter (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59962',
        '+title=Jupiter (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59965',
        '+title=Jupiter (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59966',
        '+title=Jupiter (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59967',
        '+title=Jupiter (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59970',
        '+title=Jupiter (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59971',
        '+title=Jupiter (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59972',
        '+title=Jupiter (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59975',
        '+title=Jupiter (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59976',
        '+title=Jupiter (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59977',
        '+title=Jupiter (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59980',
        '+title=Jupiter (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59981',
        '+title=Jupiter (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59982',
        '+title=Jupiter (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59985',
        '+title=Jupiter (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59986',
        '+title=Jupiter (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59987',
        '+title=Jupiter (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59990',
        '+title=Jupiter (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=71492000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59991',
        '+title=Jupiter (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:59992',
        '+title=Jupiter (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=71492000 +b=66854000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60100',
        '+title=Mimas (2015) - Sphere / Ocentric +proj=longlat +R=198200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60110',
        '+title=Mimas (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60115',
        '+title=Mimas (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60120',
        '+title=Mimas (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60125',
        '+title=Mimas (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60130',
        '+title=Mimas (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60135',
        '+title=Mimas (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60140',
        '+title=Mimas (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60145',
        '+title=Mimas (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60150',
        '+title=Mimas (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60155',
        '+title=Mimas (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60160',
        '+title=Mimas (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60165',
        '+title=Mimas (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60170',
        '+title=Mimas (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60175',
        '+title=Mimas (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60180',
        '+title=Mimas (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60185',
        '+title=Mimas (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60190',
        '+title=Mimas (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=198200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60200',
        '+title=Enceladus (2015) - Sphere / Ocentric +proj=longlat +R=252100 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60210',
        '+title=Enceladus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60215',
        '+title=Enceladus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60220',
        '+title=Enceladus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60225',
        '+title=Enceladus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60230',
        '+title=Enceladus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60235',
        '+title=Enceladus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60240',
        '+title=Enceladus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60245',
        '+title=Enceladus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60250',
        '+title=Enceladus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60255',
        '+title=Enceladus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60260',
        '+title=Enceladus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60265',
        '+title=Enceladus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60270',
        '+title=Enceladus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60275',
        '+title=Enceladus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60280',
        '+title=Enceladus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60285',
        '+title=Enceladus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60290',
        '+title=Enceladus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=252100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60300',
        '+title=Tethys (2015) - Sphere / Ocentric +proj=longlat +R=531000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60310',
        '+title=Tethys (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60315',
        '+title=Tethys (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60320',
        '+title=Tethys (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60325',
        '+title=Tethys (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60330',
        '+title=Tethys (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60335',
        '+title=Tethys (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60340',
        '+title=Tethys (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60345',
        '+title=Tethys (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60350',
        '+title=Tethys (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60355',
        '+title=Tethys (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60360',
        '+title=Tethys (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60365',
        '+title=Tethys (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60370',
        '+title=Tethys (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60375',
        '+title=Tethys (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60380',
        '+title=Tethys (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60385',
        '+title=Tethys (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60390',
        '+title=Tethys (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=531000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60400',
        '+title=Dione (2015) - Sphere / Ocentric +proj=longlat +R=561400 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60410',
        '+title=Dione (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60415',
        '+title=Dione (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60420',
        '+title=Dione (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60425',
        '+title=Dione (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60430',
        '+title=Dione (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60435',
        '+title=Dione (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60440',
        '+title=Dione (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60445',
        '+title=Dione (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60450',
        '+title=Dione (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60455',
        '+title=Dione (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60460',
        '+title=Dione (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60465',
        '+title=Dione (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60470',
        '+title=Dione (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60475',
        '+title=Dione (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60480',
        '+title=Dione (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60485',
        '+title=Dione (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60490',
        '+title=Dione (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=561400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60500',
        '+title=Rhea (2015) - Sphere / Ocentric +proj=longlat +R=763500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60510',
        '+title=Rhea (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60515',
        '+title=Rhea (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60520',
        '+title=Rhea (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60525',
        '+title=Rhea (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60530',
        '+title=Rhea (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60535',
        '+title=Rhea (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60540',
        '+title=Rhea (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60545',
        '+title=Rhea (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60550',
        '+title=Rhea (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60555',
        '+title=Rhea (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60560',
        '+title=Rhea (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60565',
        '+title=Rhea (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60570',
        '+title=Rhea (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60575',
        '+title=Rhea (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60580',
        '+title=Rhea (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60585',
        '+title=Rhea (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60590',
        '+title=Rhea (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=763500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60600',
        '+title=Titan (2015) - Sphere / Ocentric +proj=longlat +R=2575000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60610',
        '+title=Titan (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60615',
        '+title=Titan (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60620',
        '+title=Titan (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60625',
        '+title=Titan (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60630',
        '+title=Titan (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60635',
        '+title=Titan (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60640',
        '+title=Titan (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60645',
        '+title=Titan (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60650',
        '+title=Titan (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60655',
        '+title=Titan (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60660',
        '+title=Titan (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60665',
        '+title=Titan (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60670',
        '+title=Titan (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60675',
        '+title=Titan (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60680',
        '+title=Titan (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60685',
        '+title=Titan (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60690',
        '+title=Titan (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2575000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60700',
        '+title=Hyperion (2015) - Sphere / Ocentric +proj=longlat +R=135000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60710',
        '+title=Hyperion (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60715',
        '+title=Hyperion (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60720',
        '+title=Hyperion (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60725',
        '+title=Hyperion (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60730',
        '+title=Hyperion (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60735',
        '+title=Hyperion (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60740',
        '+title=Hyperion (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60745',
        '+title=Hyperion (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60750',
        '+title=Hyperion (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60755',
        '+title=Hyperion (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60760',
        '+title=Hyperion (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60765',
        '+title=Hyperion (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60770',
        '+title=Hyperion (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60775',
        '+title=Hyperion (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60780',
        '+title=Hyperion (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60785',
        '+title=Hyperion (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60790',
        '+title=Hyperion (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=135000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60800',
        '+title=Iapetus (2015) - Sphere / Ocentric +proj=longlat +R=745700 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60801',
        '+title=Iapetus (2015) / Ographic +proj=longlat +a=745700 +b=712100 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60810',
        '+title=Iapetus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60811',
        '+title=Iapetus (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60812',
        '+title=Iapetus (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60815',
        '+title=Iapetus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60816',
        '+title=Iapetus (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60817',
        '+title=Iapetus (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60820',
        '+title=Iapetus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60821',
        '+title=Iapetus (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60822',
        '+title=Iapetus (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60825',
        '+title=Iapetus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60826',
        '+title=Iapetus (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60827',
        '+title=Iapetus (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60830',
        '+title=Iapetus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60831',
        '+title=Iapetus (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60832',
        '+title=Iapetus (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60835',
        '+title=Iapetus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60836',
        '+title=Iapetus (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60837',
        '+title=Iapetus (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60840',
        '+title=Iapetus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60841',
        '+title=Iapetus (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60842',
        '+title=Iapetus (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60845',
        '+title=Iapetus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60846',
        '+title=Iapetus (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60847',
        '+title=Iapetus (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60850',
        '+title=Iapetus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60851',
        '+title=Iapetus (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60852',
        '+title=Iapetus (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60855',
        '+title=Iapetus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60856',
        '+title=Iapetus (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60857',
        '+title=Iapetus (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60860',
        '+title=Iapetus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60861',
        '+title=Iapetus (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60862',
        '+title=Iapetus (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60865',
        '+title=Iapetus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60866',
        '+title=Iapetus (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60867',
        '+title=Iapetus (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60870',
        '+title=Iapetus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60871',
        '+title=Iapetus (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60872',
        '+title=Iapetus (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60875',
        '+title=Iapetus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60876',
        '+title=Iapetus (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60877',
        '+title=Iapetus (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60880',
        '+title=Iapetus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60881',
        '+title=Iapetus (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60882',
        '+title=Iapetus (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60885',
        '+title=Iapetus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60886',
        '+title=Iapetus (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60887',
        '+title=Iapetus (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60890',
        '+title=Iapetus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=745700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60891',
        '+title=Iapetus (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60892',
        '+title=Iapetus (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=745700 +b=712100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60900',
        '+title=Phoebe (2015) - Sphere / Ocentric +proj=longlat +R=106500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:60910',
        '+title=Phoebe (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60915',
        '+title=Phoebe (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60920',
        '+title=Phoebe (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60925',
        '+title=Phoebe (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60930',
        '+title=Phoebe (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60935',
        '+title=Phoebe (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60940',
        '+title=Phoebe (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60945',
        '+title=Phoebe (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60950',
        '+title=Phoebe (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60955',
        '+title=Phoebe (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60960',
        '+title=Phoebe (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60965',
        '+title=Phoebe (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60970',
        '+title=Phoebe (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60975',
        '+title=Phoebe (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60980',
        '+title=Phoebe (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60985',
        '+title=Phoebe (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:60990',
        '+title=Phoebe (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=106500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61000',
        '+title=Janus (2015) - Sphere / Ocentric +proj=longlat +R=89200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61010',
        '+title=Janus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61015',
        '+title=Janus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61020',
        '+title=Janus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61025',
        '+title=Janus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61030',
        '+title=Janus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61035',
        '+title=Janus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61040',
        '+title=Janus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61045',
        '+title=Janus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61050',
        '+title=Janus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61055',
        '+title=Janus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61060',
        '+title=Janus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61065',
        '+title=Janus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61070',
        '+title=Janus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61075',
        '+title=Janus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61080',
        '+title=Janus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61085',
        '+title=Janus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61090',
        '+title=Janus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=89200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61100',
        '+title=Epimetheus (2015) - Sphere / Ocentric +proj=longlat +R=58200 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61110',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61115',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61120',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61125',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61130',
        '+title=Epimetheus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61135',
        '+title=Epimetheus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61140',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61145',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61150',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61155',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61160',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61165',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61170',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61175',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61180',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61185',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61190',
        '+title=Epimetheus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=58200 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61200',
        '+title=Helene (2015) - Sphere / Ocentric +proj=longlat +R=18000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61210',
        '+title=Helene (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61215',
        '+title=Helene (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61220',
        '+title=Helene (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61225',
        '+title=Helene (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61230',
        '+title=Helene (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61235',
        '+title=Helene (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61240',
        '+title=Helene (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61245',
        '+title=Helene (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61250',
        '+title=Helene (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61255',
        '+title=Helene (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61260',
        '+title=Helene (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61265',
        '+title=Helene (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61270',
        '+title=Helene (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61275',
        '+title=Helene (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61280',
        '+title=Helene (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61285',
        '+title=Helene (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61290',
        '+title=Helene (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=18000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61300',
        '+title=Telesto (2015) - Sphere / Ocentric +proj=longlat +R=12400 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61310',
        '+title=Telesto (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61315',
        '+title=Telesto (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61320',
        '+title=Telesto (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61325',
        '+title=Telesto (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61330',
        '+title=Telesto (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61335',
        '+title=Telesto (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61340',
        '+title=Telesto (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61345',
        '+title=Telesto (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61350',
        '+title=Telesto (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61355',
        '+title=Telesto (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61360',
        '+title=Telesto (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61365',
        '+title=Telesto (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61370',
        '+title=Telesto (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61375',
        '+title=Telesto (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61380',
        '+title=Telesto (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61385',
        '+title=Telesto (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61390',
        '+title=Telesto (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=12400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61400',
        '+title=Calypso (2015) - Sphere / Ocentric +proj=longlat +R=9600 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61410',
        '+title=Calypso (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61415',
        '+title=Calypso (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61420',
        '+title=Calypso (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61425',
        '+title=Calypso (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61430',
        '+title=Calypso (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61435',
        '+title=Calypso (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61440',
        '+title=Calypso (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61445',
        '+title=Calypso (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61450',
        '+title=Calypso (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61455',
        '+title=Calypso (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61460',
        '+title=Calypso (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61465',
        '+title=Calypso (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61470',
        '+title=Calypso (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61475',
        '+title=Calypso (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61480',
        '+title=Calypso (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61485',
        '+title=Calypso (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61490',
        '+title=Calypso (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=9600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61500',
        '+title=Atlas (2015) - Sphere / Ocentric +proj=longlat +R=15100 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61510',
        '+title=Atlas (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61515',
        '+title=Atlas (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61520',
        '+title=Atlas (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61525',
        '+title=Atlas (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61530',
        '+title=Atlas (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61535',
        '+title=Atlas (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61540',
        '+title=Atlas (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61545',
        '+title=Atlas (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61550',
        '+title=Atlas (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61555',
        '+title=Atlas (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61560',
        '+title=Atlas (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61565',
        '+title=Atlas (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61570',
        '+title=Atlas (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61575',
        '+title=Atlas (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61580',
        '+title=Atlas (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61585',
        '+title=Atlas (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61590',
        '+title=Atlas (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61600',
        '+title=Prometheus (2015) - Sphere / Ocentric +proj=longlat +R=43100 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61610',
        '+title=Prometheus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61615',
        '+title=Prometheus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61620',
        '+title=Prometheus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61625',
        '+title=Prometheus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61630',
        '+title=Prometheus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61635',
        '+title=Prometheus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61640',
        '+title=Prometheus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61645',
        '+title=Prometheus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61650',
        '+title=Prometheus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61655',
        '+title=Prometheus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61660',
        '+title=Prometheus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61665',
        '+title=Prometheus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61670',
        '+title=Prometheus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61675',
        '+title=Prometheus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61680',
        '+title=Prometheus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61685',
        '+title=Prometheus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61690',
        '+title=Prometheus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=43100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61700',
        '+title=Pandora (2015) - Sphere / Ocentric +proj=longlat +R=40600 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61710',
        '+title=Pandora (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61715',
        '+title=Pandora (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61720',
        '+title=Pandora (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61725',
        '+title=Pandora (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61730',
        '+title=Pandora (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61735',
        '+title=Pandora (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61740',
        '+title=Pandora (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61745',
        '+title=Pandora (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61750',
        '+title=Pandora (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61755',
        '+title=Pandora (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61760',
        '+title=Pandora (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61765',
        '+title=Pandora (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61770',
        '+title=Pandora (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61775',
        '+title=Pandora (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61780',
        '+title=Pandora (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61785',
        '+title=Pandora (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61790',
        '+title=Pandora (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61800',
        '+title=Pan (2015) - Sphere / Ocentric +proj=longlat +R=14000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:61810',
        '+title=Pan (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61815',
        '+title=Pan (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61820',
        '+title=Pan (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61825',
        '+title=Pan (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61830',
        '+title=Pan (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61835',
        '+title=Pan (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61840',
        '+title=Pan (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61845',
        '+title=Pan (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61850',
        '+title=Pan (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61855',
        '+title=Pan (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61860',
        '+title=Pan (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61865',
        '+title=Pan (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61870',
        '+title=Pan (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61875',
        '+title=Pan (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61880',
        '+title=Pan (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61885',
        '+title=Pan (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:61890',
        '+title=Pan (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=14000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63200',
        '+title=Methone (2015) - Sphere / Ocentric +proj=longlat +R=1450 +no_defs +type=crs'
    ],
    [
        'IAU:2015:63210',
        '+title=Methone (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63215',
        '+title=Methone (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63220',
        '+title=Methone (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63225',
        '+title=Methone (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63230',
        '+title=Methone (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63235',
        '+title=Methone (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63240',
        '+title=Methone (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63245',
        '+title=Methone (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63250',
        '+title=Methone (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63255',
        '+title=Methone (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63260',
        '+title=Methone (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63265',
        '+title=Methone (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63270',
        '+title=Methone (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63275',
        '+title=Methone (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63280',
        '+title=Methone (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63285',
        '+title=Methone (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63290',
        '+title=Methone (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1450 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63300',
        '+title=Pallene (2015) - Sphere / Ocentric +proj=longlat +R=2230 +no_defs +type=crs'
    ],
    [
        'IAU:2015:63310',
        '+title=Pallene (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63315',
        '+title=Pallene (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63320',
        '+title=Pallene (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63325',
        '+title=Pallene (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63330',
        '+title=Pallene (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63335',
        '+title=Pallene (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63340',
        '+title=Pallene (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63345',
        '+title=Pallene (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63350',
        '+title=Pallene (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63355',
        '+title=Pallene (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63360',
        '+title=Pallene (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63365',
        '+title=Pallene (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63370',
        '+title=Pallene (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63375',
        '+title=Pallene (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63380',
        '+title=Pallene (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63385',
        '+title=Pallene (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63390',
        '+title=Pallene (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=2230 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63400',
        '+title=Polydeuces (2015) - Sphere / Ocentric +proj=longlat +R=1300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:63410',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63415',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63420',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63425',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63430',
        '+title=Polydeuces (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63435',
        '+title=Polydeuces (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63440',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63445',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63450',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63455',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63460',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63465',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63470',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63475',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63480',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63485',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63490',
        '+title=Polydeuces (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63500',
        '+title=Daphnis (2015) - Sphere / Ocentric +proj=longlat +R=3800 +no_defs +type=crs'
    ],
    [
        'IAU:2015:63510',
        '+title=Daphnis (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63515',
        '+title=Daphnis (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63520',
        '+title=Daphnis (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63525',
        '+title=Daphnis (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63530',
        '+title=Daphnis (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63535',
        '+title=Daphnis (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63540',
        '+title=Daphnis (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63545',
        '+title=Daphnis (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63550',
        '+title=Daphnis (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63555',
        '+title=Daphnis (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63560',
        '+title=Daphnis (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63565',
        '+title=Daphnis (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63570',
        '+title=Daphnis (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63575',
        '+title=Daphnis (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63580',
        '+title=Daphnis (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63585',
        '+title=Daphnis (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:63590',
        '+title=Daphnis (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64900',
        '+title=Anthe (2015) - Sphere / Ocentric +proj=longlat +R=500 +no_defs +type=crs'
    ],
    [
        'IAU:2015:64910',
        '+title=Anthe (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64915',
        '+title=Anthe (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64920',
        '+title=Anthe (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64925',
        '+title=Anthe (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64930',
        '+title=Anthe (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64935',
        '+title=Anthe (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64940',
        '+title=Anthe (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64945',
        '+title=Anthe (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64950',
        '+title=Anthe (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64955',
        '+title=Anthe (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64960',
        '+title=Anthe (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64965',
        '+title=Anthe (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64970',
        '+title=Anthe (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64975',
        '+title=Anthe (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64980',
        '+title=Anthe (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64985',
        '+title=Anthe (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:64990',
        '+title=Anthe (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=500 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65300',
        '+title=Aegaeon (2015) - Sphere / Ocentric +proj=longlat +R=330 +no_defs +type=crs'
    ],
    [
        'IAU:2015:65310',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65315',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65320',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65325',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65330',
        '+title=Aegaeon (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65335',
        '+title=Aegaeon (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65340',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65345',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65350',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65355',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65360',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65365',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65370',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65375',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65380',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65385',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:65390',
        '+title=Aegaeon (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=330 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69900',
        '+title=Saturn (2015) - Sphere / Ocentric +proj=longlat +R=60268000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:69901',
        '+title=Saturn (2015) / Ographic +proj=longlat +a=60268000 +b=54364000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:69910',
        '+title=Saturn (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69911',
        '+title=Saturn (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69912',
        '+title=Saturn (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69915',
        '+title=Saturn (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69916',
        '+title=Saturn (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69917',
        '+title=Saturn (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69920',
        '+title=Saturn (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69921',
        '+title=Saturn (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69922',
        '+title=Saturn (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69925',
        '+title=Saturn (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69926',
        '+title=Saturn (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69927',
        '+title=Saturn (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69930',
        '+title=Saturn (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69931',
        '+title=Saturn (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69932',
        '+title=Saturn (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69935',
        '+title=Saturn (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69936',
        '+title=Saturn (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69937',
        '+title=Saturn (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69940',
        '+title=Saturn (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69941',
        '+title=Saturn (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69942',
        '+title=Saturn (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69945',
        '+title=Saturn (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69946',
        '+title=Saturn (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69947',
        '+title=Saturn (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69950',
        '+title=Saturn (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69951',
        '+title=Saturn (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69952',
        '+title=Saturn (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69955',
        '+title=Saturn (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69956',
        '+title=Saturn (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69957',
        '+title=Saturn (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69960',
        '+title=Saturn (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69961',
        '+title=Saturn (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69962',
        '+title=Saturn (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69965',
        '+title=Saturn (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69966',
        '+title=Saturn (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69967',
        '+title=Saturn (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69970',
        '+title=Saturn (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69971',
        '+title=Saturn (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69972',
        '+title=Saturn (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69975',
        '+title=Saturn (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69976',
        '+title=Saturn (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69977',
        '+title=Saturn (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69980',
        '+title=Saturn (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69981',
        '+title=Saturn (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69982',
        '+title=Saturn (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69985',
        '+title=Saturn (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69986',
        '+title=Saturn (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69987',
        '+title=Saturn (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69990',
        '+title=Saturn (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=60268000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69991',
        '+title=Saturn (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:69992',
        '+title=Saturn (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=60268000 +b=54364000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70100',
        '+title=Ariel (2015) - Sphere / Ocentric +proj=longlat +R=578900 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70110',
        '+title=Ariel (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70115',
        '+title=Ariel (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70120',
        '+title=Ariel (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70125',
        '+title=Ariel (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70130',
        '+title=Ariel (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70135',
        '+title=Ariel (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70140',
        '+title=Ariel (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70145',
        '+title=Ariel (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70150',
        '+title=Ariel (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70155',
        '+title=Ariel (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70160',
        '+title=Ariel (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70165',
        '+title=Ariel (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70170',
        '+title=Ariel (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70175',
        '+title=Ariel (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70180',
        '+title=Ariel (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70185',
        '+title=Ariel (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70190',
        '+title=Ariel (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=578900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70200',
        '+title=Umbriel (2015) - Sphere / Ocentric +proj=longlat +R=584700 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70210',
        '+title=Umbriel (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70215',
        '+title=Umbriel (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70220',
        '+title=Umbriel (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70225',
        '+title=Umbriel (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70230',
        '+title=Umbriel (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70235',
        '+title=Umbriel (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70240',
        '+title=Umbriel (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70245',
        '+title=Umbriel (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70250',
        '+title=Umbriel (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70255',
        '+title=Umbriel (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70260',
        '+title=Umbriel (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70265',
        '+title=Umbriel (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70270',
        '+title=Umbriel (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70275',
        '+title=Umbriel (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70280',
        '+title=Umbriel (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70285',
        '+title=Umbriel (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70290',
        '+title=Umbriel (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=584700 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70300',
        '+title=Titania (2015) - Sphere / Ocentric +proj=longlat +R=788900 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70310',
        '+title=Titania (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70315',
        '+title=Titania (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70320',
        '+title=Titania (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70325',
        '+title=Titania (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70330',
        '+title=Titania (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70335',
        '+title=Titania (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70340',
        '+title=Titania (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70345',
        '+title=Titania (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70350',
        '+title=Titania (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70355',
        '+title=Titania (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70360',
        '+title=Titania (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70365',
        '+title=Titania (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70370',
        '+title=Titania (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70375',
        '+title=Titania (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70380',
        '+title=Titania (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70385',
        '+title=Titania (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70390',
        '+title=Titania (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=788900 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70400',
        '+title=Oberon (2015) - Sphere / Ocentric +proj=longlat +R=761400 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70410',
        '+title=Oberon (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70415',
        '+title=Oberon (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70420',
        '+title=Oberon (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70425',
        '+title=Oberon (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70430',
        '+title=Oberon (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70435',
        '+title=Oberon (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70440',
        '+title=Oberon (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70445',
        '+title=Oberon (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70450',
        '+title=Oberon (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70455',
        '+title=Oberon (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70460',
        '+title=Oberon (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70465',
        '+title=Oberon (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70470',
        '+title=Oberon (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70475',
        '+title=Oberon (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70480',
        '+title=Oberon (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70485',
        '+title=Oberon (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70490',
        '+title=Oberon (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=761400 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70500',
        '+title=Miranda (2015) - Sphere / Ocentric +proj=longlat +R=235800 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70510',
        '+title=Miranda (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70515',
        '+title=Miranda (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70520',
        '+title=Miranda (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70525',
        '+title=Miranda (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70530',
        '+title=Miranda (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70535',
        '+title=Miranda (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70540',
        '+title=Miranda (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70545',
        '+title=Miranda (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70550',
        '+title=Miranda (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70555',
        '+title=Miranda (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70560',
        '+title=Miranda (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70565',
        '+title=Miranda (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70570',
        '+title=Miranda (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70575',
        '+title=Miranda (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70580',
        '+title=Miranda (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70585',
        '+title=Miranda (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70590',
        '+title=Miranda (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=235800 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70600',
        '+title=Cordelia (2015) - Sphere / Ocentric +proj=longlat +R=13000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70610',
        '+title=Cordelia (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70615',
        '+title=Cordelia (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70620',
        '+title=Cordelia (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70625',
        '+title=Cordelia (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70630',
        '+title=Cordelia (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70635',
        '+title=Cordelia (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70640',
        '+title=Cordelia (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70645',
        '+title=Cordelia (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70650',
        '+title=Cordelia (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70655',
        '+title=Cordelia (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70660',
        '+title=Cordelia (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70665',
        '+title=Cordelia (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70670',
        '+title=Cordelia (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70675',
        '+title=Cordelia (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70680',
        '+title=Cordelia (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70685',
        '+title=Cordelia (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70690',
        '+title=Cordelia (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=13000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70700',
        '+title=Ophelia (2015) - Sphere / Ocentric +proj=longlat +R=15000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70710',
        '+title=Ophelia (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70715',
        '+title=Ophelia (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70720',
        '+title=Ophelia (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70725',
        '+title=Ophelia (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70730',
        '+title=Ophelia (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70735',
        '+title=Ophelia (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70740',
        '+title=Ophelia (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70745',
        '+title=Ophelia (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70750',
        '+title=Ophelia (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70755',
        '+title=Ophelia (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70760',
        '+title=Ophelia (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70765',
        '+title=Ophelia (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70770',
        '+title=Ophelia (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70775',
        '+title=Ophelia (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70780',
        '+title=Ophelia (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70785',
        '+title=Ophelia (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70790',
        '+title=Ophelia (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=15000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70800',
        '+title=Bianca (2015) - Sphere / Ocentric +proj=longlat +R=21000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70810',
        '+title=Bianca (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70815',
        '+title=Bianca (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70820',
        '+title=Bianca (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70825',
        '+title=Bianca (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70830',
        '+title=Bianca (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70835',
        '+title=Bianca (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70840',
        '+title=Bianca (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70845',
        '+title=Bianca (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70850',
        '+title=Bianca (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70855',
        '+title=Bianca (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70860',
        '+title=Bianca (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70865',
        '+title=Bianca (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70870',
        '+title=Bianca (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70875',
        '+title=Bianca (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70880',
        '+title=Bianca (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70885',
        '+title=Bianca (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70890',
        '+title=Bianca (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=21000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70900',
        '+title=Cressida (2015) - Sphere / Ocentric +proj=longlat +R=31000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:70910',
        '+title=Cressida (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70915',
        '+title=Cressida (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70920',
        '+title=Cressida (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70925',
        '+title=Cressida (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70930',
        '+title=Cressida (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70935',
        '+title=Cressida (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70940',
        '+title=Cressida (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70945',
        '+title=Cressida (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70950',
        '+title=Cressida (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70955',
        '+title=Cressida (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70960',
        '+title=Cressida (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70965',
        '+title=Cressida (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70970',
        '+title=Cressida (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70975',
        '+title=Cressida (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70980',
        '+title=Cressida (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70985',
        '+title=Cressida (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:70990',
        '+title=Cressida (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=31000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71000',
        '+title=Desdemona (2015) - Sphere / Ocentric +proj=longlat +R=27000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71010',
        '+title=Desdemona (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71015',
        '+title=Desdemona (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71020',
        '+title=Desdemona (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71025',
        '+title=Desdemona (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71030',
        '+title=Desdemona (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71035',
        '+title=Desdemona (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71040',
        '+title=Desdemona (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71045',
        '+title=Desdemona (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71050',
        '+title=Desdemona (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71055',
        '+title=Desdemona (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71060',
        '+title=Desdemona (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71065',
        '+title=Desdemona (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71070',
        '+title=Desdemona (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71075',
        '+title=Desdemona (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71080',
        '+title=Desdemona (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71085',
        '+title=Desdemona (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71090',
        '+title=Desdemona (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71100',
        '+title=Juliet (2015) - Sphere / Ocentric +proj=longlat +R=42000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71110',
        '+title=Juliet (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71115',
        '+title=Juliet (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71120',
        '+title=Juliet (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71125',
        '+title=Juliet (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71130',
        '+title=Juliet (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71135',
        '+title=Juliet (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71140',
        '+title=Juliet (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71145',
        '+title=Juliet (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71150',
        '+title=Juliet (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71155',
        '+title=Juliet (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71160',
        '+title=Juliet (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71165',
        '+title=Juliet (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71170',
        '+title=Juliet (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71175',
        '+title=Juliet (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71180',
        '+title=Juliet (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71185',
        '+title=Juliet (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71190',
        '+title=Juliet (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=42000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71200',
        '+title=Portia (2015) - Sphere / Ocentric +proj=longlat +R=54000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71210',
        '+title=Portia (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71215',
        '+title=Portia (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71220',
        '+title=Portia (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71225',
        '+title=Portia (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71230',
        '+title=Portia (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71235',
        '+title=Portia (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71240',
        '+title=Portia (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71245',
        '+title=Portia (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71250',
        '+title=Portia (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71255',
        '+title=Portia (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71260',
        '+title=Portia (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71265',
        '+title=Portia (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71270',
        '+title=Portia (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71275',
        '+title=Portia (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71280',
        '+title=Portia (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71285',
        '+title=Portia (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71290',
        '+title=Portia (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=54000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71300',
        '+title=Rosalind (2015) - Sphere / Ocentric +proj=longlat +R=27000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71310',
        '+title=Rosalind (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71315',
        '+title=Rosalind (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71320',
        '+title=Rosalind (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71325',
        '+title=Rosalind (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71330',
        '+title=Rosalind (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71335',
        '+title=Rosalind (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71340',
        '+title=Rosalind (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71345',
        '+title=Rosalind (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71350',
        '+title=Rosalind (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71355',
        '+title=Rosalind (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71360',
        '+title=Rosalind (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71365',
        '+title=Rosalind (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71370',
        '+title=Rosalind (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71375',
        '+title=Rosalind (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71380',
        '+title=Rosalind (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71385',
        '+title=Rosalind (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71390',
        '+title=Rosalind (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=27000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71400',
        '+title=Belinda (2015) - Sphere / Ocentric +proj=longlat +R=33000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71410',
        '+title=Belinda (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71415',
        '+title=Belinda (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71420',
        '+title=Belinda (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71425',
        '+title=Belinda (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71430',
        '+title=Belinda (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71435',
        '+title=Belinda (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71440',
        '+title=Belinda (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71445',
        '+title=Belinda (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71450',
        '+title=Belinda (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71455',
        '+title=Belinda (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71460',
        '+title=Belinda (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71465',
        '+title=Belinda (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71470',
        '+title=Belinda (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71475',
        '+title=Belinda (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71480',
        '+title=Belinda (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71485',
        '+title=Belinda (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71490',
        '+title=Belinda (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=33000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71500',
        '+title=Puck (2015) - Sphere / Ocentric +proj=longlat +R=77000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:71510',
        '+title=Puck (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71515',
        '+title=Puck (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71520',
        '+title=Puck (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71525',
        '+title=Puck (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71530',
        '+title=Puck (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71535',
        '+title=Puck (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71540',
        '+title=Puck (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71545',
        '+title=Puck (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71550',
        '+title=Puck (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71555',
        '+title=Puck (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71560',
        '+title=Puck (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71565',
        '+title=Puck (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71570',
        '+title=Puck (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71575',
        '+title=Puck (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71580',
        '+title=Puck (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71585',
        '+title=Puck (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:71590',
        '+title=Puck (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=77000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79900',
        '+title=Uranus (2015) - Sphere / Ocentric +proj=longlat +R=25559000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:79901',
        '+title=Uranus (2015) / Ographic +proj=longlat +a=25559000 +b=24973000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:79910',
        '+title=Uranus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79911',
        '+title=Uranus (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79915',
        '+title=Uranus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79916',
        '+title=Uranus (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79920',
        '+title=Uranus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79921',
        '+title=Uranus (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79925',
        '+title=Uranus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79926',
        '+title=Uranus (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79930',
        '+title=Uranus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79931',
        '+title=Uranus (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79935',
        '+title=Uranus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79936',
        '+title=Uranus (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79940',
        '+title=Uranus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79941',
        '+title=Uranus (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79945',
        '+title=Uranus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79946',
        '+title=Uranus (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79950',
        '+title=Uranus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79951',
        '+title=Uranus (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79955',
        '+title=Uranus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79956',
        '+title=Uranus (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79960',
        '+title=Uranus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79961',
        '+title=Uranus (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79965',
        '+title=Uranus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79966',
        '+title=Uranus (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79970',
        '+title=Uranus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79971',
        '+title=Uranus (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79975',
        '+title=Uranus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79976',
        '+title=Uranus (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79980',
        '+title=Uranus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79981',
        '+title=Uranus (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79985',
        '+title=Uranus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79986',
        '+title=Uranus (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79990',
        '+title=Uranus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=25559000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:79991',
        '+title=Uranus (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=25559000 +b=24973000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80100',
        '+title=Triton (2015) - Sphere / Ocentric +proj=longlat +R=1352600 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80110',
        '+title=Triton (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80115',
        '+title=Triton (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80120',
        '+title=Triton (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80125',
        '+title=Triton (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80130',
        '+title=Triton (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80135',
        '+title=Triton (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80140',
        '+title=Triton (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80145',
        '+title=Triton (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80150',
        '+title=Triton (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80155',
        '+title=Triton (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80160',
        '+title=Triton (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80165',
        '+title=Triton (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80170',
        '+title=Triton (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80175',
        '+title=Triton (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80180',
        '+title=Triton (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80185',
        '+title=Triton (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80190',
        '+title=Triton (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1352600 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80200',
        '+title=Nereid (2015) - Sphere / Ocentric +proj=longlat +R=170000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80210',
        '+title=Nereid (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80215',
        '+title=Nereid (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80220',
        '+title=Nereid (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80225',
        '+title=Nereid (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80230',
        '+title=Nereid (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80235',
        '+title=Nereid (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80240',
        '+title=Nereid (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80245',
        '+title=Nereid (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80250',
        '+title=Nereid (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80255',
        '+title=Nereid (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80260',
        '+title=Nereid (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80265',
        '+title=Nereid (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80270',
        '+title=Nereid (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80275',
        '+title=Nereid (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80280',
        '+title=Nereid (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80285',
        '+title=Nereid (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80290',
        '+title=Nereid (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=170000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80300',
        '+title=Naiad (2015) - Sphere / Ocentric +proj=longlat +R=29000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80301',
        '+title=Naiad (2015) / Ographic +proj=longlat +R=29000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80310',
        '+title=Naiad (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80311',
        '+title=Naiad (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80315',
        '+title=Naiad (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80316',
        '+title=Naiad (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80320',
        '+title=Naiad (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80321',
        '+title=Naiad (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80325',
        '+title=Naiad (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80326',
        '+title=Naiad (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80330',
        '+title=Naiad (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80331',
        '+title=Naiad (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80335',
        '+title=Naiad (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80336',
        '+title=Naiad (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80340',
        '+title=Naiad (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80341',
        '+title=Naiad (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80345',
        '+title=Naiad (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80346',
        '+title=Naiad (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80350',
        '+title=Naiad (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80351',
        '+title=Naiad (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80355',
        '+title=Naiad (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80356',
        '+title=Naiad (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80360',
        '+title=Naiad (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80361',
        '+title=Naiad (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80365',
        '+title=Naiad (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80366',
        '+title=Naiad (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80370',
        '+title=Naiad (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80371',
        '+title=Naiad (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80375',
        '+title=Naiad (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80376',
        '+title=Naiad (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80380',
        '+title=Naiad (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80381',
        '+title=Naiad (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80385',
        '+title=Naiad (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80386',
        '+title=Naiad (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80390',
        '+title=Naiad (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80391',
        '+title=Naiad (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=29000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80400',
        '+title=Thalassa (2015) - Sphere / Ocentric +proj=longlat +R=40000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80401',
        '+title=Thalassa (2015) / Ographic +proj=longlat +R=40000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80410',
        '+title=Thalassa (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80411',
        '+title=Thalassa (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80415',
        '+title=Thalassa (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80416',
        '+title=Thalassa (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80420',
        '+title=Thalassa (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80421',
        '+title=Thalassa (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80425',
        '+title=Thalassa (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80426',
        '+title=Thalassa (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80430',
        '+title=Thalassa (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80431',
        '+title=Thalassa (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80435',
        '+title=Thalassa (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80436',
        '+title=Thalassa (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80440',
        '+title=Thalassa (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80441',
        '+title=Thalassa (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80445',
        '+title=Thalassa (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80446',
        '+title=Thalassa (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80450',
        '+title=Thalassa (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80451',
        '+title=Thalassa (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80455',
        '+title=Thalassa (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80456',
        '+title=Thalassa (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80460',
        '+title=Thalassa (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80461',
        '+title=Thalassa (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80465',
        '+title=Thalassa (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80466',
        '+title=Thalassa (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80470',
        '+title=Thalassa (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80471',
        '+title=Thalassa (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80475',
        '+title=Thalassa (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80476',
        '+title=Thalassa (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80480',
        '+title=Thalassa (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80481',
        '+title=Thalassa (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80485',
        '+title=Thalassa (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80486',
        '+title=Thalassa (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80490',
        '+title=Thalassa (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80491',
        '+title=Thalassa (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=40000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80500',
        '+title=Despina (2015) - Sphere / Ocentric +proj=longlat +R=74000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80501',
        '+title=Despina (2015) / Ographic +proj=longlat +R=74000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80510',
        '+title=Despina (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80511',
        '+title=Despina (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80515',
        '+title=Despina (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80516',
        '+title=Despina (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80520',
        '+title=Despina (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80521',
        '+title=Despina (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80525',
        '+title=Despina (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80526',
        '+title=Despina (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80530',
        '+title=Despina (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80531',
        '+title=Despina (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80535',
        '+title=Despina (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80536',
        '+title=Despina (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80540',
        '+title=Despina (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80541',
        '+title=Despina (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80545',
        '+title=Despina (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80546',
        '+title=Despina (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80550',
        '+title=Despina (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80551',
        '+title=Despina (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80555',
        '+title=Despina (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80556',
        '+title=Despina (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80560',
        '+title=Despina (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80561',
        '+title=Despina (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80565',
        '+title=Despina (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80566',
        '+title=Despina (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80570',
        '+title=Despina (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80571',
        '+title=Despina (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80575',
        '+title=Despina (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80576',
        '+title=Despina (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80580',
        '+title=Despina (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80581',
        '+title=Despina (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80585',
        '+title=Despina (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80586',
        '+title=Despina (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80590',
        '+title=Despina (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80591',
        '+title=Despina (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=74000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80600',
        '+title=Galatea (2015) - Sphere / Ocentric +proj=longlat +R=79000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80601',
        '+title=Galatea (2015) / Ographic +proj=longlat +R=79000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80610',
        '+title=Galatea (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80611',
        '+title=Galatea (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80615',
        '+title=Galatea (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80616',
        '+title=Galatea (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80620',
        '+title=Galatea (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80621',
        '+title=Galatea (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80625',
        '+title=Galatea (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80626',
        '+title=Galatea (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80630',
        '+title=Galatea (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80631',
        '+title=Galatea (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80635',
        '+title=Galatea (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80636',
        '+title=Galatea (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80640',
        '+title=Galatea (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80641',
        '+title=Galatea (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80645',
        '+title=Galatea (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80646',
        '+title=Galatea (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80650',
        '+title=Galatea (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80651',
        '+title=Galatea (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80655',
        '+title=Galatea (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80656',
        '+title=Galatea (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80660',
        '+title=Galatea (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80661',
        '+title=Galatea (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80665',
        '+title=Galatea (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80666',
        '+title=Galatea (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80670',
        '+title=Galatea (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80671',
        '+title=Galatea (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80675',
        '+title=Galatea (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80676',
        '+title=Galatea (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80680',
        '+title=Galatea (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80681',
        '+title=Galatea (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80685',
        '+title=Galatea (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80686',
        '+title=Galatea (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80690',
        '+title=Galatea (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80691',
        '+title=Galatea (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=79000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80700',
        '+title=Larissa (2015) - Sphere / Ocentric +proj=longlat +R=96000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80701',
        '+title=Larissa (2015) / Ographic +proj=longlat +a=96000 +b=89000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80710',
        '+title=Larissa (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80711',
        '+title=Larissa (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80712',
        '+title=Larissa (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80715',
        '+title=Larissa (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80716',
        '+title=Larissa (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80717',
        '+title=Larissa (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80720',
        '+title=Larissa (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80721',
        '+title=Larissa (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80722',
        '+title=Larissa (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80725',
        '+title=Larissa (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80726',
        '+title=Larissa (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80727',
        '+title=Larissa (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80730',
        '+title=Larissa (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80731',
        '+title=Larissa (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80732',
        '+title=Larissa (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80735',
        '+title=Larissa (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80736',
        '+title=Larissa (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80737',
        '+title=Larissa (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80740',
        '+title=Larissa (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80741',
        '+title=Larissa (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80742',
        '+title=Larissa (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80745',
        '+title=Larissa (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80746',
        '+title=Larissa (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80747',
        '+title=Larissa (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80750',
        '+title=Larissa (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80751',
        '+title=Larissa (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80752',
        '+title=Larissa (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80755',
        '+title=Larissa (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80756',
        '+title=Larissa (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80757',
        '+title=Larissa (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80760',
        '+title=Larissa (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80761',
        '+title=Larissa (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80762',
        '+title=Larissa (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80765',
        '+title=Larissa (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80766',
        '+title=Larissa (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80767',
        '+title=Larissa (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80770',
        '+title=Larissa (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80771',
        '+title=Larissa (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80772',
        '+title=Larissa (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80775',
        '+title=Larissa (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80776',
        '+title=Larissa (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80777',
        '+title=Larissa (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80780',
        '+title=Larissa (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80781',
        '+title=Larissa (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80782',
        '+title=Larissa (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80785',
        '+title=Larissa (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80786',
        '+title=Larissa (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80787',
        '+title=Larissa (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80790',
        '+title=Larissa (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=96000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80791',
        '+title=Larissa (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80792',
        '+title=Larissa (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=96000 +b=89000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80800',
        '+title=Proteus (2015) - Sphere / Ocentric +proj=longlat +R=208000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:80810',
        '+title=Proteus (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80815',
        '+title=Proteus (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80820',
        '+title=Proteus (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80825',
        '+title=Proteus (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80830',
        '+title=Proteus (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80835',
        '+title=Proteus (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80840',
        '+title=Proteus (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80845',
        '+title=Proteus (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80850',
        '+title=Proteus (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80855',
        '+title=Proteus (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80860',
        '+title=Proteus (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80865',
        '+title=Proteus (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80870',
        '+title=Proteus (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80875',
        '+title=Proteus (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80880',
        '+title=Proteus (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80885',
        '+title=Proteus (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:80890',
        '+title=Proteus (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=208000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89900',
        '+title=Neptune (2015) - Sphere / Ocentric +proj=longlat +R=24764000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:89901',
        '+title=Neptune (2015) / Ographic +proj=longlat +a=24764000 +b=24341000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:89910',
        '+title=Neptune (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89911',
        '+title=Neptune (2015) / Ographic / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89912',
        '+title=Neptune (2015) / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89915',
        '+title=Neptune (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89916',
        '+title=Neptune (2015) / Ographic / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89917',
        '+title=Neptune (2015) / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89920',
        '+title=Neptune (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89921',
        '+title=Neptune (2015) / Ographic / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89922',
        '+title=Neptune (2015) / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89925',
        '+title=Neptune (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89926',
        '+title=Neptune (2015) / Ographic / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89927',
        '+title=Neptune (2015) / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89930',
        '+title=Neptune (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89931',
        '+title=Neptune (2015) / Ographic / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89932',
        '+title=Neptune (2015) / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89935',
        '+title=Neptune (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89936',
        '+title=Neptune (2015) / Ographic / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89937',
        '+title=Neptune (2015) / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89940',
        '+title=Neptune (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89941',
        '+title=Neptune (2015) / Ographic / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89942',
        '+title=Neptune (2015) / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89945',
        '+title=Neptune (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89946',
        '+title=Neptune (2015) / Ographic / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89947',
        '+title=Neptune (2015) / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89950',
        '+title=Neptune (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89951',
        '+title=Neptune (2015) / Ographic / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89952',
        '+title=Neptune (2015) / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89955',
        '+title=Neptune (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89956',
        '+title=Neptune (2015) / Ographic / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89957',
        '+title=Neptune (2015) / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89960',
        '+title=Neptune (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89961',
        '+title=Neptune (2015) / Ographic / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89962',
        '+title=Neptune (2015) / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89965',
        '+title=Neptune (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89966',
        '+title=Neptune (2015) / Ographic / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89967',
        '+title=Neptune (2015) / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89970',
        '+title=Neptune (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89971',
        '+title=Neptune (2015) / Ographic / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89972',
        '+title=Neptune (2015) / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89975',
        '+title=Neptune (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89976',
        '+title=Neptune (2015) / Ographic / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89977',
        '+title=Neptune (2015) / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89980',
        '+title=Neptune (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89981',
        '+title=Neptune (2015) / Ographic / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89982',
        '+title=Neptune (2015) / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89985',
        '+title=Neptune (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89986',
        '+title=Neptune (2015) / Ographic / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89987',
        '+title=Neptune (2015) / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89990',
        '+title=Neptune (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=24764000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89991',
        '+title=Neptune (2015) / Ographic / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:89992',
        '+title=Neptune (2015) / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=24764000 +b=24341000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90100',
        '+title=Charon (2015) - Sphere / Ocentric +proj=longlat +R=606000 +no_defs +type=crs'
    ],
    [
        'IAU:2015:90110',
        '+title=Charon (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90115',
        '+title=Charon (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90120',
        '+title=Charon (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90125',
        '+title=Charon (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90130',
        '+title=Charon (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90135',
        '+title=Charon (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90140',
        '+title=Charon (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90145',
        '+title=Charon (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90150',
        '+title=Charon (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90155',
        '+title=Charon (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90160',
        '+title=Charon (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90165',
        '+title=Charon (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90170',
        '+title=Charon (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90175',
        '+title=Charon (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90180',
        '+title=Charon (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90185',
        '+title=Charon (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:90190',
        '+title=Charon (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=606000 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101000',
        '+title=Gaspra (2015) - Sphere / Ocentric +proj=longlat +R=6100 +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101010',
        '+title=Gaspra (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101015',
        '+title=Gaspra (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101020',
        '+title=Gaspra (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101025',
        '+title=Gaspra (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101030',
        '+title=Gaspra (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101035',
        '+title=Gaspra (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101040',
        '+title=Gaspra (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101045',
        '+title=Gaspra (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101050',
        '+title=Gaspra (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101055',
        '+title=Gaspra (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101060',
        '+title=Gaspra (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101065',
        '+title=Gaspra (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101070',
        '+title=Gaspra (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101075',
        '+title=Gaspra (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101080',
        '+title=Gaspra (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101085',
        '+title=Gaspra (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:951101090',
        '+title=Gaspra (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=6100 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99900',
        '+title=Pluto (2015) - Sphere / Ocentric +proj=longlat +R=1188300 +no_defs +type=crs'
    ],
    [
        'IAU:2015:99910',
        '+title=Pluto (2015) - Sphere / Ocentric / Equirectangular, clon = 0 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99915',
        '+title=Pluto (2015) - Sphere / Ocentric / Equirectangular, clon = 180 +proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99920',
        '+title=Pluto (2015) - Sphere / Ocentric / Sinusoidal, clon = 0 +proj=sinu +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99925',
        '+title=Pluto (2015) - Sphere / Ocentric / Sinusoidal, clon = 180 +proj=sinu +lon_0=180 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99930',
        '+title=Pluto (2015) - Sphere / Ocentric / North Polar +proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99935',
        '+title=Pluto (2015) - Sphere / Ocentric / South Polar +proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99940',
        '+title=Pluto (2015) - Sphere / Ocentric / Mollweide, clon = 0 +proj=moll +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99945',
        '+title=Pluto (2015) - Sphere / Ocentric / Mollweide, clon = 180 +proj=moll +lon_0=180 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99950',
        '+title=Pluto (2015) - Sphere / Ocentric / Robinson, clon = 0 +proj=robin +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99955',
        '+title=Pluto (2015) - Sphere / Ocentric / Robinson, clon = 180 +proj=robin +lon_0=180 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99960',
        '+title=Pluto (2015) - Sphere / Ocentric / Tranverse Mercator +proj=tmerc +lat_0=0 +lon_0=0 +k=1 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99965',
        '+title=Pluto (2015) - Sphere / Ocentric / Orthographic, clon = 0 +proj=ortho +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99970',
        '+title=Pluto (2015) - Sphere / Ocentric / Orthographic, clon = 180 +proj=ortho +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99975',
        '+title=Pluto (2015) - Sphere / Ocentric / Lambert Conic Conformal +proj=lcc +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99980',
        '+title=Pluto (2015) - Sphere / Ocentric / Lambert Azimuthal Equal Area +proj=laea +lat_0=40 +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99985',
        '+title=Pluto (2015) - Sphere / Ocentric / Albers Equal Area +proj=aea +lat_0=40 +lon_0=0 +lat_1=20 +lat_2=60 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    [
        'IAU:2015:99990',
        '+title=Pluto (2015) - Sphere / Ocentric / Mercator +proj=merc +R_C +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=1188300 +units=m +no_defs +type=crs'
    ],
    
]);

// Optionally, export the proj4 object or any other utility functions
module.exports = proj4;
