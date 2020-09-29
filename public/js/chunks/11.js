(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/product/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/star-rating.min.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductSlider */ "./resources/js/src/views/shop/ProductSlider.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StarRating: vue_star_rating__WEBPACK_IMPORTED_MODULE_1___default.a,
    ProductSlider: _ProductSlider__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      item_data: null,
      error_occured: false,
      error_msg: "",
      commentPagination: {
        total: 1,
        page: 1
      },
      newComment: "" // Related Products Swiper

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
    },
    comments: function comments() {
      return this.$store.state.comment.all;
    }
  },
  methods: {
    // toggleItemInWishList(item) {
    //     this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    // },
    // toggleItemInCart(item) {
    //     this.$store.dispatch('eCommerce/toggleItemInCart', item)
    // },
    fetchItemDetails: function fetchItemDetails(id) {
      var _this2 = this;

      this.$store.dispatch('product/detail', id).catch(function (err) {
        _this2.error_occured = true;
        _this2.error_msg = err.message;
        console.error(err);
      }).then(function (res) {
        _this2.item_data = res.data.data;
      });
    },
    fetchItemComments: function fetchItemComments(id) {
      var _this3 = this;

      this.$store.dispatch('comment/fetchComments', id).then(function (res) {
        _this3.commentPagination = {
          total: res.data.data.last_page,
          page: res.data.data.current_page
        };
        console.log(_this3.comments, 'asdfjlj');
      }).catch(function (e) {
        return console.log(e);
      });
    },
    postComment: function postComment() {
      this.$store.dispatch('comment/postComment', {
        productId: this.productId,
        text: this.newComment
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.productId = this.$route.params.item_id;
              _context.next = 3;
              return this.fetchItemDetails(this.productId);

            case 3:
              _context.next = 5;
              return this.fetchItemComments(this.productId);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
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
                [_vm._v("All Items")]
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
                            _c("span", { staticClass: "mr-2" }, [_vm._v("by")]),
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
                                [_vm._v("424 ratings")]
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
                            _vm._v("ADD TO CARD")
                          ])
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("div", { staticClass: "comments-container mt-4" }, [
                      _c(
                        "ul",
                        { staticClass: "user-comments-list" },
                        _vm._l(_vm.comments, function(comment, index) {
                          return _c(
                            "li",
                            {
                              key: index,
                              staticClass:
                                "commented-user flex items-center mb-4"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "mr-3" },
                                [
                                  _c("vs-avatar", {
                                    staticClass: "m-0",
                                    attrs: { src: "", size: "30px" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "leading-tight" }, [
                                _c("p", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(comment.user.name))
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-xs" }, [
                                  _vm._v(_vm._s(comment.text))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ml-auto" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex" },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2 cursor-pointer",
                                      attrs: {
                                        icon: "HeartIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("feather-icon", {
                                      staticClass: "cursor-pointer",
                                      attrs: {
                                        icon: "MessageSquareIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "post-comment" },
                      [
                        _c("vs-textarea", {
                          staticClass: "mb-2",
                          attrs: { label: "Add Comment" },
                          model: {
                            value: _vm.newComment,
                            callback: function($$v) {
                              _vm.newComment = $$v
                            },
                            expression: "newComment"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { size: "small" },
                            on: { click: _vm.postComment }
                          },
                          [_vm._v("Post Comment")]
                        )
                      ],
                      1
                    )
                  ])
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