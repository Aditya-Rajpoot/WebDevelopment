const student = {
    name : "adi",
    age : 20,
    marks : 87,
    prop : this,

    getName : function() {
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this);
        return this.marks;
    },
};