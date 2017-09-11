export interface ITodo {
  id?: number,
  title: string,
  isComplete: boolean
}

export class Todo implements ITodo {

  constructor(
    public title: string,
    public isComplete: boolean = false
) { }
}
