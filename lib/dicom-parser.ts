import { TagElement } from './models/interfaces';

export class DicomParser {
  private readonly buffer: Buffer;
  private offset: number = 0;

  constructor(buffer: Buffer) {
    this.buffer = buffer;
  }

  read(length: number): number {
    let value = this.buffer[this.offset];
    this.offset++;
    return value;
  }

  getTagElement(): TagElement | undefined {
   const piece = this.buffer.slice(this.offset, 4);
    this.offset+= 4;

   let te = piece.reduce((acc: string[], cur: number) => {
     let value = cur.toString(16);
     if (value.length < 2) value = '0' + value;
     acc.push(value);
     return acc;
   }, []);

   return {
     tag: te[0] + te[1],
     element: te[2] + te[3],
   };
  }
}
