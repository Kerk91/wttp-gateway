// parseWttpUrl.js

export function parseWttpUrl(url) {
  console.log("Received web3 request:", url);
  try {
    // If url includes wttp://, remove it
    let wttpUrl = url.startsWith("wttp://") ? url.split("wttp://")[1] : url;

    // if _url starts with /wttp/, remove it
    wttpUrl = wttpUrl.startsWith("/wttp/")
      ? wttpUrl.split("/wttp/")[1]
      : wttpUrl;

    // Parse out whatever is between the wttp:// and the first /
    let chain = "";
    let path = "/";
    let address = url;

    // Check if there is a forward slash
    if (wttpUrl.includes("/")) {
      address = wttpUrl.split("/")[0];

      // Path is everything after the first / in the wttpUrl
      path = `/${wttpUrl.split("/").slice(1).join("/")}`;
    }

    // Test if there is a : in the wttpUrl
    if (wttpUrl.includes(":")) {
      address = wttpUrl.split(":")[0];

      chain = chain.split(":")[1].split("/")[0];
    }

    console.log("Parsed wttp link:", { chain, path, address });

    return { address, chain, path };
  } catch (error) {
    console.error("Error parsing wttp link:", error);
    return null;
  }
}