import { useSelector } from "react-redux"

export const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {

    const {status} = useSelector(state => state.language)

    return (
      <div>

        <div className="flex items-center gap-3 mb-4">

          <label
            htmlFor={name}
            className="block text-sm font-medium text-white"
          >
            {labelName}
          </label>
          {
            isSurpriseMe && (
              <button
                type="button"
                onClick={handleSurpriseMe}
                className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
              >
                {status ? 'Sorpréndeme' : 'Surprise Me' }
              </button>
            )
          }

        </div>

        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-black border border-gray-300 text-white text-sm focus:ring-[#1f6ac7] focus:border-[#1f6ac7] outline-none block w-full p-3 mb-3"
        ></input>

      </div>
    )
}
