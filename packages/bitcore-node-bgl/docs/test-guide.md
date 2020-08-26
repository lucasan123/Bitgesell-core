# Set up to run the tests.

  1. copy ../../bitcore-test.config.json to ../../bitcore.config.json
  2. run mongod
  3. run bitgesell-code's bitgeselld (tested with version v0.19) with:
      `./bitgeselld -regtest -rpcpassword=bitcorenodetest -rpcuser=local321 --rpcport=18332 --addresstype=legacy`
