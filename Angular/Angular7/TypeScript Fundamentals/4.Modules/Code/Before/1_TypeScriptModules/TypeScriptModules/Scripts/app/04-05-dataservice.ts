interface IDataService {
    msg: string;
    getMessage(): string;
};

class DataService implements IDataService {
    msg = 'Welcome to the Show!';
    getMessage() { return this.msg; }
}
