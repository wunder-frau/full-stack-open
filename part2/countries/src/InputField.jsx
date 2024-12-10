const InputField =({ label, type, value, onChange, id })=> {
    return (
        <div>
        <label>
          {label}:{' '}
          <input
            type={type}
            value={value}
            onChange={onChange}
            autoComplete="off"
            id={id}
            required
          />
        </label>
      </div>
    )
}

export default InputField