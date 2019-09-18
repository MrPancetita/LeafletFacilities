
export class Facility {
    facilityCleansiness: String;
    facilityDescription: String;
    facilityDimensions: String;
    facilityIdentifier: String;
    facilityName: String;
    facilityType: String;
    relating: String;
    address: AddressMap;
    focalPoint: String;
};

export class Address {

    addressCountry: String;
    addressEMail: String;
    addressFaxNumber: String;
    addressIdentifier: String;
    addressPostalBox: String;
    addressPostalCode: String;
    addressStreet: String;
    addressStreetNumber: String;
    addressTelephoneNumber: String;
    addressTelexNumber: String;
    addressURL: String;
};

export class AddressMap extends Address {
    public addressCoordXY: number[]; 

};