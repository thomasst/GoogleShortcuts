// note: key library was modified to enable capture in addEventListener

(function() {
    var idx = 0;
    var select = function(focus) {
        $('h3.r a').css('background-color', 'inherit');
        var link = $('h3.r:nth('+idx+') a');
        link.css('background-color', '#fcc');
        if (focus) {link.focus(); }
        return link;
    };
    key('return', function() {
        var link = select();
        location.href = link.attr('href');
    });

    var tmt = null;
    var node = null;

    $(function() {
        document.getElementById('main').addEventListener("DOMSubtreeModified", function () {
            var newNode = $('h3.r:nth(0) a');
            if (!node || (node.attr('href') != newNode.attr('href'))) {
                idx = 0;
                select();
                node = newNode;
            }
        });
    });

    key('j', function(ev) {
        if (idx < 9) {
            idx++;
            select(true);
        }
        ev.stopPropagation();
    });
    key('k', function(ev) {
        if (idx > 0) {
            idx--;
            select(true);
        }
        ev.stopPropagation();
    });
    key('/', function(ev) {
        $('#gbqfq').focus();
        ev.stopPropagation();
        ev.preventDefault();
    });
})();
