import { parse } from "marked"

async function main() {

    let response = await (await fetch("")).text();

    console.log(response);

    document.getElementById("app").innerHTML = parse(response);
}

main();