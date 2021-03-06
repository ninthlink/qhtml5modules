/*=========================================================================================
Author: Tou Lee
Created: 2/20/14
Last Updated: 2/24/14 - 10:06am
Version: 1.0.1

Changelog v1.0.0
    - Created the intial slider styles, and functionality

Changelog v1.0.1
    - Made the spin.min.js spinner options passable as a user defined plugin option.
=========================================================================================*/
if (typeof Object.create !== "function") {
    Object.create = function(e) {
        function t() {}
        t.prototype = e;
        return new t
    }
}(function(e) {
    var t = e({});
    e.each({
        on: "subscribe",
        trigger: "publish",
        off: "unsubscribe"
    }, function(n, r) {
        e[r] = function() {
            t[n].apply(t, arguments)
        }
    })
})(jQuery);
(function(e, t, n, r) {
    var i = {};
    var s = {
        init: function(t, n) {
            var r = this;
            r.elem = n;
            r.$elem = e(n);
            r.counter = 0;
            r.options = e.extend({}, e.fn.qualcommreveal.defaultsOptions, t);
            r.$targets = e(r.options.targets);
            r.total = r.$targets.length;
            r.createTrigger();
            r.createSpinner();
            r.setElemStyle();
            r.triggerAction()
        },
        createTrigger: function() {
            var t = this,
                n = '<div id="qreveal-trigger"><div id="qreveal-spinner"></div></div>';
            t.$elem.append(n);
            t.$trigger = e("#qreveal-trigger");
            t.$spinner = e("#qreveal-spinner")
        },
        createSpinner: function() {
            var e = this,
                t = e.$spinner[0];
            e.qspinner = (new Spinner(e.options.spinOptions)).spin(t)
        },
        setElemStyle: function() {
            var e = this;
            e.$elem.css({
                "margin-bottom": "100px",
                position: "relative"
            });
            e.$targets.css({
                display: "none"
            })
        },
        triggerAction: function() {
            var t = this;
            t.$trigger.on("inview", function(n, r, i, s) {
                if (s === "bottom" || s === "both") {
                    t.$trigger.css("visibility", "visible").animate({
                        opacity: 1
                    }, t.options.fadespeed);
                    setTimeout(function() {
                        var n = t.$targets.eq(t.counter);
                        e.publish("qualcommreveal/reveal-start", [n, t.counter]);
                        n.animate({
                            opacity: "show"
                        }, t.options.fadespeed);
                        // ML: added extra trigger for panels here
                        n.trigger('qualcommreveal/panel-reveal-start');
                        // ML: removed scrolljacking
                        // t.scrollTo(n);
                        t.$trigger.css("visibility", "hidden").animate({
                            opacity: 0
                        }, t.options.fadespeed, function() {
                            e.publish("qualcommreveal/reveal-finish", [n, t.counter - 1]);
                            n.trigger('qualcommreveal/panel-reveal-finish');
                        });
                        t.counter++;
                        t.checkIfLast()
                    }, t.options.waitTime)
                }
            })
        },
        scrollTo: function(n) {
            var r = this,
                i = e("html,body"),
                s = e(t).scrollTop() + r.options.offset;
            i.animate({
                scrollTop: s
            }, r.options.scrollspeed, r.options.easing)
        },
        checkIfLast: function() {
            var t = this;
            if (t.counter === t.total) {
                t.$trigger.hide();
                t.qspinner.stop();
                t.$elem.css("margin-bottom", 0);
                e.publish("qualcommreveal/last-target")
            }
        }
    };
    e.fn.qualcommreveal = function(t) {
        if (s[t]) {
            return s[t].apply(s, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return this.each(function() {
                var n = Object.create(s);
                n.init(t, this);
                e.data(this, "qualcommreveal", n)
            })
        } else {
            e.error('Method "' + t + '" does not exist in jQuery.qualcommreveal')
        }
    };
    e.fn.qualcommreveal.defaultsOptions = {
        targets: ".panel-snap",
        offset: 60,
        scrollspeed: 1e3,
        fadespeed: 800,
        easing: "swing",
        waitTime: 1e3,
        spinOptions: {
            lines: 9,
            length: 1,
            width: 6,
            radius: 15,
            corners: 1,
            rotate: 0,
            direction: 1,
            color: "#000",
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: true,
            className: "spinner",
            zIndex: 2e9,
            top: "auto",
            left: "auto"
        }
    }
})(jQuery, window, document)
