import { container } from '../../container';

export class Controller {
  protected readonly query = container.Query;
  protected readonly command = container.Command;
}
