//require underscore and jquery
var linkage2level = function() {
    var option = _.template('<option value="<%=value%>"><%=text%></option>');
    return function select2(data, s1, s2) {
        var x1 = _.reduce(data, function(s, x, i, l) {
            return s + option(x);
        }, '');
        var $s2 = $(s2);
        $(s1).html(x1).on('change', function() {
            var city = data[$(this).val()].city;
            var x2 = _.reduce(city, function(s, x, i, l) {
                return s + option(x);
            }, '');
            $s2.html(x2)
        });
    }
}();