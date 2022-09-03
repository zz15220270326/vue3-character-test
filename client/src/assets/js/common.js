;(function (doc) {
  doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 3.75 + 'px';

  if ('addEventListener' in doc) {
    doc.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(doc.body);
    });
  }

  /** disable multi point */
  doc.ontouchstart = function (e) {
    if (e.touches.length > 1) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
  }

})(document);