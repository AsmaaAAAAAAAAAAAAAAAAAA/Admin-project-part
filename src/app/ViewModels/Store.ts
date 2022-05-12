export class Store {
    name:string;
    branches: string[];
    logo:string;

    constructor(name:string="",branches:string[]=[],logo:string="")
    {
        this.name=name;
        this.branches=branches;
        this.logo=logo;
    }

}
