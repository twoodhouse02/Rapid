/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/styled-button/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/styled-button/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_ionicons_ionicons_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/ionicons/ionicons.json */ "./assets/ionicons/ionicons.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    url,
    opensInNewTab,
    label,
    variant,
    size,
    display,
    displayIconLeft,
    iconLeftName,
    displayIconRight,
    iconRightName
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `${variant} ${size} ${display}`
  });
  const [isLinkPopoverOpen, setIsLinkPopoverOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleUpdateLink = newLink => {
    setAttributes({
      url: newLink.url || "",
      // Ensure url is set
      opensInNewTab: newLink.opensInNewTab || false
    });
    setIsLinkPopoverOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "admin-links",
          label: url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit Link", "text-domain") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Link", "text-domain"),
          onClick: () => setIsLinkPopoverOpen(true)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
          controls: [{
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32",
              height: "32",
              fill: "#000000",
              viewBox: "0 0 256 256",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                d: "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
              })
            }),
            onClick: () => setAttributes({
              variant: "primary"
            }),
            title: "Primary"
          }, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32",
              height: "32",
              fill: "#000000",
              viewBox: "0 0 256 256",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                d: "M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",
                opacity: "0.2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                d: "M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"
              })]
            }),
            onClick: () => setAttributes({
              variant: "secondary"
            }),
            title: "Secondary"
          }, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32",
              height: "32",
              fill: "#000000",
              viewBox: "0 0 256 256",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                d: "M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"
              })
            }),
            onClick: () => setAttributes({
              variant: "hollow"
            }),
            title: "Hollow"
          }, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "32",
              height: "32",
              fill: "#000000",
              viewBox: "0 0 256 256",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z"
              })
            }),
            onClick: () => setAttributes({
              variant: "transparent"
            }),
            title: "Transparent"
          }],
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "#000000",
            viewBox: "0 0 256 256",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
            })
          }),
          label: "Select a variant",
          onToggle: () => {}
        })
      }), isLinkPopoverOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
        position: "bottom center",
        onClose: () => setIsLinkPopoverOpen(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
          value: {
            url,
            opensInNewTab
          },
          onChange: value => handleUpdateLink(value),
          settings: [{
            id: "opensInNewTab",
            title: "Open in new tab"
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Style",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Size",
          value: size,
          options: [{
            label: "Default",
            value: "default"
          }, {
            label: "Small",
            value: "small"
          }],
          onChange: value => setAttributes({
            size: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Display",
          value: display,
          options: [{
            label: "Inline",
            value: "inline"
          }, {
            label: "Full-width",
            value: "full-width"
          }, {
            label: "Full-width on mobile",
            value: "full-width-mobile"
          }],
          onChange: value => setAttributes({
            display: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Icons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          __nextHasNoMarginBottom: true,
          label: "Display left icon",
          checked: displayIconLeft,
          onChange: () => setAttributes({
            displayIconLeft: !displayIconLeft
          })
        }), displayIconLeft && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Select left icon",
          value: iconLeftName,
          options: [{
            label: "Select an icon",
            value: ""
          }, ..._assets_ionicons_ionicons_json__WEBPACK_IMPORTED_MODULE_4__.icons.map(icon => ({
            label: icon.name,
            // Display name of the icon
            value: icon.name // Unique value for the icon
          }))],
          onChange: value => setAttributes({
            iconLeftName: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          __nextHasNoMarginBottom: true,
          label: "Display right icon",
          checked: displayIconRight,
          onChange: () => setAttributes({
            displayIconRight: !displayIconRight
          })
        }), displayIconRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Select left icon",
          value: iconRightName,
          options: [{
            label: "Select an icon",
            value: ""
          }, ..._assets_ionicons_ionicons_json__WEBPACK_IMPORTED_MODULE_4__.icons.map(icon => ({
            label: icon.name,
            // Display name of the icon
            value: icon.name // Unique value for the icon
          }))],
          onChange: value => setAttributes({
            iconRightName: value
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
      ...blockProps,
      children: [displayIconLeft && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ion-icon", {
        name: iconLeftName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "span",
        value: label,
        onChange: value => setAttributes({
          label: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button", "rapid"),
        withoutInteractiveFormatting: true
      }), displayIconRight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ion-icon", {
        name: iconRightName
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/styled-button/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/styled-button/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/styled-button/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/styled-button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/styled-button/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/styled-button/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/styled-button/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./assets/ionicons/ionicons.json":
/*!***************************************!*\
  !*** ./assets/ionicons/ionicons.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"ionicons","version":"7.4.0","icons":[{"name":"accessibility","tags":["accessibility"]},{"name":"accessibility-outline","tags":["accessibility","outline"]},{"name":"accessibility-sharp","tags":["accessibility","sharp"]},{"name":"add","tags":["add","circle","include","invite","plus"]},{"name":"add-circle","tags":["add","circle","include","invite","plus"]},{"name":"add-circle-outline","tags":["add","circle","include","invite","outline","plus"]},{"name":"add-circle-sharp","tags":["add","circle","include","invite","plus","sharp"]},{"name":"add-outline","tags":["add","outline"]},{"name":"add-sharp","tags":["add","circle","include","invite","plus","sharp"]},{"name":"airplane","tags":["airplane","plane"]},{"name":"airplane-outline","tags":["airplane","outline","plane"]},{"name":"airplane-sharp","tags":["airplane","plane","sharp"]},{"name":"alarm","tags":["alarm","clock","time"]},{"name":"alarm-outline","tags":["alarm","clock","outline","time"]},{"name":"alarm-sharp","tags":["alarm","clock","sharp","time"]},{"name":"albums","tags":["albums","boxes","slides","square"]},{"name":"albums-outline","tags":["albums","boxes","outline","slides","square"]},{"name":"albums-sharp","tags":["albums","boxes","sharp","slides","square"]},{"name":"alert","tags":["!","alert","attention","exclamation","notice","warning"]},{"name":"alert-circle","tags":["!","alert","attention","circle","exclamation","notice","warning"]},{"name":"alert-circle-outline","tags":["!","alert","attention","circle","exclamation","notice","outline","warning"]},{"name":"alert-circle-sharp","tags":["!","alert","attention","circle","exclamation","notice","sharp","warning"]},{"name":"alert-outline","tags":["alert","outline"]},{"name":"alert-sharp","tags":["!","alert","attention","exclamation","notice","sharp","warning"]},{"name":"american-football","tags":["american","football"]},{"name":"american-football-outline","tags":["american","football","outline"]},{"name":"american-football-sharp","tags":["american","football","sharp"]},{"name":"analytics","tags":["analytics","data","metrics","track"]},{"name":"analytics-outline","tags":["analytics","data","metrics","outline","track"]},{"name":"analytics-sharp","tags":["analytics","data","metrics","sharp","track"]},{"name":"aperture","tags":["aperture","dark","images","levels","light","settings"]},{"name":"aperture-outline","tags":["aperture","dark","images","levels","light","outline","settings"]},{"name":"aperture-sharp","tags":["aperture","dark","images","levels","light","settings","sharp"]},{"name":"apps","tags":["applications","apps"]},{"name":"apps-outline","tags":["applications","apps","outline"]},{"name":"apps-sharp","tags":["applications","apps","sharp"]},{"name":"archive","tags":["archive","email"]},{"name":"archive-outline","tags":["archive","email","outline"]},{"name":"archive-sharp","tags":["archive","email","sharp"]},{"name":"arrow-back","tags":["arrow","back","chevron","left","navigation"]},{"name":"arrow-back-circle","tags":["arrow","back","chevron","circle","left","navigation"]},{"name":"arrow-back-circle-outline","tags":["arrow","back","chevron","circle","left","navigation","outline"]},{"name":"arrow-back-circle-sharp","tags":["arrow","back","chevron","circle","navigation","sharp"]},{"name":"arrow-back-outline","tags":["arrow","back","left","outline"]},{"name":"arrow-back-sharp","tags":["arrow","back","chevron","left","navigation","sharp"]},{"name":"arrow-down","tags":["arrow","chevron","down"]},{"name":"arrow-down-circle","tags":["arrow","chevron","circle","down"]},{"name":"arrow-down-circle-outline","tags":["arrow","chevron","circle","down","outline"]},{"name":"arrow-down-circle-sharp","tags":["arrow","chevron","circle","down","sharp"]},{"name":"arrow-down-left-box","tags":["arrow","box","down","left"]},{"name":"arrow-down-left-box-outline","tags":["arrow","box","down","left","outline"]},{"name":"arrow-down-left-box-sharp","tags":["arrow","box","down","left","sharp"]},{"name":"arrow-down-outline","tags":["arrow","down","outline"]},{"name":"arrow-down-right-box","tags":["arrow","box","down","right"]},{"name":"arrow-down-right-box-outline","tags":["arrow","box","down","outline","right"]},{"name":"arrow-down-right-box-sharp","tags":["arrow","box","down","right","sharp"]},{"name":"arrow-down-sharp","tags":["arrow","chevron","down","sharp"]},{"name":"arrow-forward","tags":["arrow","chevron","forward","navigation","right"]},{"name":"arrow-forward-circle","tags":["arrow","chevron","circle","forward","navigation","right"]},{"name":"arrow-forward-circle-outline","tags":["arrow","chevron","circle","forward","navigation","outline","right"]},{"name":"arrow-forward-circle-sharp","tags":["arrow","chevron","circle","forward","navigation","right","sharp"]},{"name":"arrow-forward-outline","tags":["arrow","forward","outline","right"]},{"name":"arrow-forward-sharp","tags":["arrow","chevron","forward","navigation","right","sharp"]},{"name":"arrow-redo","tags":["arrow","redo"]},{"name":"arrow-redo-circle","tags":["arrow","circle","redo"]},{"name":"arrow-redo-circle-outline","tags":["arrow","circle","outline","redo"]},{"name":"arrow-redo-circle-sharp","tags":["arrow","circle","redo","sharp"]},{"name":"arrow-redo-outline","tags":["arrow","outline","redo"]},{"name":"arrow-redo-sharp","tags":["arrow","redo","sharp"]},{"name":"arrow-undo","tags":["arrow","undo"]},{"name":"arrow-undo-circle","tags":["arrow","circle","undo"]},{"name":"arrow-undo-circle-outline","tags":["arrow","circle","outline","undo"]},{"name":"arrow-undo-circle-sharp","tags":["arrow","circle","sharp","undo"]},{"name":"arrow-undo-outline","tags":["arrow","outline","undo"]},{"name":"arrow-undo-sharp","tags":["arrow","sharp","undo"]},{"name":"arrow-up","tags":["arrow","chevron","up"]},{"name":"arrow-up-circle","tags":["arrow","chevron","circle","up"]},{"name":"arrow-up-circle-outline","tags":["arrow","chevron","circle","outline","up"]},{"name":"arrow-up-circle-sharp","tags":["arrow","chevron","circle","sharp","up"]},{"name":"arrow-up-left-box","tags":["arrow","box","left","up"]},{"name":"arrow-up-left-box-outline","tags":["arrow","box","left","outline","up"]},{"name":"arrow-up-left-box-sharp","tags":["arrow","box","left","sharp","up"]},{"name":"arrow-up-outline","tags":["arrow","outline","up"]},{"name":"arrow-up-right-box","tags":["arrow","box","right","up"]},{"name":"arrow-up-right-box-outline","tags":["arrow","box","outline","right","up"]},{"name":"arrow-up-right-box-sharp","tags":["arrow","box","right","sharp","up"]},{"name":"arrow-up-sharp","tags":["arrow","chevron","sharp","up"]},{"name":"at","tags":["@","at"]},{"name":"at-circle","tags":["@","at","circle"]},{"name":"at-circle-outline","tags":["@","at","circle","outline"]},{"name":"at-circle-sharp","tags":["@","at","circle","sharp"]},{"name":"at-outline","tags":["at","outline"]},{"name":"at-sharp","tags":["@","at","sharp"]},{"name":"attach","tags":["attach"]},{"name":"attach-outline","tags":["attach","outline"]},{"name":"attach-sharp","tags":["attach","sharp"]},{"name":"backspace","tags":["backspace"]},{"name":"backspace-outline","tags":["backspace","outline"]},{"name":"backspace-sharp","tags":["backspace","sharp"]},{"name":"bag","tags":["bag"]},{"name":"bag-add","tags":["add","bag"]},{"name":"bag-add-outline","tags":["add","bag","outline"]},{"name":"bag-add-sharp","tags":["add","bag","sharp"]},{"name":"bag-check","tags":["bag","check"]},{"name":"bag-check-outline","tags":["bag","check","outline"]},{"name":"bag-check-sharp","tags":["bag","check","sharp"]},{"name":"bag-handle","tags":["bag","handle"]},{"name":"bag-handle-outline","tags":["bag","handle","outline"]},{"name":"bag-handle-sharp","tags":["bag","handle","sharp"]},{"name":"bag-outline","tags":["bag","outline"]},{"name":"bag-remove","tags":["bag","remove"]},{"name":"bag-remove-outline","tags":["bag","outline","remove"]},{"name":"bag-remove-sharp","tags":["bag","remove","sharp"]},{"name":"bag-sharp","tags":["bag","sharp"]},{"name":"balloon","tags":["balloon"]},{"name":"balloon-outline","tags":["balloon","outline"]},{"name":"balloon-sharp","tags":["balloon","sharp"]},{"name":"ban","tags":["ban"]},{"name":"ban-outline","tags":["ban","outline"]},{"name":"ban-sharp","tags":["ban","sharp"]},{"name":"bandage","tags":["bandage"]},{"name":"bandage-outline","tags":["bandage","outline"]},{"name":"bandage-sharp","tags":["bandage","sharp"]},{"name":"bar-chart","tags":["bar","chart"]},{"name":"bar-chart-outline","tags":["bar","chart","outline"]},{"name":"bar-chart-sharp","tags":["bar","chart","sharp"]},{"name":"barbell","tags":["barbell","exercise","lifting","weight"]},{"name":"barbell-outline","tags":["barbell","exercise","lifting","outline","weight"]},{"name":"barbell-sharp","tags":["barbell","exercise","lifting","sharp","weight"]},{"name":"barcode","tags":["barcode","camera","reader"]},{"name":"barcode-outline","tags":["barcode","camera","outline","reader"]},{"name":"barcode-sharp","tags":["barcode","camera","reader","sharp"]},{"name":"baseball","tags":["baseball"]},{"name":"baseball-outline","tags":["baseball","outline"]},{"name":"baseball-sharp","tags":["baseball","sharp"]},{"name":"basket","tags":["basket"]},{"name":"basket-outline","tags":["basket","outline"]},{"name":"basket-sharp","tags":["basket","sharp"]},{"name":"basketball","tags":["basketball"]},{"name":"basketball-outline","tags":["basketball","outline"]},{"name":"basketball-sharp","tags":["basketball","sharp"]},{"name":"battery-charging","tags":["battery","charging"]},{"name":"battery-charging-outline","tags":["battery","charging","outline"]},{"name":"battery-charging-sharp","tags":["battery","charging","sharp"]},{"name":"battery-dead","tags":["battery","dead"]},{"name":"battery-dead-outline","tags":["battery","dead","outline"]},{"name":"battery-dead-sharp","tags":["battery","dead","sharp"]},{"name":"battery-full","tags":["battery","full"]},{"name":"battery-full-outline","tags":["battery","full","outline"]},{"name":"battery-full-sharp","tags":["battery","full","sharp"]},{"name":"battery-half","tags":["battery","half"]},{"name":"battery-half-outline","tags":["battery","half","outline"]},{"name":"battery-half-sharp","tags":["battery","half","sharp"]},{"name":"beaker","tags":["beaker","flask","mixture","potion"]},{"name":"beaker-outline","tags":["beaker","flask","mixture","outline","potion"]},{"name":"beaker-sharp","tags":["beaker","flask","mixture","potion","sharp"]},{"name":"bed","tags":["bed","hotel","sleep"]},{"name":"bed-outline","tags":["bed","hotel","outline","sleep"]},{"name":"bed-sharp","tags":["bed","hotel","sharp","sleep"]},{"name":"beer","tags":["beer","drink","eat","food"]},{"name":"beer-outline","tags":["beer","drink","eat","food","outline"]},{"name":"beer-sharp","tags":["beer","drink","eat","food","sharp"]},{"name":"bicycle","tags":["bicycle","bike","exercise"]},{"name":"bicycle-outline","tags":["bicycle","bike","exercise","outline"]},{"name":"bicycle-sharp","tags":["bicycle","bike","exercise","sharp"]},{"name":"binoculars","tags":["binoculars"]},{"name":"binoculars-outline","tags":["binoculars","outline"]},{"name":"binoculars-sharp","tags":["binoculars","sharp"]},{"name":"bluetooth","tags":["bluetooth","cloud","connection"]},{"name":"bluetooth-outline","tags":["bluetooth","cloud","connection","outline"]},{"name":"bluetooth-sharp","tags":["bluetooth","cloud","connection","sharp"]},{"name":"boat","tags":["boat"]},{"name":"boat-outline","tags":["boat","outline"]},{"name":"boat-sharp","tags":["boat","sharp"]},{"name":"body","tags":["body"]},{"name":"body-outline","tags":["body","outline"]},{"name":"body-sharp","tags":["body","sharp"]},{"name":"bonfire","tags":["bonfire","heat","hot"]},{"name":"bonfire-outline","tags":["bonfire","heat","hot","outline"]},{"name":"bonfire-sharp","tags":["bonfire","heat","hot","sharp"]},{"name":"book","tags":["book","read"]},{"name":"book-outline","tags":["book","outline","read"]},{"name":"book-sharp","tags":["book","read","sharp"]},{"name":"bookmark","tags":["bookmark","favorite","save","tag"]},{"name":"bookmark-outline","tags":["bookmark","favorite","outline","save","tag"]},{"name":"bookmark-sharp","tags":["bookmark","favorite","save","sharp","tag"]},{"name":"bookmarks","tags":["bookmarks","favorite"]},{"name":"bookmarks-outline","tags":["bookmarks","favorite","outline"]},{"name":"bookmarks-sharp","tags":["bookmarks","favorite","sharp"]},{"name":"bowling-ball","tags":["ball","bowling"]},{"name":"bowling-ball-outline","tags":["ball","bowling","outline"]},{"name":"bowling-ball-sharp","tags":["ball","bowling","sharp"]},{"name":"briefcase","tags":["briefcase","folder","organize"]},{"name":"briefcase-outline","tags":["briefcase","folder","organize","outline"]},{"name":"briefcase-sharp","tags":["briefcase","folder","organize","sharp"]},{"name":"browsers","tags":["browsers","square"]},{"name":"browsers-outline","tags":["browsers","outline","square"]},{"name":"browsers-sharp","tags":["browsers","sharp","square"]},{"name":"brush","tags":["brush"]},{"name":"brush-outline","tags":["brush","outline"]},{"name":"brush-sharp","tags":["brush","sharp"]},{"name":"bug","tags":["bug","develop","error","hacker","program"]},{"name":"bug-outline","tags":["bug","develop","error","hacker","outline","program"]},{"name":"bug-sharp","tags":["bug","develop","error","hacker","program","sharp"]},{"name":"build","tags":["build"]},{"name":"build-outline","tags":["build","outline"]},{"name":"build-sharp","tags":["build","sharp"]},{"name":"bulb","tags":["bulb"]},{"name":"bulb-outline","tags":["bulb","outline"]},{"name":"bulb-sharp","tags":["bulb","sharp"]},{"name":"bus","tags":["bus"]},{"name":"bus-outline","tags":["bus","outline"]},{"name":"bus-sharp","tags":["bus","sharp"]},{"name":"business","tags":["business"]},{"name":"business-outline","tags":["business","outline"]},{"name":"business-sharp","tags":["business","sharp"]},{"name":"cafe","tags":["cafe","coffee","cup"]},{"name":"cafe-outline","tags":["cafe","coffee","cup","outline"]},{"name":"cafe-sharp","tags":["cafe","coffee","cup","sharp"]},{"name":"calculator","tags":["arithmetic","calculator","math"]},{"name":"calculator-outline","tags":["arithmetic","calculator","math","outline"]},{"name":"calculator-sharp","tags":["arithmetic","calculator","math","sharp"]},{"name":"calendar","tags":["calendar","date","month","week"]},{"name":"calendar-clear","tags":["calendar","clear"]},{"name":"calendar-clear-outline","tags":["calendar","clear","outline"]},{"name":"calendar-clear-sharp","tags":["calendar","clear","sharp"]},{"name":"calendar-number","tags":["calendar","number"]},{"name":"calendar-number-outline","tags":["calendar","number","outline"]},{"name":"calendar-number-sharp","tags":["calendar","number","sharp"]},{"name":"calendar-outline","tags":["calendar","date","month","outline","week"]},{"name":"calendar-sharp","tags":["calendar","date","month","sharp","week"]},{"name":"call","tags":["call","telephone"]},{"name":"call-outline","tags":["call","outline","telephone"]},{"name":"call-sharp","tags":["call","sharp","telephone"]},{"name":"camera","tags":["camera","image","photo"]},{"name":"camera-outline","tags":["camera","image","outline","photo"]},{"name":"camera-reverse","tags":["camera","reverse"]},{"name":"camera-reverse-outline","tags":["camera","outline","reverse"]},{"name":"camera-reverse-sharp","tags":["camera","reverse","sharp"]},{"name":"camera-sharp","tags":["camera","image","photo","sharp"]},{"name":"car","tags":["car"]},{"name":"car-outline","tags":["car","outline"]},{"name":"car-sharp","tags":["car","sharp"]},{"name":"car-sport","tags":["car","sport"]},{"name":"car-sport-outline","tags":["car","outline","sport"]},{"name":"car-sport-sharp","tags":["car","sharp","sport"]},{"name":"card","tags":["$","card","cash","credit","debit","dollars","money","price","shopping"]},{"name":"card-outline","tags":["$","card","cash","credit","debit","dollars","money","outline","price","shopping"]},{"name":"card-sharp","tags":["$","card","cash","credit","debit","dollars","money","price","sharp","shopping"]},{"name":"caret-back","tags":["arrow","back","caret"]},{"name":"caret-back-circle","tags":["arrow","back","caret","circle"]},{"name":"caret-back-circle-outline","tags":["arrow","back","caret","circle","outline"]},{"name":"caret-back-circle-sharp","tags":["arrow","back","caret","circle","left","sharp"]},{"name":"caret-back-outline","tags":["arrow","back","caret","left","outline"]},{"name":"caret-back-sharp","tags":["arrow","back","caret","left","sharp"]},{"name":"caret-down","tags":["arrow","caret","down"]},{"name":"caret-down-circle","tags":["arrow","caret","circle","down"]},{"name":"caret-down-circle-outline","tags":["arrow","caret","circle","down","outline"]},{"name":"caret-down-circle-sharp","tags":["arrow","caret","circle","down","sharp"]},{"name":"caret-down-outline","tags":["arrow","caret","down","outline"]},{"name":"caret-down-sharp","tags":["arrow","caret","down","sharp"]},{"name":"caret-forward","tags":["arrow","caret","forward","right"]},{"name":"caret-forward-circle","tags":["arrow","caret","circle","forward","right"]},{"name":"caret-forward-circle-outline","tags":["arrow","caret","circle","forward","outline","right"]},{"name":"caret-forward-circle-sharp","tags":["arrow","caret","circle","forward","right","sharp"]},{"name":"caret-forward-outline","tags":["arrow","caret","forward","outline","right"]},{"name":"caret-forward-sharp","tags":["arrow","caret","forward","right","sharp"]},{"name":"caret-up","tags":["arrow","caret","up"]},{"name":"caret-up-circle","tags":["arrow","caret","circle","up"]},{"name":"caret-up-circle-outline","tags":["arrow","caret","circle","outline","up"]},{"name":"caret-up-circle-sharp","tags":["arrow","caret","circle","sharp","up"]},{"name":"caret-up-outline","tags":["arrow","caret","outline","up"]},{"name":"caret-up-sharp","tags":["arrow","caret","sharp","up"]},{"name":"cart","tags":["cart"]},{"name":"cart-outline","tags":["cart","outline"]},{"name":"cart-sharp","tags":["cart","sharp"]},{"name":"cash","tags":["$","cash","credit","debit","dollars","money","price","shopping"]},{"name":"cash-outline","tags":["$","cash","credit","debit","dollars","money","outline","price","shopping"]},{"name":"cash-sharp","tags":["$","cash","credit","debit","dollars","money","price","sharp","shopping"]},{"name":"cellular","tags":["cellular"]},{"name":"cellular-outline","tags":["cellular","outline"]},{"name":"cellular-sharp","tags":["cellular","sharp"]},{"name":"chatbox","tags":["chatbox"]},{"name":"chatbox-ellipses","tags":["chatbox","ellipses"]},{"name":"chatbox-ellipses-outline","tags":["chatbox","ellipses","outline"]},{"name":"chatbox-ellipses-sharp","tags":["chatbox","ellipses","sharp"]},{"name":"chatbox-outline","tags":["chatbox","outline"]},{"name":"chatbox-sharp","tags":["chatbox","sharp"]},{"name":"chatbubble","tags":["chatbubble"]},{"name":"chatbubble-ellipses","tags":["chatbubble","ellipses"]},{"name":"chatbubble-ellipses-outline","tags":["chatbubble","ellipses","outline"]},{"name":"chatbubble-ellipses-sharp","tags":["chatbubble","ellipses","sharp"]},{"name":"chatbubble-outline","tags":["chatbubble","outline"]},{"name":"chatbubble-sharp","tags":["chatbubble","sharp"]},{"name":"chatbubbles","tags":["chatbubbles","talk"]},{"name":"chatbubbles-outline","tags":["chatbubbles","outline","talk"]},{"name":"chatbubbles-sharp","tags":["chatbubbles","sharp","talk"]},{"name":"checkbox","tags":["checkbox"]},{"name":"checkbox-outline","tags":["checkbox","outline"]},{"name":"checkbox-sharp","tags":["checkbox","sharp"]},{"name":"checkmark","tags":["checkmark","circle"]},{"name":"checkmark-circle","tags":["checkmark","circle"]},{"name":"checkmark-circle-outline","tags":["checkmark","circle","outline"]},{"name":"checkmark-circle-sharp","tags":["checkmark","circle","sharp"]},{"name":"checkmark-done","tags":["checkmark","done"]},{"name":"checkmark-done-circle","tags":["checkmark","circle","done"]},{"name":"checkmark-done-circle-outline","tags":["checkmark","circle","done","outline"]},{"name":"checkmark-done-circle-sharp","tags":["checkmark","circle","done","sharp"]},{"name":"checkmark-done-outline","tags":["checkmark","done","outline"]},{"name":"checkmark-done-sharp","tags":["checkmark","done","sharp"]},{"name":"checkmark-outline","tags":["checkmark","outline"]},{"name":"checkmark-sharp","tags":["checkmark","circle","sharp"]},{"name":"chevron-back","tags":["arrow","back","chevron","left"]},{"name":"chevron-back-circle","tags":["arrow","back","chevron","circle","left"]},{"name":"chevron-back-circle-outline","tags":["arrow","back","chevron","circle","left","outline"]},{"name":"chevron-back-circle-sharp","tags":["arrow","back","chevron","circle","left","sharp"]},{"name":"chevron-back-outline","tags":["arrow","back","chevron","left","outline"]},{"name":"chevron-back-sharp","tags":["arrow","back","chevron","left","sharp"]},{"name":"chevron-collapse","tags":["chevron","collapse"]},{"name":"chevron-collapse-outline","tags":["chevron","collapse","outline"]},{"name":"chevron-collapse-sharp","tags":["chevron","collapse","sharp"]},{"name":"chevron-down","tags":["arrow","chevron","down"]},{"name":"chevron-down-circle","tags":["arrow","chevron","circle","down"]},{"name":"chevron-down-circle-outline","tags":["arrow","chevron","circle","down","outline"]},{"name":"chevron-down-circle-sharp","tags":["arrow","chevron","circle","down","sharp"]},{"name":"chevron-down-outline","tags":["arrow","chevron","down","outline"]},{"name":"chevron-down-sharp","tags":["arrow","chevron","down","sharp"]},{"name":"chevron-expand","tags":["chevron","expand"]},{"name":"chevron-expand-outline","tags":["chevron","expand","outline"]},{"name":"chevron-expand-sharp","tags":["chevron","expand","sharp"]},{"name":"chevron-forward","tags":["arrow","chevron","forward","right"]},{"name":"chevron-forward-circle","tags":["arrow","chevron","circle","forward","right"]},{"name":"chevron-forward-circle-outline","tags":["arrow","chevron","circle","forward","outline","right"]},{"name":"chevron-forward-circle-sharp","tags":["arrow","chevron","circle","forward","right","sharp"]},{"name":"chevron-forward-outline","tags":["arrow","chevron","forward","outline","right"]},{"name":"chevron-forward-sharp","tags":["arrow","chevron","forward","right","sharp"]},{"name":"chevron-up","tags":["arrow","chevron","up"]},{"name":"chevron-up-circle","tags":["arrow","chevron","circle","up"]},{"name":"chevron-up-circle-outline","tags":["arrow","chevron","circle","outline","up"]},{"name":"chevron-up-circle-sharp","tags":["arrow","chevron","circle","sharp","up"]},{"name":"chevron-up-outline","tags":["arrow","chevron","outline","up"]},{"name":"chevron-up-sharp","tags":["arrow","chevron","sharp","up"]},{"name":"clipboard","tags":["clipboard","copy","paste","write"]},{"name":"clipboard-outline","tags":["clipboard","copy","outline","paste","write"]},{"name":"clipboard-sharp","tags":["clipboard","copy","paste","sharp","write"]},{"name":"close","tags":["circle","close","delete","remove"]},{"name":"close-circle","tags":["circle","close","delete","remove"]},{"name":"close-circle-outline","tags":["circle","close","delete","outline","remove"]},{"name":"close-circle-sharp","tags":["circle","close","delete","remove","sharp"]},{"name":"close-outline","tags":["circle","close","delete","outline","remove"]},{"name":"close-sharp","tags":["circle","close","delete","remove","sharp"]},{"name":"cloud","tags":["circle","cloud","storage","weather","whether"]},{"name":"cloud-circle","tags":["circle","cloud","storage","weather","whether"]},{"name":"cloud-circle-outline","tags":["circle","cloud","outline","storage","weather","whether"]},{"name":"cloud-circle-sharp","tags":["circle","cloud","sharp","storage","weather","whether"]},{"name":"cloud-done","tags":["cloud","done"]},{"name":"cloud-done-outline","tags":["cloud","done","outline"]},{"name":"cloud-done-sharp","tags":["cloud","done","sharp"]},{"name":"cloud-download","tags":["cloud","download","storage"]},{"name":"cloud-download-outline","tags":["cloud","download","outline","storage"]},{"name":"cloud-download-sharp","tags":["cloud","download","sharp","storage"]},{"name":"cloud-offline","tags":["cloud","offline"]},{"name":"cloud-offline-outline","tags":["cloud","offline","outline"]},{"name":"cloud-offline-sharp","tags":["cloud","offline","sharp"]},{"name":"cloud-outline","tags":["circle","cloud","outline","storage","weather","whether"]},{"name":"cloud-sharp","tags":["circle","cloud","sharp","storage","weather","whether"]},{"name":"cloud-upload","tags":["cloud","storage","upload"]},{"name":"cloud-upload-outline","tags":["cloud","outline","storage","upload"]},{"name":"cloud-upload-sharp","tags":["cloud","sharp","storage","upload"]},{"name":"cloudy","tags":["cloudy","overcast","weather","whether"]},{"name":"cloudy-night","tags":["cloudy","night","overcast","weather","whether"]},{"name":"cloudy-night-outline","tags":["cloudy","night","outline","overcast","weather","whether"]},{"name":"cloudy-night-sharp","tags":["cloudy","night","overcast","sharp","weather","whether"]},{"name":"cloudy-outline","tags":["cloudy","outline","overcast","weather","whether"]},{"name":"cloudy-sharp","tags":["cloudy","overcast","sharp","weather","whether"]},{"name":"code","tags":["code","develop","hacker","program"]},{"name":"code-download","tags":["code","develop","download","hacker","program"]},{"name":"code-download-outline","tags":["code","develop","download","hacker","outline","program"]},{"name":"code-download-sharp","tags":["code","develop","download","hacker","program","sharp"]},{"name":"code-outline","tags":["code","develop","hacker","outline","program"]},{"name":"code-sharp","tags":["code","develop","hacker","program","sharp"]},{"name":"code-slash","tags":["code","slash"]},{"name":"code-slash-outline","tags":["code","outline","slash"]},{"name":"code-slash-sharp","tags":["code","sharp","slash"]},{"name":"code-working","tags":["code","develop","hacker","program","working"]},{"name":"code-working-outline","tags":["code","develop","hacker","outline","program","working"]},{"name":"code-working-sharp","tags":["code","develop","hacker","program","sharp","working"]},{"name":"cog","tags":["cog","gear","options","settings"]},{"name":"cog-outline","tags":["cog","gear","options","outline","settings"]},{"name":"cog-sharp","tags":["cog","gear","options","settings","sharp"]},{"name":"color-fill","tags":["color","fill"]},{"name":"color-fill-outline","tags":["color","fill","outline"]},{"name":"color-fill-sharp","tags":["color","fill","sharp"]},{"name":"color-filter","tags":["color","filter"]},{"name":"color-filter-outline","tags":["color","filter","outline"]},{"name":"color-filter-sharp","tags":["color","filter","sharp"]},{"name":"color-palette","tags":["color","palette"]},{"name":"color-palette-outline","tags":["color","outline","palette"]},{"name":"color-palette-sharp","tags":["color","palette","sharp"]},{"name":"color-wand","tags":["color","wand"]},{"name":"color-wand-outline","tags":["color","outline","wand"]},{"name":"color-wand-sharp","tags":["color","sharp","wand"]},{"name":"compass","tags":["compass","directions","location","navigation"]},{"name":"compass-outline","tags":["compass","directions","location","navigation","outline"]},{"name":"compass-sharp","tags":["compass","directions","location","navigation","sharp"]},{"name":"construct","tags":["construct"]},{"name":"construct-outline","tags":["construct","outline"]},{"name":"construct-sharp","tags":["construct","sharp"]},{"name":"contract","tags":["contract"]},{"name":"contract-outline","tags":["contract","outline"]},{"name":"contract-sharp","tags":["contract","sharp"]},{"name":"contrast","tags":["contrast","dark","images","levels","light","settings"]},{"name":"contrast-outline","tags":["contrast","dark","images","levels","light","outline","settings"]},{"name":"contrast-sharp","tags":["contrast","dark","images","levels","light","settings","sharp"]},{"name":"copy","tags":["copy","duplicate","paper"]},{"name":"copy-outline","tags":["copy","duplicate","outline","paper"]},{"name":"copy-sharp","tags":["copy","duplicate","paper","sharp"]},{"name":"create","tags":["create","edit"]},{"name":"create-outline","tags":["create","edit","outline"]},{"name":"create-sharp","tags":["create","edit","sharp"]},{"name":"crop","tags":["crop"]},{"name":"crop-outline","tags":["crop","outline"]},{"name":"crop-sharp","tags":["crop","sharp"]},{"name":"cube","tags":["box","container","cube","square"]},{"name":"cube-outline","tags":["box","container","cube","outline","square"]},{"name":"cube-sharp","tags":["box","container","cube","sharp","square"]},{"name":"cut","tags":["cut"]},{"name":"cut-outline","tags":["cut","outline"]},{"name":"cut-sharp","tags":["cut","sharp"]},{"name":"desktop","tags":["desktop"]},{"name":"desktop-outline","tags":["desktop","outline"]},{"name":"desktop-sharp","tags":["desktop","sharp"]},{"name":"diamond","tags":["diamond"]},{"name":"diamond-outline","tags":["diamond","outline"]},{"name":"diamond-sharp","tags":["diamond","sharp"]},{"name":"dice","tags":["dice"]},{"name":"dice-outline","tags":["dice","outline"]},{"name":"dice-sharp","tags":["dice","sharp"]},{"name":"disc","tags":["cd","disc","vinyl"]},{"name":"disc-outline","tags":["cd","disc","outline","vinyl"]},{"name":"disc-sharp","tags":["cd","disc","sharp","vinyl"]},{"name":"document","tags":["document","file","paper"]},{"name":"document-attach","tags":["attach","document"]},{"name":"document-attach-outline","tags":["attach","document","outline"]},{"name":"document-attach-sharp","tags":["attach","document","sharp"]},{"name":"document-lock","tags":["document","lock"]},{"name":"document-lock-outline","tags":["document","lock","outline"]},{"name":"document-lock-sharp","tags":["document","lock","sharp"]},{"name":"document-outline","tags":["document","file","outline","paper"]},{"name":"document-sharp","tags":["document","file","paper","sharp"]},{"name":"document-text","tags":["document","text"]},{"name":"document-text-outline","tags":["document","outline","text"]},{"name":"document-text-sharp","tags":["document","sharp","text"]},{"name":"documents","tags":["documents"]},{"name":"documents-outline","tags":["documents","outline"]},{"name":"documents-sharp","tags":["documents","sharp"]},{"name":"download","tags":["download","export"]},{"name":"download-outline","tags":["download","export","outline"]},{"name":"download-sharp","tags":["download","export","sharp"]},{"name":"duplicate","tags":["duplicate"]},{"name":"duplicate-outline","tags":["duplicate","outline"]},{"name":"duplicate-sharp","tags":["duplicate","sharp"]},{"name":"ear","tags":["ear"]},{"name":"ear-outline","tags":["ear","outline"]},{"name":"ear-sharp","tags":["ear","sharp"]},{"name":"earth","tags":["earth","globe"]},{"name":"earth-outline","tags":["earth","globe","outline"]},{"name":"earth-sharp","tags":["earth","globe","sharp"]},{"name":"easel","tags":["easel"]},{"name":"easel-outline","tags":["easel","outline"]},{"name":"easel-sharp","tags":["easel","sharp"]},{"name":"egg","tags":["baby","bird","birth","egg","twitter"]},{"name":"egg-outline","tags":["baby","bird","birth","egg","outline","twitter"]},{"name":"egg-sharp","tags":["baby","bird","birth","egg","sharp","twitter"]},{"name":"ellipse","tags":["circle","ellipse"]},{"name":"ellipse-outline","tags":["circle","ellipse","outline"]},{"name":"ellipse-sharp","tags":["circle","ellipse","sharp"]},{"name":"ellipsis-horizontal","tags":["ellipsis","horizontal"]},{"name":"ellipsis-horizontal-circle","tags":["circle","ellipsis","horizontal"]},{"name":"ellipsis-horizontal-circle-outline","tags":["circle","ellipsis","horizontal","outline"]},{"name":"ellipsis-horizontal-circle-sharp","tags":["circle","ellipsis","horizontal","sharp"]},{"name":"ellipsis-horizontal-outline","tags":["ellipsis","horizontal","outline"]},{"name":"ellipsis-horizontal-sharp","tags":["ellipsis","horizontal","sharp"]},{"name":"ellipsis-vertical","tags":["ellipsis","vertical"]},{"name":"ellipsis-vertical-circle","tags":["circle","ellipsis","vertical"]},{"name":"ellipsis-vertical-circle-outline","tags":["circle","ellipsis","outline","vertical"]},{"name":"ellipsis-vertical-circle-sharp","tags":["circle","ellipsis","sharp","vertical"]},{"name":"ellipsis-vertical-outline","tags":["ellipsis","outline","vertical"]},{"name":"ellipsis-vertical-sharp","tags":["ellipsis","sharp","vertical"]},{"name":"enter","tags":["enter"]},{"name":"enter-outline","tags":["enter","outline"]},{"name":"enter-sharp","tags":["enter","sharp"]},{"name":"exit","tags":["exit"]},{"name":"exit-outline","tags":["exit","outline"]},{"name":"exit-sharp","tags":["exit","sharp"]},{"name":"expand","tags":["expand","resize"]},{"name":"expand-outline","tags":["expand","outline"]},{"name":"expand-sharp","tags":["expand","resize","sharp"]},{"name":"extension-puzzle","tags":["extension","puzzle"]},{"name":"extension-puzzle-outline","tags":["extension","outline","puzzle"]},{"name":"extension-puzzle-sharp","tags":["extension","puzzle","sharp"]},{"name":"eye","tags":["exposed","eye","look","see","view"]},{"name":"eye-off","tags":["eye","off"]},{"name":"eye-off-outline","tags":["eye","off","outline"]},{"name":"eye-off-sharp","tags":["eye","off","sharp"]},{"name":"eye-outline","tags":["exposed","eye","look","outline","see","view"]},{"name":"eye-sharp","tags":["exposed","eye","look","see","sharp","view"]},{"name":"eyedrop","tags":["eyedrop"]},{"name":"eyedrop-outline","tags":["eyedrop","outline"]},{"name":"eyedrop-sharp","tags":["eyedrop","sharp"]},{"name":"fast-food","tags":["fast","food"]},{"name":"fast-food-outline","tags":["fast","food","outline"]},{"name":"fast-food-sharp","tags":["fast","food","sharp"]},{"name":"female","tags":["dudette","female","girl","lady","woman"]},{"name":"female-outline","tags":["dudette","female","girl","lady","outline","woman"]},{"name":"female-sharp","tags":["dudette","female","girl","lady","sharp","woman"]},{"name":"file-tray","tags":["file","tray"]},{"name":"file-tray-full","tags":["file","full","tray"]},{"name":"file-tray-full-outline","tags":["file","full","outline","tray"]},{"name":"file-tray-full-sharp","tags":["file","full","sharp","tray"]},{"name":"file-tray-outline","tags":["file","outline","tray"]},{"name":"file-tray-sharp","tags":["file","sharp","tray"]},{"name":"file-tray-stacked","tags":["file","stacked","tray"]},{"name":"file-tray-stacked-outline","tags":["file","outline","stacked","tray"]},{"name":"file-tray-stacked-sharp","tags":["file","sharp","stacked","tray"]},{"name":"film","tags":["film"]},{"name":"film-outline","tags":["film","outline"]},{"name":"film-sharp","tags":["film","sharp"]},{"name":"filter","tags":["filter"]},{"name":"filter-circle","tags":["circle","filter"]},{"name":"filter-circle-outline","tags":["circle","filter","outline"]},{"name":"filter-circle-sharp","tags":["circle","filter","sharp"]},{"name":"filter-outline","tags":["filter","outline"]},{"name":"filter-sharp","tags":["filter","sharp"]},{"name":"finger-print","tags":["finger","print"]},{"name":"finger-print-outline","tags":["finger","outline","print"]},{"name":"finger-print-sharp","tags":["finger","print","sharp"]},{"name":"fish","tags":["fish"]},{"name":"fish-outline","tags":["fish","outline"]},{"name":"fish-sharp","tags":["fish","sharp"]},{"name":"fitness","tags":["fitness"]},{"name":"fitness-outline","tags":["fitness","outline"]},{"name":"fitness-sharp","tags":["fitness","sharp"]},{"name":"flag","tags":["favorite","flag","marker"]},{"name":"flag-outline","tags":["favorite","flag","marker","outline"]},{"name":"flag-sharp","tags":["favorite","flag","marker","sharp"]},{"name":"flame","tags":["fire","flame","heat","hot"]},{"name":"flame-outline","tags":["fire","flame","heat","hot","outline"]},{"name":"flame-sharp","tags":["fire","flame","heat","hot","sharp"]},{"name":"flash","tags":["flash","lightning","weather","whether"]},{"name":"flash-off","tags":["flash","off"]},{"name":"flash-off-outline","tags":["flash","off","outline"]},{"name":"flash-off-sharp","tags":["flash","off","sharp"]},{"name":"flash-outline","tags":["flash","lightning","outline","weather","whether"]},{"name":"flash-sharp","tags":["flash","lightning","sharp","weather","whether"]},{"name":"flashlight","tags":["flashlight"]},{"name":"flashlight-outline","tags":["flashlight","outline"]},{"name":"flashlight-sharp","tags":["flashlight","sharp"]},{"name":"flask","tags":["bubbles","flask","mixture","potion"]},{"name":"flask-outline","tags":["bubbles","flask","mixture","outline","potion"]},{"name":"flask-sharp","tags":["bubbles","flask","mixture","potion","sharp"]},{"name":"flower","tags":["flower"]},{"name":"flower-outline","tags":["flower","outline"]},{"name":"flower-sharp","tags":["flower","sharp"]},{"name":"folder","tags":["file","folder"]},{"name":"folder-open","tags":["folder","open"]},{"name":"folder-open-outline","tags":["folder","open","outline"]},{"name":"folder-open-sharp","tags":["folder","open","sharp"]},{"name":"folder-outline","tags":["file","folder","outline"]},{"name":"folder-sharp","tags":["file","folder","sharp"]},{"name":"football","tags":["football","soccer"]},{"name":"football-outline","tags":["football","outline","soccer"]},{"name":"football-sharp","tags":["football","sharp","soccer"]},{"name":"footsteps","tags":["footsteps"]},{"name":"footsteps-outline","tags":["footsteps","outline"]},{"name":"footsteps-sharp","tags":["footsteps","sharp"]},{"name":"funnel","tags":["funnel","sort"]},{"name":"funnel-outline","tags":["funnel","outline","sort"]},{"name":"funnel-sharp","tags":["funnel","sharp","sort"]},{"name":"game-controller","tags":["controller","game"]},{"name":"game-controller-outline","tags":["controller","game","outline"]},{"name":"game-controller-sharp","tags":["controller","game","sharp"]},{"name":"gift","tags":["gift"]},{"name":"gift-outline","tags":["gift","outline"]},{"name":"gift-sharp","tags":["gift","sharp"]},{"name":"git-branch","tags":["branch","git"]},{"name":"git-branch-outline","tags":["branch","git","outline"]},{"name":"git-branch-sharp","tags":["branch","git","sharp"]},{"name":"git-commit","tags":["commit","git"]},{"name":"git-commit-outline","tags":["commit","git","outline"]},{"name":"git-commit-sharp","tags":["commit","git","sharp"]},{"name":"git-compare","tags":["compare","git"]},{"name":"git-compare-outline","tags":["compare","git","outline"]},{"name":"git-compare-sharp","tags":["compare","git","sharp"]},{"name":"git-merge","tags":["git","merge"]},{"name":"git-merge-outline","tags":["git","merge","outline"]},{"name":"git-merge-sharp","tags":["git","merge","sharp"]},{"name":"git-network","tags":["git","network"]},{"name":"git-network-outline","tags":["git","network","outline"]},{"name":"git-network-sharp","tags":["git","network","sharp"]},{"name":"git-pull-request","tags":["git","pull","request"]},{"name":"git-pull-request-outline","tags":["git","outline","pull","request"]},{"name":"git-pull-request-sharp","tags":["git","pull","request","sharp"]},{"name":"glasses","tags":["glasses","look","reading","see","steve"]},{"name":"glasses-outline","tags":["glasses","look","outline","reading","see","steve"]},{"name":"glasses-sharp","tags":["glasses","look","reading","see","sharp","steve"]},{"name":"globe","tags":["globe","internet","world"]},{"name":"globe-outline","tags":["globe","internet","outline","world"]},{"name":"globe-sharp","tags":["globe","internet","sharp","world"]},{"name":"golf","tags":["golf"]},{"name":"golf-outline","tags":["golf","outline"]},{"name":"golf-sharp","tags":["golf","sharp"]},{"name":"grid","tags":["grid","menu"]},{"name":"grid-outline","tags":["grid","menu","outline"]},{"name":"grid-sharp","tags":["grid","menu","sharp"]},{"name":"hammer","tags":["hammer","options","settings","tools"]},{"name":"hammer-outline","tags":["hammer","options","outline","settings","tools"]},{"name":"hammer-sharp","tags":["hammer","options","settings","sharp","tools"]},{"name":"hand-left","tags":["hand","left"]},{"name":"hand-left-outline","tags":["hand","left","outline"]},{"name":"hand-left-sharp","tags":["hand","left","sharp"]},{"name":"hand-right","tags":["hand","right"]},{"name":"hand-right-outline","tags":["hand","outline","right"]},{"name":"hand-right-sharp","tags":["hand","right","sharp"]},{"name":"happy","tags":["fun","good","happy","like","smile","yes"]},{"name":"happy-outline","tags":["fun","good","happy","like","outline","smile","yes"]},{"name":"happy-sharp","tags":["fun","good","happy","like","sharp","smile","yes"]},{"name":"hardware-chip","tags":["chip","hardware"]},{"name":"hardware-chip-outline","tags":["chip","hardware","outline"]},{"name":"hardware-chip-sharp","tags":["chip","hardware","sharp"]},{"name":"headset","tags":["headset"]},{"name":"headset-outline","tags":["headset","outline"]},{"name":"headset-sharp","tags":["headset","sharp"]},{"name":"heart","tags":["heart","love"]},{"name":"heart-circle","tags":["circle","heart","love"]},{"name":"heart-circle-outline","tags":["circle","heart","love","outline"]},{"name":"heart-circle-sharp","tags":["circle","heart","love","sharp"]},{"name":"heart-dislike","tags":["dislike","heart","love"]},{"name":"heart-dislike-circle","tags":["circle","dislike","heart","love"]},{"name":"heart-dislike-circle-outline","tags":["circle","dislike","heart","love","outline"]},{"name":"heart-dislike-circle-sharp","tags":["circle","dislike","heart","love","sharp"]},{"name":"heart-dislike-outline","tags":["dislike","heart","love","outline"]},{"name":"heart-dislike-sharp","tags":["dislike","heart","love","sharp"]},{"name":"heart-half","tags":["half","heart","love"]},{"name":"heart-half-outline","tags":["half","heart","outline"]},{"name":"heart-half-sharp","tags":["half","heart","love","sharp"]},{"name":"heart-outline","tags":["heart","love","outline"]},{"name":"heart-sharp","tags":["heart","love","sharp"]},{"name":"help","tags":["?","circle","help","information","question"]},{"name":"help-buoy","tags":["?","buoy","help","question"]},{"name":"help-buoy-outline","tags":["?","buoy","help","outline","question"]},{"name":"help-buoy-sharp","tags":["?","buoy","help","question","sharp"]},{"name":"help-circle","tags":["?","circle","help","information","question"]},{"name":"help-circle-outline","tags":["?","circle","help","information","outline","question"]},{"name":"help-circle-sharp","tags":["?","circle","help","information","question","sharp"]},{"name":"help-outline","tags":["help","outline"]},{"name":"help-sharp","tags":["?","circle","help","information","question","sharp"]},{"name":"home","tags":["home","house"]},{"name":"home-outline","tags":["home","house","outline"]},{"name":"home-sharp","tags":["home","house","sharp"]},{"name":"hourglass","tags":["hourglass","time"]},{"name":"hourglass-outline","tags":["hourglass","outline","time"]},{"name":"hourglass-sharp","tags":["hourglass","sharp","time"]},{"name":"ice-cream","tags":["cream","ice"]},{"name":"ice-cream-outline","tags":["cream","ice","outline"]},{"name":"ice-cream-sharp","tags":["cream","ice","sharp"]},{"name":"id-card","tags":["card","id"]},{"name":"id-card-outline","tags":["card","id","outline"]},{"name":"id-card-sharp","tags":["card","id","sharp"]},{"name":"image","tags":["camera","image","photo"]},{"name":"image-outline","tags":["camera","image","outline","photo"]},{"name":"image-sharp","tags":["camera","image","photo","sharp"]},{"name":"images","tags":["images","photo"]},{"name":"images-outline","tags":["images","outline","photo"]},{"name":"images-sharp","tags":["images","photo","sharp"]},{"name":"infinite","tags":["forever","infinite","loop"]},{"name":"infinite-outline","tags":["forever","infinite","loop","outline"]},{"name":"infinite-sharp","tags":["forever","infinite","loop","sharp"]},{"name":"information","tags":["circle","help","information","knowledge"]},{"name":"information-circle","tags":["circle","help","information","knowledge"]},{"name":"information-circle-outline","tags":["circle","help","information","knowledge","outline"]},{"name":"information-circle-sharp","tags":["circle","help","information","knowledge","sharp"]},{"name":"information-outline","tags":["information","outline"]},{"name":"information-sharp","tags":["circle","help","information","knowledge","sharp"]},{"name":"invert-mode","tags":["invert","mode"]},{"name":"invert-mode-outline","tags":["invert","mode","outline"]},{"name":"invert-mode-sharp","tags":["invert","mode","sharp"]},{"name":"journal","tags":["journal"]},{"name":"journal-outline","tags":["journal","outline"]},{"name":"journal-sharp","tags":["journal","sharp"]},{"name":"key","tags":["access","key"]},{"name":"key-outline","tags":["access","key","outline"]},{"name":"key-sharp","tags":["access","key","sharp"]},{"name":"keypad","tags":["keypad","type"]},{"name":"keypad-outline","tags":["keypad","outline","type"]},{"name":"keypad-sharp","tags":["keypad","sharp","type"]},{"name":"language","tags":["language"]},{"name":"language-outline","tags":["language","outline"]},{"name":"language-sharp","tags":["language","sharp"]},{"name":"laptop","tags":["apple","laptop","macbook","osx"]},{"name":"laptop-outline","tags":["apple","laptop","macbook","osx","outline"]},{"name":"laptop-sharp","tags":["apple","laptop","macbook","osx","sharp"]},{"name":"layers","tags":["layers"]},{"name":"layers-outline","tags":["layers","outline"]},{"name":"layers-sharp","tags":["layers","sharp"]},{"name":"leaf","tags":["green","leaf","nature","plant","recycle"]},{"name":"leaf-outline","tags":["green","leaf","nature","outline","plant","recycle"]},{"name":"leaf-sharp","tags":["green","leaf","nature","plant","recycle","sharp"]},{"name":"library","tags":["library"]},{"name":"library-outline","tags":["library","outline"]},{"name":"library-sharp","tags":["library","sharp"]},{"name":"link","tags":["anchor","attach","chain","href","link"]},{"name":"link-outline","tags":["anchor","attach","chain","href","link","outline"]},{"name":"link-sharp","tags":["anchor","attach","chain","href","link","sharp"]},{"name":"list","tags":["list"]},{"name":"list-circle","tags":["circle","list"]},{"name":"list-circle-outline","tags":["circle","list","outline"]},{"name":"list-circle-sharp","tags":["circle","list","sharp"]},{"name":"list-outline","tags":["list","outline"]},{"name":"list-sharp","tags":["list","sharp"]},{"name":"locate","tags":["gps","locate","maps","navigate"]},{"name":"locate-outline","tags":["gps","locate","maps","navigate","outline"]},{"name":"locate-sharp","tags":["gps","locate","maps","navigate","sharp"]},{"name":"location","tags":["location"]},{"name":"location-outline","tags":["location","outline"]},{"name":"location-sharp","tags":["location","sharp"]},{"name":"lock-closed","tags":["closed","lock"]},{"name":"lock-closed-outline","tags":["closed","lock","outline"]},{"name":"lock-closed-sharp","tags":["closed","lock","sharp"]},{"name":"lock-open","tags":["lock","open"]},{"name":"lock-open-outline","tags":["lock","open","outline"]},{"name":"lock-open-sharp","tags":["lock","open","sharp"]},{"name":"log-in","tags":["login","signin"]},{"name":"log-in-outline","tags":["login","outline","signin"]},{"name":"log-in-sharp","tags":["login","sharp","signin"]},{"name":"log-out","tags":["logout","signout"]},{"name":"log-out-outline","tags":["logout","outline","signout"]},{"name":"log-out-sharp","tags":["logout","sharp","signout"]},{"name":"logo-alipay","tags":["alipay","logo"]},{"name":"logo-amazon","tags":["amazon","logo"]},{"name":"logo-amplify","tags":["amplify","logo"]},{"name":"logo-android","tags":["android","logo"]},{"name":"logo-angular","tags":["angular","logo"]},{"name":"logo-appflow","tags":["appflow","logo"]},{"name":"logo-apple","tags":["apple","logo"]},{"name":"logo-apple-appstore","tags":["apple","appstore","logo"]},{"name":"logo-apple-ar","tags":["apple","ar","logo"]},{"name":"logo-behance","tags":["behance","logo"]},{"name":"logo-bitbucket","tags":["bitbucket","logo"]},{"name":"logo-bitcoin","tags":["bitcoin","logo"]},{"name":"logo-buffer","tags":["buffer","logo"]},{"name":"logo-capacitor","tags":["capacitor","logo"]},{"name":"logo-chrome","tags":["chrome","logo"]},{"name":"logo-closed-captioning","tags":["captioning","closed","logo"]},{"name":"logo-codepen","tags":["codepen","logo"]},{"name":"logo-css3","tags":["css3","logo"]},{"name":"logo-designernews","tags":["designernews","logo"]},{"name":"logo-deviantart","tags":["deviantart","logo"]},{"name":"logo-discord","tags":["discord","logo"]},{"name":"logo-docker","tags":["docker","logo"]},{"name":"logo-dribbble","tags":["dribbble","logo"]},{"name":"logo-dropbox","tags":["dropbox","logo"]},{"name":"logo-edge","tags":["edge","logo"]},{"name":"logo-electron","tags":["electron","logo"]},{"name":"logo-euro","tags":["euro","logo"]},{"name":"logo-facebook","tags":["facebook","logo"]},{"name":"logo-figma","tags":["figma","logo"]},{"name":"logo-firebase","tags":["firebase","logo"]},{"name":"logo-firefox","tags":["firefox","logo"]},{"name":"logo-flickr","tags":["flickr","logo"]},{"name":"logo-foursquare","tags":["foursquare","logo"]},{"name":"logo-github","tags":["github","logo"]},{"name":"logo-gitlab","tags":["gitlab","logo"]},{"name":"logo-google","tags":["google","logo"]},{"name":"logo-google-playstore","tags":["google","logo","playstore"]},{"name":"logo-hackernews","tags":["hackernews","logo"]},{"name":"logo-html5","tags":["html5","logo"]},{"name":"logo-instagram","tags":["instagram","logo"]},{"name":"logo-ionic","tags":["ionic","logo"]},{"name":"logo-ionitron","tags":["ionitron","logo"]},{"name":"logo-javascript","tags":["javascript","logo"]},{"name":"logo-laravel","tags":["laravel","logo"]},{"name":"logo-linkedin","tags":["linkedin","logo"]},{"name":"logo-markdown","tags":["logo","markdown"]},{"name":"logo-mastodon","tags":["logo","mastodon"]},{"name":"logo-medium","tags":["logo","medium"]},{"name":"logo-microsoft","tags":["logo","microsoft"]},{"name":"logo-no-smoking","tags":["logo","no","smoking"]},{"name":"logo-nodejs","tags":["logo","nodejs"]},{"name":"logo-npm","tags":["logo","npm"]},{"name":"logo-octocat","tags":["logo","octocat"]},{"name":"logo-paypal","tags":["logo","paypal"]},{"name":"logo-pinterest","tags":["logo","pinterest"]},{"name":"logo-playstation","tags":["logo","playstation"]},{"name":"logo-pwa","tags":["logo","pwa"]},{"name":"logo-python","tags":["logo","python"]},{"name":"logo-react","tags":["logo","react"]},{"name":"logo-reddit","tags":["logo","reddit"]},{"name":"logo-rss","tags":["logo","rss"]},{"name":"logo-sass","tags":["logo","sass"]},{"name":"logo-skype","tags":["logo","skype"]},{"name":"logo-slack","tags":["logo","slack"]},{"name":"logo-snapchat","tags":["logo","snapchat"]},{"name":"logo-soundcloud","tags":["logo","soundcloud"]},{"name":"logo-stackoverflow","tags":["logo","stackoverflow"]},{"name":"logo-steam","tags":["logo","steam"]},{"name":"logo-stencil","tags":["logo","stencil"]},{"name":"logo-tableau","tags":["logo","tableau"]},{"name":"logo-tiktok","tags":["logo","tiktok"]},{"name":"logo-trapeze","tags":["logo","trapeze"]},{"name":"logo-tumblr","tags":["logo","tumblr"]},{"name":"logo-tux","tags":["logo","tux"]},{"name":"logo-twitch","tags":["logo","twitch"]},{"name":"logo-twitter","tags":["logo","twitter","x"]},{"name":"logo-usd","tags":["logo","usd"]},{"name":"logo-venmo","tags":["logo","venmo"]},{"name":"logo-vercel","tags":["logo","vercel"]},{"name":"logo-vimeo","tags":["logo","vimeo"]},{"name":"logo-vk","tags":["logo","vk"]},{"name":"logo-vue","tags":["logo","vue"]},{"name":"logo-web-component","tags":["component","logo","web"]},{"name":"logo-wechat","tags":["logo","wechat"]},{"name":"logo-whatsapp","tags":["logo","whatsapp"]},{"name":"logo-windows","tags":["logo","windows"]},{"name":"logo-wordpress","tags":["logo","wordpress"]},{"name":"logo-x","tags":["logo","twitter","x"]},{"name":"logo-xbox","tags":["logo","xbox"]},{"name":"logo-xing","tags":["logo","xing"]},{"name":"logo-yahoo","tags":["logo","yahoo"]},{"name":"logo-yen","tags":["logo","yen"]},{"name":"logo-youtube","tags":["logo","youtube"]},{"name":"magnet","tags":["attraction","magnet","sticky"]},{"name":"magnet-outline","tags":["attraction","magnet","outline","sticky"]},{"name":"magnet-sharp","tags":["attraction","magnet","sharp","sticky"]},{"name":"mail","tags":["email","mail"]},{"name":"mail-open","tags":["mail","open"]},{"name":"mail-open-outline","tags":["mail","open","outline"]},{"name":"mail-open-sharp","tags":["mail","open","sharp"]},{"name":"mail-outline","tags":["email","mail","outline"]},{"name":"mail-sharp","tags":["email","mail","sharp"]},{"name":"mail-unread","tags":["mail","unread"]},{"name":"mail-unread-outline","tags":["mail","outline","unread"]},{"name":"mail-unread-sharp","tags":["mail","sharp","unread"]},{"name":"male","tags":["boy","dude","guy","male"]},{"name":"male-female","tags":["female","male"]},{"name":"male-female-outline","tags":["female","male","outline"]},{"name":"male-female-sharp","tags":["female","male","sharp"]},{"name":"male-outline","tags":["male","outline"]},{"name":"male-sharp","tags":["boy","dude","guy","male","sharp"]},{"name":"man","tags":["boy","dude","guy","male","man"]},{"name":"man-outline","tags":["boy","dude","guy","male","man","outline"]},{"name":"man-sharp","tags":["boy","dude","guy","male","man","sharp"]},{"name":"map","tags":["gps","map","navigation","pin"]},{"name":"map-outline","tags":["gps","map","navigation","outline","pin"]},{"name":"map-sharp","tags":["gps","map","navigation","pin","sharp"]},{"name":"medal","tags":["medal"]},{"name":"medal-outline","tags":["medal","outline"]},{"name":"medal-sharp","tags":["medal","sharp"]},{"name":"medical","tags":["medical"]},{"name":"medical-outline","tags":["medical","outline"]},{"name":"medical-sharp","tags":["medical","sharp"]},{"name":"medkit","tags":["case","disease","firstaid","health","medkit","sick"]},{"name":"medkit-outline","tags":["case","disease","firstaid","health","medkit","outline","sick"]},{"name":"medkit-sharp","tags":["case","disease","firstaid","health","medkit","sharp","sick"]},{"name":"megaphone","tags":["megaphone"]},{"name":"megaphone-outline","tags":["megaphone","outline"]},{"name":"megaphone-sharp","tags":["megaphone","sharp"]},{"name":"menu","tags":["menu"]},{"name":"menu-outline","tags":["menu","outline"]},{"name":"menu-sharp","tags":["menu","sharp"]},{"name":"mic","tags":["mic","noise","sound","speaker","talk"]},{"name":"mic-circle","tags":["circle","mic","noise","sound","speaker","talk"]},{"name":"mic-circle-outline","tags":["circle","mic","noise","outline","sound","speaker","talk"]},{"name":"mic-circle-sharp","tags":["circle","mic","noise","sharp","sound","speaker","talk"]},{"name":"mic-off","tags":["mic","noise","off","sound","speaker","talk"]},{"name":"mic-off-circle","tags":["circle","mic","noise","off","sound","speaker","talk"]},{"name":"mic-off-circle-outline","tags":["circle","mic","noise","off","outline","sound","speaker","talk"]},{"name":"mic-off-circle-sharp","tags":["circle","mic","noise","off","sharp","sound","speaker","talk"]},{"name":"mic-off-outline","tags":["mic","noise","off","outline","sound","speaker","talk"]},{"name":"mic-off-sharp","tags":["mic","noise","off","sharp","sound","speaker","talk"]},{"name":"mic-outline","tags":["mic","noise","outline","sound","speaker","talk"]},{"name":"mic-sharp","tags":["mic","noise","sharp","sound","speaker","talk"]},{"name":"moon","tags":["dark","moon","night","sky"]},{"name":"moon-outline","tags":["dark","moon","night","outline","sky"]},{"name":"moon-sharp","tags":["dark","moon","night","sharp","sky"]},{"name":"move","tags":["move"]},{"name":"move-outline","tags":["move","outline"]},{"name":"move-sharp","tags":["move","sharp"]},{"name":"musical-note","tags":["listening","musical","noise","note","play","sound"]},{"name":"musical-note-outline","tags":["listening","musical","noise","note","outline","play","sound"]},{"name":"musical-note-sharp","tags":["listening","musical","noise","note","play","sharp","sound"]},{"name":"musical-notes","tags":["listening","musical","noise","notes","play","sound"]},{"name":"musical-notes-outline","tags":["listening","musical","noise","notes","outline","play","sound"]},{"name":"musical-notes-sharp","tags":["listening","musical","noise","notes","play","sharp","sound"]},{"name":"navigate","tags":["gps","location","map","navigate","pin"]},{"name":"navigate-circle","tags":["circle","gps","location","map","navigate","pin"]},{"name":"navigate-circle-outline","tags":["circle","gps","location","map","navigate","outline","pin"]},{"name":"navigate-circle-sharp","tags":["circle","gps","location","map","navigate","pin","sharp"]},{"name":"navigate-outline","tags":["gps","location","map","navigate","outline","pin"]},{"name":"navigate-sharp","tags":["gps","location","map","navigate","pin","sharp"]},{"name":"newspaper","tags":["newspaper"]},{"name":"newspaper-outline","tags":["newspaper","outline"]},{"name":"newspaper-sharp","tags":["newspaper","sharp"]},{"name":"notifications","tags":["notifications"]},{"name":"notifications-circle","tags":["circle","notifications"]},{"name":"notifications-circle-outline","tags":["circle","notifications","outline"]},{"name":"notifications-circle-sharp","tags":["circle","notifications","sharp"]},{"name":"notifications-off","tags":["notifications","off"]},{"name":"notifications-off-circle","tags":["circle","notifications","off"]},{"name":"notifications-off-circle-outline","tags":["circle","notifications","off","outline"]},{"name":"notifications-off-circle-sharp","tags":["circle","notifications","off","sharp"]},{"name":"notifications-off-outline","tags":["notifications","off","outline"]},{"name":"notifications-off-sharp","tags":["notifications","off","sharp"]},{"name":"notifications-outline","tags":["notifications","outline"]},{"name":"notifications-sharp","tags":["notifications","sharp"]},{"name":"nuclear","tags":["danger","hazard","nuclear","warning"]},{"name":"nuclear-outline","tags":["danger","hazard","nuclear","outline","warning"]},{"name":"nuclear-sharp","tags":["danger","hazard","nuclear","sharp","warning"]},{"name":"nutrition","tags":["nutrition"]},{"name":"nutrition-outline","tags":["nutrition","outline"]},{"name":"nutrition-sharp","tags":["nutrition","sharp"]},{"name":"open","tags":["anchor","external","link","open"]},{"name":"open-outline","tags":["open","outline"]},{"name":"open-sharp","tags":["open","sharp"]},{"name":"options","tags":["options"]},{"name":"options-outline","tags":["options","outline"]},{"name":"options-sharp","tags":["options","sharp"]},{"name":"paper-plane","tags":["paper","plane"]},{"name":"paper-plane-outline","tags":["outline","paper","plane"]},{"name":"paper-plane-sharp","tags":["paper","plane","sharp"]},{"name":"partly-sunny","tags":["partly","sunny"]},{"name":"partly-sunny-outline","tags":["outline","partly","sunny"]},{"name":"partly-sunny-sharp","tags":["partly","sharp","sunny"]},{"name":"pause","tags":["break","freeze","hold","music","pause"]},{"name":"pause-circle","tags":["break","circle","freeze","hold","music","pause"]},{"name":"pause-circle-outline","tags":["break","circle","freeze","hold","music","outline","pause"]},{"name":"pause-circle-sharp","tags":["break","circle","freeze","hold","music","pause","sharp"]},{"name":"pause-outline","tags":["break","freeze","hold","music","outline","pause"]},{"name":"pause-sharp","tags":["break","freeze","hold","music","pause","sharp"]},{"name":"paw","tags":["paw"]},{"name":"paw-outline","tags":["outline","paw"]},{"name":"paw-sharp","tags":["paw","sharp"]},{"name":"pencil","tags":["pencil"]},{"name":"pencil-outline","tags":["outline","pencil"]},{"name":"pencil-sharp","tags":["pencil","sharp"]},{"name":"people","tags":["head","human","people","person","stalker","users"]},{"name":"people-circle","tags":["circle","head","human","people","person","stalker","users"]},{"name":"people-circle-outline","tags":["circle","head","human","outline","people","person","stalker","users"]},{"name":"people-circle-sharp","tags":["circle","head","human","people","person","sharp","stalker","users"]},{"name":"people-outline","tags":["head","human","outline","people","person","stalker","users"]},{"name":"people-sharp","tags":["head","human","people","person","sharp","stalker","users"]},{"name":"person","tags":["head","human","person","staff","users"]},{"name":"person-add","tags":["add","head","human","member","new","person","staff","users"]},{"name":"person-add-outline","tags":["add","head","human","member","new","outline","person","staff","users"]},{"name":"person-add-sharp","tags":["add","head","human","member","new","person","sharp","staff","users"]},{"name":"person-circle","tags":["circle","head","human","person","staff","users"]},{"name":"person-circle-outline","tags":["circle","head","human","outline","person","staff","users"]},{"name":"person-circle-sharp","tags":["circle","head","human","person","sharp","staff","users"]},{"name":"person-outline","tags":["head","human","outline","person","staff","users"]},{"name":"person-remove","tags":["person","remove"]},{"name":"person-remove-outline","tags":["outline","person","remove"]},{"name":"person-remove-sharp","tags":["person","remove","sharp"]},{"name":"person-sharp","tags":["head","human","person","sharp","staff","users"]},{"name":"phone-landscape","tags":["landscape","phone"]},{"name":"phone-landscape-outline","tags":["landscape","outline","phone"]},{"name":"phone-landscape-sharp","tags":["landscape","phone","sharp"]},{"name":"phone-portrait","tags":["phone","portrait"]},{"name":"phone-portrait-outline","tags":["outline","phone","portrait"]},{"name":"phone-portrait-sharp","tags":["phone","portrait","sharp"]},{"name":"pie-chart","tags":["chart","pie"]},{"name":"pie-chart-outline","tags":["chart","outline","pie"]},{"name":"pie-chart-sharp","tags":["chart","pie","sharp"]},{"name":"pin","tags":["gps","location","navigation","pin"]},{"name":"pin-outline","tags":["gps","location","navigation","outline","pin"]},{"name":"pin-sharp","tags":["gps","location","navigation","pin","sharp"]},{"name":"pint","tags":["pint"]},{"name":"pint-outline","tags":["outline","pint"]},{"name":"pint-sharp","tags":["pint","sharp"]},{"name":"pizza","tags":["drink","eat","food","pizza"]},{"name":"pizza-outline","tags":["drink","eat","food","outline","pizza"]},{"name":"pizza-sharp","tags":["drink","eat","food","pizza","sharp"]},{"name":"planet","tags":["globe","home","nature","planet","space","world"]},{"name":"planet-outline","tags":["globe","home","nature","outline","planet","space","world"]},{"name":"planet-sharp","tags":["globe","home","nature","planet","sharp","space","world"]},{"name":"play","tags":["arrow","music","play","right","watch"]},{"name":"play-back","tags":["back","left","play"]},{"name":"play-back-circle","tags":["back","circle","left","play"]},{"name":"play-back-circle-outline","tags":["back","circle","left","outline","play"]},{"name":"play-back-circle-sharp","tags":["back","circle","left","play","sharp"]},{"name":"play-back-outline","tags":["back","left","outline","play"]},{"name":"play-back-sharp","tags":["back","left","play","sharp"]},{"name":"play-circle","tags":["arrow","circle","music","play","right","watch"]},{"name":"play-circle-outline","tags":["arrow","circle","music","outline","play","right","watch"]},{"name":"play-circle-sharp","tags":["arrow","circle","music","play","right","sharp","watch"]},{"name":"play-forward","tags":["forward","play","right"]},{"name":"play-forward-circle","tags":["circle","forward","play","right"]},{"name":"play-forward-circle-outline","tags":["circle","forward","outline","play","right"]},{"name":"play-forward-circle-sharp","tags":["circle","forward","play","right","sharp"]},{"name":"play-forward-outline","tags":["forward","outline","play","right"]},{"name":"play-forward-sharp","tags":["forward","play","right","sharp"]},{"name":"play-outline","tags":["arrow","music","outline","play","right","watch"]},{"name":"play-sharp","tags":["arrow","music","play","right","sharp","watch"]},{"name":"play-skip-back","tags":["back","left","play","skip"]},{"name":"play-skip-back-circle","tags":["back","circle","left","play","skip"]},{"name":"play-skip-back-circle-outline","tags":["back","circle","left","outline","play","skip"]},{"name":"play-skip-back-circle-sharp","tags":["back","circle","left","play","sharp","skip"]},{"name":"play-skip-back-outline","tags":["back","left","outline","play","skip"]},{"name":"play-skip-back-sharp","tags":["back","left","play","sharp","skip"]},{"name":"play-skip-forward","tags":["forward","play","skip"]},{"name":"play-skip-forward-circle","tags":["circle","forward","play","right","skip"]},{"name":"play-skip-forward-circle-outline","tags":["circle","forward","outline","play","right","skip"]},{"name":"play-skip-forward-circle-sharp","tags":["circle","forward","play","right","sharp","skip"]},{"name":"play-skip-forward-outline","tags":["forward","outline","play","right","skip"]},{"name":"play-skip-forward-sharp","tags":["forward","play","right","sharp","skip"]},{"name":"podium","tags":["award","compete","competition","lose","podium","win"]},{"name":"podium-outline","tags":["award","compete","competition","lose","outline","podium","win"]},{"name":"podium-sharp","tags":["award","compete","competition","lose","podium","sharp","win"]},{"name":"power","tags":["off","on","power"]},{"name":"power-outline","tags":["off","on","outline","power"]},{"name":"power-sharp","tags":["off","on","power","sharp"]},{"name":"pricetag","tags":["$","commerce","items","money","pricetag","shopping"]},{"name":"pricetag-outline","tags":["$","commerce","items","money","outline","pricetag","shopping"]},{"name":"pricetag-sharp","tags":["$","commerce","items","money","pricetag","sharp","shopping"]},{"name":"pricetags","tags":["$","commerce","items","money","pricetags","shopping"]},{"name":"pricetags-outline","tags":["$","commerce","items","money","outline","pricetags","shopping"]},{"name":"pricetags-sharp","tags":["$","commerce","items","money","pricetags","sharp","shopping"]},{"name":"print","tags":["fax","print"]},{"name":"print-outline","tags":["fax","outline","print"]},{"name":"print-sharp","tags":["fax","print","sharp"]},{"name":"prism","tags":["prism"]},{"name":"prism-outline","tags":["outline","prism"]},{"name":"prism-sharp","tags":["prism","sharp"]},{"name":"pulse","tags":["hot","live","pulse","rate"]},{"name":"pulse-outline","tags":["hot","live","outline","pulse","rate"]},{"name":"pulse-sharp","tags":["hot","live","pulse","rate","sharp"]},{"name":"push","tags":["push"]},{"name":"push-outline","tags":["outline","push"]},{"name":"push-sharp","tags":["push","sharp"]},{"name":"qr-code","tags":["code","qr"]},{"name":"qr-code-outline","tags":["code","outline","qr"]},{"name":"qr-code-sharp","tags":["code","qr","sharp"]},{"name":"radio","tags":["music","radio"]},{"name":"radio-button-off","tags":["button","off","radio"]},{"name":"radio-button-off-outline","tags":["button","off","outline","radio"]},{"name":"radio-button-off-sharp","tags":["button","off","radio","sharp"]},{"name":"radio-button-on","tags":["button","on","radio"]},{"name":"radio-button-on-outline","tags":["button","on","outline","radio"]},{"name":"radio-button-on-sharp","tags":["button","on","radio","sharp"]},{"name":"radio-outline","tags":["music","outline","radio"]},{"name":"radio-sharp","tags":["music","radio","sharp"]},{"name":"rainy","tags":["cloud","rainy","water","weather","whether"]},{"name":"rainy-outline","tags":["cloud","outline","rainy","water","weather","whether"]},{"name":"rainy-sharp","tags":["cloud","rainy","sharp","water","weather","whether"]},{"name":"reader","tags":["reader"]},{"name":"reader-outline","tags":["outline","reader"]},{"name":"reader-sharp","tags":["reader","sharp"]},{"name":"receipt","tags":["receipt"]},{"name":"receipt-outline","tags":["outline","receipt"]},{"name":"receipt-sharp","tags":["receipt","sharp"]},{"name":"recording","tags":["film","recording","tape","voicemail"]},{"name":"recording-outline","tags":["film","outline","recording","tape","voicemail"]},{"name":"recording-sharp","tags":["film","recording","sharp","tape","voicemail"]},{"name":"refresh","tags":["circle","refresh","reload","renew","reset"]},{"name":"refresh-circle","tags":["circle","refresh","reload","renew","reset"]},{"name":"refresh-circle-outline","tags":["circle","outline","refresh","reload","renew","reset"]},{"name":"refresh-circle-sharp","tags":["circle","refresh","reload","renew","reset","sharp"]},{"name":"refresh-outline","tags":["outline","refresh"]},{"name":"refresh-sharp","tags":["circle","refresh","reload","renew","reset","sharp"]},{"name":"reload","tags":["reload"]},{"name":"reload-circle","tags":["circle","reload"]},{"name":"reload-circle-outline","tags":["circle","outline","reload"]},{"name":"reload-circle-sharp","tags":["circle","reload","sharp"]},{"name":"reload-outline","tags":["outline","reload"]},{"name":"reload-sharp","tags":["reload","sharp"]},{"name":"remove","tags":["circle","minus","remove","subtract"]},{"name":"remove-circle","tags":["circle","minus","remove","subtract"]},{"name":"remove-circle-outline","tags":["circle","minus","outline","remove","subtract"]},{"name":"remove-circle-sharp","tags":["circle","minus","remove","sharp","subtract"]},{"name":"remove-outline","tags":["outline","remove"]},{"name":"remove-sharp","tags":["circle","minus","remove","sharp","subtract"]},{"name":"reorder-four","tags":["four","reorder"]},{"name":"reorder-four-outline","tags":["four","outline","reorder"]},{"name":"reorder-four-sharp","tags":["four","reorder","sharp"]},{"name":"reorder-three","tags":["reorder","three"]},{"name":"reorder-three-outline","tags":["outline","reorder","three"]},{"name":"reorder-three-sharp","tags":["reorder","sharp","three"]},{"name":"reorder-two","tags":["reorder","two"]},{"name":"reorder-two-outline","tags":["outline","reorder","two"]},{"name":"reorder-two-sharp","tags":["reorder","sharp","two"]},{"name":"repeat","tags":["repeat"]},{"name":"repeat-outline","tags":["outline","repeat"]},{"name":"repeat-sharp","tags":["repeat","sharp"]},{"name":"resize","tags":["resize"]},{"name":"resize-outline","tags":["outline","resize"]},{"name":"resize-sharp","tags":["resize","sharp"]},{"name":"restaurant","tags":["eat","restaurant"]},{"name":"restaurant-outline","tags":["eat","outline","restaurant"]},{"name":"restaurant-sharp","tags":["eat","restaurant","sharp"]},{"name":"return-down-back","tags":["back","down","left","return"]},{"name":"return-down-back-outline","tags":["back","down","left","outline","return"]},{"name":"return-down-back-sharp","tags":["back","down","left","return","sharp"]},{"name":"return-down-forward","tags":["down","forward","return","right"]},{"name":"return-down-forward-outline","tags":["down","forward","outline","return","right"]},{"name":"return-down-forward-sharp","tags":["down","forward","return","right","sharp"]},{"name":"return-up-back","tags":["back","left","return","up"]},{"name":"return-up-back-outline","tags":["back","left","outline","return","up"]},{"name":"return-up-back-sharp","tags":["back","left","return","sharp","up"]},{"name":"return-up-forward","tags":["forward","return","right","up"]},{"name":"return-up-forward-outline","tags":["forward","outline","return","right","up"]},{"name":"return-up-forward-sharp","tags":["forward","return","right","sharp","up"]},{"name":"ribbon","tags":["ribbon"]},{"name":"ribbon-outline","tags":["outline","ribbon"]},{"name":"ribbon-sharp","tags":["ribbon","sharp"]},{"name":"rocket","tags":["rocket"]},{"name":"rocket-outline","tags":["outline","rocket"]},{"name":"rocket-sharp","tags":["rocket","sharp"]},{"name":"rose","tags":["flower","rose"]},{"name":"rose-outline","tags":["flower","outline","rose"]},{"name":"rose-sharp","tags":["flower","rose","sharp"]},{"name":"sad","tags":["bad","cry","no","sad"]},{"name":"sad-outline","tags":["bad","cry","no","outline","sad"]},{"name":"sad-sharp","tags":["bad","cry","no","sad","sharp"]},{"name":"save","tags":["save"]},{"name":"save-outline","tags":["outline","save"]},{"name":"save-sharp","tags":["save","sharp"]},{"name":"scale","tags":["scale"]},{"name":"scale-outline","tags":["outline","scale"]},{"name":"scale-sharp","tags":["scale","sharp"]},{"name":"scan","tags":["scan"]},{"name":"scan-circle","tags":["circle","scan"]},{"name":"scan-circle-outline","tags":["circle","outline","scan"]},{"name":"scan-circle-sharp","tags":["circle","scan","sharp"]},{"name":"scan-outline","tags":["outline","scan"]},{"name":"scan-sharp","tags":["scan","sharp"]},{"name":"school","tags":["school"]},{"name":"school-outline","tags":["outline","school"]},{"name":"school-sharp","tags":["school","sharp"]},{"name":"search","tags":["glass","magnifying","search"]},{"name":"search-circle","tags":["circle","glass","magnifying","search"]},{"name":"search-circle-outline","tags":["circle","glass","magnifying","outline","search"]},{"name":"search-circle-sharp","tags":["circle","glass","magnifying","search","sharp"]},{"name":"search-outline","tags":["glass","magnifying","outline","search"]},{"name":"search-sharp","tags":["glass","magnifying","search","sharp"]},{"name":"send","tags":["email","paper","send"]},{"name":"send-outline","tags":["email","outline","paper","send"]},{"name":"send-sharp","tags":["email","paper","send","sharp"]},{"name":"server","tags":["server"]},{"name":"server-outline","tags":["outline","server"]},{"name":"server-sharp","tags":["server","sharp"]},{"name":"settings","tags":["options","settings"]},{"name":"settings-outline","tags":["options","outline","settings"]},{"name":"settings-sharp","tags":["options","settings","sharp"]},{"name":"shapes","tags":["shapes"]},{"name":"shapes-outline","tags":["outline","shapes"]},{"name":"shapes-sharp","tags":["shapes","sharp"]},{"name":"share","tags":["share"]},{"name":"share-outline","tags":["outline","share"]},{"name":"share-sharp","tags":["share","sharp"]},{"name":"share-social","tags":["share","social"]},{"name":"share-social-outline","tags":["outline","share","social"]},{"name":"share-social-sharp","tags":["share","sharp","social"]},{"name":"shield","tags":["shield"]},{"name":"shield-checkmark","tags":["checkmark","shield"]},{"name":"shield-checkmark-outline","tags":["checkmark","outline","shield"]},{"name":"shield-checkmark-sharp","tags":["checkmark","sharp","shield"]},{"name":"shield-half","tags":["half","shield"]},{"name":"shield-half-outline","tags":["half","outline","shield"]},{"name":"shield-half-sharp","tags":["half","sharp","shield"]},{"name":"shield-outline","tags":["outline","shield"]},{"name":"shield-sharp","tags":["sharp","shield"]},{"name":"shirt","tags":["shirt"]},{"name":"shirt-outline","tags":["outline","shirt"]},{"name":"shirt-sharp","tags":["sharp","shirt"]},{"name":"shuffle","tags":["random","shuffle"]},{"name":"shuffle-outline","tags":["outline","shuffle"]},{"name":"shuffle-sharp","tags":["random","sharp","shuffle"]},{"name":"skull","tags":["skull"]},{"name":"skull-outline","tags":["outline","skull"]},{"name":"skull-sharp","tags":["sharp","skull"]},{"name":"snow","tags":["cold","snow"]},{"name":"snow-outline","tags":["cold","outline","snow"]},{"name":"snow-sharp","tags":["cold","sharp","snow"]},{"name":"sparkles","tags":["sparkles"]},{"name":"sparkles-outline","tags":["outline","sparkles"]},{"name":"sparkles-sharp","tags":["sharp","sparkles"]},{"name":"speedometer","tags":["drive","level","speed","speedometer"]},{"name":"speedometer-outline","tags":["drive","level","outline","speed","speedometer"]},{"name":"speedometer-sharp","tags":["drive","level","sharp","speed","speedometer"]},{"name":"square","tags":["square"]},{"name":"square-outline","tags":["outline","square"]},{"name":"square-sharp","tags":["sharp","square"]},{"name":"star","tags":["favorite","star"]},{"name":"star-half","tags":["favorite","half","rate","star"]},{"name":"star-half-outline","tags":["half","outline","star"]},{"name":"star-half-sharp","tags":["favorite","half","rate","sharp","star"]},{"name":"star-outline","tags":["favorite","outline","star"]},{"name":"star-sharp","tags":["favorite","sharp","star"]},{"name":"stats-chart","tags":["chart","stats"]},{"name":"stats-chart-outline","tags":["chart","outline","stats"]},{"name":"stats-chart-sharp","tags":["chart","sharp","stats"]},{"name":"stop","tags":["stop"]},{"name":"stop-circle","tags":["circle","stop"]},{"name":"stop-circle-outline","tags":["circle","outline","stop"]},{"name":"stop-circle-sharp","tags":["circle","sharp","stop"]},{"name":"stop-outline","tags":["outline","stop"]},{"name":"stop-sharp","tags":["sharp","stop"]},{"name":"stopwatch","tags":["stopwatch","time"]},{"name":"stopwatch-outline","tags":["outline","stopwatch","time"]},{"name":"stopwatch-sharp","tags":["sharp","stopwatch","time"]},{"name":"storefront","tags":["storefront"]},{"name":"storefront-outline","tags":["outline","storefront"]},{"name":"storefront-sharp","tags":["sharp","storefront"]},{"name":"subway","tags":["subway"]},{"name":"subway-outline","tags":["outline","subway"]},{"name":"subway-sharp","tags":["sharp","subway"]},{"name":"sunny","tags":["light","sky","sunny","weather","whether"]},{"name":"sunny-outline","tags":["light","outline","sky","sunny","weather","whether"]},{"name":"sunny-sharp","tags":["light","sharp","sky","sunny","weather","whether"]},{"name":"swap-horizontal","tags":["horizontal","swap"]},{"name":"swap-horizontal-outline","tags":["horizontal","outline","swap"]},{"name":"swap-horizontal-sharp","tags":["horizontal","sharp","swap"]},{"name":"swap-vertical","tags":["swap","vertical"]},{"name":"swap-vertical-outline","tags":["outline","swap","vertical"]},{"name":"swap-vertical-sharp","tags":["sharp","swap","vertical"]},{"name":"sync","tags":["sync"]},{"name":"sync-circle","tags":["circle","sync"]},{"name":"sync-circle-outline","tags":["circle","outline","sync"]},{"name":"sync-circle-sharp","tags":["circle","sharp","sync"]},{"name":"sync-outline","tags":["outline","sync"]},{"name":"sync-sharp","tags":["sharp","sync"]},{"name":"tablet-landscape","tags":["landscape","tablet"]},{"name":"tablet-landscape-outline","tags":["landscape","outline","tablet"]},{"name":"tablet-landscape-sharp","tags":["landscape","sharp","tablet"]},{"name":"tablet-portrait","tags":["portrait","tablet"]},{"name":"tablet-portrait-outline","tags":["outline","portrait","tablet"]},{"name":"tablet-portrait-sharp","tags":["portrait","sharp","tablet"]},{"name":"telescope","tags":["telescope"]},{"name":"telescope-outline","tags":["outline","telescope"]},{"name":"telescope-sharp","tags":["sharp","telescope"]},{"name":"tennisball","tags":["tennisball"]},{"name":"tennisball-outline","tags":["outline","tennisball"]},{"name":"tennisball-sharp","tags":["sharp","tennisball"]},{"name":"terminal","tags":["terminal"]},{"name":"terminal-outline","tags":["outline","terminal"]},{"name":"terminal-sharp","tags":["sharp","terminal"]},{"name":"text","tags":["text"]},{"name":"text-outline","tags":["outline","text"]},{"name":"text-sharp","tags":["sharp","text"]},{"name":"thermometer","tags":["cold","heat","hot","mercury","temperature","thermometer"]},{"name":"thermometer-outline","tags":["cold","heat","hot","mercury","outline","temperature","thermometer"]},{"name":"thermometer-sharp","tags":["cold","heat","hot","mercury","sharp","temperature","thermometer"]},{"name":"thumbs-down","tags":["down","thumbs"]},{"name":"thumbs-down-outline","tags":["down","outline","thumbs"]},{"name":"thumbs-down-sharp","tags":["down","sharp","thumbs"]},{"name":"thumbs-up","tags":["thumbs","up"]},{"name":"thumbs-up-outline","tags":["outline","thumbs","up"]},{"name":"thumbs-up-sharp","tags":["sharp","thumbs","up"]},{"name":"thunderstorm","tags":["cloudy","lightning","overcast","rain","sky","storm","thunderstorm","weather","whether"]},{"name":"thunderstorm-outline","tags":["cloudy","lightning","outline","overcast","rain","sky","storm","thunderstorm","weather","whether"]},{"name":"thunderstorm-sharp","tags":["cloudy","lightning","overcast","rain","sharp","sky","storm","thunderstorm","weather","whether"]},{"name":"ticket","tags":["ticket"]},{"name":"ticket-outline","tags":["outline","ticket"]},{"name":"ticket-sharp","tags":["sharp","ticket"]},{"name":"time","tags":["clock","hour","minute","second","time","watch"]},{"name":"time-outline","tags":["clock","hour","minute","outline","second","time","watch"]},{"name":"time-sharp","tags":["clock","hour","minute","second","sharp","time","watch"]},{"name":"timer","tags":["clock","timer"]},{"name":"timer-outline","tags":["clock","outline","timer"]},{"name":"timer-sharp","tags":["clock","sharp","timer"]},{"name":"today","tags":["today"]},{"name":"today-outline","tags":["outline","today"]},{"name":"today-sharp","tags":["sharp","today"]},{"name":"toggle","tags":["switch","toggle"]},{"name":"toggle-outline","tags":["outline","switch","toggle"]},{"name":"toggle-sharp","tags":["sharp","switch","toggle"]},{"name":"trail-sign","tags":["sign","trail"]},{"name":"trail-sign-outline","tags":["outline","sign","trail"]},{"name":"trail-sign-sharp","tags":["sharp","sign","trail"]},{"name":"train","tags":["train"]},{"name":"train-outline","tags":["outline","train"]},{"name":"train-sharp","tags":["sharp","train"]},{"name":"transgender","tags":["transgender"]},{"name":"transgender-outline","tags":["outline","transgender"]},{"name":"transgender-sharp","tags":["sharp","transgender"]},{"name":"trash","tags":["close","delete","remove","trash"]},{"name":"trash-bin","tags":["bin","trash"]},{"name":"trash-bin-outline","tags":["bin","outline","trash"]},{"name":"trash-bin-sharp","tags":["bin","sharp","trash"]},{"name":"trash-outline","tags":["close","delete","outline","remove","trash"]},{"name":"trash-sharp","tags":["close","delete","remove","sharp","trash"]},{"name":"trending-down","tags":["down","trending"]},{"name":"trending-down-outline","tags":["down","outline","trending"]},{"name":"trending-down-sharp","tags":["down","sharp","trending"]},{"name":"trending-up","tags":["trending","up"]},{"name":"trending-up-outline","tags":["outline","trending","up"]},{"name":"trending-up-sharp","tags":["sharp","trending","up"]},{"name":"triangle","tags":["triangle"]},{"name":"triangle-outline","tags":["outline","triangle"]},{"name":"triangle-sharp","tags":["sharp","triangle"]},{"name":"trophy","tags":["award","compete","competition","lose","trophy","win"]},{"name":"trophy-outline","tags":["award","compete","competition","lose","outline","trophy","win"]},{"name":"trophy-sharp","tags":["award","compete","competition","lose","sharp","trophy","win"]},{"name":"tv","tags":["television","tv"]},{"name":"tv-outline","tags":["outline","television","tv"]},{"name":"tv-sharp","tags":["sharp","television","tv"]},{"name":"umbrella","tags":["dry","rain","shelter","umbrella","wet"]},{"name":"umbrella-outline","tags":["dry","outline","rain","shelter","umbrella","wet"]},{"name":"umbrella-sharp","tags":["dry","rain","sharp","shelter","umbrella","wet"]},{"name":"unlink","tags":["unlink"]},{"name":"unlink-outline","tags":["outline","unlink"]},{"name":"unlink-sharp","tags":["sharp","unlink"]},{"name":"videocam","tags":["camera","film","movie","videocam"]},{"name":"videocam-off","tags":["off","videocam"]},{"name":"videocam-off-outline","tags":["off","outline","videocam"]},{"name":"videocam-off-sharp","tags":["off","sharp","videocam"]},{"name":"videocam-outline","tags":["camera","film","movie","outline","videocam"]},{"name":"videocam-sharp","tags":["camera","film","movie","sharp","videocam"]},{"name":"volume-high","tags":["high","volume"]},{"name":"volume-high-outline","tags":["high","outline","volume"]},{"name":"volume-high-sharp","tags":["high","sharp","volume"]},{"name":"volume-low","tags":["low","volume"]},{"name":"volume-low-outline","tags":["low","outline","volume"]},{"name":"volume-low-sharp","tags":["low","sharp","volume"]},{"name":"volume-medium","tags":["medium","volume"]},{"name":"volume-medium-outline","tags":["medium","outline","volume"]},{"name":"volume-medium-sharp","tags":["medium","sharp","volume"]},{"name":"volume-mute","tags":["mute","sound","volume"]},{"name":"volume-mute-outline","tags":["mute","outline","sound","volume"]},{"name":"volume-mute-sharp","tags":["mute","sharp","sound","volume"]},{"name":"volume-off","tags":["off","volume"]},{"name":"volume-off-outline","tags":["off","outline","volume"]},{"name":"volume-off-sharp","tags":["off","sharp","volume"]},{"name":"walk","tags":["walk"]},{"name":"walk-outline","tags":["outline","walk"]},{"name":"walk-sharp","tags":["sharp","walk"]},{"name":"wallet","tags":["cash","money","wallet"]},{"name":"wallet-outline","tags":["cash","money","outline","wallet"]},{"name":"wallet-sharp","tags":["cash","money","sharp","wallet"]},{"name":"warning","tags":["warning"]},{"name":"warning-outline","tags":["outline","warning"]},{"name":"warning-sharp","tags":["sharp","warning"]},{"name":"watch","tags":["watch"]},{"name":"watch-outline","tags":["outline","watch"]},{"name":"watch-sharp","tags":["sharp","watch"]},{"name":"water","tags":["water"]},{"name":"water-outline","tags":["outline","water"]},{"name":"water-sharp","tags":["sharp","water"]},{"name":"wifi","tags":["bars","connection","internet","wifi"]},{"name":"wifi-outline","tags":["bars","connection","internet","outline","wifi"]},{"name":"wifi-sharp","tags":["bars","connection","internet","sharp","wifi"]},{"name":"wine","tags":["glass","wine"]},{"name":"wine-outline","tags":["glass","outline","wine"]},{"name":"wine-sharp","tags":["glass","sharp","wine"]},{"name":"woman","tags":["dudette","female","girl","lady","woman"]},{"name":"woman-outline","tags":["dudette","female","girl","lady","outline","woman"]},{"name":"woman-sharp","tags":["dudette","female","girl","lady","sharp","woman"]}]}');

/***/ }),

/***/ "./src/blocks/styled-button/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/styled-button/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"rapid/styled-button","version":"0.1.0","title":"Styled Button","category":"rapid-theme","icon":"button","description":"A button with more advanced style controls than the default Wordpress buttons","attributes":{"url":{"type":"string","default":""},"opensInNewTab":{"type":"boolean","default":false},"label":{"type":"string","default":"Button"},"variant":{"type":"string","default":"primary"},"size":{"type":"string","default":"default"},"display":{"type":"string","default":"inline"},"displayIconLeft":{"type":"boolean","default":false},"iconLeftName":{"type":"string","default":"add-outline"},"displayIconRight":{"type":"boolean","default":false},"iconRightName":{"type":"string","default":"add-outline"}},"example":{},"supports":{"html":false},"textdomain":"styled-button","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/styled-button/index": 0,
/******/ 			"blocks/styled-button/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrapid"] = self["webpackChunkrapid"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/styled-button/style-index"], () => (__webpack_require__("./src/blocks/styled-button/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map