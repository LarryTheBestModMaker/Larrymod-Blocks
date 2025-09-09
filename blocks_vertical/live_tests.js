'use strict';

goog.provide('Blockly.Blocks.liveTests');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

const mutatorPopulateUtil2 = function (connection, type, optValue, optValueName) {
  if (connection.sourceBlock_.isInsertionMarker_) return;

  ScratchBlocks.Events.disable();
  const block = this.workspace.newBlock(type);
  try {
    if (optValue) block.setFieldValue(optValue, optValueName);
    block.setShadow(true);
    if (!this.isInsertionMarker()) {
      block.initSvg();
      block.render(false);
    }
  } finally {
    ScratchBlocks.Events.enable();
  }

  if (ScratchBlocks.Events.isEnabled()) ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(block));
  if (block.outputConnection) block.outputConnection.connect(connection);
  else block.previousConnection.connect(connection);
}

Blockly.Blocks['control_expandableIf'] = {
  /**
   * pm: Block for joining strings together (determined by user)
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "message0": 'hidden %1 %2',
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
      "extensions": ["colours_control", "shape_statement"]
    });

    this.branches_ = 1;
    if (this.isInFlyout) this.addCase();
    this.nextIsElse = true;
    this.endsInElse = false;
  },

  fillInBlock: mutatorPopulateUtil2,
  fixupButtons: function () {
    const expandableInput = this.getInput("");
    this.inputList.splice(this.inputList.indexOf(expandableInput), 1);
    this.inputList.push(expandableInput);

    expandableInput.setAlign(1);
    const hiddenBtn = expandableInput.fieldRow[0];
    hiddenBtn.size_.width = 0.5;
    hiddenBtn.size_.height = 48;
    hiddenBtn.setVisible(false);
  },
  addCase: function () {
    if (this.nextIsElse) {
      this.appendDummyInput(`TEXTSTART${this.branches_}`).appendField("else");
      this.appendStatementInput(`SUBSTACK${this.branches_}`);
      this.endsInElse = true;
    } else {
      const prevText = this.getInput(`TEXTSTART${this.branches_}`);
      if (prevText) prevText.appendField("if");
      else this.appendDummyInput().appendField("if");
      const input = this.appendValueInput(`BOOL${this.branches_}`);
      this.fillInBlock(input.connection, "checkbox");
      this.appendDummyInput(`TEXTEND${this.branches_}`).appendField("then");

      // swap out the connection with the old and new branch
      const prevBranch = this.getInput(`SUBSTACK${this.branches_}`);
      const newBranch = this.appendStatementInput(`SUBSTACK${this.branches_}`);
      if (this.branches_ > 1) {
        const prevBranchBlock = prevBranch.connection.targetBlock();
        if (prevBranchBlock) newBranch.connection.connect(prevBranchBlock.previousConnection);
        this.removeInput(`SUBSTACK${this.branches_}`);
      }
      this.endsInElse = false;
    }

    this.fixupButtons();
  },

  mutationToDom: function () {
    // on save
    const container = document.createElement("mutation");
    container.setAttribute("branches", String(this.branches_));
    container.setAttribute("ends-in-else", String(this.endsInElse));
    return container;
  },

  domToMutation: function (xmlElement) {
    // on load
    const inputCount = Number(xmlElement.getAttribute("branches"));
    this.branches_ = isNaN(inputCount) ? 0 : inputCount;
    this.endsInElse = xmlElement.getAttribute("ends-in-else") === "true";
    this.nextIsElse = !this.endsInElse;
    for (let i = 1; i < this.branches_ + 1; i++) {
      if (i === this.branches_ && i > 1 && this.endsInElse) {
        this.appendDummyInput(`TEXTEND${i}`).appendField("else");
      } else {
        this.appendDummyInput(`TEXTSTART${i}`).appendField(i === 1 ? "if" : "else if");
        const input = this.appendValueInput(`BOOL${i}`);
        this.fillInBlock(input.connection, "checkbox");
        this.appendDummyInput(`TEXTEND${i}`).appendField("then");
      }
      this.appendStatementInput(`SUBSTACK${i}`);
    }

    this.fixupButtons();
  },

  onExpandableButtonClicked_: function (isAdding) {
    // Create an event group to keep field value and mutator in sync
    // Return null at the end because setValue is called here already.
    Blockly.Events.setGroup(true);
    var oldMutation = Blockly.Xml.domToText(this.mutationToDom());
    if (isAdding) {
      if (this.nextIsElse) this.branches_++;
      this.addCase();
      this.nextIsElse = !this.nextIsElse;
    } else if (this.branches_ > 1) {
      this.removeInput(`BOOL${this.branches_}`);
      this.removeInput(`SUBSTACK${this.branches_}`);
      this.removeInput(`TEXTSTART${this.branches_}`);
      this.removeInput(`TEXTEND${this.branches_}`);
      this.branches_--;
      this.nextIsElse = true;
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
