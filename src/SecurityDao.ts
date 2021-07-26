import {Security} from "./Security";
import {securityInfoDb} from "./SecurityDbDefinition";
import _ from 'lodash';

const { security_infos } = securityInfoDb;

export const update = async (securities: Security[]) => {
    let start = new Date().getTime();
    console.log('start:',start);
    await securityInfoDb.transaction("rw", security_infos, async () => {
        _.chunk(securities, 1000).forEach((chunk) => {
            security_infos.bulkPut(chunk.map((s) => ({ ...s,  })));
        });
    });
    let end = new Date().getTime();
    console.log('end:',end);
    let cost = end - start;
    console.log('time cost:', cost);
    console.log('throughput:', (securities.length / cost) * 1000)
};
