import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit.js";

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null,
});
