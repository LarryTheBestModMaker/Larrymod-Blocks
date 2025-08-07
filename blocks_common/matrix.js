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
 * @fileoverview Matrix blocks for Blockly.
 * @author khanning@gmail.com (Kreg Hanning)
 */
'use strict';

goog.provide('Blockly.Blocks.matrix');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

goog.require('Blockly.constants');

Blockly.Blocks['matrix'] = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function() {
    this.width = 5;
    this.height = 5;

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_matrix",
          "name": "MATRIX",
          "width": this.width,
          "height": this.height
        }
      ],
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "output": "Number",
      "extensions": ["colours_pen"]
    });
  },
  mutationToDom: function() {
    const container = document.createElement('mutation');
    const field = this.getField('MATRIX')

    container.setAttribute('width', field.matrixWidth);
    container.setAttribute('height', field.matrixHeight);
    return container;
  },
  domToMutation: function(xmlElement) {
    const width = parseInt(xmlElement.getAttribute('width'), 10);
    const height = parseInt(xmlElement.getAttribute('height'), 10);

    const field = this.getField('MATRIX')
    field.matrixWidth = width;
    field.matrixHeight = height;
  },
};
