import { ControllerDBClientsConnections } from "../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient";

export class ClientConnectionsBD {
  private host: string = "127.0.0.1";
  private port: number = 3308;
  private user: string = "root";
  private psw: string = "espanhaRoletti30!";
  private controller: ControllerDBClientsConnections;

  constructor() {
    this.controller = new ControllerDBClientsConnections(
      this.host,
      this.port,
      this.user,
      this.psw
    );
  }

  public getController(): ControllerDBClientsConnections {
    return this.controller;
  }

  public getUserConnection(databaseName: any) {}
}
