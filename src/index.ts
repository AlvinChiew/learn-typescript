import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";


const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.buildAndPrintConsoleReport('Man United')

matchReader.load();
console.log(matchReader.matches[0]);
summary.buildAndPrintReport(matchReader.matches); 
