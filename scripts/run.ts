import spawn from "cross-spawn";

const args = process.argv.slice(3);

function run(): number {
  const result = spawn.sync("node", ["-r", "ts-node/register", ...args], {
    stdio: "inherit"
  });

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

export default run;
