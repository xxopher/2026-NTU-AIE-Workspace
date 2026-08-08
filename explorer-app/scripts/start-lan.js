const os = require("os");
const { spawn } = require("child_process");

function isPrivateIPv4(ip) {
  if (ip.startsWith("10.")) return true;
  if (ip.startsWith("192.168.")) return true;

  if (ip.startsWith("172.")) {
    const secondOctet = Number(ip.split(".")[1]);
    return secondOctet >= 16 && secondOctet <= 31;
  }

  return false;
}

function getBestLocalIPv4() {
  const interfaces = os.networkInterfaces();
  const privateIps = [];
  const fallbackIps = [];

  for (const entries of Object.values(interfaces)) {
    if (!entries) continue;

    for (const entry of entries) {
      if (entry.family !== "IPv4" || entry.internal) continue;
      if (isPrivateIPv4(entry.address)) {
        privateIps.push(entry.address);
      } else {
        fallbackIps.push(entry.address);
      }
    }
  }

  return privateIps[0] || fallbackIps[0] || null;
}

function run() {
  const ip = getBestLocalIPv4();

  if (!ip) {
    console.error("Could not find a non-internal IPv4 address.");
    console.error("Connect to Wi-Fi/Ethernet, then run: npm run start:lan");
    process.exit(1);
  }

  const argsFromUser = process.argv.slice(2);
  const expoArgs = ["expo", "start", "--host", "lan", "--clear", ...argsFromUser];
  const isWindows = process.platform === "win32";
  const env = { ...process.env, REACT_NATIVE_PACKAGER_HOSTNAME: ip };

  if ("CI" in env) {
    delete env.CI;
  }

  console.log(`Using LAN IP: ${ip}`);
  console.log(`Running: npx ${expoArgs.join(" ")}`);

  const child = spawn("npx", expoArgs, {
    stdio: "inherit",
    env,
    shell: isWindows,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

run();
