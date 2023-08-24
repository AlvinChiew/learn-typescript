import { MatchData } from "./MatchData";


export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputtarget: OutputTarget) {};
  
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputtarget.print(output);
  }

}