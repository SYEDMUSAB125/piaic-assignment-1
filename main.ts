// 11
// const names:string[]=["ahmer","misbah","ahmed","huzaifah"];
// names.forEach(name=>{
//   console.log(name)
      
// });
// 12
// const names:string[]=["ahmer","misbah","ahmed","huzaifah"];
// names.forEach(name=>{
//   console.log(`Hi, good morning ${name}`)    
// });
// 13
// const favVehicles:string[] = ["YAMAHA YBR", "CBR 150", "HONDA 70"];
// favVehicles.forEach(vehicle=>{
//     console.log(`i would like to own a ${vehicle}`);
// });
// 14
// const invitedGuests:string[]=["ahmer","misbah","ahmed","huzaifah"];
// invitedGuests.forEach(guest=>{
//     console.log(`Greet!, you have to come in my arranged dinner ${guest}`);
// })
// 15
// let invitedGuests:string[]=["ahmer","misbah","ahmed","huzaifah"];
// invitedGuests.forEach(guest=>{
//     console.log(`Greet!, you have to come in my arranged dinner ${guest}`);
// })
// console.log(`${invitedGuests[1]} can't make the dinner because of laziness`);
// let invitedGuests:string[]=["ahmer","misbah","ahmed","huzaifah"];
// invitedGuests.splice(1,1,"sufiyan");
// console.log(invitedGuests);
// invitedGuests.forEach(invited=>{
//     console.log(`Greet!, you have to come in my arranged dinner ${invited}`)
// });
// 16
// let invitedGuests:string[]=["ahmer","misbah","ahmed","huzaifah"];
// invitedGuests.forEach(invited=>{
//         console.log(`Greet!, you have to come in my arranged where we have arranged more space in dinner, so please come ${invited}`)
//     });
//     invitedGuests.unshift("sufiyan");
//     console.log(invitedGuests);
//     invitedGuests.splice(2,0,"mohsin");
//     invitedGuests.forEach(guest=>{
//         console.log(`Greet!, you have to come in my arranged where we have arranged more space in dinner, so please come ${guest}`)
//     })
// 17
// const invitedGuests:string[]=["ahmer","misbah","ahmed","huzaifah"];
// invitedGuests.forEach(invited=>{
//             console.log(`Greet!,i feel bad to inform you i want to invite only two lucky people so i will infrom you ${invited}`)
//         });
// for (let i=0;i<invitedGuests.length;i++){
//     if(invitedGuests.length===2){
//         break
//     }
//     else{
//         let del = invitedGuests.pop()
//         console.log(`${del} Sorry! you can't invite them to dinner `)
//     }
// };
// invitedGuests.forEach(invited=>{
//     console.log(`${invited} still you are invited`);
// })
// for(let i=0;i<=invitedGuests.length;i++){
//     invitedGuests.pop();
// }
// console.log(invitedGuests);
// 18
// const favPlaces:string[]=["malaysia","thailand","northern areas of pakistan","Harry Potter muesuem","india"];
// favPlaces.forEach(place=>{
//     console.log(place);
// });
// const sortedFav = favPlaces.sort();
// sortedFav.forEach(place=>{
//     console.log(place);
// });
// const favPlaces:string[]=["malaysia","thailand","northern areas of pakistan","Harry Potter muesuem","india"];
// const sortedRevfav = favPlaces.sort().reverse()
// sortedRevfav.forEach(rev=>{
//     console.log(rev);
// })
// const favPlaces:string[]=["malaysia","thailand","northern areas of pakistan","Harry Potter muesuem","india"];
// favPlaces.forEach(place=>{
//         console.log(place);
//     });
// const sortedRevfav = favPlaces.reverse()
// sortedRevfav.forEach(rev=>{
//     console.log(rev);
// })
// console.log(sortedRevfav.reverse());
// 19
// const names:string[]=["ahmer","misbah","ahmed","huzaifah"];
// let noOfpeople:number=names.length
// console.log(`${noOfpeople} guests are invited in dinner `);
// 20
// const mountains:string[]=["k2","tirch mir","broad peak","nanga parbat"];
// 21
// const mountains:string[]=["k2","tirch mir","broad peak","nanga parbat"];
// const obj = Object.fromEntries(mountains.map((item, index) => [index, item]));
// console.log(JSON.stringify(obj));
// 23
// const cars:string[] =["corolla","fortuner","aqua","vitz","swift","civic","mercedeez","bmw","nisan","peugeot"];
// console.log(`it is ${cars[0]==="corolla"} `);
// console.log(`it is ${cars[1]==="fortuner"} `);
// console.log(`it is ${cars[2]==="aqua"} `);
// console.log(`it is ${cars[3]==="vitz"} `);
// console.log(`it is ${cars[4]==="swift"} `);
// console.log(`it is ${cars[5]==="corolla"} `);
// console.log(`it is ${cars[6]==="corolla"} `);
// console.log(`it is ${cars[7]==="corolla"} `);
// console.log(`it is ${cars[8]==="corolla"} `);
// console.log(`it is ${cars[9]==="corolla"} `); 
// 24
// const cars:string[] =["corolla","fortuner","aqua","vitz","swift","civic","mercedeez","bmw","nisan","peugeot"];
// console.log(`it is ${cars[0]==="corolla"} `);
// console.log(`it is ${cars[9]==="corolla"} `); 
// console.log(`it is ${cars[0].toLowerCase()==="corolla"} `);
// let num=2
// console.log(num<2);
// console.log(num<=2);
// console.log(num<=2);
// console.log(num===2);
// let num2= 4;
// console.log (num===2 && num2===4);
// console.log (num===2 || num2===4);
// console.log(cars.map(car=> car==="vitz",0));
// console.log(cars.map(car=> car==="cdi70",0));
// 25
// let alien_color="green";
// if(alien_color==="green"){
//     console.log("Congratulation you have earned 5 points")
// }
// let alien_color="yellow";
// if(alien_color==="green"){
//     console.log("Congratulation you have earned 5 points")
// }
// 26
// let alien_color="pink";
// if(alien_color==="green"){
//     console.log("Congratulation you have earned 5 points")
// }else{console.log("Congratulation you have earned 10 points")
// }
// 27
// let alien_color="pink";
// if(alien_color==="green"){
//     console.log("Congratulation you have earned 5 points")
// }else if(alien_color==="yellow"){console.log("Congratulation you have earned 10 points")}
// else if(alien_color==="red"){console.log("Congratulation you have earned 15 points")}
// else{
//     console.log("you picked wrong color")
// };
// 28
// let age = 45;
// if(age<2){
//     console.log("the person is a baby")
// }else if(age===2 || age<4){console.log("the person is a toddler")}
// else if(age===4 || age<13){console.log("the person is a kid")}
// else if(age===13 || age<20){console.log("the person is a teenager")
// }else if(age===20 || age<65){console.log("the person is a adult")
// }else if(age>=65){console.log("the person is a elder")
// }
// 29
// let favourite_fruits:string[] =["mango","kivi","banana"]
// if (favourite_fruits[0]==="cherry"){
//     console.log("you really like bananana")
// }else if (favourite_fruits[2]==="banana"){
//     console.log("you really like bananana")
// }else if (favourite_fruits[1]==="orange"){
//     console.log("you really like bananana")
// }else if (favourite_fruits[0]==="cherry"){
//     console.log("you really like bananana")
// }else if (favourite_fruits[0]==="cherry"){
//     console.log("you really like bananana")
// }
// 30
// const userNames:string[]=["eric","jhon","admin","haris","yousuf"];
// if(userNames.length!==0){
//     userNames.forEach(element => {
//     if(element==="admin"){
//         console.log(`Hello ${element} would you like to see status report `)
//     }else {
//         console.log(`Hello ${element} thank you for logging again`)
//     }
// })};
// 31
// const userNames:string[]=["eric","jhon","admin","haris","yousuf"];
// if(userNames.length===0){
//     console.log("we have to find some users")
// }
// 32
// const currentUsers:string[]=["eric","jhon","admin","haris","yousuf"]

// const newUsers:string[] =["hassan", "mohsin","haris","yousuf","taha"];

// for (let i=0;i<newUsers.length;i++){
//     for(let j=0;j<currentUsers.length;j++){
//         if(newUsers[i] === currentUsers[j]){
//         console.log("the person should use to new user name")
//     }else{
//         console.log("the user name is available")
//     }}
//     }
//  33
// const numbers:number[]=[1,2,3,4,5,6,7,8,9]
// numbers.forEach(element=>{
//     if(element===1){
//         console.log(`${element}st`)
//     }else if(element===2){
//         console.log(`${element}nd`)
//     }else if(element===3){
//         console.log(`${element}rd`)
//     }else{
//         console.log(`${element}th`)
//     }
// })
// 34
// const pizzas:string[] =["afghan jaelebi","peporni","crown crust"];
// pizzas.forEach(pizza=>{
//     console.log(pizza)
//     console.log(`i like ${pizza} pizza`)
// });
// 35



