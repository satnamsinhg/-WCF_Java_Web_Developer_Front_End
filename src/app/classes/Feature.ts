import { Client } from './Client';

export class Feature {

  public fId: string;

  constructor(
    public fTitle: string,
    public fDescription: string,
    public fClient: Client,
    public fClientPriority: number,
    public fTargetDate: string,
    public fProductArea: string
  ) {}
}
