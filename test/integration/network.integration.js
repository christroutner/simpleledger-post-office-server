/*
  Integration tests for network library.
*/

const assert = require('chai').assert

const { Network } = require('../../src/lib/network')
const uut = new Network()

describe('#network.js', () => {
  describe('#fetchUTXOsForStampGeneration', () => {
    // This is an example of a 'positive' test case. Passing is a success.
    it('should get utxos', async () => {
      const addr =
                'bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c'

      const result = await uut.fetchUTXOsForStampGeneration(addr)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.isArray(result)
      assert.property(result[0], 'height')
      assert.property(result[0], 'tx_hash')
      assert.property(result[0], 'tx_pos')
      assert.property(result[0], 'value')
    })

    // This is an example of a 'negative' test case. Passing is a failure.
    // Throwing an error is the expected behavior. So if it throws an error, that
    // is a success.
    // Notice the try/catch statement in the test case. That signals that it is
    // a negative test case.
    it('should throw an error if there are no UTXOs', async () => {
      try {
        const addr =
                    'bitcoincash:qqhks6pe9guacunnz0w8l886ar4ac77pmcmp5yepy6'

        const result = await uut.fetchUTXOsForStampGeneration(addr)
        console.log(`result: ${JSON.stringify(result, null, 2)}`)

        assert.equal(true, false, 'Unexpected result!')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(
          err.message,
          'Insufficient Balance for Stamp Generation'
        )
      }
    })
  })
})
