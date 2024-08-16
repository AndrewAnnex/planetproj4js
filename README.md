# PlanetProj4js

A library providing IAU:2015 coordinate reference systems to proj4js.

## Installation

```bash
npm install planet-proj4 proj4
```


## Tests

```bash
npm run test
```

## Build

```bash
npm run build
```

### Generating the codes

```python
import pyproj
bad_codes = []
for code in pyproj.database.get_codes(auth_name="IAU_2015", pj_type="CRS"):
    crs = pyproj.CRS(f'IAU_2015:{code}')
    try:
        projtext = crs.to_proj4()
        print('[')
        print(f"  'IAU:2015:{code}',")
        print(f"  '+title={crs.name} {projtext }'")
        print('],')
    except pyproj.exceptions.CRSError as e:
        bad_codes.append(code)
    finally:
        pass
#############################################
for c in bad_codes:
    print(c)
pass
```

currently codes ending with "02" are not included
