import { formStyle, formInputStyle, formLabelStyle } from "../styles/form"
import { sharedButtonStyle } from "../styles/buttons"

const Form = ({ title, content, changeTitle, changeContent, changeTime, changeDate, buttonHandler, buttonLabel }) => {
  const today = new Date()
  const currentTime = (today.getHours() + ":" + today.getMinutes()).toString()
  const currentDate = (today.getMonth() + "-" + today.getDay() + "-" + today.getFullYear()).toString()

  changeDate(currentDate)
  changeTime(currentTime)

  const handleSubmit = (e) => {
    buttonHandler(e, {title, content})
  }

  return (
    <form >
      <div>
        <label css={formLabelStyle} htmlFor="title">Title</label>
        <input css={formInputStyle} type="text" id="title" value={title} onChange={(e) => changeTitle(e.target.value)}></input>
      </div>
      <div>
        <label css={formLabelStyle} htmlFor="content">Content</label>
        <input css={formInputStyle} type="textarea" id="content" value={content} onChange={(e) => changeContent(e.target.value)}></input>
      </div>
      <div css={{textAlign: 'left', paddingLeft: '20px'}}>
        <button css={[sharedButtonStyle, {background: '#FFCC99'}]} onClick={handleSubmit}>{buttonLabel}</button>
      </div>
    </form>
  )
}

export default Form
