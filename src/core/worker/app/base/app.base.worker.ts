export interface IAppBaseWorker {
  ping(): Promise<any>;
  beneficiaryAccount():Promise<any>;
}
export class AppBaseWorker implements IAppBaseWorker {
  // tslint:disable-next-line: no-empty
  constructor() {}
  beneficiaryAccount(): Promise<any> {
    let data = [
      {
        "bank_code": "aceh",
        "bank_name": "PT. BANK ACEH"
      },
      {
        "bank_code": "aceh_syar",
        "bank_name": "PT. BPD ISTIMEWA ACEH SYARIAH"
      },
      {
        "bank_code": "agris",
        "bank_name": "PT. BANK AGRIS"
      },
      {
        "bank_code": "agroniaga",
        "bank_name": "PT. BANK RAKYAT INDONESIA AGRONIAGA TBK."
      },
      {
        "bank_code": "amar",
        "bank_name": "PT. BANK AMAR INDONESIA"
      },
      {
        "bank_code": "andara",
        "bank_name": "PT. BANK ANDARA"
      },
      {
        "bank_code": "anglomas",
        "bank_name": "PT. ANGLOMAS INTERNATIONAL BANK"
      },
      {
        "bank_code": "antar_daerah",
        "bank_name": "PT. BANK ANTAR DAERAH"
      },
      {
        "bank_code": "anz",
        "bank_name": "PT. BANK ANZ INDONESIA"
      },
      {
        "bank_code": "artajasa",
        "bank_name": "PT. ARTAJASA"
      },
      {
        "bank_code": "artha",
        "bank_name": "PT. BANK ARTHA GRAHA INTERNASIONAL TBK."
      },
      {
        "bank_code": "bali",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH BALI"
      },
      {
        "bank_code": "bangkok",
        "bank_name": "BANGKOK BANK PUBLIC CO.LTD"
      },
      {
        "bank_code": "banten",
        "bank_name": "PT. BANK BANTEN"
      },
      {
        "bank_code": "barclays",
        "bank_name": "PT BANK BARCLAYS INDONESIA"
      },
      {
        "bank_code": "bca",
        "bank_name": "PT. BANK CENTRAL ASIA TBK."
      },
      {
        "bank_code": "bcad",
        "bank_name": "PT. BANK DIGITAL BCA"
      },
      {
        "bank_code": "bca_syar",
        "bank_name": "PT. BANK BCA SYARIAH"
      },
      {
        "bank_code": "bengkulu",
        "bank_name": "PT. BPD BENGKULU"
      },
      {
        "bank_code": "bisnis",
        "bank_name": "PT. BANK BISNIS INTERNASIONAL"
      },
      {
        "bank_code": "bjb",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH JABAR DAN BANTEN"
      },
      {
        "bank_code": "bjb_syar",
        "bank_name": "PT. BANK JABAR BANTEN SYARIAH"
      },
      {
        "bank_code": "bni",
        "bank_name": "PT. BANK NEGARA INDONESIA (PERSERO)"
      },
      {
        "bank_code": "bnp",
        "bank_name": "PT. BANK NUSANTARA PARAHYANGAN"
      },
      {
        "bank_code": "bnp_paribas",
        "bank_name": "PT. BANK BNP PARIBAS INDONESIA"
      },
      {
        "bank_code": "boa",
        "bank_name": "BANK OF AMERICA NA"
      },
      {
        "bank_code": "bri",
        "bank_name": "PT. BANK RAKYAT INDONESIA (PERSERO)"
      },
      {
        "bank_code": "bsi",
        "bank_name": "PT. BANK SYARIAH INDONESIA TBK."
      },
      {
        "bank_code": "btn",
        "bank_name": "PT. BANK TABUNGAN NEGARA (PERSERO)"
      },
      {
        "bank_code": "btn_syar",
        "bank_name": "PT. BANK TABUNGAN NEGARA (PERSERO) UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "btpn",
        "bank_name": "PT. BANK BTPN"
      },
      {
        "bank_code": "btpn_syar",
        "bank_name": "PT. BANK TABUNGAN PENSIUNAN NASIONAL SYARIAH"
      },
      {
        "bank_code": "bukopin",
        "bank_name": "PT BANK KB BUKOPIN TBK."
      },
      {
        "bank_code": "bukopin_syar",
        "bank_name": "PT. BANK SYARIAH BUKOPIN"
      },
      {
        "bank_code": "bumiputera",
        "bank_name": "PT. BANK BUMIPUTERA"
      },
      {
        "bank_code": "bumi_artha",
        "bank_name": "PT. BANK BUMI ARTA"
      },
      {
        "bank_code": "capital",
        "bank_name": "PT BANK CAPITAL INDONESIA"
      },
      {
        "bank_code": "centratama",
        "bank_name": "PT. CENTRATAMA NASIONAL BANK"
      },
      {
        "bank_code": "chase",
        "bank_name": "JP MORGAN CHASE BANK, N.A"
      },
      {
        "bank_code": "china",
        "bank_name": "BANK OF CHINA"
      },
      {
        "bank_code": "china_cons",
        "bank_name": "CHINA CONSTRUCTION"
      },
      {
        "bank_code": "chinatrust",
        "bank_name": "PT. BANK CTBC INDONESIA"
      },
      {
        "bank_code": "cimb",
        "bank_name": "PT. BANK CIMB NIAGA TBK."
      },
      {
        "bank_code": "cimb_syar",
        "bank_name": "PT. BANK CIMB NIAGA TBK. - UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "cimb_rekening_ponsel",
        "bank_name": "PT. BANK CIMB NIAGA TBK. - REKENING PONSEL"
      },
      {
        "bank_code": "citibank",
        "bank_name": "CITIBANK, NA"
      },
      {
        "bank_code": "commonwealth",
        "bank_name": "PT. BANK COMMONWEALTH"
      },
      {
        "bank_code": "danamon",
        "bank_name": "PT. BANK DANAMON INDONESIA TBK."
      },
      {
        "bank_code": "danamon_syar",
        "bank_name": "PT. BANK DANAMON INDONESIA UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "dbs",
        "bank_name": "PT. BANK DBS INDONESIA"
      },
      {
        "bank_code": "deutsche",
        "bank_name": "DEUTSCHE BANK AG."
      },
      {
        "bank_code": "dipo",
        "bank_name": "PT. BANK DIPO INTERNATIONAL"
      },
      {
        "bank_code": "diy",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH DIY"
      },
      {
        "bank_code": "diy_syar",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH DIY UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "dki",
        "bank_name": "PT. BANK DKI"
      },
      {
        "bank_code": "dki_syar",
        "bank_name": "PT. BANK DKI UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "ekonomi",
        "bank_name": "PT. BANK EKONOMI RAHARJA"
      },
      {
        "bank_code": "fama",
        "bank_name": "PT. BANK FAMA INTERNATIONAL"
      },
      {
        "bank_code": "ganesha",
        "bank_name": "PT. BANK GANESHA"
      },
      {
        "bank_code": "gopay",
        "bank_name": "GO-PAY"
      },
      {
        "bank_code": "hana",
        "bank_name": "PT. BANK KEB HANA INDONESIA"
      },
      {
        "bank_code": "hcub",
        "bank_name": "PT. BANK HARDA INTERNATIONAL"
      },
      {
        "bank_code": "hs_1906",
        "bank_name": "PT. BANK HS 1906"
      },
      {
        "bank_code": "hsbc",
        "bank_name": "PT. BANK HSBC INDONESIA"
      },
      {
        "bank_code": "icbc",
        "bank_name": "PT. BANK ICBC INDONESIA"
      },
      {
        "bank_code": "ina_perdana",
        "bank_name": "PT. BANK INA PERDANA"
      },
      {
        "bank_code": "index_selindo",
        "bank_name": "BANK INDEX SELINDO"
      },
      {
        "bank_code": "india",
        "bank_name": "PT. BANK OF INDIA INDONESIA TBK."
      },
      {
        "bank_code": "jago",
        "bank_name": "PT. BANK JAGO TBK."
      },
      {
        "bank_code": "jambi",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH JAMBI"
      },
      {
        "bank_code": "jasa_jakarta",
        "bank_name": "PT. BANK JASA JAKARTA"
      },
      {
        "bank_code": "jateng",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH"
      },
      {
        "bank_code": "jateng_syar",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH"
      },
      {
        "bank_code": "jatim",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH  JATIM"
      },
      {
        "bank_code": "jatim_syar",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH JATIM - UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "jtrust",
        "bank_name": "PT. BANK JTRUST INDONESIA TBK."
      },
      {
        "bank_code": "kalbar",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH KALBAR"
      },
      {
        "bank_code": "kalbar_syar",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH KALBAR UUS"
      },
      {
        "bank_code": "kalsel",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH KALSEL"
      },
      {
        "bank_code": "kalsel_syar",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH KALSEL - UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "kalteng",
        "bank_name": "PT. BPD KALIMANTAN TENGAH"
      },
      {
        "bank_code": "kaltim",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH KALTIM"
      },
      {
        "bank_code": "kaltim_syar",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH KALTIM - UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "lampung",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH LAMPUNG"
      },
      {
        "bank_code": "maluku",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH MALUKU"
      },
      {
        "bank_code": "mandiri",
        "bank_name": "PT. BANK MANDIRI (PERSERO) TBK."
      },
      {
        "bank_code": "mandiri_taspen",
        "bank_name": "PT. BANK MANDIRI TASPEN POS"
      },
      {
        "bank_code": "maspion",
        "bank_name": "PT. BANK MASPION"
      },
      {
        "bank_code": "mayapada",
        "bank_name": "PT. BANK MAYAPADA TBK."
      },
      {
        "bank_code": "maybank",
        "bank_name": "PT. BANK MAYBANK INDONESIA TBK."
      },
      {
        "bank_code": "maybank_syar",
        "bank_name": "PT. BANK MAYBANK SYARIAH INDONESIA"
      },
      {
        "bank_code": "maybank_uus",
        "bank_name": "PT. BANK MAYBANK INDONESIA TBK. UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "mayora",
        "bank_name": "PT. BANK MAYORA"
      },
      {
        "bank_code": "mega_syar",
        "bank_name": "PT. BANK MEGA SYARIAH"
      },
      {
        "bank_code": "mega_tbk",
        "bank_name": "PT. BANK MEGA TBK."
      },
      {
        "bank_code": "mestika",
        "bank_name": "PT. BANK MESTIKA DHARMA"
      },
      {
        "bank_code": "metro",
        "bank_name": "PT. BANK METRO EXPRESS"
      },
      {
        "bank_code": "mitraniaga",
        "bank_name": "PT. BANK MITRANIAGA"
      },
      {
        "bank_code": "mitsubishi",
        "bank_name": "THE BANK OF TOKYO MITSUBISHI UFJ LTD."
      },
      {
        "bank_code": "mizuho",
        "bank_name": "PT. BANK MIZUHO INDONESIA"
      },
      {
        "bank_code": "mnc",
        "bank_name": "PT. BANK MNC INTERNASIONAL TBK."
      },
      {
        "bank_code": "muamalat",
        "bank_name": "PT. BANK MUAMALAT INDONESIA"
      },
      {
        "bank_code": "multiarta",
        "bank_name": "PT. BANK MULTI ARTA SENTOSA"
      },
      {
        "bank_code": "mutiara",
        "bank_name": "PT. BANK MUTIARA TBK."
      },
      {
        "bank_code": "niaga_syar",
        "bank_name": "PT. BANK NIAGA TBK. SYARIAH"
      },
      {
        "bank_code": "nagari",
        "bank_name": "PT. BANK  NAGARI"
      },
      {
        "bank_code": "nobu",
        "bank_name": "PT. BANK NATIONALNOBU"
      },
      {
        "bank_code": "ntb",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH NTB"
      },
      {
        "bank_code": "ntt",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH NTT"
      },
      {
        "bank_code": "ocbc",
        "bank_name": "PT. BANK OCBC NISP TBK."
      },
      {
        "bank_code": "ocbc_syar",
        "bank_name": "PT. BANK OCBC NISP TBK. - UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "ok",
        "bank_name": "PT. BANK OKE INDONESIA"
      },
      {
        "bank_code": "ovo",
        "bank_name": "OVO"
      },
      {
        "bank_code": "panin",
        "bank_name": "PT. PANIN BANK TBK."
      },
      {
        "bank_code": "panin_syar",
        "bank_name": "PT. BANK PANIN SYARIAH"
      },
      {
        "bank_code": "papua",
        "bank_name": "PT.BANK PEMBANGUNAN DAERAH PAPUA"
      },
      {
        "bank_code": "permata",
        "bank_name": "PT. BANK PERMATA TBK."
      },
      {
        "bank_code": "permata_syar",
        "bank_name": "PT. BANK PERMATA TBK. UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "prima_master",
        "bank_name": "PT. PRIMA MASTER BANK"
      },
      {
        "bank_code": "pundi",
        "bank_name": "PT. BANK PUNDI INDONESIA"
      },
      {
        "bank_code": "purba",
        "bank_name": "PT. BANK PURBA DANARTA"
      },
      {
        "bank_code": "qnb",
        "bank_name": "PT. BANK QNB INDONESIA TBK."
      },
      {
        "bank_code": "rabobank",
        "bank_name": "PT. BANK RABOBANK INTERNATIONAL INDONESIA"
      },
      {
        "bank_code": "rbos",
        "bank_name": "THE ROYAL BANK OF SCOTLAND N.V."
      },
      {
        "bank_code": "resona",
        "bank_name": "PT. BANK RESONA PERDANIA"
      },
      {
        "bank_code": "riau",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH RIAU KEPRI"
      },
      {
        "bank_code": "riau_syar",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH RIAU KEPRI SYARIAH"
      },
      {
        "bank_code": "sampoerna",
        "bank_name": "PT. BANK SAHABAT SAMPOERNA"
      },
      {
        "bank_code": "sbi",
        "bank_name": "PT. BANK SBI INDONESIA"
      },
      {
        "bank_code": "seabank",
        "bank_name": "PT. BANK SEABANK INDONESIA"
      },
      {
        "bank_code": "shinhan",
        "bank_name": "PT. BANK SHINHAN INDONESIA"
      },
      {
        "bank_code": "sinarmas",
        "bank_name": "PT. BANK SINARMAS"
      },
      {
        "bank_code": "sinarmas_syar",
        "bank_name": "PT. BANK SINARMAS UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "stanchard",
        "bank_name": "STANDARD CHARTERED BANK"
      },
      {
        "bank_code": "sulselbar",
        "bank_name": "PT. BANK SULSELBAR"
      },
      {
        "bank_code": "sulselbar_syar",
        "bank_name": "PT. BANK SULSELBAR UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "sulteng",
        "bank_name": "PT. BPD SULAWESI TENGAH"
      },
      {
        "bank_code": "sultenggara",
        "bank_name": "PT. BPD SULAWESI TENGGARA"
      },
      {
        "bank_code": "sulut",
        "bank_name": "PT. BANK SULUT"
      },
      {
        "bank_code": "sumbar",
        "bank_name": "BPD SUMATERA BARAT"
      },
      {
        "bank_code": "sumitomo",
        "bank_name": "PT. BANK SUMITOMO MITSUI INDONESIA"
      },
      {
        "bank_code": "sumsel_babel",
        "bank_name": "PT. BPD SUMSEL DAN BABEL"
      },
      {
        "bank_code": "sumsel_babel_syar",
        "bank_name": "PT. BPD SUMSEL DAN BABEL UNIT USAHA SYARIAH"
      },
      {
        "bank_code": "sumut",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH SUMUT"
      },
      {
        "bank_code": "sumut_syar",
        "bank_name": "PT. BANK PEMBANGUNAN DAERAH SUMUT UUS"
      },
      {
        "bank_code": "uob",
        "bank_name": "PT. BANK UOB INDONESIA"
      },
      {
        "bank_code": "victoria",
        "bank_name": "PT. BANK VICTORIA INTERNATIONAL"
      },
      {
        "bank_code": "victoria_syar",
        "bank_name": "PT. BANK VICTORIA SYARIAH"
      },
      {
        "bank_code": "woori",
        "bank_name": "PT. BANK WOORI SAUDARA INDONESIA 1906 TBK."
      },
      {
        "bank_code": "yudha_bhakti",
        "bank_name": "PT. BANK YUDHA BHAKTI"
      }
     ]
    return new Promise((resolve,reject)=>{
      resolve(data);
    })
  }
  ping(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve('PONG');
    });
  }
}
