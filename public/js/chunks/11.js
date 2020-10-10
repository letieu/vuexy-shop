(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selected: [],
      branch: {},
      showInput: false,
      error: ''
    };
  },
  computed: {
    branches: function branches() {
      return this.$store.state.branch.all;
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('branch', ['create', 'update', 'remove'])), {}, {
    clearInput: function clearInput() {
      this.branch.name = '';
    },
    submit: function submit(event) {
      if (!this.branch.name.length) {
        this.error = true;
        return;
      }

      if (this.branch.id) {
        this.update(this.branch).catch(function (error) {
          return console.log(error);
        });
      } else {
        this.create(this.branch).catch(function (err) {
          return console.log(err);
        });
      }

      this.branch = {};
    },
    edit: function edit(index) {
      this.branch = _objectSpread({}, this.branches[index]);
      this.showInput = true;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "vs-table",
    {
      attrs: {
        pagination: "",
        "max-items": "15",
        search: "",
        data: _vm.branches
      },
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
                  _c("vs-td", { attrs: { data: data[indextr].id } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(data[indextr].id) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-td", { attrs: { data: data[indextr].name } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(data[indextr].name) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-td",
                    { attrs: { data: data[indextr].products_count } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(data[indextr].products_count) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("vs-td", { attrs: { data: data[indextr].created_at } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(data[indextr].created_at) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-td",
                    { attrs: { data: data[indextr].id } },
                    [
                      _c(
                        "vs-chip",
                        {
                          attrs: { color: "success" },
                          on: { click: _vm.edit }
                        },
                        [
                          _c("vs-avatar", {
                            attrs: { "icon-pack": "feather", icon: "icon-edit" }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.edit(indextr)
                                }
                              }
                            },
                            [_vm._v("edit")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-chip",
                        { attrs: { color: "danger" }, on: { click: _vm.edit } },
                        [
                          _c("vs-avatar", {
                            attrs: {
                              "icon-pack": "feather",
                              icon: "icon-trash"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.remove(data[indextr].id)
                                }
                              }
                            },
                            [_vm._v("delete")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            })
          }
        }
      ])
    },
    [
      _c(
        "template",
        { slot: "header" },
        [
          _c("h3", { staticClass: "mr-5" }, [_vm._v("Branch")]),
          _vm._v(" "),
          _c("vs-button", {
            attrs: {
              radius: "",
              color: "warning",
              type: "filled",
              "icon-pack": "feather",
              icon: "icon-plus"
            },
            on: {
              click: function($event) {
                _vm.showInput = !_vm.showInput
              }
            }
          }),
          _vm._v(" "),
          _c(
            "vs-prompt",
            {
              attrs: { "is-valid": _vm.branch.name, active: _vm.showInput },
              on: {
                cancel: _vm.clearInput,
                accept: _vm.submit,
                close: function($event) {
                  _vm.showInput = false
                },
                "update:active": function($event) {
                  _vm.showInput = $event
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "con-exemple-prompt" },
                [
                  _vm._v(
                    "\n                Tên thương hiệu :\n                "
                  ),
                  _c("vs-input", {
                    staticClass: "mt-4 mb-2 w-full",
                    attrs: { placeholder: "Name" },
                    model: {
                      value: _vm.branch.name,
                      callback: function($$v) {
                        _vm.$set(_vm.branch, "name", $$v)
                      },
                      expression: "branch.name"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.error,
                          expression: "error"
                        }
                      ],
                      attrs: { color: "danger", "vs-icon": "new_releases" }
                    },
                    [
                      _vm._v(
                        "\n                    Không được để trống\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "template",
        { slot: "thead" },
        [
          _c("vs-th", { attrs: { "sort-key": "email" } }, [_vm._v("ID")]),
          _vm._v(" "),
          _c("vs-th", { attrs: { "sort-key": "username" } }, [_vm._v("Tên ")]),
          _vm._v(" "),
          _c("vs-th", { attrs: { "sort-key": "website" } }, [
            _vm._v("Số sản phẩm")
          ]),
          _vm._v(" "),
          _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("Đã tạo")]),
          _vm._v(" "),
          _c("vs-th", [_vm._v("Actions")])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/DashboardBranch.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardBranch.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardBranch.vue?vue&type=template&id=18a8aa48& */ "./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48&");
/* harmony import */ var _DashboardBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardBranch.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/DashboardBranch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardBranch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBranch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardBranch.vue?vue&type=template&id=18a8aa48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/DashboardBranch.vue?vue&type=template&id=18a8aa48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBranch_vue_vue_type_template_id_18a8aa48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);