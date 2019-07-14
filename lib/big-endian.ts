
function main(): void {
  let a1 = Buffer.from([18,117]);
  console.log(a1.readUInt16BE(0));  // logs 4725
}

main();
