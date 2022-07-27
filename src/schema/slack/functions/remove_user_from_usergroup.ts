/** This file was autogenerated on Thu Jul 21 2022. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction(
  {
    callback_id: "slack#/functions/remove_user_from_usergroup",
    source_file: "",
    title: "Remove user from user group",
    description: "Remove someone from a Slack user group.",
    input_parameters: {
      required: ["usergroup_id", "user_id"],
      properties: {
        usergroup_id: {
          type: SlackTypes.usergroup_id,
          description: "User group",
        },
        user_id: {
          type: SlackTypes.user_id,
          description: "User to be removed from user group",
        },
      },
    },
    output_parameters: {
      required: [],
      properties: {
        usergroup_id: {
          type: SlackTypes.usergroup_id,
          description: "Updated usergroup",
        },
      },
    },
  },
);