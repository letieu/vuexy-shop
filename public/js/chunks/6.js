(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fashionComponents_HotProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fashionComponents/HotProduct */ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HotProduct: _fashionComponents_HotProduct__WEBPACK_IMPORTED_MODULE_0__["default"],
    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: {
    products: function products() {
      return this.$store.state.product.all;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('product/fetchProducts', {
      page: 1
    });
  },
  methods: {
    infiniteHandler: function infiniteHandler($state) {
      var filter = this.$store.state.product.filter;

      var newFilter = _objectSpread({}, filter);

      newFilter.page++;
      this.$store.dispatch('product/fetchProducts', newFilter).then(function (res) {
        // if () {
        //     $state.loaded();
        // } else {
        //     $state.complete();
        // }
        if (res.current_page >= res.last_page) $state.complete();
        $state.loaded();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      items: ['/images/banner/f1.jpg', '/images/banner/f2.jpg', '/images/banner/f3.jpg', '/images/banner/f4.jpg']
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var swiperTop = _this.$refs.swiperTop.swiper;
      var swiperThumbs = _this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demo-basic-card .overlay-card .vx-card__collapsible-content {\n  max-height: 485px;\n}\n#demo-basic-card .chat-card-log {\n  height: 360px;\n}\n[dir] #demo-basic-card .chat-card-log .chat-sent-msg {\n  background-color: #f2f4f7 !important;\n}\n#demo-basic-card .card-video .video-js {\n  height: 370px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .swiper-container[data-v-33c382a4] {\n  background-color: #000;\n}\n.gallery-top[data-v-33c382a4] {\n  height: 80% !important;\n  width: 100%;\n}\n.gallery-thumbs[data-v-33c382a4] {\n  height: 20% !important;\n  box-sizing: border-box;\n}\n[dir] .gallery-thumbs[data-v-33c382a4] {\n  padding: 10px 0;\n}\n.gallery-thumbs .swiper-slide[data-v-33c382a4] {\n  width: 25%;\n  height: 100%;\n  opacity: 0.4;\n}\n.gallery-thumbs .swiper-slide-active[data-v-33c382a4] {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c("hot-product"),
      _vm._v(" "),
      _c("div", { staticClass: "mt-20", attrs: { id: "demo-basic-card" } }, [
        _c(
          "div",
          { staticClass: "vx-row" },
          [
            _vm._l(_vm.products, function(product) {
              return _c(
                "div",
                {
                  key: product.id,
                  staticClass: "vx-col w-full sm:w-1/2 lg:w-1/4 mb-base"
                },
                [
                  _c(
                    "vx-card",
                    [
                      _c("img", {
                        staticClass: "responsive rounded-lg",
                        attrs: {
                          src: "/images/" + product.image,
                          alt: "content-img"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-6" }, [
                        _c(
                          "h5",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/product/" + product.id } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(product.name) +
                                    "\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "text-grey",
                            staticStyle: {
                              display: "inline-block",
                              width: "180px",
                              "white-space": "nowrap",
                              overflow: "hidden !important",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(product.description)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex justify-between flex-wrap" },
                        [
                          _c("span", [
                            _c("p", { staticClass: "text-xl" }, [
                              _vm._v(_vm._s(product.price) + "đ")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            [
                              _c("vs-button", {
                                attrs: {
                                  color: "primary",
                                  type: "filled",
                                  "icon-pack": "feather",
                                  icon: "icon-archive"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.$store.dispatch(
                                      "cart/addToCart",
                                      product
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c("infinite-loading", { on: { infinite: _vm.infiniteHandler } })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { height: "500px" } },
    [
      _c(
        "swiper",
        {
          ref: "swiperTop",
          staticClass: "gallery-top",
          attrs: {
            options: _vm.swiperOptionTop,
            dir: _vm.$vs.rtl ? "rtl" : "ltr"
          }
        },
        [
          _vm._l(_vm.items, function(item, i) {
            return _c("swiper-slide", { key: i }, [
              _c("img", {
                staticClass: "responsive",
                attrs: { src: item, alt: "banner" }
              })
            ])
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-button-next swiper-button-white",
            attrs: { slot: "button-next" },
            slot: "button-next"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-button-prev swiper-button-white",
            attrs: { slot: "button-prev" },
            slot: "button-prev"
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "swiper",
        {
          ref: "swiperThumbs",
          staticClass: "gallery-thumbs",
          attrs: {
            options: _vm.swiperOptionThumbs,
            dir: _vm.$vs.rtl ? "rtl" : "ltr"
          }
        },
        _vm._l(_vm.items, function(item, i) {
          return _c("swiper-slide", { key: i }, [
            _c("img", {
              staticClass: "responsive",
              attrs: { src: item, alt: "banner" }
            })
          ])
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/shop/home/Home2.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/shop/home/Home2.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home2.vue?vue&type=template&id=31db5afc& */ "./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc&");
/* harmony import */ var _Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home2.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/shop/home/Home2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=template&id=31db5afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/Home2.vue?vue&type=template&id=31db5afc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_31db5afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotProduct.vue?vue&type=template&id=33c382a4&scoped=true& */ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true&");
/* harmony import */ var _HotProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotProduct.vue?vue&type=script&lang=js& */ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& */ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HotProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33c382a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/shop/home/fashionComponents/HotProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=style&index=0&id=33c382a4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_style_index_0_id_33c382a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotProduct.vue?vue&type=template&id=33c382a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/home/fashionComponents/HotProduct.vue?vue&type=template&id=33c382a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotProduct_vue_vue_type_template_id_33c382a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);