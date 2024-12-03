const InputField =({ label, type, value, onChange })=> {
    return (
        <div>
        <label>
          {label}:{' '}
          <input
            type={type}
            value={value}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </label>
      </div>
    )
}

export default InputField