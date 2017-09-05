import * as openpgp from 'react-native-openpgp';
import { AsyncStorage, Alert } from 'react-native';


export function GenerateKeyPair(options, success, error) {

    openpgp.generateKey(options)
        .then(success)
        .catch(error);
}

export function Sign(message, privateKey){  
    const pv = openpgp.readArmoredKey(privateKey).keys;
    return openpgp.sign({data: message, privateKeys: pv, armor: true});  
}

export function Verify(message, pubKey) {
    const pk = openpgp.readArmoredKey(pubKey).keys;
    const msg = openpgp.ct.readArmored(message);
    
    Alert.alert("Info", typeof msg);
    return openpgp.verify({message: msg, publicKeys: pk});
}


export async function SaveVal(k, v, success, error) {
    try {
        const response = await AsyncStorage.setItem('@NTRY:' + k, v);
        success(response);
    } catch (err) {
        error(err);
    }
}


export function GetVal(k, cb){
    AsyncStorage.getItem('@NTRY:' + k, cb);
}