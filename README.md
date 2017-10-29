# n-tools
a util tool for dev

# Usage

```
    let _ = require( 'n-tools' );

    _.compareObject(x, y);
```

### deepGet

```
var obj = {
    a: [
        {
            b: {
                c: 3
            }
        }
    ],
    e: {
        f: [
            {
                g: 'alj'
            },
            {
                g: 'kakaka'
            }
        ]
    }
};

var result = '';

for(var kk = 0; kk < 3; kk++) {
	result = _.deepGet(obj, 'e.f[' + kk +'].g', '');
	console.log(result);
}

// 'alj'
// 'kakaka'
// ''
```