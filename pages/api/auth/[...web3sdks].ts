import { Web3sdksAuth } from "@web3sdks/auth/next/solana";

export const { Web3sdksAuthHandler, getUser } = Web3sdksAuth({
  privateKey: process.env.WEB3SDKS_AUTH_PRIVATE_KEY || "",
  domain: "example.com",
});

export default Web3sdksAuthHandler();
