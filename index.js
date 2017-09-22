module.exports = function (json, map) {

  function resolve (path, rootObj, fullPath) {

    var obj = rootObj,
        fullPath = fullPath || path,
        a = path.split('.');

    for (var i = 0, n = a.length-1; i < n; ++i) {
      var k = a.shift();
      if (k == '[]' && obj.length)
        return obj.map(function (v) { resolve(a.join('.'), v, fullPath); });

      if (k in obj && obj[k]) {
        obj = obj[k];

      } else {

        return;

      }
    }

    var k = a.pop(),
        value = obj[k];

    if (map[fullPath])
      obj[k] = map[fullPath](value, fullPath, obj);
  }

  Object.keys(map).map(function (path) {
    resolve(path, json)
  })

  return json;
}