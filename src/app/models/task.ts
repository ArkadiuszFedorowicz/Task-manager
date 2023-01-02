export class Task {
    id: number;
    name: string;
    describe: string;
    inProgress: string;


    constructor(id: number,name: string, describe: string, inProgress: string) {
        this.id = id;
        this.name = name;
        this.describe = describe;
        this.inProgress = inProgress;
      }
}

