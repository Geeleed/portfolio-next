'use client'
import React, { useEffect, useRef, useState } from 'react'
import css from './RateExchange.module.css'
import LoadingPage from '../LoadingPage'
import Image from 'next/image'

function RateExchange() {
    const [conv, setConv] = useState()
    const [sup, setSup] = useState()
    const [isLoading, setLoading] = useState(true)
    const [input1, setInput1] = useState('0.00')
    const [input2, setInput2] = useState('0.00')
    const [cur1, setCur1] = useState()
    const [cur2, setCur2] = useState()
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [recentClick, setRecentClick] = useState()

    function typingMethod(keypress, input, setInput) {
        if ('0123456789'.includes(keypress)) {
            setInput(prev => prev + keypress)
        } else if (keypress == 'Backspace') {
            setInput(prev => prev.slice(0, -1))
        } else if (keypress == '.' && !input.includes('.')) {
            setInput(prev => prev + keypress)
        }
    }
    function convert(input, currencyInputRate, currencyOutputRate) {
        const result = input * currencyOutputRate / currencyInputRate
        return result.toFixed(2)
    }

    useEffect(() => {
        if (click1) {
            setClick2(false)
            setRecentClick(1)
        } else if (click2) {
            setClick1(false)
            setRecentClick(2)
        }
        if (click1 || click2) {
            setInput1('')
            setInput2('')
        }
    }, [click1, click2])
    useEffect(() => {
        if ((click1 || recentClick == 1) && cur1 && cur2) {
            setInput2(convert(input1, conv[cur1], conv[cur2]))
        } else if ((click2 || recentClick == 2) && cur1 && cur2) {
            setInput1(convert(input2, conv[cur2], conv[cur1]))
        }
    }, [input1, input2, cur1, cur2])
    useEffect(() => {
        fetch('https://open.er-api.com/v6/latest/usd')
            .then(res => res.json())
            .then(res => { setConv(res.rates); setLoading(false) })
        const objSup = JSON.parse(curSupport)
        setSup(objSup.supported_codes)
    }, [])
    if (isLoading) return <LoadingPage />
    if (!conv) return <p>Connect the internet and refresh again.</p>

    return (
        <div className={css.main}>
            <header className={css.header}>
                <div></div>
                <h1> RATE EXCHANGE </h1>
                <Image src={'/svg/bank.svg'} objectFit='contain' fill />
            </header>
            <div>
                <input
                    type='text'
                    value={input1}
                    className={css.input}
                    onFocus={() => setClick1(true)}
                    onBlur={() => setClick1(false)}
                    onKeyDown={e => typingMethod(e.key, input1, setInput1)}
                />
                <input
                    type='text'
                    value={input2}
                    className={css.input}
                    onFocus={() => setClick2(true)}
                    onBlur={() => setClick2(false)}
                    onKeyDown={e => typingMethod(e.key, input2, setInput2)}
                />
            </div>
            <section className={css.pad}>
                <Aside name={'c1'} curSupport={sup} setReturn={setCur1} />
                <Aside name={'c2'} curSupport={sup} setReturn={setCur2} />
            </section>
        </div>
    )
}

export default RateExchange

function Aside({ name, curSupport, setReturn }) {
    const [sel, setSel] = useState('LAK')
    const otherRef = useRef()
    return (
        <aside className={css.aside}>
            <div className={css.pad1}>
                {['THB', 'USD', 'JPY', 'KRW', 'GBP', 'CNY'].map(i => <div className={css.btnIO}><input type='radio' name={name} id={i} value={i} onChange={e => setReturn(e.target.value)} /><label>{i}</label></div>)}
            </div>
            <div className={css.select}>
                <div className={css.btnIO2}><input ref={otherRef} type='radio' name={name} value={sel} onChange={e => setReturn(e.target.value)} /><label>{sel}</label></div>
                <select onChange={(e) => { setSel(e.target.value); otherRef.current.click(); setReturn(e.target.value) }} id={name} name={name}>
                    {curSupport.map(i => {
                        if (i[0] !== sel) { return <option value={i[0]} >{i[1]} : {i[0]}</option> }
                        else { return <option value={i[0]} selected>{i[1]} : {i[0]}</option> }
                    })}
                </select>
            </div>
        </aside>
    )
}


