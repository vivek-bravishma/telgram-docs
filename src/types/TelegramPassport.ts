// ============================== Telegram Passport ==============================
// Telegram Passport is a unified authorization method for services that require personal identification. Users can upload their documents once, then instantly share their data with services that require real-world ID (finance, ICOs, etc.). Please see the manual for details.











// Describes Telegram Passport data shared with the bot by the user.
export interface PassportData {
    data: EncryptedPassportElement[];   // Array with information about documents and other Telegram Passport elements that was shared with the bot
    credentials: EncryptedCredentials;   // Encrypted credentials required to decrypt the data
}


// This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
export interface PassportFile {
    file_id: string;   // Identifier for this file, which can be used to download or reuse the file
    file_unique_id: string;   // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
    file_size: number;   // File size in bytes
    file_date: number;   // Unix time when the file was uploaded
}


// Describes documents or other Telegram Passport elements shared with the bot by the user.
export interface EncryptedPassportElement {
    type: string;   // Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
    data?: string;   //  Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
    phone_number?: string;   //  User's verified phone number; available only for “phone_number” type
    email?: string;   //  User's verified email address; available only for “email” type
    files?: PassportFile[];   //  Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
    front_side?: PassportFile;   //  Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
    reverse_side?: PassportFile;   //  Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
    selfie?: PassportFile;   //  Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
    translation?: PassportFile[];   //  Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
    hash: string;   // Base64-encoded element hash for using in PassportElementErrorUnspecified
}


// Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
export interface EncryptedCredentials {
    data: string;   // Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
    hash: string;   // Base64-encoded data hash for data authentication
    secret: string;   // Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
}

// Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
// Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

export interface setPassportDataErrors {
    user_id: number;   // User identifier
    errors: PassportElementError[];   // A JSON-serialized array describing the errors
}


// This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
export type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified


// Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
export interface PassportElementErrorDataField {
    source: string;   // Error source, must be data
    type: string;   // The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
    field_name: string;   // Name of the data field which has the error
    data_hash: string;   // Base64-encoded data hash
    message: string;   // Error message
}


// Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
export interface PassportElementErrorFrontSide {
    source: string;   // Error source, must be front_side
    type: string;   // The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
    file_hash: string;   // Base64-encoded hash of the file with the front side of the document
    message: string;   // Error message
}


// Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
export interface PassportElementErrorReverseSide {
    source: string;   // Error source, must be reverse_side
    type: string;   // The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
    file_hash: string;   // Base64-encoded hash of the file with the reverse side of the document
    message: string;   // Error message
}


// Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
export interface PassportElementErrorSelfie {
    source: string;   // ;   // Error source, must be selfie
    type: string;   // ;   // The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
    file_hash: string;   // ;   // Base64-encoded hash of the file with the selfie
    message: string;   // ;   // Error message
}


// Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
export interface PassportElementErrorFile {
    source: string;   // Error source, must be file
    type: string;   // The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
    file_hash: string;   // Base64-encoded file hash
    message: string;   // Error message
}


// Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
export interface PassportElementErrorFiles {
    source: string;   // Error source, must be files
    type: string;   // The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
    file_hashes: string[];   // List of base64-encoded file hashes
    message: string;   // Error message
}


// Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
export interface PassportElementErrorTranslationFile {
    source: string;   // Error source, must be translation_file
    type: string;   // Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
    file_hash: string;   // Base64-encoded file hash
    message: string;   // Error message
}


// Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
export interface PassportElementErrorTranslationFiles {
    source: string;   // Error source, must be translation_files
    type: string;   // Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
    file_hashes: string[];   // List of base64-encoded file hashes
    message: string;   // Error message
}


// Represents an issue in an unspecified place. The error is considered resolved when new data is added.
export interface PassportElementErrorUnspecified {
    source: string;   // Error source, must be unspecified
    type: string;   // Type of element of the user's Telegram Passport which has the issue
    element_hash: string;   // Base64-encoded element hash
    message: string;   // Error message   
}





























