(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  computed: {
    orders: function orders() {
      return this.$store.state.order.all;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('order/fetchOrders');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8& ***!
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
    { staticClass: "order" },
    [
      _c(
        "vs-table",
        {
          attrs: { data: _vm.orders },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c("vs-td", { attrs: { data: tr.id } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(tr.id) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.user.name } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(tr.user.name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.created_at } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(tr.created_at) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.total } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(tr.total) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "template",
                        { staticClass: "expand-user", slot: "expand" },
                        [
                          _c(
                            "div",
                            { staticClass: "con-expand-users w-full" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "con-btns-user flex items-center justify-between"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "con-userx flex items-center justify-start"
                                    },
                                    [
                                      _c("vs-avatar", {
                                        attrs: {
                                          badge: tr.id,
                                          size: "45px",
                                          src:
                                            "https://randomuser.me/api/portraits/women/" +
                                            indextr +
                                            ".jpg"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(_vm._s(tr.user.name))])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c("vs-button", {
                                        staticClass: "mr-2",
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-phone"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        staticClass: "mr-2",
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-send",
                                          color: "success"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        attrs: {
                                          type: "border",
                                          size: "small",
                                          "icon-pack": "feather",
                                          icon: "icon-trash",
                                          color: "danger"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-list",
                                [
                                  _c(
                                    "vs-list-header",
                                    { attrs: { title: "User address" } },
                                    [_vm._v("User address")]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-list-item", {
                                    attrs: {
                                      "icon-pack": "feather",
                                      icon: "icon-mail",
                                      title: tr.user.email
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-list-item", {
                                    attrs: {
                                      "icon-pack": "feather",
                                      icon: "icon-globe",
                                      title: tr.address.address
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-list-item", {
                                    attrs: {
                                      "icon-pack": "feather",
                                      icon: "icon-home",
                                      title: tr.address.city
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-list-item", {
                                    attrs: {
                                      "icon-pack": "feather",
                                      icon: "icon-phone",
                                      title: tr.address.phone
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "vs-list-header",
                                    { attrs: { title: "Products list" } },
                                    [_vm._v("Product")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-card",
                                    _vm._l(tr.products, function(product) {
                                      return _c("span", { key: product.id }, [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(product.name) +
                                            "\n                            "
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    2
                  )
                })
              }
            }
          ])
        },
        [
          _c("template", { slot: "header" }, [
            _c("h3", { staticClass: "mr-5" }, [_vm._v("Orders")])
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Username")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Đã tạo")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Tổng tiền")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/DashboardOrder.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardOrder.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardOrder.vue?vue&type=template&id=55d719f8& */ "./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8&");
/* harmony import */ var _DashboardOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardOrder.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/DashboardOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardOrder.vue?vue&type=template&id=55d719f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardOrder.vue?vue&type=template&id=55d719f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardOrder_vue_vue_type_template_id_55d719f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);