// const jsonRATE = `{
//     "result": "success",
//     "documentation": "https://www.exchangerate-api.com/docs",
//     "terms_of_use": "https://www.exchangerate-api.com/terms",
//     "time_last_update_unix": 1695340801,
//     "time_last_update_utc": "Fri, 22 Sep 2023 00:00:01 +0000",
//     "time_next_update_unix": 1695427201,
//     "time_next_update_utc": "Sat, 23 Sep 2023 00:00:01 +0000",
//     "base_code": "USD",
//     "conversion_rates": {
//         "USD": 1,
//         "AED": 3.6725,
//         "AFN": 79.0454,
//         "ALL": 99.7183,
//         "AMD": 386.6706,
//         "ANG": 1.7900,
//         "AOA": 834.6876,
//         "ARS": 349.9800,
//         "AUD": 1.5595,
//         "AWG": 1.7900,
//         "AZN": 1.7011,
//         "BAM": 1.8342,
//         "BBD": 2.0000,
//         "BDT": 109.7868,
//         "BGN": 1.8347,
//         "BHD": 0.3760,
//         "BIF": 2827.5181,
//         "BMD": 1.0000,
//         "BND": 1.3672,
//         "BOB": 6.9216,
//         "BRL": 4.8895,
//         "BSD": 1.0000,
//         "BTN": 83.1369,
//         "BWP": 13.6414,
//         "BYN": 2.8958,
//         "BZD": 2.0000,
//         "CAD": 1.3481,
//         "CDF": 2464.2214,
//         "CHF": 0.9045,
//         "CLP": 882.9290,
//         "CNY": 7.3100,
//         "COP": 3910.7429,
//         "CRC": 533.5798,
//         "CUP": 24.0000,
//         "CVE": 103.4064,
//         "CZK": 22.9355,
//         "DJF": 177.7210,
//         "DKK": 6.9950,
//         "DOP": 56.8485,
//         "DZD": 137.0989,
//         "EGP": 30.9018,
//         "ERN": 15.0000,
//         "ETB": 55.3442,
//         "EUR": 0.9378,
//         "FJD": 2.2693,
//         "FKP": 0.8135,
//         "FOK": 6.9963,
//         "GBP": 0.8135,
//         "GEL": 2.6862,
//         "GGP": 0.8135,
//         "GHS": 11.5180,
//         "GIP": 0.8135,
//         "GMD": 64.5965,
//         "GNF": 8579.2946,
//         "GTQ": 7.8629,
//         "GYD": 209.2652,
//         "HKD": 7.8215,
//         "HNL": 24.6963,
//         "HRK": 7.0658,
//         "HTG": 134.9854,
//         "HUF": 363.6419,
//         "IDR": 15372.3872,
//         "ILS": 3.8133,
//         "IMP": 0.8135,
//         "INR": 83.1343,
//         "IQD": 1308.8167,
//         "IRR": 41949.6224,
//         "ISK": 136.7504,
//         "JEP": 0.8135,
//         "JMD": 154.8313,
//         "JOD": 0.7090,
//         "JPY": 147.5979,
//         "KES": 147.3000,
//         "KGS": 88.7896,
//         "KHR": 4118.4727,
//         "KID": 1.5593,
//         "KMF": 461.3668,
//         "KRW": 1340.8743,
//         "KWD": 0.3089,
//         "KYD": 0.8333,
//         "KZT": 476.5559,
//         "LAK": 20265.4416,
//         "LBP": 15000.0000,
//         "LKR": 323.8255,
//         "LRD": 189.4774,
//         "LSL": 18.9329,
//         "LYD": 4.8634,
//         "MAD": 10.2805,
//         "MDL": 18.0814,
//         "MGA": 4514.0502,
//         "MKD": 57.5376,
//         "MMK": 2099.7528,
//         "MNT": 3445.4989,
//         "MOP": 8.0561,
//         "MRU": 38.1284,
//         "MUR": 44.6663,
//         "MVR": 15.4329,
//         "MWK": 1108.8848,
//         "MXN": 17.2050,
//         "MYR": 4.6902,
//         "MZN": 63.8547,
//         "NAD": 18.9329,
//         "NGN": 764.1390,
//         "NIO": 36.6504,
//         "NOK": 10.7802,
//         "NPR": 133.0191,
//         "NZD": 1.6864,
//         "OMR": 0.3845,
//         "PAB": 1.0000,
//         "PEN": 3.7348,
//         "PGK": 3.6501,
//         "PHP": 56.8776,
//         "PKR": 289.9410,
//         "PLN": 4.3318,
//         "PYG": 7301.9267,
//         "QAR": 3.6400,
//         "RON": 4.6645,
//         "RSD": 109.8161,
//         "RUB": 95.8354,
//         "RWF": 1228.9703,
//         "SAR": 3.7500,
//         "SBD": 8.4751,
//         "SCR": 13.5067,
//         "SDG": 561.6505,
//         "SEK": 11.1744,
//         "SGD": 1.3672,
//         "SHP": 0.8135,
//         "SLE": 20.5904,
//         "SLL": 20590.4253,
//         "SOS": 571.6045,
//         "SRD": 38.7637,
//         "SSP": 1010.0991,
//         "STN": 22.9761,
//         "SYP": 12946.6274,
//         "SZL": 18.9329,
//         "THB": 36.1335,
//         "TJS": 10.9393,
//         "TMT": 3.4981,
//         "TND": 3.1485,
//         "TOP": 2.3533,
//         "TRY": 27.1258,
//         "TTD": 6.7539,
//         "TVD": 1.5593,
//         "TWD": 32.1510,
//         "TZS": 2508.2043,
//         "UAH": 36.9317,
//         "UGX": 3743.0643,
//         "UYU": 38.2303,
//         "UZS": 12143.8217,
//         "VES": 33.9289,
//         "VND": 24323.1654,
//         "VUV": 121.2836,
//         "WST": 2.7711,
//         "XAF": 615.1557,
//         "XCD": 2.7000,
//         "XDR": 0.7604,
//         "XOF": 615.1557,
//         "XPF": 111.9094,
//         "YER": 250.2612,
//         "ZAR": 18.9376,
//         "ZMW": 20.8946,
//         "ZWL": 5066.8985
//     }
// }`


