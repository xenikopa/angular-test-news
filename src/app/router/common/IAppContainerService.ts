import { Observable } from 'rxjs';

export abstract class IAppContainerService {
  /**
   * readonly observable for state app rules
   */
  public abstract isAdminLogin$: Observable<boolean>;
  public abstract isEditMode$: Observable<boolean>;

  /**
   * methods for change auth state
   */
  public abstract onLoginAdmin(): void;
  public abstract onLogoutAdmin(): void;

  /**
   * change app mode (read/white)
   */

   public abstract onChangeAppMode(isEdit: boolean): void;
}
