//require underscore and jquery
var select2 = function() {
    var option = _.template('<option value="<%=value%>"><%=text%></option>');

    return function select2(data, s1, s2, defaultValue, defaultValue2) {
        var x1 = _.reduce(data, function(s, x, i, l) {
            return s + option(x);
        }, '');
        var $s2 = $(s2);
        var $s1 = $(s1).html(x1).on('change', function() {
            var city = data[$(this).val()].city;
            var x2 = _.reduce(city, function(s, x, i, l) {
                return s + option(x);
            }, '');
            $s2.html(x2);
        }).val(defaultValue);
        var city = data[$s1.val()].city;
        var x2 = _.reduce(city, function(s, x, i, l) {
            return s + option(x);
        }, '');
        $s2.html(x2).val(defaultValue2 + '');
    }
}();