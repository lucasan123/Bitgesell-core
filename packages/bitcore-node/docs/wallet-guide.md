# Set up Alias config

Go to the root directory of your computer

```sh
cd ~
```

Create a .profile file if missing

OR

Create a .bashrc if configuring for interactive Bash usage

```sh
touch .profile

OR

touch .bashrc
```

Edit the .profile file to insert:
> *Make sure to replace username*

```sh
alias bitgesellmainnet='/Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -datadir=/Users/username/blockchains/bitgesell-core/networks/mainnet/'

alias bitgesellregtest='/Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -datadir=/Users/username/blockchains/bitgesell-core/networks/regtest/'

alias bitgesellcashmainnet='/Applications/BitcoinABC-Qt.app/Contents/MacOS/BitcoinABC-Qt -datadir=/Users/username/blockchains/bitgesellcash/networks/mainnet/ -flexiblehandshake -initiatecashconnections'

alias bitgesellcashregtest='/Applications/BitcoinABC-Qt.app/Contents/MacOS/BitcoinABC-Qt -datadir=/Users/username/blockchains/bitgesellcash/networks/regtest/ -flexiblehandshake -initiatecashconnections'
```

Ensure Mongod is running

```sh
mongod
```

Start the Bitcore node in the /bitcore/ project root directory

```sh
npm run node
```

To run RegTest Bitcoin Core RegTest Client

```sh
. ~/.profile
bitgesellregtest
```

> If successful Bitcore logo should be blue and syncing blocks on mongod in the background

## How to Generate Blocks

Go to Help -> Debug Window -> console tab

Input generate command in the line to create 5000 Blocks

```sh
generate 5000
```

To find RegTest account address

```sh
getaccountaddress ""
```

Test transactions by sending to account address in the send tab

Check transaction results in the Transactions tab
