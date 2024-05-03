function createAccount(pin, amount) {
    return {
        checkBalancce(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += newAmount; 
            return `Succesfully deposited $${newAmount}. CurrentBalance: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawalAmount > amount)
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
