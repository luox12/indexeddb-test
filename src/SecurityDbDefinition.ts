import Dexie from "dexie";
import {Security} from "./Security";

class SecurityDbDefinition extends Dexie {

    security_infos: Dexie.Table<Security, string>;

    constructor() {
        super("security");
        this.version(1).stores({
            security_infos: "&id,code,name,*exchanges,type,status",
        });
        // this.version(2).stores({
        //     security_infos: "&id",
        // });
        this.security_infos = this.table("security_infos");
    }
}

export const securityInfoDb = new SecurityDbDefinition();
