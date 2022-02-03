### Example
```typescript

/** Either uuid or identifier must be included */
const param = {
  /** optional */
  /** order unique id */
  uuid: '9ca023a5-851b-4fec-9f0a-48cd83c2eaae',
  /** optional */
  /** custome key */
  identifier: 'customer custom key',
};

// ES6
import * as ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getOrder(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getOrder(param).then(res => console.log(res));
```
