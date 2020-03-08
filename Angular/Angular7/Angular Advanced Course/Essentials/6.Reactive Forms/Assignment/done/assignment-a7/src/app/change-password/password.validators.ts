import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234') {
                resolve({ invalidOldPassword: true });
            } else {
                resolve(null);
            }
        });
    }

    static oldNewpasswordsShouldNotSame(control: AbstractControl) {
        let oldPassword = control.get('oldPassword');
        let newPassword = control.get('newPassword');

        if (oldPassword.value === newPassword.value) {
            return { passwordsShouldNotSame: true };
        }
        
        return null;
    }

    static createPasswordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsShouldMatch: true };
        }
        
        return null;
    }
}