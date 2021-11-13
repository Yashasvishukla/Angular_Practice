import { AbstractControl, ValidationErrors } from "@angular/forms";
import { rejects } from "assert";
import { Observable } from "rxjs";

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0)
        {
            return {
                cannotContainSpace: true
            };
        }


        return null;
    }

    static usernameRequired(control: AbstractControl): ValidationErrors | null
    {
        if((control.value as string).length === 0 )
        {
            return {
                usernameRequired: true,
                expectedLength : 5
            };
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>
    {
        return new Promise( (resolve, reject) => {
            
            setTimeout(() => {
                return resolve({
                    shouldBeUnique: true
                });
            }, 2000);
        });

      
    }
}
