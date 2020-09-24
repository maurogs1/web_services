import { Outputs } from './outputs';
import { Output } from './output';

export class Traductor {
  target: string;
  source: string;
  input: string;
  outputs: Outputs;
  output: string;
  constructor(target?: string, source?: string, input?: string, output?: string,){
    this.target = target;
    this.source = source;
    this.input = input;
    this.output = output;
    this.outputs = new Outputs();

  }
}
