import { Console } from "console";
import { MatchData } from "./MatchData";
import { WinsAnalyzer } from "./analyzers/WinAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";


export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputtarget: OutputTarget) {};
  
  static buildAndPrintConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputtarget.print(output);
  }

}