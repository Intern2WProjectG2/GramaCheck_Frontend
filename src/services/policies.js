import { identitycheck, validateAddress, policecheck } from './apiClient';

export async function checkPolicies(data, token) {
    let policyResults = {
        "identity": false,
        "address": false,
        "police": false,
    }

    // Check identity
    try {
        if ((await identitycheck(data.nic, token)).data === true) {
            console.log('set true');
            policyResults['identity'] = true;
        }
    } catch (e) {
        console.log(e);
    }


    // Check address
    const address = {
        "addNum": data.number,
        "city": data.city,
        "district": data.district,
        "province": data.province,
        "postalCode": data.postalcode,
        "gramaDivNum": data.gramasewaDiv,
    }
    try {
        if ((await validateAddress(address, token)).data === true) {
            policyResults['address'] = true;
        }
    } catch (e) {
        console.log(e);
    }


    // Check police reports
    const userId = "f47a";
    try {
        if ((await policecheck(userId, token)).data === true) {
            policyResults['police'] = true;
        }
    } catch (e) {
        console.log(e);
    }


    // Generate report
    // TODO:

    return policyResults.identity && policyResults.address && policyResults.police;
}