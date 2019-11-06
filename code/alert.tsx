import * as React from "react";
import * as System from "@salesforce/design-system-react";
import { ControlType, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { generateIconPropertyControls } from "./utils/propertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAlert = props => {
  return (
    <System.Alert
      icon={
        props.icon ? (
          <System.Icon
            category={props.category}
            name={props.name}
            size={props.size}
            assistiveText={{ label: props.assistiveText }}
          />
        ) : null
      }
      style={style}
      dismissible={props.dismissible}
      labels={{
        heading: props.heading,
        headingLink: props.headingLink
      }}
      variant={props.variant}
    />
  );
};

export const Alert = withHOC(InnerAlert);

Alert.defaultProps = {
  width: 900,
  height: 40
};

addPropertyControls(Alert, {
  dismissible: {
    title: "Dismissible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "You are in offline mode."
  },
  headingLink: {
    type: ControlType.String,
    title: "Heading Link",
    defaultValue: "More information"
  },
  variant: {
    type: ControlType.Enum,
    title: "Variant",
    options: ["error", "info", "offline", "warning"],
    optionTitles: ["Error", "Info", "Offline", "Warning"],
    defaultValue: "info"
  },
  icon: {
    title: "Custom Icon",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...generateIconPropertyControls({
    hidden: props => props.icon === false,
    defaultIconCategory: "utility",
    defaultIconName: "user",
    omittedProperties: ["assistiveText", "size"]
  })
});
