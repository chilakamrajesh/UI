/* class Account{
    acc_Name;
    acc_Addr
    acc_mobile;
    constructor(name,addr,phno){
        this.acc_Name=name;
        this.acc_Addr=addr;
        this.acc_mobile=phno;
    }
    update_Mobileno(phno){}
    update_AAddress(addr){}
}
class SA extends Account{
    acc_id;
    acc_Bal;
    min_Bal=500;
    constructor(){}
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}

}
class CA extends account{
    acc_id;
    acc_Bal;
    min_Bal=5000;
    constructor(){}
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}
} */

    class Account{
    acc_Name;
    acc_Addr;
    acc_Mobile;
    constructor(name,addr,phno){
        this.acc_Name=name;
        this.acc_Addr=addr;
        this.acc_Mobile=phno;
    }
    update_Mobileno(phno){}
    update_Address(addr){}
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,addr,phno,amount){
        super(name,addr,phno);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}
}
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    constructor(id,name,addr,phno,amount){
        super(name,addr,phno);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}
}
let sa1=new SA(101,'RG','Waynad',9591,5000)
let ca1=new CA(1001,'SG','ND',9592,15000)
console.log(sa1)
console.log(ca1)

sa1.deposit_Amount(100)
sa1.withdrawl_Amount(15)
console.log(sa1)
console.log(sa1.get_Bal)
