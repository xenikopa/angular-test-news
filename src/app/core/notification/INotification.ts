export abstract class INotification {
  public abstract openNotification(message: string, action?: string): void;
}
