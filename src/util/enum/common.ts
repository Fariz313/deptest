export enum COMMMON {
  TOKEN_NOT_MATCH = 'Secret token does not match',
  DEVICE_SUCCESS_REGISTERED = 'Device token successfully registered',
  DEVICE_NOT_FOUND = 'DEIVE_NOT_FOUND',
  DEVICE_SUCCESS_UPDATED = 'Device token successfully updated',
  DEVICE_FAIL_TO_REGISTER = 'Device token failed to register',
  DEVICE_FAIL_TO_UPDATE = 'Device token failed to update'
}
export enum USER_TYPE_SERVICE {}
export enum APISTATUS {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INVALID_REQUEST = 'Invalid Request',
  STATUS_AUTH_NOT_AUTHORIZED = 'NOT_AUTHORIZED',
  STATUS_AUTH_NOT_AUTHORIZED_MESSAGE = 'Tidak terautorisasi, silahkan logout kemudian login lagi',
  STATUS_BASIC_AUTH_INVALID = 'Invalid Authentication Credentials',
  STATUS_BASIC_AUTH_MISSING = 'Missing Authorization Header'
}
export enum USEROPERATION {
  DELETE = 1,
  CORRECTION = 2
}
export enum APIMESSAGE {
  APIMESSAGE_ERROR_CANNOT_RETREIVE_LOCATION = 'Gagal mendapatkan lokasi informasi',
  APIMESSAGE_SUCCESS_RETREIVE_LOCATION = 'Sukses mendapatkan lokasi informasi',
  APIMESSAGE_SUCCESS_RETREIVE_ZONE = 'Sukses mendapatkan data zonasi',
  APIMESSAGE_FAILED_RETREIVE_ZONE = 'Gagal mendapatkan data zonasi',
  APIMESSAGE_SUCCESS_RETREIVE_USER_DATA = 'Sukses mendapatkan informasi user',
  APIMESSAGE_SUCCESS_RETREIVE_NEWS = 'Gagal mendapatkan berita',
  APIMESSAGE_ERROR_RETREIVE_MESSAGE = 'Gagal mendapatkan pesan',
  APIMESSAGE_SUCCESS_RETREIVE_MESSAGE = 'Sukses mendapatkan pesan',
  APIMESSAGE_SUCCESS_REMOVE_MESSAGE = 'Sukses menghapus pesan',
  APIMESSAGE_SUCCESS_FAILED_MESSAGE = 'Gagal menghapus pesan',
  APIMESSAGE_EMPTY_MESSAGE = 'Hmm, sepertinya inbox kamu sedang kosong',

  APIMESSAGE_ELITE_SUCCESS = 'APIMESSAGE_ELITE_SUCCESS',
  APIMESSAGE_ELITE_SUCCESS_ASSIGNED = 'APIMESSAGE_ELITE_SUCCESS_ASSIGNED',
  APIMESSAGE_ELITE_FAILED = 'APIMESSAGE_ELITE_FAILED',
  APIMESSAGE_ELITE_SUCCESS_REMOVE = 'APIMESSAGE_ELITE_SUCCESS_REMOVE',
  APIMESSAGE_ELITE_FAILED_REMOVE = 'APIMESSAGE_ELITE_FAILED_REMOVE',
  APIMESSAGE_ELITE_SUCCESS_FETCH_DETAIL = 'APIMESSAGE_ELITE_SUCCESS_FETCH_DETAIL',
  APIMESSAGE_ELITE_FAILED_FETCH_DETAIL = 'APIMESSAGE_ELITE_FAILED_FETCH_DETAIL',
  APIMESSAGE_USER_DELETE_SUCCESS = 'APIMESSAGE_USER_DELETE_SUCCESS',
  APIMESSAGE_USER_ADD_SUCCESS = 'APIMESSAGE_USER_ADD_SUCCESS',
  APIMESSAGE_USER_ADD_FAILED = 'APIMESSAGE_USER_ADD_FAILED',
  APIMESSAGE_USER_DELETE_FAILED = 'APIMESSAGE_USER_DELETE_FAILED',
  APIMESSAGE_USER_DELETE_QUEUED = 'APIMESSAGE_USER_DELETE_QUEUED',
  APIMESSAGE_STRUKTUR_PROPOSAL_ACTIVE_EXIST = 'APIMESSAGE_STRUKTUR_PROPOSAL_ACTIVE_EXIST'
}
export enum GRADE_LEVEL {
  DPR_RI = 1,
  DPRD_1 = 2,
  DPRD_2 = 3,
  ELITE_FORCE = 4
}

