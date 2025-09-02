'use strict';

goog.provide('Blockly.Blocks.liveTests');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['control_expandableCase'] = {
  /**
   * pm: Block for joining strings together (determined by user)
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": '%1 %2',
      "args0": [
        {
          "type": "field_expandable_remove",
          "name": "REMOVE"
        },
        {
          "type": "field_expandable_add",
          "name": "ADD"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_case"]
    });

    this.cases_ = 0;
    if (this.isInFlyout) this.addCase();
  },

  fillInBlock: function (connection) {
    if (connection.sourceBlock_.isInsertionMarker_) return;
    const block = this.workspace.newBlock('text');
    // TODO text values are undefined/dont save
    block.setShadow(true);
    block.initSvg();
    block.render(false);
    block.outputConnection.connect(connection);
  },
  addCase: function () {
    this.appendDummyInput(`BREAK${this.cases_}`).appendField("case");
    const input = this.appendValueInput(`CASE${this.cases_}`);
    this.fillInBlock(input.connection);
    this.appendStatementInput(`STACKCASE${this.cases_}`);
  },

  mutationToDom: function () {
    // on save
    const container = document.createElement("mutation");
    let number = Number(this.cases_);
    if (isNaN(number)) number = 1;
    container.setAttribute("casecount", String(number));
    return container;
  },

  domToMutation: function (xmlElement) {
    // on load
    const inputCount = Number(xmlElement.getAttribute("casecount"));
    this.cases_ = isNaN(inputCount) ? 0 : inputCount;
    for (let i = 0; i < this.cases_; i++) this.addCase();
    // TODO white text blocks keep spawing for all expandables, i feel like this is just due to me doing it wrong
    // TODO stack values dont save
    /*queueMicrotask(() => {
      const connections = this.getConnections_();
      for (let i = 1; i < connections.length; i++) {
        const block = connections[i].targetBlock();
        if (!block) continue;
        if (
          !block.category_ && !block.isShadow() &&
          !block.type.startsWith("procedures_") && !block.type.startsWith("argument_")
        ) block.dispose();
      }
    });*/
  },

  onExpandableButtonClicked_: function (isAdding) {
    // Create an event group to keep field value and mutator in sync
    // Return null at the end because setValue is called here already.
    Blockly.Events.setGroup(true);
    var oldMutation = Blockly.Xml.domToText(this.mutationToDom());
    if (isAdding) {
      this.cases_++;
      this.addCase();
    } else if (this.cases_ > 1) {
      this.removeInput(`CASE${this.cases_}`);
      this.removeInput(`STACKCASE${this.cases_}`);
      this.removeInput(`BREAK${this.cases_}`);
      this.cases_--;
    }
    this.initSvg();
    if (this.rendered) this.render();

    var newMutation = Blockly.Xml.domToText(this.mutationToDom());
    Blockly.Events.fire(new Blockly.Events.BlockChange(
      this, 'mutation', null, oldMutation, newMutation
    ));
    Blockly.Events.setGroup(false);
  }
};

Blockly.Blocks['looks_setVertTransform'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'skew sprite vertically %1 %',
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENT"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setHorizTransform'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'skew sprite horizontally %1 %',
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENT"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['field_textdropdown_test'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_textdropdown",
          "name": "TEXT",
          "options": [
            ['item1', 'item1'],
            ['item2', 'item2'],
            ['item3', 'item3']
          ]
        }
      ],
      "output": "String",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField
    })
  }
}

