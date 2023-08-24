import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalyzer } from "./analyzers/WinAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { HtmlReport } from "./reporters/HtmlReport";

const csvFilderReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFilderReader);
matchReader.load();

console.log(matchReader.matches[0]);
const summary = new Summary(new WinsAnalyzer('Man United'), new HtmlReport())
summary.buildAndPrintReport(matchReader.matches); 
