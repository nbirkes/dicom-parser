import * as path from 'path';
import { readFileSync } from 'fs';
import { DicomParser } from './dicom-parser';

const DICOM_PATH = path.join(__dirname, '..', 'data', 'nathan.dcm');

function main(): void {
  const dicomBuffer = readFileSync(DICOM_PATH);

  let parser = new DicomParser(dicomBuffer);

  console.log(parser.read());
  console.log(parser.read());
  console.log(parser.read());
}

main();
