import './index.css'

const LanguageGreetings = props => {
  const {languageDetails, changeLanguage, onClickLanguageButton} = props
  const {id, buttonText, imageUrl} = languageDetails

  const onChangeLanguage = () => {
    changeLanguage(id)
  }

  const clickButton = onClickLanguageButton ? 'selected' : 'unselected'

  return (
    <li className={clickButton}>
      <div className="language-card">
        <button type="button" onClick={onChangeLanguage}>
          {buttonText}
        </button>
        <img src={imageUrl} alt="language" className="image" />
      </div>
    </li>
  )
}

export default LanguageGreetings
