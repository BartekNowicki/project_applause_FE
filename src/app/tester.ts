export class TesterView {
  
  testerId: String | undefined;
  testerExperience: number | undefined; 

  constructor(id: String, exp: number) {
    this.testerId = id;
    this.testerExperience = exp;
  }
}

