/*
  Mocking data for unit tests.
*/

const mockUtxo = {
  success: true,
  utxos: [
    {
      height: 629922,
      tx_hash:
                'd5228d2cdc77fbe5a9aa79f19b0933b6802f9f0067f42847fc4fe343664723e5',
      tx_pos: 0,
      value: 6000
    }
  ]
}

const emptyUtxo = {
  success: true,
  utxos: []
}

module.exports = {
  mockUtxo,
  emptyUtxo
}
