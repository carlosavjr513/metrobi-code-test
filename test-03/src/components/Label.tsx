interface TextFieldProps {
    text: string
    subText?: string | null
}

function TextField({ text, subText }: TextFieldProps) {
  return (
    <>
      <div className="text-center text-white text-3xl font-semibold ">
        {text}
      </div>
      {subText && (
        <div className="text-center text-white text-xl font-semibold ">
          {subText}
        </div>
      )}
    </>
  )
}

export default TextField