export enum MAIL_TEMPLATE {
  REGISTRATION_CONFIRMATION = 'registration-confirmation',
  FORGOT_PASSWORD = 'forgotpassword',
  PRIVATE_MEMBER_REGISTER = 'private-member-register',
  VERIFICATION_REQUEST = 'verification-request',
  VERIFICATION_REQUEST_EXPIRED = 'expired-verification'
}

export enum OPERATIONLOG {
  USER_OPERATIONLOG_UNVERIFIED = 'USER_OPERATION_LOG_UNVERIFIED',
  USER_OPERATIONLOG_CORRECTION = 'USER_OPERATION_LOG_CORRECTION',
  USER_OPERTIONLOG_DELETED = 'USER_OPERTION_LOG_DELETED'
}

export enum USERLOG {
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  SIGNUP = 'SIGNUP',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED',
  LOGIN_FAILED = 'LOGIN_FAILED'
}
export enum ZONE_REPORT {
  ZONE_1,
  ZONE_2,
  ZONE_3,
  ZONE_4
}

export enum MAIL_TITLE {
  VERIFY_EMAIL = '[NasDem Digital] Silahkan verifikasi email Anda',
  FORGOT_PASSWORD = '[NasDem Digital] Konfirmasi penggantian password',
  WELCOME_EMAIL = '[NasDem Digital] Selamat datang di NasDem Digital',
  VERIFICATION_REQUEST = '[NasDem Digital] Permintaan verifikasi anggota',
  VERIFICATION_EXPIRED = '[NasDem Digital] Permintaan verifikasi kadaluwarsa'
}

export enum MAIL_ATTRIBUTE {
  MAIL_SENDING = 'SENDING',
  MAIL_TAGGING_FORGOT_PASSWORD = 'FORGOT PASSWORD',
  MAIL_TAGGING_VERIFICATION_REQUEST = 'VERIFICATION REQUEST',
  MAIL_TAGGING_WELCOME_MAIL = 'WELCOME EMAIL',
  MAIL_TAGGING_VERIFICATION_REQUEST_EXPIRED = 'VERIFICATION REQUEST EXPIRED',
  MAIL_TAGGING_VERIFICATION_REGISTRATION = 'VERIFICATION REGISTRATION'
}

