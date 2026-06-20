/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

'use strict';

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks["looks_setFont"] = {
  init: function() {
    this.jsonInit({
      "inputsInline":true,
      "args0":[
        {
          "type":"input_value",
          "name":"font"
        },
        {
          "type":"input_value",
          "name":"size"
        }
      ],
      "message0": Blockly.Msg.LOOKS_SETFONT,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks["looks_setColor"] = {
  init: function() {
    this.jsonInit({
      "inputsInline":true,
      "args0":[
        {
          "type":"field_dropdown",
          "name":"prop",
          "options":[
            [Blockly.Msg.LOOKS_SETCOLOR_BORDER, "BUBBLE_STROKE"],
            [Blockly.Msg.LOOKS_SETCOLOR_FILL, "BUBBLE_FILL"],
            [Blockly.Msg.LOOKS_SETCOLOR_TEXT, "TEXT_FILL"]
          ]
        },
        {
          "type":"input_value",
          "name":"color"
        }
      ],
      "message0": Blockly.Msg.LOOKS_SETCOLOR,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks["looks_setShape"] = {
  init: function() {
    this.jsonInit({
      "inputsInline":true,
      "args0":[
        {
          "type":"field_dropdown",
          "name":"prop",
          "options":[
            [Blockly.Msg.LOOKS_SETSHAPE_MINIMUMWIDTH, "MIN_WIDTH"],
            [Blockly.Msg.LOOKS_SETSHAPE_MAXIMUMWIDTH, "MAX_LINE_WIDTH"],
            ["border line width", "STROKE_WIDTH"],
            ["padding size", "PADDING"],
            ["corner radius", "CORNER_RADIUS"],
            ["tail height", "TAIL_HEIGHT"],
            ["font pading percent", "FONT_HEIGHT_RATIO"],
            ["text length limit", "texlim"]
          ]
        },
        {
          "type":"input_value",
          "name":"color"
        }
      ],
      "message0": Blockly.Msg.LOOKS_SETSHAPE,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOW,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDE,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};


Blockly.Blocks['looks_changeVisibilityOfSprite_menu'] = {
  /**
   * pm: changeVisibilityOfSprite drop-down menu.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VISIBLE_OPTION",
          "options": [
            ["myself", '_myself_']
          ]
        }
      ],
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks['looks_changeVisibilityOfSprite'] = {
  /**
   * pm: changeVisibilityOfSprite block.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "%1 %2",
      "inputsInline": true,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VISIBLE_TYPE",
          "options": [
            ["show", "show"],
            ["hide", "hide"]
          ]
        },
        {
          "type": "input_value",
          "name": "VISIBLE_OPTION"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changeVisibilityOfSpriteShow'] = {
  /**
   * pm: changeVisibilityOfSprite block.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "show %1",
      "inputsInline": true,
      "args0": [
        {
          "type": "input_value",
          "name": "VISIBLE_OPTION"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changeVisibilityOfSpriteHide'] = {
  /**
   * pm: changeVisibilityOfSprite block.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "hide %1",
      "inputsInline": true,
      "args0": [
        {
          "type": "input_value",
          "name": "VISIBLE_OPTION"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hideallsprites'] = {
  /**
   * Hide-all-sprites block. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDEALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};
Blockly.Blocks['looks_showallsprites'] = {
  /**
   * dinosaurmod: a block that could be added to dinosaurmod.
   * this is NOT compatible with PenguinMod.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOWALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};
Blockly.Blocks["looks_getAllSpritesVisible"] = {
  /**
   * dinosaurmod: a block that could be added to dinosaurmod.
   * this is NOT compatible with PenguinMod.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_GETALLSPRITESVISIBLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VISIBLE_TYPE",
          "options": [
            [Blockly.Msg.LOOKS_GETALLSPRITESVISIBLE_VISIBLE, "show"],
            [Blockly.Msg.LOOKS_GETALLSPRITESVISIBLE_INVISIBLE, "hide"]
          ]
        }
      ],
      "extensions": [
        "output_boolean",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_setTintColor"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "args0":[
        {
          "type":"input_value",
          "name":"color"
        }
      ],
      "message0": Blockly.Msg.LOOKS_SETTINTCOLOR,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};
Blockly.Blocks['looks_tintColor'] = {
  /**
   * pm: Block to report the tint color effect in hex code
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_TINTCOLOR,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST'],
            [Blockly.Msg.COLOUR_SATURATION_LABEL, 'SATURATION'],
            [Blockly.Msg.LOOKS_EFFECT_RED, 'RED'],
            [Blockly.Msg.LOOKS_EFFECT_GREEN, 'GREEN'],
            [Blockly.Msg.LOOKS_EFFECT_BLUE, 'BLUE'],
            [Blockly.Msg.LOOKS_EFFECT_OPAQUE, 'OPAQUE'],
            ['horizontal shear', 'HORIZONTAL_SHEAR'],
            ['vertical shear', 'VERTICAL_SHEAR'],
            ["repeat X", 'REPEAT_X'],
            ["repeat Y", 'REPEAT_Y'],
            ['blur', 'BLUR']
          ]
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETEFFECTTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST'],
            [Blockly.Msg.COLOUR_SATURATION_LABEL, 'SATURATION'],
            [Blockly.Msg.LOOKS_EFFECT_RED, 'RED'],
            [Blockly.Msg.LOOKS_EFFECT_GREEN, 'GREEN'],
            [Blockly.Msg.LOOKS_EFFECT_BLUE, 'BLUE'],
            [Blockly.Msg.LOOKS_EFFECT_OPAQUE, 'OPAQUE'],
            ['horizontal shear', 'HORIZONTAL_SHEAR'],
            ['vertical shear', 'VERTICAL_SHEAR'],
            ["repeat X", 'REPEAT_X'],
            ["repeat Y", 'REPEAT_Y'],
            ['blur', 'BLUR']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_changestretchby'] = {
  /**
   * Block to change stretch. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 1.4
   * projects as well as 2.0 projects that still have the block.
   * The "stretch" blocks were introduced in very early versions of Scratch,
   * but their functionality was removed shortly later. They still appeared
   * correctly up until (and including) Scratch 1.4 - as "change stretch by"
   * and "set stretch to" - but were removed altogether in Scratch 2.0, and
   * displayed as red "undefined" blocks. Some Scratch projects still contain
   * these blocks, however, and they don't open in 3.0 unless the blocks
   * actually exist (though they still don't funcitonally do anything).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setstretchto'] = {
  /**
   * Block to set stretch. Does not actually do anything. This is an obsolete
   * block that is implemented for compatibility with Scratch 1.4 projects
   * (see looks_changestretchby).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSTRETCHTO,
      "args0": [
        {
          "type": "input_value",
          "name": "STRETCH"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COSTUME",
          "options": [
            ['costume1', 'COSTUME1'],
            ['costume2', 'COSTUME2']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_previouscostume'] = {
  /**
   * pm: Block to switch the sprite's costume to the previous one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_PREVIOUSCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_gotofrontback'] = {
  /**
   * "Go to front/back" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTOFRONTBACK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FRONT_BACK",
          "options": [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_goforwardbackwardlayers'] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_goTargetLayer'] = {
  /**
   * "Go infront/behind [sprite]" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTARGETLAYER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOTARGETLAYER_INFRONT, 'infront'],
            [Blockly.Msg.LOOKS_GOTARGETLAYER_BEHIND, 'behind']
          ]
        },
        {
          "type": "input_value",
          "name": "VISIBLE_OPTION"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks["looks_layersSetLayer"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_LAYERSSETLAYER,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "extensions": [
        "shape_statement",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_layersGetLayer"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_LAYERSGETLAYER,
      "checkboxInFlyout": true,
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks['looks_getcostumelength'] = {
  /**
   * dinosaurmod: a block that could be added to dinosaurmod.
   * this is NOT compatible with PenguinMod.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "# of costumes",
      "args0": [],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};
Blockly.Blocks['looks_getbackdroplength'] = {
  /**
   * dinosaurmod: a block that could be added to dinosaurmod.
   * this is NOT compatible with PenguinMod.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "# of backdrops",
      "args0": [],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_backdropnumbername'] = {
  /**
   * Block to report backdrop's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costumenumbername'] = {
  /**
   * Block to report costume's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_previousbackdrop'] = {
  /**
   * pm: Block to switch the backdrop to the previous one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_PREVIOUSBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks["looks_setStretch"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        }
      ],
      "message0": Blockly.Msg.LOOKS_SETSTRETCH,
      "extensions": [
        "shape_statement",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_changeStretch"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        }
      ],
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCH,
      "extensions": [
        "shape_statement",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_stretchGetX"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "checkboxInFlyout": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_STRETCHGETX,
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_stretchGetY"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "checkboxInFlyout": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_STRETCHGETY,
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_getSpriteVisible"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_GETSPRITEVISIBLE,
      "checkboxInFlyout": true,
      "extensions": [
        "output_boolean",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks['looks_getOtherSpriteVisible_menu'] = {
  /**
   * pm: Sprite-visible drop-down menu.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VISIBLE_OPTION",
          "options": [
            ["myself", '_myself_']
          ]
        }
      ],
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks["looks_getOtherSpriteVisible"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": "is %1 visible?",
      "args0": [
        {
          "type": "input_value",
          "name": "VISIBLE_OPTION"
        }
      ],
      "extensions": [
        "output_boolean",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_getEffectValue"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_GETEFFECTVALUE,
      "checkboxInFlyout": true,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST'],
            [Blockly.Msg.COLOUR_SATURATION_LABEL, 'SATURATION'],
            [Blockly.Msg.LOOKS_EFFECT_RED, 'RED'],
            [Blockly.Msg.LOOKS_EFFECT_GREEN, 'GREEN'],
            [Blockly.Msg.LOOKS_EFFECT_BLUE, 'BLUE'],
            [Blockly.Msg.LOOKS_EFFECT_OPAQUE, 'OPAQUE'],
            ['horizontal shear', 'HORIZONTAL_SHEAR'],
            ['vertical shear', 'VERTICAL_SHEAR'],
            ["repeat X", 'REPEAT_X'],
            ["repeat Y", 'REPEAT_Y'],
            ['blur', 'BLUR']
          ]
        }
      ],
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_sayHeight"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_SAYHEIGHT,
      "checkboxInFlyout": true,
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_sayWidth"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": Blockly.Msg.LOOKS_SAYWIDTH,
      "checkboxInFlyout": true,
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_sayColor"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": "bubble %1 color",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "prop",
          "options": [
            ["border","BUBBLE_STROKE"],
            ["fill","BUBBLE_FILL"],
            ["text","TEXT_FILL"]
          ]
        }
      ],
      "extensions": [
        "output_string",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks["looks_sayOther"] = {
  init: function() {
    this.jsonInit({
      "inputsInline": true,
      "category": "looks",
      "message0": "bubble %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "prop",
          "options": [
            ["minimum width","MIN_WIDTH"],
            ["maximum width","MAX_LINE_WIDTH"],
            ["border line width","STROKE_WIDTH"],
            ["padding size","PADDING"],
            ["corner radius","CORNER_RADIUS"],
            ["tail height","TAIL_HEIGHT"],
            ["font pading percent","FONT_HEIGHT_RATIO"],
            ["text length limit","texlim"]
          ]
        }
      ],
      "extensions": [
        "output_number",
        "colours_looks"
      ]
    });
  }
};

Blockly.Blocks['looks_stoptalking'] = {
  /**
   * pm: Block to stop talking/thinking.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_STOPTALKING,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_getinputofcostume'] = {
  /**
   * pm: Block to report an attribute on a costume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MATHOP,
      "args0": [
        {
          "type": "input_value",
          "name": "INPUT"
        },
        {
          "type": "input_value",
          "name": "COSTUME"
        },
      ],
      "category": Blockly.Categories.looks,
      "inputsInline": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_getinput_menu'] = {
  /**
   * pm: List of options for the first input of looks_getinputofcostume.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "INPUT",
          "options": [
            [Blockly.Msg.LOOKS_GETINPUT_MENU_WIDTH, 'width'],
            [Blockly.Msg.LOOKS_GETINPUT_MENU_HEIGHT, 'height'],
            ['rotation center x', 'rotation center x'],
            ['rotation center y', 'rotation center y'],
            [Blockly.Msg.LOOKS_GETINPUT_MENU_DRAWINGMODE, 'drawing mode']
          ]
        }
      ],
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks['looks_shoutforsecs'] = {
  init: function() {
    this.jsonInit({
      "message0": "shout %1 for %2 seconds",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_shout'] = {
  init: function() {
    this.jsonInit({
      "message0": "shout %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_getWhatBubbleIsDisplaying'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GETWHATBUBBLEISDISPLAYING,
      "args0": [],
      "extensions": ["colours_looks", "output_string"]
    });
  }
};

Blockly.Blocks['looks_getinputofbackdrop'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 of backdrop %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INPUT"
        },
        {
          "type": "input_value",
          "name": "COSTUME"
        },
      ],
      "category": Blockly.Categories.looks,
      "inputsInline": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};
