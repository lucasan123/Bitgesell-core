import { BaseModule } from '..';
import { BGLStateProvider } from '../../providers/chain-state/bgl/bgl';
import { BitcoinP2PWorker } from './p2p';
import { VerificationPeer } from './VerificationPeer';

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule['bitcoreServices']) {
    super(services);
    services.Libs.register('BGL', 'bitcore-lib', 'bitcore-p2p');
    services.P2P.register('BGL', BitcoinP2PWorker);
    services.CSP.registerService('BGL', new BGLStateProvider());
    services.Verification.register('BGL', VerificationPeer);
  }
}
