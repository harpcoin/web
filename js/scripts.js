! function (e) {
  e('.header-menu a[href="#"]').on("click", function (e) {
    e.preventDefault()
  }), e(".header-menu").menumaker({
    title: '<i class="fa fa-bars"></i>',
    format: "multitoggle"
  });
  e(".main-header");
  e(window).scrollTop() > 100 && e(".main-header").addClass("sticky fadeInDown"), e(window).on("scroll", function (t) {
      e(this).scrollTop() < 100 ? e(".main-header").removeClass("sticky fadeInDown") : e(".main-header").addClass("sticky fadeInDown")
    }), e("[data-bg-img]").css("background", function () {
      return "url(" + e(this).data("bg-img") + ") center center"
    }), e(".parsley-validate, .parsley-validate form").parsley(), e(".comment-content > a").on("click", function (t) {
      t.preventDefault();
      var a = e(".comment-form");
      a.length && (e("html, body").animate({
        scrollTop: a.offset().top - 120
      }, 500), a.find("textarea").focus())
    }),
    function () {
      e(window).width();
      e(".social-comment ul:last-child li:first-child").on("click", function () {
        e(this).parents("ul").toggleClass("transform")
      })
    }();
  var t = e(".back-to-top");
  if (t.length) {
    var a = function () {
      e(window).scrollTop() > 400 ? t.addClass("show") : t.removeClass("show")
    };
    a(), e(window).on("scroll", function () {
      a()
    }), t.on("click", function (t) {
      t.preventDefault(), e("html,body").animate({
        scrollTop: 0
      }, 100)
    })
  }

  function o() {
    e(".page-image").height(function () {
      return e(this).width()
    })
  }
  jQuery("img.svg").each(function () {
    var e = jQuery(this),
      t = e.attr("id"),
      a = e.attr("class"),
      o = e.attr("src");
    jQuery.get(o, function (o) {
      var n = jQuery(o).find("svg");
      void 0 !== t && (n = n.attr("id", t)), void 0 !== a && (n = n.attr("class", a + " replaced-svg")), !(n = n.removeAttr("xmlns:a")).attr("viewBox") && n.attr("height") && n.attr("width") && n.attr("viewBox", "0 0 " + n.attr("height") + " " + n.attr("width")), e.replaceWith(n)
    }, "xml")
  }), e(".contact-form").on("submit", "form", function (t) {
    t.preventDefault();
    var a = e(this);
    e.post(a.attr("action"), a.serialize(), function (t) {
      t = e.parseJSON(t), a.parent(".contact-page-form").find(".form-response").html("<span>" + t[1] + "</span>")
    })
  }), o(), e(window).resize(function () {
    o()
  }), e(window).on("load", function () {
    setTimeout(function () {
      e(".preLoader").fadeOut()
    }, 250)
  }), e(window).on("load", function () {
    e("[data-animate]").each(function () {
      var t = e(this),
        a = t.data("animate"),
        o = t.data("duration"),
        n = t.data("delay");
      o = void 0 === o ? "0.6" : o, n = void 0 === n ? ".1" : n, t.waypoint(function () {
        t.addClass("animated " + a).css({
          "animation-duration": o + "s",
          "-ms-animation-duration": o + "s",
          "animation-delay": n + "s",
          "-ms-animation-delay": n + "s",
          visibility: "visible"
        })
      }, {
        offset: "96%"
      })
    })
  }), 0 != e(".single--pricing-plan") && e(".single--pricing-plan").on("mouseenter", function () {
    e(this).addClass("active").parent().siblings().children().removeClass("active")
  }), e(".counter").counterUp({});
  var n = e('[data-trigger="parallax_layers"]');
  if (n.length && n.each(function () {
      new Parallax(e(this)[0], {
        selector: "[data-depth]"
      })
    }), e(".single-faq .faq-question").on("click", function (t) {
      e(this).parents(".single-faq").children(".collapse").hasClass("show") && (t.stopPropagation(), t.preventDefault())
    }), e("#google-map").length) {
    var i = e("#google-map"),
      r = new google.maps.LatLng(40.6785635, -73.9664109);
    i.length && google.maps.event.addDomListener(window, "load", function () {
      var e = {
          center: r,
          zoom: 11,
          scrollwheel: !1,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{
              color: "#f7f1df"
            }]
          }, {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{
              color: "#d0e3b4"
            }]
          }, {
            featureType: "landscape.natural.terrain",
            elementType: "geometry",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "poi.business",
            elementType: "all",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "poi.medical",
            elementType: "geometry",
            stylers: [{
              color: "#fbd3da"
            }]
          }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
              color: "#bde6ab"
            }]
          }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
              color: "#ffe15f"
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#efd151"
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{
              color: "#ffffff"
            }]
          }, {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{
              color: "black"
            }]
          }, {
            featureType: "transit.station.airport",
            elementType: "geometry.fill",
            stylers: [{
              color: "#cfb2db"
            }]
          }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#a2daf2"
            }]
          }]
        },
        t = new google.maps.Map(document.getElementById("google-map"), e);
      new google.maps.Marker({
        position: r,
        icon: "img/locator.png"
      }).setMap(t)
    })
  }
  e("[data-countdown]").each(function () {
    var t = e(this);
    t.countdown(t.data("countdown"), function (t) {
      e(this).html('<ul class="list-unstyled">' + t.strftime("<li><strong>%D</strong><span>D</span></li><li><strong>%H</strong><span>H</span></li><li><strong>%M</strong><span>M</span></li><li><strong>%S</strong><span>S</span></li>") + "</ul>")
    })
  }), e("[data-countdown2]").each(function () {
    var t = e(this);
    t.countdown(t.data("countdown2"), function (t) {
      e(this).html('<ul class="list-unstyled">' + t.strftime("<li><span>Day</span><strong>%D</strong></li><li><span>Hours</span><strong>%H</strong></li><li><span>Month</span><strong>%M</strong></li><li><span>Secs</span><strong>%S</strong></li>") + "</ul>")
    })
  }), e(".team-carousel").owlCarousel({
    loop: !0,
    margin: 30,
    nav: !1,
    dot: !1,
    autoWidth: !0,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplaySpeed: 4e3,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 3,
        center: !0
      },
      767: {
        items: 5,
        center: !0
      },
      1024: {
        items: 7,
        center: !0
      }
    }
  }), e(".price-carousel").owlCarousel({
    loop: !0,
    margin: 20,
    nav: !0,
    dots: !1,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      768: {
        items: 5
      },
      1e3: {
        items: 8
      },
      1200: {
        items: 10
      }
    }
  }), e(".testimonial-carousel").owlCarousel({
    loop: !0,
    margin: 60,
    stagePadding: 30,
    dots: !0,
    center: !0,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplaySpeed: 4e3,
    nav: !1,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      700: {
        items: 1
      },
      991: {
        items: 1
      },
      1e3: {
        items: 3
      }
    }
  }), e(".partner-carousel").owlCarousel({
    loop: !0,
    margin: 80,
    dots: !0,
    nav: !1,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      600: {
        items: 3
      },
      1e3: {
        items: 5
      }
    }
  }), e(".timeline-carousel2").owlCarousel({
    loop: !0,
    margin: 30,
    dots: !1,
    center: !0,
    nav: !1,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      600: {
        items: 2
      },
      1e3: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }), e(".timeline-carousel").owlCarousel({
    loop: !0,
    margin: 30,
    dots: !1,
    nav: !1,
    center: !0,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      600: {
        items: 5
      },
      1e3: {
        items: 7
      },
      1200: {
        items: 9
      }
    }
  }), e(".partner-carousel2").owlCarousel({
    loop: !0,
    margin: 80,
    dots: !0,
    nav: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplaySpeed: 4e3,
    center: !0,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      600: {
        items: 5
      },
      1e3: {
        items: 7
      }
    }
  }), e(".road-map-dot").on("mouseenter", function () {
    e(this).parent().children(".roadmap--hover-item").css({
      visibility: "visible",
      opacity: "1",
      "z-index": "10"
    }).parents(".owl-item").siblings().find(".roadmap--hover-item").css({
      visibility: "hidden",
      opacity: "0"
    })
  });
  var l = e('[data-popup="img"]');
  if (l.length && l.magnificPopup({
      type: "image"
    }), (l = e('[data-popup="video"]')).length && l.magnificPopup({
      type: "iframe"
    }), e("#token--pie-chart-dark").length) {
    var s = document.getElementById("token--pie-chart-dark"),
      c = echarts.init(s),
      m = null;
    (m = {
      backgroundColor: "transparent",
      title: {
        text: "",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      visualMap: {
        show: !1,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [{
        name: "token",
        type: "pie",
        radius: "90%",
        center: ["50%", "50%"],
        data: [{
          value: 350,
          name: "35"
        }, {
          value: 180,
          name: "18"
        }, {
          value: 220,
          name: "22"
        }, {
          value: 280,
          name: "28"
        }, {
          value: 380,
          name: "38"
        }, {
          value: 320,
          name: "32"
        }].sort(function (e, t) {
          return e.value - t.value
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
              color: "#53e1ff"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "#53e1ff"
            },
            smooth: .2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: "#127bee",
            shadowBlur: 200,
            shadowColor: "rgba(0,0,0,.2)"
          }
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (e) {
          return 200 * Math.random()
        }
      }]
    }) && "object" == typeof m && c.setOption(m, !1)
  }
  if (e("#token--pie-chart-light").length) {
    s = document.getElementById("token--pie-chart-light"), c = echarts.init(s), m = null;
    (m = {
      backgroundColor: "transparent",
      title: {
        text: "",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      visualMap: {
        show: !1,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [{
        name: "token",
        type: "pie",
        radius: "90%",
        center: ["50%", "50%"],
        data: [{
          value: 350,
          name: "35"
        }, {
          value: 180,
          name: "18"
        }, {
          value: 220,
          name: "22"
        }, {
          value: 280,
          name: "28"
        }, {
          value: 300,
          name: "30"
        }, {
          value: 320,
          name: "32"
        }].sort(function (e, t) {
          return e.value - t.value
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
              color: "#53e1ff"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "#53e1ff"
            },
            smooth: .2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: "#127bee",
            shadowBlur: 200,
            shadowColor: "rgba(255,255,255,.2)"
          }
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (e) {
          return 200 * Math.random()
        }
      }]
    }) && "object" == typeof m && c.setOption(m, !1)
  }
  if (e("#update-chart").length) {
    s = document.getElementById("update-chart"), c = echarts.init(s), m = null;
    for (var p = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], d = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220], u = [], f = 0; f < d.length; f++) u.push(500);
    m = {
      title: {
        text: "",
        subtext: ""
      },
      xAxis: {
        data: p,
        axisLabel: {
          inside: !0,
          textStyle: {
            color: "#fff"
          }
        },
        axisTick: {
          show: !1
        },
        axisLine: {
          show: !1
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: !1
        },
        axisTick: {
          show: !1
        },
        axisLabel: {
          textStyle: {
            color: "#999"
          }
        }
      },
      dataZoom: [{
        type: "inside"
      }],
      series: [{
        type: "bar",
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0.05)"
          }
        },
        barGap: "-100%",
        barCategoryGap: "40%",
        data: u,
        animation: !1
      }, {
        type: "bar",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#83bff6"
            }, {
              offset: .5,
              color: "#188df0"
            }, {
              offset: 1,
              color: "#188df0"
            }])
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#2378f7"
            }, {
              offset: .7,
              color: "#2378f7"
            }, {
              offset: 1,
              color: "#83bff6"
            }])
          }
        },
        data: d
      }]
    };
    c.on("click", function (e) {
      console.log(p[Math.max(e.dataIndex - 3, 0)]), c.dispatchAction({
        type: "dataZoom",
        startValue: p[Math.max(e.dataIndex - 3, 0)],
        endValue: p[Math.min(e.dataIndex + 3, d.length - 1)]
      })
    }), m && "object" == typeof m && c.setOption(m, !0)
  }
  e(".container-fluid").parent("section").find(".container-fluid").css({
    "padding-right": 0,
    "padding-left": 0,
    "margin-right": "auto",
    "margin-left": "auto",
    "overflow-x": "hidden"
  })
}(jQuery);