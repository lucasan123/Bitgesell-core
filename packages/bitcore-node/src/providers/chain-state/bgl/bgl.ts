import { InternalStateProvider } from '../internal/internal';

export class BGLStateProvider extends InternalStateProvider {
  constructor(chain: string = 'BGL') {
    super(chain);
  }
}
