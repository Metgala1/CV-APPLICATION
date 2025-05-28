function Extra ({handleChnage}) {

    return (
        <div className="extra">
            <h2>EXTRA</h2>
            <hr />
            <label>Enter any other Certification:
                <input onChange={handleChnage} type="text" name="extraCert" placeholder="Javascript Certification" />
            </label>
            <label>Enter Your Language Or Languages:
                <input onChange={handleChnage} type="text" name="extraLang" placeholder="English" />
            </label>
        </div>
    )
}

export default Extra;