Blockly.Blocks['motion_mutatorCheckboxTest_checkboxMutatorMenu'] = {
  init: function () {
    this.setInputsInline(false);
    this.setColour("#c1c1c1");
  }
};
Blockly.Blocks['motion_mutatorCheckboxTest'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'checkbox mutator',
      "args0": [],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
    this.setMutator(new Blockly.Mutator([]));

    this.BORDER_FIELDS = ["ABC", "DEF"];
    this.FIELD_NAMES = ["first", "second"];

    this.inputs_ = [false, false];
  },

  mutationToDom: function () {
    // console.log('mutationToDom', this.inputs_);
    if (!this.inputs_) {
      return null;
    }
    const container = document.createElement("mutation");
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) {
        container.setAttribute(this.BORDER_FIELDS[i], this.inputs_[i]);
      }
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = xmlElement.getAttribute(this.BORDER_FIELDS[i].toLowerCase()) == "true";
    }
    // console.log('domToMutation', this.inputs_);
    this.updateShape_();
  },

  decompose: function (workspace) {
    // console.log('decompose');
    const containerBlock = workspace.newBlock('motion_mutatorCheckboxTest_checkboxMutatorMenu');
    for (let i = 0; i < this.inputs_.length; i++) {
      // BaseBlockly.Msg[this.BORDER_FIELDS[i]] = this.FIELD_NAMES[i];
      containerBlock.appendDummyInput()
        // .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(this.FIELD_NAMES[i])
        .appendField(new Blockly.FieldCheckboxOriginal(this.inputs_[i] ? "TRUE" : "FALSE"), this.BORDER_FIELDS[i].toUpperCase());
    }
    containerBlock.initSvg();
    containerBlock.moveBy(4, 22);
    return containerBlock;
  },

  compose: function (containerBlock) {
    // console.log('compose');
    // Set states
    for (let i = 0; i < this.inputs_.length; i++) {
      const field = this.BORDER_FIELDS[i].toUpperCase();
      const value = containerBlock.getFieldValue(field);
      // console.log(value);
      this.inputs_[i] = value == "TRUE";
    }
    this.updateShape_();
  },

  updateShape_: function () {
    // console.log('updateShape_');
    for (let i = 0; i < this.inputs_.length; i++) {
      if ((!this.inputs_[i]) && (this.getInput(this.BORDER_FIELDS[i].toUpperCase()))) {
        this.removeInput(this.BORDER_FIELDS[i].toUpperCase());
      }
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if ((this.inputs_[i]) && (!(this.getInput(this.BORDER_FIELDS[i].toUpperCase())))) {
        // BaseBlockly.Msg[this.BORDER_FIELDS[i]] = this.FIELD_NAMES[i];
        this.appendValueInput(this.BORDER_FIELDS[i].toUpperCase())
          // .setAlign(Blockly.ALIGN_RIGHT)
          // todo: insert string/number input?
          .appendField(this.FIELD_NAMES[i]);
      }
    }
  }
};

/* custom button field */
Blockly.FieldCustom.registerInput(
  'TEST_BUTTON',
  (() => {
    const div = document.createElement("div");
    div.setAttribute("style", `width: 32px; height: 32px; padding: 6px 10px; text-align: center; font-weight: 500; border-radius: 4px; border: solid 1px #00000030;`);
    return div;
  })(),
  (field, input) => {
    /* on init */
    const srcBlock = field.sourceBlock_;

    input.textContent = "alert";
    input.style.width = "max-content";
    input.style.color = srcBlock && srcBlock.textColor ? srcBlock.textColor : "#fff";

    const properWidth = goog.style.getSize(input).width;
    input.style.width = properWidth + "px";
    input.parentNode.setAttribute("width", properWidth);
    field.size_.width = properWidth;
    srcBlock.render(false);
  },
  () => {
    /* on click */
    alert("wow");
  },
  () => { /* not needed */ }
);
Blockly.Blocks['control_fieldbutton'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'button %1',
      "args0": [
        {
          "type": "field_customInput",
          "name": "BUTTON",
          "id": "TEST_BUTTON",
          "opcode": "alert"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  },
};

Blockly.Blocks['control_fieldcheckboxoriginal'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'mm checkbox %1 gagag %2',
      "args0": [
        {
          "type": "field_checkbox_original",
          "name": "BUTTON"
        },
        {
          "type": "field_checkbox_original",
          "name": "BUTT2ON"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_testcolorfieldoriginal'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'color %1',
      "args0": [
        {
          "type": "field_colour",
          "colour": "#ff0000",
          "name": "COLOR"
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_blockduplicatesondrag'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'duplicate',
      "category": Blockly.Categories.control,
      "canDragDuplicate": true,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['control_dualblock'] = {
  /**
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'dual block',
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement", "output_string"]
    });
  }
};