const curSupport = `{
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "supported_codes": [
        [
            "AED",
            "UAE Dirham"
        ],
        [
            "AFN",
            "Afghan Afghani"
        ],
        [
            "ALL",
            "Albanian Lek"
        ],
        [
            "AMD",
            "Armenian Dram"
        ],
        [
            "ANG",
            "Netherlands Antillian Guilder"
        ],
        [
            "AOA",
            "Angolan Kwanza"
        ],
        [
            "ARS",
            "Argentine Peso"
        ],
        [
            "AUD",
            "Australian Dollar"
        ],
        [
            "AWG",
            "Aruban Florin"
        ],
        [
            "AZN",
            "Azerbaijani Manat"
        ],
        [
            "BAM",
            "Bosnia and Herzegovina Convertible Mark"
        ],
        [
            "BBD",
            "Barbados Dollar"
        ],
        [
            "BDT",
            "Bangladeshi Taka"
        ],
        [
            "BGN",
            "Bulgarian Lev"
        ],
        [
            "BHD",
            "Bahraini Dinar"
        ],
        [
            "BIF",
            "Burundian Franc"
        ],
        [
            "BMD",
            "Bermudian Dollar"
        ],
        [
            "BND",
            "Brunei Dollar"
        ],
        [
            "BOB",
            "Bolivian Boliviano"
        ],
        [
            "BRL",
            "Brazilian Real"
        ],
        [
            "BSD",
            "Bahamian Dollar"
        ],
        [
            "BTN",
            "Bhutanese Ngultrum"
        ],
        [
            "BWP",
            "Botswana Pula"
        ],
        [
            "BYN",
            "Belarusian Ruble"
        ],
        [
            "BZD",
            "Belize Dollar"
        ],
        [
            "CAD",
            "Canadian Dollar"
        ],
        [
            "CDF",
            "Congolese Franc"
        ],
        [
            "CHF",
            "Swiss Franc"
        ],
        [
            "CLP",
            "Chilean Peso"
        ],
        [
            "CNY",
            "Chinese Renminbi"
        ],
        [
            "COP",
            "Colombian Peso"
        ],
        [
            "CRC",
            "Costa Rican Colon"
        ],
        [
            "CUP",
            "Cuban Peso"
        ],
        [
            "CVE",
            "Cape Verdean Escudo"
        ],
        [
            "CZK",
            "Czech Koruna"
        ],
        [
            "DJF",
            "Djiboutian Franc"
        ],
        [
            "DKK",
            "Danish Krone"
        ],
        [
            "DOP",
            "Dominican Peso"
        ],
        [
            "DZD",
            "Algerian Dinar"
        ],
        [
            "EGP",
            "Egyptian Pound"
        ],
        [
            "ERN",
            "Eritrean Nakfa"
        ],
        [
            "ETB",
            "Ethiopian Birr"
        ],
        [
            "EUR",
            "Euro"
        ],
        [
            "FJD",
            "Fiji Dollar"
        ],
        [
            "FKP",
            "Falkland Islands Pound"
        ],
        [
            "FOK",
            "Faroese Króna"
        ],
        [
            "GBP",
            "Pound Sterling"
        ],
        [
            "GEL",
            "Georgian Lari"
        ],
        [
            "GGP",
            "Guernsey Pound"
        ],
        [
            "GHS",
            "Ghanaian Cedi"
        ],
        [
            "GIP",
            "Gibraltar Pound"
        ],
        [
            "GMD",
            "Gambian Dalasi"
        ],
        [
            "GNF",
            "Guinean Franc"
        ],
        [
            "GTQ",
            "Guatemalan Quetzal"
        ],
        [
            "GYD",
            "Guyanese Dollar"
        ],
        [
            "HKD",
            "Hong Kong Dollar"
        ],
        [
            "HNL",
            "Honduran Lempira"
        ],
        [
            "HRK",
            "Croatian Kuna"
        ],
        [
            "HTG",
            "Haitian Gourde"
        ],
        [
            "HUF",
            "Hungarian Forint"
        ],
        [
            "IDR",
            "Indonesian Rupiah"
        ],
        [
            "ILS",
            "Israeli New Shekel"
        ],
        [
            "IMP",
            "Manx Pound"
        ],
        [
            "INR",
            "Indian Rupee"
        ],
        [
            "IQD",
            "Iraqi Dinar"
        ],
        [
            "IRR",
            "Iranian Rial"
        ],
        [
            "ISK",
            "Icelandic Króna"
        ],
        [
            "JEP",
            "Jersey Pound"
        ],
        [
            "JMD",
            "Jamaican Dollar"
        ],
        [
            "JOD",
            "Jordanian Dinar"
        ],
        [
            "JPY",
            "Japanese Yen"
        ],
        [
            "KES",
            "Kenyan Shilling"
        ],
        [
            "KGS",
            "Kyrgyzstani Som"
        ],
        [
            "KHR",
            "Cambodian Riel"
        ],
        [
            "KID",
            "Kiribati Dollar"
        ],
        [
            "KMF",
            "Comorian Franc"
        ],
        [
            "KRW",
            "South Korean Won"
        ],
        [
            "KWD",
            "Kuwaiti Dinar"
        ],
        [
            "KYD",
            "Cayman Islands Dollar"
        ],
        [
            "KZT",
            "Kazakhstani Tenge"
        ],
        [
            "LAK",
            "Lao Kip"
        ],
        [
            "LBP",
            "Lebanese Pound"
        ],
        [
            "LKR",
            "Sri Lanka Rupee"
        ],
        [
            "LRD",
            "Liberian Dollar"
        ],
        [
            "LSL",
            "Lesotho Loti"
        ],
        [
            "LYD",
            "Libyan Dinar"
        ],
        [
            "MAD",
            "Moroccan Dirham"
        ],
        [
            "MDL",
            "Moldovan Leu"
        ],
        [
            "MGA",
            "Malagasy Ariary"
        ],
        [
            "MKD",
            "Macedonian Denar"
        ],
        [
            "MMK",
            "Burmese Kyat"
        ],
        [
            "MNT",
            "Mongolian Tögrög"
        ],
        [
            "MOP",
            "Macanese Pataca"
        ],
        [
            "MRU",
            "Mauritanian Ouguiya"
        ],
        [
            "MUR",
            "Mauritian Rupee"
        ],
        [
            "MVR",
            "Maldivian Rufiyaa"
        ],
        [
            "MWK",
            "Malawian Kwacha"
        ],
        [
            "MXN",
            "Mexican Peso"
        ],
        [
            "MYR",
            "Malaysian Ringgit"
        ],
        [
            "MZN",
            "Mozambican Metical"
        ],
        [
            "NAD",
            "Namibian Dollar"
        ],
        [
            "NGN",
            "Nigerian Naira"
        ],
        [
            "NIO",
            "Nicaraguan Córdoba"
        ],
        [
            "NOK",
            "Norwegian Krone"
        ],
        [
            "NPR",
            "Nepalese Rupee"
        ],
        [
            "NZD",
            "New Zealand Dollar"
        ],
        [
            "OMR",
            "Omani Rial"
        ],
        [
            "PAB",
            "Panamanian Balboa"
        ],
        [
            "PEN",
            "Peruvian Sol"
        ],
        [
            "PGK",
            "Papua New Guinean Kina"
        ],
        [
            "PHP",
            "Philippine Peso"
        ],
        [
            "PKR",
            "Pakistani Rupee"
        ],
        [
            "PLN",
            "Polish Złoty"
        ],
        [
            "PYG",
            "Paraguayan Guaraní"
        ],
        [
            "QAR",
            "Qatari Riyal"
        ],
        [
            "RON",
            "Romanian Leu"
        ],
        [
            "RSD",
            "Serbian Dinar"
        ],
        [
            "RUB",
            "Russian Ruble"
        ],
        [
            "RWF",
            "Rwandan Franc"
        ],
        [
            "SAR",
            "Saudi Riyal"
        ],
        [
            "SBD",
            "Solomon Islands Dollar"
        ],
        [
            "SCR",
            "Seychellois Rupee"
        ],
        [
            "SDG",
            "Sudanese Pound"
        ],
        [
            "SEK",
            "Swedish Krona"
        ],
        [
            "SGD",
            "Singapore Dollar"
        ],
        [
            "SHP",
            "Saint Helena Pound"
        ],
        [
            "SLE",
            "Sierra Leonean Leone"
        ],
        [
            "SLL",
            "Sierra Leonean Leone"
        ],
        [
            "SOS",
            "Somali Shilling"
        ],
        [
            "SRD",
            "Surinamese Dollar"
        ],
        [
            "SSP",
            "South Sudanese Pound"
        ],
        [
            "STN",
            "São Tomé and Príncipe Dobra"
        ],
        [
            "SYP",
            "Syrian Pound"
        ],
        [
            "SZL",
            "Eswatini Lilangeni"
        ],
        [
            "THB",
            "Thai Baht"
        ],
        [
            "TJS",
            "Tajikistani Somoni"
        ],
        [
            "TMT",
            "Turkmenistan Manat"
        ],
        [
            "TND",
            "Tunisian Dinar"
        ],
        [
            "TOP",
            "Tongan Paʻanga"
        ],
        [
            "TRY",
            "Turkish Lira"
        ],
        [
            "TTD",
            "Trinidad and Tobago Dollar"
        ],
        [
            "TVD",
            "Tuvaluan Dollar"
        ],
        [
            "TWD",
            "New Taiwan Dollar"
        ],
        [
            "TZS",
            "Tanzanian Shilling"
        ],
        [
            "UAH",
            "Ukrainian Hryvnia"
        ],
        [
            "UGX",
            "Ugandan Shilling"
        ],
        [
            "USD",
            "United States Dollar"
        ],
        [
            "UYU",
            "Uruguayan Peso"
        ],
        [
            "UZS",
            "Uzbekistani So'm"
        ],
        [
            "VES",
            "Venezuelan Bolívar Soberano"
        ],
        [
            "VND",
            "Vietnamese Đồng"
        ],
        [
            "VUV",
            "Vanuatu Vatu"
        ],
        [
            "WST",
            "Samoan Tālā"
        ],
        [
            "XAF",
            "Central African CFA Franc"
        ],
        [
            "XCD",
            "East Caribbean Dollar"
        ],
        [
            "XDR",
            "Special Drawing Rights"
        ],
        [
            "XOF",
            "West African CFA franc"
        ],
        [
            "XPF",
            "CFP Franc"
        ],
        [
            "YER",
            "Yemeni Rial"
        ],
        [
            "ZAR",
            "South African Rand"
        ],
        [
            "ZMW",
            "Zambian Kwacha"
        ],
        [
            "ZWL",
            "Zimbabwean Dollar"
        ]
    ]
}`