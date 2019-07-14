export class DicomParser {
  private readonly buffer: Buffer;
  private offset: number = 0;

  constructor(buffer: Buffer) {
    this.buffer = buffer;
  }

  read(): number {
    let value = this.buffer[this.offset];
    this.offset++;
    return value;
  }
}
