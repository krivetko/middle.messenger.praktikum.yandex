const tests: Record<string, RegExp> = {
    login: /^(?=.*[A-Za-z])[A-Za-z0-9-_]{3,20}$/,
    first_name: /^(?=.*[A-ZА-Я])[A-Za-zА-Яа-я-]{1,}$/,
    second_name: /^(?=.*[A-ZА-Я])[A-Za-zА-Яа-я-]{1,}$/,
    email: /^[a-z\d.-]+@[a-z]+.[a-z]+$/i,
    password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    confirm_password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    oldPassword: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    newPassword: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    newPasswordConfirmation: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    phone: /^[+]?\d{10,15}$/,
    message: /^.+$/i
}

export class Validator {
    private _submittedData: Record<string, string> = {};
      
    public submittedData(form: HTMLElement) {
        for (let input of form.getElementsByTagName('input')) {
            if (input.value) {
                this._submittedData[input.name] = input.value;
            }
        }
        return this._submittedData;
    }

    public validateFields(form: HTMLElement): string[] {
        const result: string[] = [];
        for (let input of form.getElementsByTagName('input')) {
            if (input.value) {
                if (!tests[input.name].test(input.value)) {
                    result.push(input.name)
                }
            }
        }
        return result;
    }

    public validateExactField(name: string, value: string) {
        return tests[name].test(value);
    }
}