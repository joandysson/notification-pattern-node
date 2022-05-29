import Notification from "./notification/Notification";
import NotificationError from "./notification/NotificationError";
import NotificationInterface from "./notification/NotificationInterface";

export default class Car {
    private name: string;
    private brand: string;
    private year: number;
    private notification: NotificationInterface;


    constructor(name: string, brand: string, year: number) {
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.notification = new Notification(this.constructor.name);
        this.validate();
        if(this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErros());
        }
    }

    public validate(): never | void {
        if (this.brand === undefined || this.name.length < 1) {
            this.notification.addError({message: 'Name is required'})
        }

        if (this.brand === undefined || this.brand.length < 1) {
            this.notification.addError({message: 'Brand is required'})
        }

        if (this.year === undefined) {
            this.notification.addError({message: 'Year is required'})
        }
    }
}
