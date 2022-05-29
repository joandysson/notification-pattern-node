export type NotificationErrorProps = {
    message: string;
    context?: string;
}

export default interface NotificationInterface {
    addError(error: NotificationErrorProps): void;
    hasErrors(): boolean;
    getErros(): NotificationErrorProps[];
    messeges(context?: string): string;
}
