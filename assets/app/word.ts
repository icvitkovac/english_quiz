export class Word {

  constructor(public id:number,
              public value:string,
              public isHard:boolean,
              public translations,
              private answerIndex:number) {
  }
}
