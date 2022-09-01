export function debounce(fn, delay) {
  var _delay = delay || 300,
      timer = null;

  return function () {
    var ctx = this,
        args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn.apply(ctx, args);
      clearTimeout(timer);
      timer = null;
    }, _delay);
  }
}

export function formatQueryData(data, prefix) {
  var str = prefix || '';
  for (var k in data) {
    str += k + '=' + '&';
  }
  return str.replace(/&$/, '');
}