export enum USER_REFERAL {
  USER_REFERAL_FAILED = 'Gagal mendapatkan data referal',
  USER_REFERAL_SUCCESS_WITH_REFERAL = 'Berhasil mendapatkan data referal',
  USER_REFERAL_SUCCESS_WITHOUT_REFERAL = 'Hey! kamu belum punya kader, silahkan tambahkan kader baru'
}
export enum PAYMENT_VERIFICATION {
  PAYMENT_VERIFICATION_RESULT_SUCCESS = 'SUKSES MEMVERIFY PEMBAYARAN'
}
export enum USER_VERIFICATION {
  USER_VERIFICATION_FAILED = 'Gagal mendapatkan permintaan verifikasi, silahkan coba beberapa saat lagi',
  USER_VERIFICATION_REQUEST_SUCCESS = 'Permintaan verifikasi berhasil, silahkan tunggu atau kontak referal Anda untuk mempercepat proses verifikasi',
  USER_VERIFICATION_REQUEST_FAILED = 'Gagal melakukan permintaan verifikasi',
  USER_SEARCH_RETURN_RESULT = 'Sukses mendapatkan data user',
  USER_VERIFICATION_REQUEST_REFERAL_CODE_INVALID = 'Kode referal yang kamu masukkan sepertinya tidak valid, silahkan ulangi kembali',
  USER_VERIFICATION_REQUEST_STATUS_ALREADY_VERIFIED = 'Sepertinya akun/keanggotaanmu sudah terverifikasi',
  USER_VERIFICATION_SUCCESS = 'Sukses melakukan verifikasi kader, silahkan cek menu Kaderku',
  USER_VERIFICATION_SUCCESS_WITH_REFERAL = 'Success to fetch user Verification request',
  USER_VERIFICATION_SUCCESS_WITHOUT_REFERAL = 'Maaf, kamu tidak memiliki permintaan verifikasi',
  USER_VERIFICATION_REQUEST_EMPTY_ACTION = 'INPUT_REFERAL',
  USER_VERIFICATION_REQUEST_EMPTY = `Keanggotaan Anda belum terverifikasi, silahkan minta kode referal kepada anggota yang sudah mempunyai eKTA, atau hubungi pengurus NasDem setempat. Silahkan klik <b>Masukkan Kode Referal</b>`
}
export enum CRON {
  EVERY_1_MIN = '*/1 * * * *',
  EVERY_5_MIN = '*/5 * * * *',
  EVERY_10_MIN = '*/10 * * * *',
  EVERY_30_MIN = '*/30 * * * *',
  EVERY_1_HOUR = '0 * * * *',
  EVERY_2_HOUR = '0 */2 * * *',
  EVERY_3_HOUR = '0 */2 * * *',
  EVERY_6_HOUR = '0 */6 * * *',
  EVERY_11_NIGHT = '59 23 * * *',
  EVERY_MIDNIGHT = '0 0 * * *'
}

