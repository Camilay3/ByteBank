export function ValidaDebito (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (valorDebito:number) {
        if (valorDebito <= 0) {
            throw new Error("O valor do débito precisa ser maior do que zero")
        } else if (valorDebito > this.saldo) {
            throw new Error("O seu saldo é insuficiente para realizar a operação");
        }

        return originalMethod.apply(this, [valorDebito]);
    }

    return descriptor;
}