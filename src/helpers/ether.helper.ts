import { ethers, utils, Wallet } from 'ethers';

export class EtherHelpers {
  public static addressEqual(addr1: string, addr2: string): boolean {
    if (!addr1 || !addr2) {
      return false;
    }

    const formattedAddress1 = addr1.toLowerCase().trim();
    const formattedAddress2 = addr2.toLowerCase().trim();

    return formattedAddress1 === formattedAddress2;
  }

  public static isEthereumAddress(address: string): boolean {
    return utils.isAddress(address);
  }

  public static getEthereumAddress(address: string): string {
    return ethers.utils.getAddress(address);
  }

  public static createMessageHashForSigning(
    dataTypes: string[],
    data: any[],
  ): string {
    return ethers.utils.solidityKeccak256(dataTypes, data);
  }

  public static async signMessageHash(
    privateKey: string,
    messageHash: string,
  ): Promise<string> {
    const wallet = new Wallet(privateKey);

    const signature = wallet.signMessage(messageHash);

    return signature;
  }

  public static isValidSignature(
    messageHash: string,
    signer: string,
    signature: string,
  ): boolean {
    // Convert the public key to an Ethereum address
    const recoveredAddress = utils.verifyMessage(messageHash, signature);

    // Compare the recovered address to the signer's address
    if (recoveredAddress === ethers.utils.getAddress(signer)) {
      return true;
    } else {
      console.error(
        `Invalid signature. ExpectedSigner: ${signer} . RecoveredSigner: ${recoveredAddress}`,
      );
      return false;
    }
  }
}