export const BLOCKED_USER = [
  'YB0SGF',
  'YB0JTR',
  'YB3VY',
  'YB1SAM',
  'YB8UM',
  'YF8RRU',
  'YB8OFU',
  'YB7USS',
  'YB7USE',
  'YC7VIY',
  'YB9YZ',
  'YB6NA',
  'YB4OH',
  'YB0QA',
  'YB6AA',
  'YB8XT',
  'YB0MAM',
  'YC0IXQ',
  'YB8UFM',
  'YC8TRF',
  'YC8TLA'
];
export enum REPORT {
  USER_REPORT_REGISTERED_USER = 'USER_REPORT_REGISTERED_USER',
  USER_REPORT_VERIFIED_USER = 'USER_REPORT_VERIFIED_USER',
  USER_REPORT_UNVERIFIED_USER = 'USER_REPORT_VERIFIED_USER',
  USER_REPORT_ON_CORRECTION = 'USER_REPORT_ON_CORRECTION',
  USER_REPORT_CUMULATIVE = 'USER_REPORT_CUMULATIVE',
  USER_REPORT_JOB = 'USER_REPORT_JOB',
  USER_REPORT_AGE = 'USER_REPORT_AGE'
}
export enum IURAN {
  USER_IURAN_LIST_SUCCES = 'USER_IURAN_LIST_SUCCES',
  USER_ADD_IURAN_SUCCESS = 'USER_ADD_IURAN_SUCCESS',
  USER_REMOVE_IURAN_SUCCESS = 'USER_REMOVE_IURAN_SUCCESS',
  USER_REMOVE_IURAN_FAILED = 'USER_REMOVE_IURAN_FAILED',
  USER_ADD_IURAN_FAILED = 'USER_ADD_IURAN_FAILED',
  USER_IURAN_LIST_FAILED = 'USER_IURAN_LIST_FAILED'
}
export enum USER_AUTH {
  USER_INVALID_EMAIL_OR_PASSWORD = 'Hey! Kata kunci atau email Anda salah',
  IAR_DICABUT = 'Maaf Anda tidak bisa melanjutkan proses, IAR Anda Dicabut',
  USER_REGISTER_FAILED = 'Sepertinya ada masalah, proses registrasimu belum berhasil',
  USER_ID_CARD_ALREADY_USED = 'KTP atau NIK sudah pernah terdaftar',
  USER_REGISTER_SUCCESS = 'Yay! Kakak berhasil mendaftar, silahkan login dan minta referal ke anggota lain untuk memverifikasi akun Anda',
  USER_ADD_SUCCESS = 'Sukses menambahkan anggota baru, silahkan cek menu Kaderku',
  USER_SUCCESS_AUTHENTICATE = 'Sukses login',
  USER_NOT_FOUND = 'Email Anda tidak valid atau tidak ditemukan',
  USER_REFERAL_NOT_FOUND = 'Kode referal tidak valid atau tidak ditemukan',
  USER_REFERAL_FOUND = 'Kode referal ditemukan',
  USER_ALLOWED_TO_REGISTER_PHASE_CHECK = 'Kami sudah mengirimkan 4 angka kode verifikasi ke email Kakak, silahkan periksa email lalu masukkan kode tersebut untuk melanjutkan pendaftaran',
  USER_ALLOWED_TO_REGISTER = 'Silahkan lanjutkan registrasi dengan memasukkan data lengkap Anda',
  USER_NOT_ALLOWED_TO_REGISTER = 'Aduh, sepertinya email sudah terpakai, silahkan gunakan email aktif lain. Jika Anda sudah daftar silahkan login atau atur ulang kata kunci',
  USER_OTP_NOT_MATCH = 'Kode verifikasi tidak sesuai/sama dengan yang dikirimkan',
  USER_OTP_SEND = 'Kode verifikasi terkirim ke email',
  USER_SUCCCESS_CHANGE_EMAIL = 'Kata kunci berhasil diubah',
  USER_OLD_PASSWORD_NOT_MATCH = 'Kata kunci lama tidak sesuai',
  USER_CHANGE_PASSWORD_FAILED = 'Gagal merubah kata kunci',
  USER_CHANGE_PASSWORD_SUCCESS = 'Berhasil merubah kata kunci'
}

export enum USER_OPERATION {
  ADD_TO_LIST_SUCCESS = 'ADD_TO_LIST_SUCCESS',
  ADD_TO_LIST_FAILED = 'ADD_TO_LIST_FAILED'
}
export enum DEPARTMENT_PROPOSAL_ACTION {
  SUBMIT = 'SUBMIT',
  SAVE = 'SAVE'
}
export enum DEPARTMENT_ASSIGNMENT_STATUS {
  CREATED = 'CREATED',
  ON_PROGRESS = 'ON_PROGRESS',
  REVIEWED = 'REVIEWED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
export enum DEPARTMENT_PROPOSAL_STATUS {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  EXPIRED = 'EXPIRED',
  ON_PROGRESS = 'ON_PROGRESS',
  REVIEWED = 'REVIEWED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum BUILDING_STATUS {
  RENT = 'RENT',
  OWN_BUILDING = 'OWN_BUILDING'
}
export enum TRANSACTION_STATUS {
  CREATED = 'created',
  CAPTURE = 'capture',
  CHALANGE = 'challenge',
  ACCEPT = 'accept',
  SETTLEMENT = 'settlement',
  CANCEL = 'cancel',
  DENY = 'deny',
  EXPIRE = 'expire',
  PENDING = 'pending',
  REFUND = 'refund'
}

export enum MOVE_KADER_STATUS {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  ON_PROGRESS = 'ON_PROGRESS',
  REVIEWED = 'REVIEWED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum EXTENDING_STATUS {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  ON_PROGRESS = 'ON_PROGRESS',
  REVIEWED = 'REVIEWED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
export enum API_VERSION {
  V1 = 'v1'
}
