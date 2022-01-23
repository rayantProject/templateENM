

class tache
{
    constructor(name , date , check)
    {
        this.name = name;
        this.date = date;
        this.check = check;
    }
}

let nw = (name, date , check) => new tache(name, date , check);

