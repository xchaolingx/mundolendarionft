function getNFTMetadata() {
  // Obter o endereço da carteira do usuário e o ID da NFT
  const walletAddress = document.getElementById('wallet-address').value;
  const nftId = document.getElementById('nft-id').value;

  // Buscar os metadados da NFT
  // (neste exemplo, supomos que existe uma função "fetchNFTMetadata" que realiza a busca)
  const metadata = fetchNFTMetadata(walletAddress, nftId);

  // Exibir os metadados da NFT na página
  const metadataElement = document.getElementById('nft-metadata');
  metadataElement.textContent = JSON.stringify(metadata, null, 2);
}
