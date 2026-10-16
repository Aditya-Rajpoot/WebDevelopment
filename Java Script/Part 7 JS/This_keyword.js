const student = {
    name : "aditya",
    age : 23,
    // marks 
    eng : 67,
    math : 78,
    sci : 87,
    // calculate avg ...
     getAvg() {
        // using this method .....
        // because function does't directly access the parameter

        let avg = (this.eng+ this.math + this.sci)/3;
        console.log(avg);
    }

}