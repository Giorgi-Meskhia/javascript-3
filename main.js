const calculatesum = (..._args) => {
    if (_args.length < 3){
        return "function requires at least 3 numbers"
    }

    const [num1,num2, ...rest] = _args
    const sum = num1+num2
    const product = rest.reduce((acc, num) => acc * num, 1);
    return [sum,product]
}

console.log(calculatesum(56,34,60,354))

const returnaddress = (user) => {
    const {banks} = user
    if(banks && banks[2] && banks[2].address){
        const {city} = banks[2].address;
        return city;
    } else{
        return undefined    
    }


}


const user = {
    banks: [
      {
        balance: '0$'
      },
      {
        debt: '5000$'
      },
      {
        address: 
          {
            city: 'tbilisi'
          }
      }
    ]
};

console.log(returnaddress(user))



const origin = {
    name: 'giorgi',
    surname: 'meskhia',
    education:['middle school','high school'],
    address: {
        country: 'georgia',
        city: 'tsalenjikha'
    },
   other: {
        hobbie:'drawing',
        Foreign_language: 'English'
   }
};

function copyversion(obj) {
    const Copiedversion = {
        ...obj,
        education:[...obj.education],
        address:{...obj.address},
        other:{...obj.other}
    };
    return Copiedversion;
}


const copy = copyversion(origin);
console.log(copy);

