export class Attachment {
    constructor(public id: number = 0,
                public filename: string = '',
                public name: string = '',
                public type: string = '',
                public user_id: number = 0, // tslint:disable-line
                public timestamp: Date = null,
                public task_id: number = 0) { // tslint:disable-line
    }
}
