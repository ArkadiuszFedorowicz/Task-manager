export class Task {
    id: number;
    name: string;
    describe: string;
    deadline: string;
    inProgress: string;


    constructor(id: number,name: string, describe: string, deadline:string, inProgress: string,  ) {
        this.id = id;
        this.name = name;
        this.describe = describe;
        this.deadline = deadline;
        this.inProgress = inProgress;
      }
}

