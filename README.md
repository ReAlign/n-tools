# n-tools
开发工具函数

## methods
| name | note | other |
| --- | --- | --- |
| typeof |  |  |
| compareObject | 复杂类型数据比较 |  |
| deepClone | 深拷贝 |  |
| extend |  |  |
| merge |  |  |
| arrayEquals | 数组比较 |  |
| keepDecimal |  |  |
| formatDigital |  |  |
| deepGet | 深获取 |  |

## Usage

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
