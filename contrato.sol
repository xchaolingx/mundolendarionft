// Primeiro criamos um contrato inteligente novo
pragma solidity ^0.8.0;

// Agora definimos o contrato
contract NFTMint {
  // Criamos um evento para notificar os usuários sobre a cunhagem de um novo NFT
  event Minted(string nftID);

  // Definimos a função cunhar para criar um NFT aleatório
  function mint() public payable {
    // Verificamos se o usuário pagou a tarifa de cunhagem
    require(msg.value == 1 MATIC);

    // Selecionamos um NFT aleatório presente no diretório
    string memory nftID = selectRandomNFT();

    // Notificamos os usuários sobre a cunhagem de um novo NFT
    emit Minted(nftID);
  }

  // Definimos uma função auxiliar para selecionar
