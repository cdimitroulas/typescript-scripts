import { version } from "../package.json";

const help = (): void => {
  console.log(`Version: ${version}`);
  console.log("Usage: typescript-scripts <command> [command-arg]\n\n");
  console.log("Available commands:");
  console.log("- init");
  console.log("- lint [options] [files/dirs]");
  console.log("- help");
  console.log("- format");
  console.log("- run [entrypoint]");
  console.log("- compile");
};

export default help;
