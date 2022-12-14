function getNFTMetadata() {
  // Obter os valores dos campos de entrada da página
  const walletAddress = document.getElementById('wallet-address').value;
  const nftId = document.getElementById('nft-id').value;

  // Buscar os metadados da NFT
  const metadata = fetchNFTMetadata(walletAddress, nftId);

  // Exibir os metadados na página
  document.getElementById('nft-metadata').innerText = JSON.stringify(metadata, null, 2);
}
