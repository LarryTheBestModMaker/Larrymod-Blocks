/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Checkbox field.  Checked or not checked.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldCheckboxOriginal');

goog.require('Blockly.Colours');
goog.require('Blockly.Field');

// basic utility function
const updateCheckColor = (field) => {
  const srcBlock = field.sourceBlock_;
  if (!srcBlock) return;
  if (field.state_ == "TRUE") srcBlock.setShadowColour("#33D833");
  else if (srcBlock.parentBlock_) {
    srcBlock.shadowColour_ = "#00000035";
    srcBlock.updateColour();
    if (srcBlock.svgPath_) srcBlock.svgPath_.setAttribute("stroke", "#00000000");
  }
  if (field.checkBackground_) field.checkBackground_.setAttribute('fill', field.state_ == "TRUE" ? "#33D833" : srcBlock.getColourTertiary());
};

/**
 * Class for a checkbox field.
 * @param {string} state The initial state of the field ('TRUE' or 'FALSE').
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new checkbox state.  If
 *     it returns a value, this becomes the new checkbox state, unless the
 *     value is null, in which case the change is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldCheckboxOriginal = function(state, opt_validator) {
  Blockly.FieldCheckboxOriginal.superClass_.constructor.call(this, '', opt_validator);
  // Set the initial state.
  this.setValue(state);
  this.addArgType('checkbox');
};
goog.inherits(Blockly.FieldCheckboxOriginal, Blockly.Field);

/**
 * Construct a FieldCheckbox from a JSON arg object.
 * @param {!Object} options A JSON object with options (checked).
 * @returns {!Blockly.FieldCheckboxOriginal} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldCheckboxOriginal.fromJson = function(options) {
  return new Blockly.FieldCheckboxOriginal(options['checked'] ? 'TRUE' : 'FALSE');
};

Blockly.FieldCheckboxOriginal.SYMBOL_FALSE = 'M -2.5 -4.5 A 1 1 0 0 0 -4.5 -2.5 L -2 0 L -4.5 2.5 A 1 1 0 0 0 -2.5 4.5 L 0 2 L 2.5 4.5 A 1 1 0 0 0 4.5 2.5 L 2 0 L 4.5 -2.5 A 1 1 0 0 0 2.5 -4.5 L 0 -2 Z'

Blockly.FieldCheckboxOriginal.SYMBOL_TRUE = 'M -4.5 1.5 A 1 1 90 0 1 -2.5 -0.5 L -1.5 0.5 L 2.5 -3.5 A 1 1 0 0 1 4.5 -1.5 L -0.5 3.5 Q -1.5 4.5 -2.5 3.5 Z'

/**
 * Mouse cursor style when over the hotspot that initiates editability.
 */
Blockly.FieldCheckboxOriginal.prototype.CURSOR = 'pointer';

/**
 * Install this checkbox on a block.
 */
Blockly.FieldCheckboxOriginal.prototype.init = function() {
  if (this.fieldGroup_) {
    // Checkbox has already been initialized once.
    return;
  }
  Blockly.FieldCheckboxOriginal.superClass_.init.call(this);
  if (this.sourceBlock_ && this.sourceBlock_.type !== "checkbox") {
    this.checkBackground_ = Blockly.utils.createSvgElement('path',
      {
        'd': 'M25.9 2.5H6.1A3.6 3.6 90 002.5 6.1v19.8A3.6 3.6 90 006.1 29.5h19.8a3.6 3.6 90 003.6-3.6V6.1A3.6 3.6 90 0025.9 2.5'
      },
      this.fieldGroup_
    )
  }
  // The checkbox doesn't use the inherited text element.
  // Instead it uses a custom checkmark element that is either visible or not.
  this.checkElement_ = Blockly.utils.createSvgElement('path',
    {
      'class': 'blocklyText blocklyCheckbox',
      'transform': `translate(${this.textElement_.getAttribute('x')},${this.textElement_.getAttribute('y')-2}) scale(1.5)`
    },
    this.fieldGroup_
  );
  this.setValue(this.getValue());
  this.checkElement_.setAttribute('d', this.state_ == "TRUE" ? Blockly.FieldCheckboxOriginal.SYMBOL_TRUE : Blockly.FieldCheckboxOriginal.SYMBOL_FALSE);
  this.checkElement_.setAttribute('opacity', this.state_ == "TRUE" ? 1 : 0.5);
  queueMicrotask(() => updateCheckColor(this));
};

/**
 * Return 'TRUE' if the checkbox is checked, 'FALSE' otherwise.
 * @return {string} Current state.
 */
Blockly.FieldCheckboxOriginal.prototype.getValue = function() {
  return String(this.state_).toUpperCase();
};

/**
 * Set the checkbox to be checked if newBool is 'TRUE' or true,
 * unchecks otherwise.
 * @param {string|boolean} newBool New state.
 */
Blockly.FieldCheckboxOriginal.prototype.setValue = function(newBool) {
  var newState = (typeof newBool == 'string') ? (newBool.toUpperCase() == 'TRUE' ? 'TRUE' : 'FALSE') : String(!!newBool).toUpperCase();
  if (this.state_ !== newState) {
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(
          this.sourceBlock_, 'field', this.name, this.state_, newState));
    }
    this.state_ = newState;
    if (this.checkElement_) {
      this.checkElement_.setAttribute('d', this.state_ == "TRUE" ? Blockly.FieldCheckboxOriginal.SYMBOL_TRUE : Blockly.FieldCheckboxOriginal.SYMBOL_FALSE);
      this.checkElement_.setAttribute('opacity', this.state_ == "TRUE" ? 1 : 0.5);
    }
    if (this.sourceBlock_ && !this.sourceBlock_.isInsertionMarker()) updateCheckColor(this);
  }
};

/**
 * Toggle the state of the checkbox.
 * @private
 */
Blockly.FieldCheckboxOriginal.prototype.showEditor_ = function() {
  var newState = this.state_ == "TRUE" ? "FALSE" : "TRUE";
  if (this.sourceBlock_) {
    // Call any validation function, and allow it to override.
    newState = this.callValidator(newState);
  }
  if (newState !== null) {
    this.setValue(String(newState).toUpperCase());
  }
};

Blockly.FieldCheckboxOriginal.prototype.updateWidth = function() {
  Blockly.FieldCheckboxOriginal.superClass_.updateWidth.call(this)
  this.size_.width = 8 * Blockly.BlockSvg.GRID_UNIT
}

Blockly.FieldCheckboxOriginal.prototype.getClickTarget_ = function() {
  let output = Blockly.FieldCheckboxOriginal.superClass_.getClickTarget_.call(this)
  return this.sourceBlock_ && this.sourceBlock_.type !== "checkbox" ? this.fieldGroup_ : output
}

Blockly.Field.register('field_checkbox_original', Blockly.FieldCheckboxOriginal);
