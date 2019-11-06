const { convert, emitComponents } = require("@framerjs/component-importer");

const fs = require("fs");
const path = require("path");

const json = JSON.parse(
  fs.readFileSync(
    "node_modules/@salesforce/design-system-react/lib/components/component-docs.json"
  )
);

function capitalize(str) {
  return str.match(/([a-zA-Z]\w+)/)[1] || "UnknownComponentName";
}

function mapSalesforceComponent(rawComponentName, rawComp) {
  const propNames = Object.keys(rawComp.props);

  const propTypes = propNames.map(propName => {
    return {
      name: propName,
      type: "boolean"
    };
  });

  const compInfo = {
    name: capitalize(rawComponentName),
    propTypes
  };

  return {
    ...convert(compInfo),
    componentPath: rawComp["SLDS-component-path"]
  };
}

const componentNames = Object.keys(json);

const componentInfos = componentNames.map(compName => {
  return mapSalesforceComponent(compName, json[compName]);
});

async function main() {
  for (const compInfo of componentInfos) {
    const components = await emitComponents({
      packageName: `@salesforce/design-system-react`,
      additionalImports: [
        "import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'"
      ],
      components: [compInfo]
    });

    for (const comp of components) {
      if (comp.type === "component") {
        fs.writeFileSync(path.join("code/", comp.fileName), comp.outputSource);
      } else if (comp.type === "hoc") {
        fs.writeFileSync(path.join("code/", comp.fileName), comp.outputSource);
      }
    }
  }
}

main();
