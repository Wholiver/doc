// Docsify Commento 插件配置
(function() {
  var a = window.Docsify,
      e = a.dom;
  a.plugins = [].concat(function() {
    return function(t, n) {
      var i = n.config.commento || {};
      t.afterEach(function(t) {
        return t + '<div id="commento"></div>'
      });
      t.doneEach(function() {
        var t = e.create('script');
        t.src = "https://commento.io/js/commento.js", e.appendTo(e.body, t);
      });
    };
  }, a.plugins || []);
}).call(this);