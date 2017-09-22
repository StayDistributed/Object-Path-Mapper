module.exports = function (json, map) {

  function resolve (path, rootObj, originalPath) {
    var obj = rootObj,
        a = path.split('.');

    for (var i = 0, n = a.length-1; i < n; ++i) {
      var k = a.shift();
      if (k == '[]' && obj.length)
        return obj.map(function (v) { resolve(a.join('.'), v, originalPath || path); });

      if (k in obj) {
        obj = obj[k];

      } else {

        return;

      }
    }

    var k = a.pop(),
        term = obj[k];

    if (map[path])
      obj[k] = map[path](term, path, obj);
  }

  Object.keys(map).map(function (path) {
    resolve(path, json)
  })

  return json;
}