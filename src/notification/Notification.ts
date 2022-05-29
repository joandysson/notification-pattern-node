import NotificationInterface, { NotificationErrorProps } from "./NotificationInterface";

export default class Notification implements NotificationInterface {
    private errors: NotificationErrorProps[] = [];
    private context?: string;

    constructor(context?: string) {
        this.context = context;
    }

    addError(error: NotificationErrorProps): void {
        this.errors.push(error.context === undefined ? {context: this.context, ...error} : error);
    }
    hasErrors(): boolean {
        return this.errors.length > 0
    }
    getErros(): NotificationErrorProps[] {
        return this.errors
    }
    messeges(context?: string): string {
        let message = '';
        let contextInfo = context ?? this.context;

        this.errors.forEach(error => {
            if(contextInfo === undefined || error.context === contextInfo) {
                message += `${contextInfo ?? ''}: ${error.message}`
            }
        });
        return message;
    }
}
