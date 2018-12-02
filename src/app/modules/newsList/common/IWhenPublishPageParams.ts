interface IPageParams {
  count: number;
  offset: number;
}
abstract class IWhenPublishPageParams {
  public abstract publish(params: IPageParams): void;
}

export {
  IWhenPublishPageParams,
  IPageParams
};
