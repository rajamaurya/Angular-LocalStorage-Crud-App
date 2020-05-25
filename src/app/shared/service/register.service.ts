import { Injectable } from '@angular/core';



@Injectable()
export class RegisterService{
     registeredUsers: any = [];
     storeKey:string = 'registeredCustomes';
     register(newUser){
        const isExist = this.isExistingUser(newUser);
        if(isExist){
            // alert Notification for already existing users....
            console.log("user already exist.. Please try another username");
            return {message:"user already exist.. Please try another username", status: false}
        }else{
            this.registeredUsers.push(newUser)
            if(localStorage.getItem(this.storeKey) !== undefined){
                console.log("check me");
                localStorage.setItem(this.storeKey, JSON.stringify(this.registeredUsers));
            }else{
                localStorage.setItem(this.storeKey, JSON.stringify(this.registeredUsers));
            }
            
            return { message:"user saved successfully", status: true }
        }
        
     }
     isExistingUser(user){
         const firstname = user.firstName;
         if(localStorage.getItem(this.storeKey) !== undefined && localStorage.getItem(this.storeKey) !== null){
             console.log("m ok in localstorage")
            const getStorage = JSON.parse(localStorage.getItem(this.storeKey));
            const f_index = getStorage.findIndex(element=> element.firstName == firstname);

            return f_index !== -1 ? true: false;
         }else{
             return false;
         }
         
     }
     
}