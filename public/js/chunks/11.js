(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/star-rating.min.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductSlider */ "./resources/js/src/views/shop/ProductSlider.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StarRating: vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default.a,
    ProductSlider: _ProductSlider__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      item_data: null,
      error_occured: false,
      error_msg: "" // Related Products Swiper

    };
  },
  computed: {
    // isInWishList() {
    //     return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    // },
    isInCart: function isInCart() {
      var _this = this;

      return function (itemId) {
        return _this.$store.getters['cart/isInCart'](itemId);
      };
    }
  },
  methods: {
    // toggleItemInWishList(item) {
    //     this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    // },
    // toggleItemInCart(item) {
    //     this.$store.dispatch('eCommerce/toggleItemInCart', item)
    // },
    fetch_item_details: function fetch_item_details(id) {
      var _this2 = this;

      this.$store.dispatch('product/detail', id).catch(function (err) {
        _this2.error_occured = true;
        _this2.error_msg = err.message;
        console.error(err);
      }).then(function (res) {
        _this2.item_data = res.data.data;
      });
    }
  },
  created: function created() {
    console.log(this.$route.params.item_id);
    this.fetch_item_details(this.$route.params.item_id);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n#item-detail-page .color-radio {\n  height: 2.28rem;\n  width: 2.28rem;\n}\n#item-detail-page .color-radio > div {\n  top: 50%;\n}\n[dir=ltr] #item-detail-page .color-radio > div {\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n[dir=rtl] #item-detail-page .color-radio > div {\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n[dir] #item-detail-page .item-features {\n  background-color: #f7f7f7;\n}\n[dir] .theme-dark #item-detail-page .item-features {\n  background-color: #171e49;\n}\n[dir=ltr] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-left: 0;\n}\n[dir=rtl] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "item-detail-page" } },
    [
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "Error Fetching Product Data",
            active: _vm.error_occured
          },
          on: {
            "update:active": function($event) {
              _vm.error_occured = $event
            }
          }
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.error_msg) + ". ")]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check ")]),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "ecommerce-shop" } }
                },
                [_vm._v("Tất cảm sản phẩm ")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.item_data
        ? _c(
            "vx-card",
            { key: _vm.item_data.objectID },
            [
              _c("template", { slot: "no-body" }, [
                _c("div", { staticClass: "item-content" }, [
                  _c("div", { staticClass: "product-details p-6" }, [
                    _c("div", { staticClass: "vx-row mt-6" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "vx-col md:w-2/5 w-full flex items-center justify-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "product-img-container w-3/5 mx-auto mb-10 md:mb-0"
                            },
                            [
                              _c("img", {
                                staticClass: "responsive",
                                attrs: {
                                  src: "/images/" + _vm.item_data.image,
                                  alt: _vm.item_data.name
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-3/5 w-full" },
                        [
                          _c("h3", [_vm._v(_vm._s(_vm.item_data.name))]),
                          _vm._v(" "),
                          _c("p", { staticClass: "my-2" }, [
                            _c("span", { staticClass: "mr-2" }, [
                              _vm._v("Thương hiệu ")
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(_vm.item_data.branch.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "flex items-center flex-wrap" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-2xl leading-none font-medium text-primary mr-4 mt-2"
                                },
                                [_vm._v("$" + _vm._s(_vm.item_data.price))]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"
                                },
                                [
                                  _c("star-rating", {
                                    attrs: {
                                      "show-rating": false,
                                      rating: _vm.item_data.rating,
                                      "star-size": 20,
                                      "read-only": ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "cursor-pointer leading-none mt-2"
                                },
                                [_vm._v("424 đánh giá ")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.item_data.description))]),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c("div", { staticClass: "vx-row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "vx-col flex flex-wrap items-center"
                              },
                              [
                                _c("vs-button", {
                                  staticClass: "mr-4",
                                  attrs: {
                                    type: "border",
                                    "icon-pack": "feather",
                                    color: "#1551b1",
                                    icon: "icon-facebook",
                                    radius: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  staticClass: "mr-4",
                                  attrs: {
                                    type: "border",
                                    "icon-pack": "feather",
                                    color: "#00aaff",
                                    icon: "icon-twitter",
                                    radius: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  staticClass: "mr-4",
                                  attrs: {
                                    type: "border",
                                    "icon-pack": "feather",
                                    color: "#c4302b",
                                    icon: "icon-youtube",
                                    radius: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  staticClass: "mr-4",
                                  attrs: {
                                    type: "border",
                                    "icon-pack": "feather",
                                    color: "#405DE6",
                                    icon: "icon-instagram",
                                    radius: ""
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c("vs-button", { staticClass: "mt-10" }, [
                            _vm._v("THÊM VÀO GIỎ HÀNG")
                          ])
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "py-24 mb-16 mt-10 text-center item-features"
                    },
                    [
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                          _c(
                            "div",
                            { staticClass: "w-64 mx-auto mb-16 md:mb-0" },
                            [
                              _c("feather-icon", {
                                staticClass: "block mb-4",
                                attrs: {
                                  icon: "AwardIcon",
                                  svgClasses:
                                    "h-12 w-12 text-primary stroke-current"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "font-semibold text-lg" },
                                [_vm._v("100% chính hãng ")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "mt-2" }, [
                                _vm._v("Được nhập khẩu trực tiếp từ kho hàng ")
                              ])
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                          _c(
                            "div",
                            { staticClass: "w-64 mx-auto mb-16 md:mb-0" },
                            [
                              _c("feather-icon", {
                                staticClass: "block mb-4",
                                attrs: {
                                  icon: "ClockIcon",
                                  svgClasses:
                                    "h-12 w-12 text-primary stroke-current"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "font-semibold text-lg" },
                                [_vm._v("10 ngày 1 đổi 1")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "mt-2" }, [
                                _vm._v(
                                  "Hệ thống đổi trả, chăm sóc khác hàng chu đáo "
                                )
                              ])
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                          _c(
                            "div",
                            { staticClass: "w-64 mx-auto" },
                            [
                              _c("feather-icon", {
                                staticClass: "block mb-4",
                                attrs: {
                                  icon: "ShieldIcon",
                                  svgClasses:
                                    "h-12 w-12 text-primary stroke-current"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "font-semibold text-lg" },
                                [_vm._v("20 chi nhánh toàn quốc")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "mt-2" }, [
                                _vm._v("Hệ thống cửa hành rộng lớn toàn quốc  ")
                              ])
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("ProductSlider")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/shop/product/Product.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/shop/product/Product.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=605233a0& */ "./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/shop/product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=605233a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=template&id=605233a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_605233a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);