function ExtraDis ({extra}) {
    return (
        <div id="extra">
                    <h2>EXTRA</h2>
                    <hr />
                    <p>{extra.extraCert}</p>
                    <p>Languages: <span className="green">{extra.extraLang}</span></p>
                </div>
    )
}

export default ExtraDis;