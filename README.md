# object-path-mapper
Javascript Object Mapper via path



```javascript

var pathMapper = require('object-path-mapper');

var json = {
      key: '653178653',
      first_name: 'Mark',
      last_name: 'Oliver',
      age: 30,
      children: [{
        name: 'Lucy'
      }, {
        name: 'George'
      }]
    };

var map = {
      "key": function (v) { return ('mapped-' + k); },
      "children.[].name": function (v) { return 'name ' + v }
    }


var dest = pathMapper(json, map);

// dest.key = 'mapped-653178653'
// dest.children[0].name = 'name Lucy'
// dest.children[1].name = 'name George'


```
