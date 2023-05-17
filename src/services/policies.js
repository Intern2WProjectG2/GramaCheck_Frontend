import { identitycheck, validateAddress, policecheck, addApp } from './apiClient';

export async function checkPolicies(data, token) {
    let policyResults = {
        "identity": false,
        "address": false,
        "police": false,
    }

    // Add application with input data to DB.
    try {
        const app = {
            "appId": "1252",
            "userId": "f47a",
            "issueDate": "2023-05-15",
            "status": "approved",
            "inputAddress": "MYADDRESS",
            "inputNIC": "AB123456",
            "certLink": "https://example.com/certificate"
        };
        if ((await addApp(app, token)).status === 201) {
            // Check identity
            try {
                if ((await identitycheck(data.nic, token)).data === true) {
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
        } else {
            throw new Error('Error adding application to DB');
        }
    } catch (e) {
        console.log(e);
    }

    return policyResults.identity && policyResults.address && policyResults.police;
}